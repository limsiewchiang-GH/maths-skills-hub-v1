#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const root = path.resolve(process.argv[2] || '.');
const htmlFiles = fs.readdirSync(root).filter(f => f.endsWith('.html'));

const badLinks = [];
for (const f of htmlFiles) {
  const full = path.join(root, f);
  const t = fs.readFileSync(full, 'utf8');
  const re = /(?:href|src)=["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(t)) !== null) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:|#|data:|javascript:)/.test(u)) continue;
    const clean = u.split('#')[0].split('?')[0];
    if (!clean) continue;
    const tgt = path.normalize(path.join(path.dirname(full), clean));
    if (!fs.existsSync(tgt)) badLinks.push(`${f} -> ${u}`);
  }
}

// check inline JS
const jsErrors = [];
let inlineCount = 0;
for (const f of htmlFiles) {
  const full = path.join(root, f);
  const t = fs.readFileSync(full, 'utf8');
  const scripts = [...t.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
  scripts.forEach((sm, i) => {
    const code = (sm[1] || '').trim();
    if (!code) return;
    inlineCount++;
    const tmp = path.join(root, `.tmp-qa-${f}-${i}.js`);
    fs.writeFileSync(tmp, code);
    try { execSync(`node --check ${JSON.stringify(tmp)}`, { stdio: 'pipe' }); }
    catch (e) { jsErrors.push(`${f}#script${i+1}`); }
    fs.unlinkSync(tmp);
  });
}

// rendering smell scan
const ls = fs.readFileSync(path.join(root, 'lower-school-sow.html'), 'utf8');
const smells = [];
['Basic operations (, , , , , )','Radius  tangent','Radius  chord  bisects chord','div 0','Quadratic sequences ()'].forEach(s=>{ if(ls.includes(s)) smells.push(s); });

const report = `# Phase 1 QA Snapshot\n\n- HTML files scanned: ${htmlFiles.length}\n- Broken internal links: ${badLinks.length}\n- Inline scripts checked: ${inlineCount}\n- JS syntax errors: ${jsErrors.length}\n- Legacy content smells remaining: ${smells.length}\n\n## Broken links\n${badLinks.length?badLinks.map(x=>`- ${x}`).join('\n'):'- none'}\n\n## JS errors\n${jsErrors.length?jsErrors.map(x=>`- ${x}`).join('\n'):'- none'}\n\n## Legacy smell scan\n${smells.length?smells.map(x=>`- ${x}`).join('\n'):'- none'}\n`;

const out = path.join(root, '..', 'phase1-qa-snapshot-2026-02-27.md');
fs.writeFileSync(out, report);
console.log(report);
console.log(`\nSaved: ${out}`);
