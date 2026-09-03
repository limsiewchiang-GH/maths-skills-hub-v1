const practiceData = window.igcsePracticeData || {};
const practiceOverrides = window.igcsePracticeOverrides || (window.igcsePracticeOverrides = {});
const curriculum = window.igcseCurriculum || [];
const yearConfigs = [
  { key: "Shell", label: "Shell" },
  { key: "Remove", label: "Remove" },
  { key: "Fifth Form", label: "Fifth Form" }
];

function normalizeMath(expr) {
  const superscripts = { "⁰": "^0", "¹": "^1", "²": "^2", "³": "^3", "⁴": "^4", "⁵": "^5", "⁶": "^6", "⁷": "^7", "⁸": "^8", "⁹": "^9" };
  const subscripts = { "₀": "_0", "₁": "_1", "₂": "_2", "₃": "_3", "₄": "_4", "₅": "_5", "₆": "_6", "₇": "_7", "₈": "_8", "₉": "_9" };
  let text = String(expr || "");
  text = text.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (char) => superscripts[char] || char);
  text = text.replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (char) => subscripts[char] || char);
  text = text.replace(/sqrt\(([^)]+)\)/gi, "\\sqrt{$1}");
  text = text.replace(/cbrt\(([^)]+)\)/gi, "\\sqrt[3]{$1}");
  // Trig function names as literal text (not already a \-command) render as italic multiplied
  // letters in TeX (e.g. "sin(45°)" -> s*i*n); convert to the proper roman-type LaTeX operators.
  text = text.replace(/(?<!\\)\b(sin|cos|tan)\(/gi, (_, fn) => `\\${fn.toLowerCase()}(`);
  text = text.replace(/\bdy\/dx\b/g, "\\dfrac{dy}{dx}");
  text = text.replace(/√\(([^)]+)\)/g, "\\sqrt{$1}");
  text = text.replace(/√([A-Za-z0-9]+)/g, "\\sqrt{$1}");
  text = text.replace(/π/g, "\\pi");
  // ASCII word "pi" used as the constant (not just the unicode π glyph), e.g. "x pi x r^2".
  // Skip anything already escaped (preceded by a backslash) to avoid double-converting.
  text = text.replace(/(?<!\\)\bpi\b/g, "\\pi ");
  text = text.replace(/θ/g, "\\theta");
  text = text.replace(/×/g, "\\times ");
  text = text.replace(/÷/g, "\\div ");
  text = text.replace(/±/g, "\\pm ");
  text = text.replace(/>=/g, "\\ge ");
  text = text.replace(/<=/g, "\\le ");
  text = text.replace(/≤/g, "\\le ");
  text = text.replace(/≥/g, "\\ge ");
  text = text.replace(/≠/g, "\\ne ");

  // Literal ASCII "x" used as a multiplication sign (the established authoring convention
  // throughout this site's question/answer text, e.g. "9 x 10^6", "2x9").
  text = text.replace(/(\d)x(\d)/g, "$1\\times $2");
  // Uses a lookbehind (not a consuming capture group) so the preceding flank can itself be a
  // variable-length converted token like "\pi" (e.g. "pi x 6" -> "\pi \times 6"), and a matching
  // lookahead alternative for already-converted LaTeX commands (e.g. "\sqrt{3}", "\tan(60^{\circ}"
  // — sqrt/cbrt and trig conversion both run earlier in this function).
  text = text.replace(/(?<=[\d)]|\\pi)\s+x\s+(?=-?[\d(]|[a-z]+\(|\\[a-z]+[{(]|pi\b|\\pi)/g, " \\times ");

  // Parenthesised exponent, e.g. "10^(8-2)" -> "10^{(8-2)}" (keeps the visible parens authors
  // wrote but fixes TeX grouping). Allows one level of nested parens, e.g. "10^(7-(-1))".
  text = text.replace(/\^\(((?:[^()]|\([^()]*\))*)\)/g, "^{($1)}");
  // Any base (letter OR digit) followed by ^ and a multi-char run, e.g. "10^-3" -> "10^{-3}".
  text = text.replace(/([A-Za-z0-9])\^(-?\d+)/g, "$1^{$2}");

  text = text.replace(/(\d+)°/g, "$1^{\\circ}");
  text = text.replace(/\b(\d+)\s*\/\s*(\d+)\b/g, "\\frac{$1}{$2}");
  return text;
}

function normalizeQuestionItems(set) {
  if (Array.isArray(set.items)) {
    return set.items.filter((item) => item && item.q).map((item) => ({
      q: item.q,
      a: item.a || "",
      image: item.image || "",
      imageAlt: item.imageAlt || "",
      imageCaption: item.imageCaption || ""
    }));
  }
  if (Array.isArray(set.pool)) {
    return set.pool.filter((item) => item && item.q).map((item) => ({
      q: item.q,
      a: item.a || "",
      image: item.image || "",
      imageAlt: item.imageAlt || "",
      imageCaption: item.imageCaption || ""
    }));
  }
  const questions = Array.isArray(set.q) ? set.q : [];
  const answers = Array.isArray(set.a) ? set.a : [];
  return questions.map((question, index) => ({
    q: question,
    a: answers[index] || "",
    image: "",
    imageAlt: "",
    imageCaption: ""
  }));
}

function buildSkillTopicLookup() {
  const lookup = {};
  curriculum.forEach((yearEntry) => {
    (yearEntry.topics || []).forEach((topic) => {
      (topic.skills || []).forEach((skill) => {
        lookup[`${yearEntry.year}::${skill}`] = {
          topicNumber: topic.number,
          topicTitle: topic.title
        };
      });
    });
  });
  return lookup;
}

const skillTopicLookup = buildSkillTopicLookup();

function collectYearPool(year) {
  const bankMap = {
    Shell: practiceData.shellSkillBank || {},
    Remove: practiceData.removeSkillBank || {},
    "Fifth Form": practiceData.fifthSkillBank || {}
  };

  const bank = bankMap[year] || {};
  const overrides = practiceOverrides[year] || {};
  const items = [];
  const seen = new Set();

  Object.keys(bank).forEach((skill) => {
    const source = { ...bank[skill], ...(overrides[skill] || {}) };
    normalizeQuestionItems(source).forEach((item) => {
      const key = `${year}::${skill}::${item.q}`;
      if (seen.has(key)) {
        return;
      }
      seen.add(key);
      const topicInfo = skillTopicLookup[`${year}::${skill}`] || {};
      items.push({
        year,
        skill,
        topicNumber: topicInfo.topicNumber || null,
        topicTitle: topicInfo.topicTitle || "",
        q: item.q,
        a: item.a
      });
    });
  });

  Object.keys(overrides).forEach((skill) => {
    if (bank[skill]) {
      return;
    }
    normalizeQuestionItems(overrides[skill]).forEach((item) => {
      const key = `${year}::${skill}::${item.q}`;
      if (seen.has(key)) {
        return;
      }
      seen.add(key);
      const topicInfo = skillTopicLookup[`${year}::${skill}`] || {};
      items.push({
        year,
        skill,
        topicNumber: topicInfo.topicNumber || null,
        topicTitle: topicInfo.topicTitle || "",
        q: item.q,
        a: item.a
      });
    });
  });

  return items;
}

function selectRandom(items, count) {
  return shuffleItems(items).slice(0, Math.min(count, items.length));
}

function buildMetaLabel(item) {
  if (item.topicNumber && item.topicTitle) {
    return `Topic ${item.topicNumber} ${item.topicTitle}`;
  }
  if (item.topicTitle) {
    return item.topicTitle;
  }
  return "";
}

function selectBalancedWithinYear(items, count) {
  if (items.length <= count) {
    return shuffleItems(items);
  }

  const shuffled = shuffleItems(items);
  const selected = [];
  const usedSkills = new Set();
  const usedTopics = new Set();

  const passes = [
    (item) => !usedSkills.has(item.skill) && !usedTopics.has(item.topicTitle || ""),
    (item) => !usedSkills.has(item.skill),
    () => true
  ];

  passes.forEach((allow) => {
    shuffled.forEach((item) => {
      if (selected.length >= count || selected.includes(item)) {
        return;
      }
      if (!allow(item)) {
        return;
      }
      selected.push(item);
      usedSkills.add(item.skill);
      if (item.topicTitle) {
        usedTopics.add(item.topicTitle);
      }
    });
  });

  return selected.slice(0, count);
}

function selectBalancedMixed(count) {
  const years = shuffleItems(yearConfigs.map((config) => config.key));
  const selected = [];

  years.forEach((year) => {
    if (selected.length >= count) {
      return;
    }
    const pick = selectBalancedWithinYear(poolsByYear[year] || [], 1)[0];
    if (pick) {
      selected.push(pick);
    }
  });

  if (selected.length < count) {
    const leftovers = mixedPool.filter((item) => !selected.includes(item));
    selected.push(...selectBalancedWithinYear(leftovers, count - selected.length));
  }

  return shuffleItems(selected).slice(0, count);
}

let poolsByYear = Object.fromEntries(yearConfigs.map((config) => [config.key, []]));
let mixedPool = [];

function rebuildPools() {
  poolsByYear = Object.fromEntries(yearConfigs.map((config) => [config.key, collectYearPool(config.key)]));
  mixedPool = [...poolsByYear.Shell, ...poolsByYear.Remove, ...poolsByYear["Fifth Form"]];
}

function renderStream(card) {
  const stream = card.dataset.practiceStream;
  const questionsEl = card.querySelector('[data-role="questions"]');
  const answersEl = card.querySelector('[data-role="answers"]');
  const metaEl = card.querySelector('[data-role="meta"]');
  const pool = stream === "Mixed" ? mixedPool : (poolsByYear[stream] || []);
  const selected = stream === "Mixed" ? selectBalancedMixed(3) : selectBalancedWithinYear(pool, 3);

  questionsEl.innerHTML = selected
    .map((item) => `
      <li>
        <span class="practice-skill"><span class="practice-year chip">${escapeHtml(item.year)}</span>${escapeHtml(item.skill)}${buildMetaLabel(item) ? ` · ${escapeHtml(buildMetaLabel(item))}` : ""}</span>
        <div>${latexifyLine(item.q)}</div>
        ${renderQuestionMedia(item)}
      </li>`)
    .join("");

  answersEl.innerHTML = selected
    .map((item) => `
      <li>
        <span class="practice-skill">${escapeHtml(item.year)} · ${escapeHtml(item.skill)}${buildMetaLabel(item) ? ` · ${escapeHtml(buildMetaLabel(item))}` : ""}</span>
        <div>${latexifyLine(item.a)}</div>
      </li>`)
    .join("");

  metaEl.textContent = stream === "Mixed"
    ? `${selected.length} balanced questions: one each from Shell, Remove, and Fifth Form.`
    : `${selected.length} balanced questions from ${pool.length} authored prompts in ${stream}.`;

  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise([card]).catch(() => {});
  }
}

function bootPracticeZone() {
  rebuildPools();
  document.querySelectorAll("[data-practice-stream]").forEach((card) => {
    renderStream(card);
    card.querySelector('[data-role="refresh"]')?.addEventListener("click", () => renderStream(card));
  });
}

(window.igcseQuestionBankReady || Promise.resolve())
  .then(() => {
    bootPracticeZone();
  })
  .catch(() => {
    document.querySelectorAll("[data-practice-stream]").forEach((card) => {
      const metaEl = card.querySelector('[data-role="meta"]');
      if (metaEl) {
        metaEl.textContent = "Question bank files could not be loaded.";
      }
    });
  });
