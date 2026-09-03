#!/usr/bin/env node
import fs from "fs";
import path from "path";
import vm from "vm";
import { execFileSync } from "child_process";

const root = path.resolve(process.argv[2] || ".");
const reportPath = path.join(root, "planning", "qa", "static-smoke-report.md");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

function relative(file) {
  return path.relative(root, file) || ".";
}

function checkSyntax(file, issues) {
  try {
    execFileSync("node", ["--check", file], { stdio: "pipe" });
  } catch {
    issues.push(relative(file));
  }
}

function evaluateWindowScript(relPath) {
  const sandbox = { window: {}, console };
  const code = fs.readFileSync(path.join(root, relPath), "utf8");
  vm.runInNewContext(code, sandbox, { filename: relPath });
  return sandbox.window;
}

const allFiles = walk(root);
const htmlFiles = allFiles.filter((file) => file.endsWith(".html"));
const localJsFiles = allFiles.filter((file) => file.endsWith(".js") && !path.basename(file).startsWith(".tmp-qa-"));

const badLinks = [];
const inlineJsErrors = [];
const externalJsErrors = [];
const pageContractIssues = [];
const dataContractIssues = [];

let inlineScriptsChecked = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const assetRe = /(?:href|src)=["']([^"']+)["']/g;
  let assetMatch;

  while ((assetMatch = assetRe.exec(html)) !== null) {
    const target = assetMatch[1];
    if (/^(https?:|mailto:|tel:|#|data:|javascript:)/.test(target)) {
      continue;
    }
    const clean = target.split("#")[0].split("?")[0];
    if (!clean) {
      continue;
    }
    const fullTarget = path.normalize(path.join(path.dirname(file), clean));
    if (!fs.existsSync(fullTarget)) {
      badLinks.push(`${relative(file)} -> ${target}`);
    }
  }

  const inlineScripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
  inlineScripts.forEach((scriptMatch, index) => {
    const code = (scriptMatch[1] || "").trim();
    if (!code) {
      return;
    }
    inlineScriptsChecked += 1;
    const tmpPath = path.join(root, `.tmp-qa-${path.basename(file)}-${index}.js`);
    fs.writeFileSync(tmpPath, code);
    checkSyntax(tmpPath, inlineJsErrors);
    fs.unlinkSync(tmpPath);
  });
}

localJsFiles.forEach((file) => checkSyntax(file, externalJsErrors));

const pageContracts = [
  {
    file: "index.html",
    required: ['href="practice.html"', 'href="lower-school-sow.html#shell"', 'href="lower-school-sow.html#remove"', 'href="lower-school-sow.html#fifth-form"']
  },
  {
    file: "lower-school-sow.html",
    required: ['id="igcse-planner"', 'src="data/igcse-curriculum.js"', 'src="data/igcse-practice-data.js"', 'src="scripts/igcse-page.js"']
  },
  {
    file: "alevel.html",
    required: ["A-Level section retired", 'href="index.html"', 'href="practice.html"']
  },
  {
    file: "practice.html",
    required: ['data-practice-stream="Shell"', 'data-practice-stream="Remove"', 'data-practice-stream="Fifth Form"', 'data-practice-stream="Mixed"', 'src="scripts/practice-page.js"']
  }
];

pageContracts.forEach(({ file, required }) => {
  const fullPath = path.join(root, file);
  const html = fs.readFileSync(fullPath, "utf8");
  required.forEach((snippet) => {
    if (!html.includes(snippet)) {
      pageContractIssues.push(`${file} missing ${snippet}`);
    }
  });
});

try {
  const igcseWindow = evaluateWindowScript("data/igcse-curriculum.js");
  const curriculum = igcseWindow.igcseCurriculum;
  const yearCount = Array.isArray(curriculum) ? curriculum.length : 0;
  const topicCount = yearCount
    ? curriculum.reduce((total, year) => total + year.topics.length, 0)
    : 0;
  const skillCount = yearCount
    ? curriculum.reduce((total, year) => total + year.topics.reduce((topicTotal, topic) => topicTotal + topic.skills.length, 0), 0)
    : 0;

  if (yearCount < 3) dataContractIssues.push("IGCSE curriculum should contain at least 3 year groups.");
  if (topicCount < 40) dataContractIssues.push("IGCSE curriculum should contain at least 40 topics.");
  if (skillCount < 150) dataContractIssues.push("IGCSE curriculum should contain at least 150 skills.");
} catch (error) {
  dataContractIssues.push(`Failed to evaluate data/igcse-curriculum.js: ${error.message}`);
}

try {
  const practiceWindow = evaluateWindowScript("data/igcse-practice-data.js");
  const practice = practiceWindow.igcsePracticeData || {};
  const shellCount = Object.keys(practice.shellSkillBank || {}).length;
  const removeCount = Object.keys(practice.removeSkillBank || {}).length;
  const fifthCount = Object.keys(practice.fifthSkillBank || {}).length;
  const misconceptionCount = Object.keys(practice.misconceptionMap || {}).length;

  if (shellCount < 50) dataContractIssues.push("Shell skill bank looks too small.");
  if (removeCount < 40) dataContractIssues.push("Remove skill bank looks too small.");
  if (fifthCount < 20) dataContractIssues.push("Fifth Form skill bank looks too small.");
  if (misconceptionCount < 5) dataContractIssues.push("Misconception map should contain several entries.");
} catch (error) {
  dataContractIssues.push(`Failed to evaluate data/igcse-practice-data.js: ${error.message}`);
}


const report = `# Static QA Smoke Report

- HTML files scanned: ${htmlFiles.length}
- Local JS files checked: ${localJsFiles.length}
- Inline scripts checked: ${inlineScriptsChecked}
- Broken internal links: ${badLinks.length}
- Inline JS syntax errors: ${inlineJsErrors.length}
- Local JS syntax errors: ${externalJsErrors.length}
- Page contract issues: ${pageContractIssues.length}
- Data contract issues: ${dataContractIssues.length}

## Broken links
${badLinks.length ? badLinks.map((item) => `- ${item}`).join("\n") : "- none"}

## Inline JS syntax
${inlineJsErrors.length ? inlineJsErrors.map((item) => `- ${item}`).join("\n") : "- none"}

## Local JS syntax
${externalJsErrors.length ? externalJsErrors.map((item) => `- ${item}`).join("\n") : "- none"}

## Page contracts
${pageContractIssues.length ? pageContractIssues.map((item) => `- ${item}`).join("\n") : "- none"}

## Data contracts
${dataContractIssues.length ? dataContractIssues.map((item) => `- ${item}`).join("\n") : "- none"}
`;

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, report);

console.log(report);
console.log(`\nSaved: ${reportPath}`);
