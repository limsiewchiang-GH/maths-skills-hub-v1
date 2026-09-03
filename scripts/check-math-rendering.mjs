#!/usr/bin/env node
// Regression check for the MathJax rendering pipeline (scripts/shared.js + scripts/igcse-page.js).
// Runs latexifyLine() over every question/answer/hint string in the question bank and checks
// for structural rendering defects that are otherwise easy to miss by eye:
//   - a leaked "@@M#@@" internal placeholder token (the tokeniser failed to resolve a match)
//   - an unbalanced count of "\(" / "\)" MathJax delimiters
//   - unbalanced "{" / "}" braces inside a delimited math region (real content, not TeX
//     grouping, so it must come out balanced or MathJax mis-renders it)
//   - a "\pi" immediately glued to a following letter, e.g. "\pir" — LaTeX parses that as the
//     single undefined control word "\pir", not "\pi" followed by "r"
//
// This does not judge whether a string SHOULD have entered math mode, only whether whatever it
// produced is structurally well-formed. A clean report here does not guarantee every hint looks
// good — spot-check new content in a browser too — but it catches the class of bug this
// pipeline has hit repeatedly (mismatched delimiters, glued LaTeX commands, leaked tokens).
import fs from "fs";
import path from "path";
import vm from "vm";

const root = path.resolve(process.argv[2] || ".");
const reportPath = path.join(root, "planning", "qa", "math-rendering-report.md");

function loadLatexifyLine() {
  const sharedSrc = fs.readFileSync(path.join(root, "scripts/shared.js"), "utf8");
  const igcseSrc = fs.readFileSync(path.join(root, "scripts/igcse-page.js"), "utf8");
  const sandbox = { window: {}, document: { addEventListener: () => {}, querySelectorAll: () => [] }, console };
  vm.createContext(sandbox);
  // igcse-page.js has top-level DOM-touching code that throws once document.body etc. are
  // missing; that's fine, we only need the function declarations (hoisted) to have run.
  try { vm.runInContext(sharedSrc, sandbox); } catch { /* ignore */ }
  try { vm.runInContext(igcseSrc, sandbox); } catch { /* ignore */ }
  const fn = vm.runInContext("typeof latexifyLine === 'function' ? latexifyLine : null", sandbox);
  if (!fn) {
    throw new Error("Could not extract latexifyLine from scripts/shared.js + scripts/igcse-page.js");
  }
  return fn;
}

function collectItems() {
  const manifestPath = path.join(root, "data/questions/manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const items = [];

  for (const entry of manifest) {
    const filePath = path.join(root, entry.file);
    const topic = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const skills = topic.skills || {};

    for (const [skillName, skillData] of Object.entries(skills)) {
      const list = Array.isArray(skillData.items) ? skillData.items : (Array.isArray(skillData.pool) ? skillData.pool : []);
      list.forEach((item, index) => {
        if (!item || typeof item !== "object") return;
        const tag = `${entry.file} :: ${skillName} :: #${index}`;
        if (item.q) items.push({ tag: `${tag} :: q`, raw: item.q });
        if (item.a) items.push({ tag: `${tag} :: a`, raw: item.a });
        (item.hints || []).forEach((hint, hintIndex) => {
          if (hint) items.push({ tag: `${tag} :: hint${hintIndex}`, raw: hint });
        });
      });
    }
  }

  return items;
}

function stripMathRegions(text) {
  let out = "";
  let i = 0;
  while (i < text.length) {
    if (text.startsWith("\\(", i)) {
      const end = text.indexOf("\\)", i + 2);
      if (end === -1) { i = text.length; break; }
      i = end + 2;
    } else {
      out += text[i];
      i += 1;
    }
  }
  return out;
}

const latexifyLine = loadLatexifyLine();
const items = collectItems();

const leaks = [];
const delimiterMismatches = [];
const braceMismatches = [];
const gluedPi = [];

for (const { tag, raw } of items) {
  let out;
  try {
    out = latexifyLine(raw);
  } catch (error) {
    leaks.push({ tag, raw, detail: `latexifyLine threw: ${error.message}` });
    continue;
  }

  if (out.includes("@@M")) {
    leaks.push({ tag, raw, detail: out });
  }

  const openCount = (out.match(/\\\(/g) || []).length;
  const closeCount = (out.match(/\\\)/g) || []).length;
  if (openCount !== closeCount) {
    delimiterMismatches.push({ tag, raw, detail: out });
  }

  let i = 0;
  while (i < out.length) {
    if (out.startsWith("\\(", i)) {
      const end = out.indexOf("\\)", i + 2);
      if (end === -1) { i = out.length; break; }
      const region = out.slice(i + 2, end);
      const openBraces = (region.match(/\{/g) || []).length;
      const closeBraces = (region.match(/\}/g) || []).length;
      if (openBraces !== closeBraces) {
        braceMismatches.push({ tag, raw, detail: `region "${region}" in ${out}` });
      }
      i = end + 2;
    } else {
      i += 1;
    }
  }

  if (/\\pi[a-zA-Z]/.test(out)) {
    gluedPi.push({ tag, raw, detail: out });
  }
}

function section(title, list, limit = 20) {
  const lines = [`## ${title} (${list.length})`];
  if (list.length === 0) {
    lines.push("- none");
  } else {
    list.slice(0, limit).forEach(({ tag, raw, detail }) => {
      lines.push(`- **${tag}**`);
      lines.push(`  - raw: \`${raw}\``);
      lines.push(`  - out: \`${detail}\``);
    });
    if (list.length > limit) {
      lines.push(`- ...and ${list.length - limit} more`);
    }
  }
  return lines.join("\n");
}

const totalIssues = leaks.length + delimiterMismatches.length + braceMismatches.length + gluedPi.length;

const report = `# Math Rendering QA Report

Checked ${items.length} question/answer/hint strings from ${path.relative(root, path.join(root, "data/questions"))} through the live scripts/shared.js + scripts/igcse-page.js pipeline.

- Leaked internal placeholder tokens: ${leaks.length}
- Unbalanced "\\(" / "\\)" delimiter pairs: ${delimiterMismatches.length}
- Unbalanced "{" / "}" inside a math region: ${braceMismatches.length}
- "\\pi" glued to a following letter: ${gluedPi.length}

${section("Leaked placeholder tokens", leaks)}

${section("Unbalanced delimiter pairs", delimiterMismatches)}

${section("Unbalanced braces inside math regions", braceMismatches)}

${section("Glued \\pi<letter>", gluedPi)}
`;

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, report);

console.log(report);
console.log(`\nSaved: ${reportPath}`);

if (totalIssues > 0) {
  process.exitCode = 1;
}
