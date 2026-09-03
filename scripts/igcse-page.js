const plannerRoot = document.getElementById("igcse-planner");
const plannerStats = document.getElementById("igcse-stats");
const curriculum = Array.isArray(window.igcseCurriculum) ? window.igcseCurriculum : [];
const practiceData = window.igcsePracticeData || {};
const practiceOverrides = window.igcsePracticeOverrides || (window.igcsePracticeOverrides = {});

const igcseShellSkillBank = practiceData.shellSkillBank || {};
const igcseRemoveSkillBank = practiceData.removeSkillBank || {};
const igcseFifthSkillBank = practiceData.fifthSkillBank || {};
const igcseMisconceptionMap = practiceData.misconceptionMap || {};

const defaultTemplates = {
  linear: {
    q: [
      "Solve: 3x + 7 = 25",
      "Solve: 5(x - 2) = 3x + 8",
      "Solve: (2x/3) + 4 = 10"
    ],
    a: ["x = 6", "x = 9", "x = 9"]
  },
  factorising: {
    q: [
      "Factorise: x^2 + 9x + 20",
      "Factorise: x^2 - x - 12",
      "Solve by factorising: x^2 - 5x + 6 = 0"
    ],
    a: ["(x + 4)(x + 5)", "(x - 4)(x + 3)", "x = 2 or x = 3"]
  },
  fractions: {
    q: [
      "Simplify: 18/24",
      "Compute: 3/4 + 5/6",
      "Compute: (2/3) ÷ (4/9)"
    ],
    a: ["3/4", "19/12", "3/2"]
  },
  percentages: {
    q: [
      "Find 15% of 260",
      "A price rises from 80 to 92. Find % increase.",
      "After a 20% discount, a jacket costs 72. Original price?"
    ],
    a: ["39", "15% increase", "90"]
  },
  geometry: {
    q: [
      "Find area of a sector with r = 6, angle = 120deg",
      "Find circumference of a circle radius 4",
      "Find volume of cylinder radius 3, height 10"
    ],
    a: ["12pi", "8pi", "90pi"]
  },
  coordinates: {
    q: [
      "Find midpoint of (2, 5) and (8, 1)",
      "Find distance between (1, 2) and (7, 10)",
      "Find gradient between (-3, 4) and (5, 0)"
    ],
    a: ["(5, 3)", "10", "-1/2"]
  },
  generic: {
    q: [
      "Create one worked example for this skill.",
      "Create one exam-style question for this skill.",
      "Create one challenge question combining this with a previous topic."
    ],
    a: [
      "Use full method and notation.",
      "Show clear steps and final answer.",
      "Check units and reasonableness."
    ]
  }
};

const igcseTemplates = {
  ...defaultTemplates,
  ...(practiceData.templates || {})
};

function countTopics(data) {
  return data.reduce((total, year) => total + year.topics.length, 0);
}

function countSkills(data) {
  return data.reduce(
    (total, year) => total + year.topics.reduce((topicTotal, topic) => topicTotal + topic.skills.length, 0),
    0
  );
}

function renderPlannerStats() {
  if (!plannerStats || !curriculum.length) {
    return;
  }

  const yearCount = curriculum.length;
  const topicCount = countTopics(curriculum);
  const skillCount = countSkills(curriculum);
  plannerStats.innerHTML =
    `<span class="chip">${yearCount} year groups</span>` +
    `<span class="chip">${topicCount} topics</span>` +
    `<span class="chip">${skillCount} skills</span>`;
}

function renderCurriculum(data) {
  if (!plannerRoot) {
    return;
  }

  plannerRoot.innerHTML = data
    .map((year) => {
      const topicsHtml = year.topics
        .map((topic) => {
          const skillsHtml = topic.skills
            .map(
              (skill) => `
        <details class="skill-item">
          <summary>${escapeHtml(skill)}</summary>
          <div class="practice-panel" data-year="${escapeHtml(year.year)}" data-skill="${escapeHtml(skill)}">
            <p class="note-lite">Loading practice...</p>
          </div>
        </details>`
            )
            .join("");

          return `
      <details class="topic-item">
        <summary><span><span class="topic-label">Topic ${topic.number}</span>${escapeHtml(topic.title)}</span></summary>
        <div class="skills-block">${skillsHtml}
        </div>
      </details>`;
        })
        .join("");

      return `
    <section class="card planner-section" id="${escapeHtml(year.year.toLowerCase().replace(/\s+/g, "-"))}">
      <div class="planner-section-head">
        <div>
          <h3>${escapeHtml(year.year)}</h3>
          <p>${escapeHtml(`${year.topics.length} topics · ${year.topics.reduce((total, topic) => total + topic.skills.length, 0)} skills`)}</p>
        </div>
        <span class="chip">${escapeHtml(year.year)}</span>
      </div>
      <div class="topic-wrap">${topicsHtml}
      </div>
    </section>`;
    })
    .join("");

  plannerRoot.classList.add("planner-sections");
}

function fallbackTemplate(skill) {
  const normalized = (skill || "").toLowerCase();
  if (/equation|simultaneous|elimination|substitution/.test(normalized)) return igcseTemplates.linear;
  if (/factoris|quadratic/.test(normalized)) return igcseTemplates.factorising;
  if (/fraction|decimal/.test(normalized)) return igcseTemplates.fractions;
  if (/percent/.test(normalized)) return igcseTemplates.percentages;
  if (/coordinate|midpoint|distance|gradient|graph/.test(normalized)) return igcseTemplates.coordinates;
  if (/area|volume|sector|circle|surface|pythagoras|angles|polygon|construction|transformation|surd/.test(normalized)) {
    return igcseTemplates.geometry;
  }
  return igcseTemplates.generic;
}

function pickSet(skill, year) {
  const yearOverrides = practiceOverrides[year] || {};
  const skillOverride = yearOverrides[skill];

  if (year === "Shell" && igcseShellSkillBank[skill]) {
    return { ...igcseShellSkillBank[skill], ...skillOverride, bespoke: true };
  }
  if (year === "Remove" && igcseRemoveSkillBank[skill]) {
    return { ...igcseRemoveSkillBank[skill], ...skillOverride, bespoke: true };
  }
  if (year === "Fifth Form" && igcseFifthSkillBank[skill]) {
    return { ...igcseFifthSkillBank[skill], ...skillOverride, bespoke: true };
  }
  return { ...fallbackTemplate(skill), ...skillOverride, bespoke: false };
}

function normalizeQuestionItems(set) {
  if (Array.isArray(set.items)) {
    return set.items
      .filter((item) => item && item.q)
      .map((item) => ({
        q: item.q,
        a: item.a || "",
        hints: Array.isArray(item.hints) ? item.hints : null,
        image: item.image || "",
        imageAlt: item.imageAlt || "",
        imageCaption: item.imageCaption || ""
      }));
  }

  if (Array.isArray(set.pool)) {
    return set.pool
      .filter((item) => item && item.q)
      .map((item) => ({
        q: item.q,
        a: item.a || "",
        hints: Array.isArray(item.hints) ? item.hints : null,
        image: item.image || "",
        imageAlt: item.imageAlt || "",
        imageCaption: item.imageCaption || ""
      }));
  }

  const questions = Array.isArray(set.q) ? set.q : [];
  const answers = Array.isArray(set.a) ? set.a : [];
  const hints = Array.isArray(set.hints) ? set.hints : [];

  return questions.map((question, index) => ({
    q: question,
    a: answers[index] || "",
    hints: Array.isArray(hints[index]) ? hints[index] : null,
    image: "",
    imageAlt: "",
    imageCaption: ""
  }));
}

function selectQuestionItems(set, count = 3) {
  const items = normalizeQuestionItems(set);
  const targetCount = Math.min(count, items.length);
  if (!targetCount) {
    return [];
  }

  return shuffleItems(items).slice(0, targetCount);
}

function normalizeMath(expr) {
  const superscripts = { "⁰": "^0", "¹": "^1", "²": "^2", "³": "^3", "⁴": "^4", "⁵": "^5", "⁶": "^6", "⁷": "^7", "⁸": "^8", "⁹": "^9" };
  const subscripts = { "₀": "_0", "₁": "_1", "₂": "_2", "₃": "_3", "₄": "_4", "₅": "_5", "₆": "_6", "₇": "_7", "₈": "_8", "₉": "_9" };

  let text = String(expr);
  text = text.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (char) => superscripts[char] || char);
  text = text.replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (char) => subscripts[char] || char);

  text = text.replace(/sqrt\(([^)]+)\)/gi, "\\sqrt{$1}");
  text = text.replace(/cbrt\(([^)]+)\)/gi, "\\sqrt[3]{$1}");
  text = text.replace(/\bdy\/dx\b/g, "\\dfrac{dy}{dx}");
  text = text.replace(/√\(([^)]+)\)/g, "\\sqrt{$1}");
  text = text.replace(/√([A-Za-z0-9]+)/g, "\\sqrt{$1}");
  text = text.replace(/∛([A-Za-z0-9]+)/g, "\\sqrt[3]{$1}");

  text = text.replace(/π/g, "\\pi");
  text = text.replace(/θ/g, "\\theta");
  text = text.replace(/×/g, "\\times ");
  text = text.replace(/÷/g, "\\div ");
  text = text.replace(/±/g, "\\pm ");
  text = text.replace(/∓/g, "\\mp ");
  text = text.replace(/>=/g, "\\ge ");
  text = text.replace(/<=/g, "\\le ");
  text = text.replace(/≤/g, "\\le ");
  text = text.replace(/≥/g, "\\ge ");
  text = text.replace(/≠/g, "\\ne ");
  text = text.replace(/∩/g, "\\cap ");
  text = text.replace(/∪/g, "\\cup ");
  text = text.replace(/∝/g, "\\propto ");
  text = text.replace(/∫/g, "\\int ");

  text = text.replace(/(\d+)°/g, "$1^{\\circ}");
  text = text.replace(/([A-Za-z])\^(\-?\d+)/g, "$1^{$2}");
  text = text.replace(/\b(\d+)\s*\/\s*(\d+)\b/g, "\\frac{$1}{$2}");

  return text;
}

function graphDiagram(skill) {
  const normalized = (skill || "").toLowerCase();
  const statGrid = `
    <g stroke="#eadfce" stroke-width="1">
      <line x1="50" y1="150" x2="420" y2="150"/>
      <line x1="50" y1="120" x2="420" y2="120"/>
      <line x1="50" y1="90" x2="420" y2="90"/>
      <line x1="50" y1="60" x2="420" y2="60"/>
      <line x1="100" y1="30" x2="100" y2="180"/>
      <line x1="150" y1="30" x2="150" y2="180"/>
      <line x1="200" y1="30" x2="200" y2="180"/>
      <line x1="250" y1="30" x2="250" y2="180"/>
      <line x1="300" y1="30" x2="300" y2="180"/>
      <line x1="350" y1="30" x2="350" y2="180"/>
      <line x1="400" y1="30" x2="400" y2="180"/>
    </g>`;
  const cartGrid = `
    <g stroke="#eadfce" stroke-width="1">
      <line x1="70" y1="40" x2="70" y2="180"/><line x1="110" y1="40" x2="110" y2="180"/><line x1="150" y1="40" x2="150" y2="180"/><line x1="190" y1="40" x2="190" y2="180"/>
      <line x1="230" y1="40" x2="230" y2="180"/><line x1="270" y1="40" x2="270" y2="180"/><line x1="310" y1="40" x2="310" y2="180"/><line x1="350" y1="40" x2="350" y2="180"/><line x1="390" y1="40" x2="390" y2="180"/>
      <line x1="50" y1="50" x2="420" y2="50"/><line x1="50" y1="80" x2="420" y2="80"/><line x1="50" y1="110" x2="420" y2="110"/><line x1="50" y1="140" x2="420" y2="140"/><line x1="50" y1="170" x2="420" y2="170"/>
    </g>`;

  if (normalized.includes("histogram")) {
    if (normalized.includes("completing a table")) {
      return `
        <div class="diagram-card">
          <div class="diagram-title">Histogram prompt (read values from bars)</div>
          <svg class="diagram-svg" viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram for table-completion practice">
            ${statGrid}
            <line x1="50" y1="180" x2="420" y2="180" stroke="#8f6a45" stroke-width="2"/>
            <line x1="50" y1="180" x2="50" y2="30" stroke="#8f6a45" stroke-width="2"/>
            <rect x="70" y="120" width="45" height="60" fill="#c9aa85"/>
            <rect x="115" y="70" width="90" height="110" fill="#b98a53"/>
            <rect x="205" y="95" width="70" height="85" fill="#c9aa85"/>
            <rect x="275" y="55" width="120" height="125" fill="#b98a53"/>
            <text x="68" y="198" font-size="11" fill="#4f4438">0-5</text>
            <text x="133" y="198" font-size="11" fill="#4f4438">5-15</text>
            <text x="220" y="198" font-size="11" fill="#4f4438">15-22</text>
            <text x="307" y="198" font-size="11" fill="#4f4438">22-34</text>
            <text x="300" y="28" font-size="12" fill="#4f4438">Class width varies</text>
            <text x="46" y="183" font-size="10" fill="#4f4438">0</text>
            <text x="42" y="153" font-size="10" fill="#4f4438">2</text>
            <text x="42" y="123" font-size="10" fill="#4f4438">4</text>
            <text x="42" y="93" font-size="10" fill="#4f4438">6</text>
            <text x="42" y="63" font-size="10" fill="#4f4438">8</text>
            <text x="15" y="24" font-size="12" fill="#4f4438" transform="rotate(-90 15,24)">Frequency density</text>
          </svg>
          <div class="diagram-note">Use bar area (not just height). Suggested scale: x in class boundaries, y in frequency density steps of 2.</div>
        </div>
      `;
    }
    return `
      <div class="diagram-card">
        <div class="diagram-title">Histogram example (unequal class widths)</div>
        <svg class="diagram-svg" viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram example with unequal class widths">
          ${statGrid}
          <line x1="50" y1="180" x2="420" y2="180" stroke="#8f6a45" stroke-width="2"/>
          <line x1="50" y1="180" x2="50" y2="30" stroke="#8f6a45" stroke-width="2"/>
          <rect x="70" y="130" width="45" height="50" fill="#c9aa85"/>
          <rect x="115" y="90" width="90" height="90" fill="#b98a53"/>
          <rect x="205" y="70" width="70" height="110" fill="#8f6a45"/>
          <rect x="275" y="105" width="120" height="75" fill="#c9aa85"/>
          <text x="68" y="198" font-size="11" fill="#4f4438">0-5</text>
          <text x="133" y="198" font-size="11" fill="#4f4438">5-15</text>
          <text x="220" y="198" font-size="11" fill="#4f4438">15-22</text>
          <text x="307" y="198" font-size="11" fill="#4f4438">22-34</text>
          <text x="14" y="24" font-size="12" fill="#4f4438" transform="rotate(-90 14,24)">Frequency density</text>
          <text x="46" y="183" font-size="10" fill="#4f4438">0</text>
          <text x="42" y="153" font-size="10" fill="#4f4438">2</text>
          <text x="42" y="123" font-size="10" fill="#4f4438">4</text>
          <text x="42" y="93" font-size="10" fill="#4f4438">6</text>
        </svg>
        <div class="diagram-note">Remember: frequency = class width x frequency density. Suggested y-scale: 1 large square = 2 density units.</div>
      </div>
    `;
  }

  if (normalized.includes("cumulative frequency") || normalized.includes("c.f. graph")) {
    return `
      <div class="diagram-card">
        <div class="diagram-title">Cumulative frequency (ogive) example</div>
        <svg class="diagram-svg" viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency curve">
          ${statGrid}
          <line x1="50" y1="180" x2="420" y2="180" stroke="#8f6a45" stroke-width="2"/>
          <line x1="50" y1="180" x2="50" y2="30" stroke="#8f6a45" stroke-width="2"/>
          <polyline fill="none" stroke="#8f6a45" stroke-width="3" points="70,170 120,155 170,132 220,104 270,78 320,56 370,42"/>
          <circle cx="120" cy="155" r="3" fill="#8f6a45"/>
          <circle cx="220" cy="104" r="3" fill="#8f6a45"/>
          <circle cx="320" cy="56" r="3" fill="#8f6a45"/>
          <text x="290" y="198" font-size="11" fill="#4f4438">Class boundary</text>
          <text x="12" y="24" font-size="12" fill="#4f4438" transform="rotate(-90 12,24)">Cum. frequency</text>
          <text x="44" y="183" font-size="10" fill="#4f4438">0</text>
          <text x="40" y="153" font-size="10" fill="#4f4438">20</text>
          <text x="40" y="123" font-size="10" fill="#4f4438">40</text>
          <text x="40" y="93" font-size="10" fill="#4f4438">60</text>
          <text x="40" y="63" font-size="10" fill="#4f4438">80</text>
        </svg>
        <div class="diagram-note">Read quartiles and median by moving horizontally from CF values to the curve, then down. Suggested scale: x = class boundaries, y = 20 CF per large square.</div>
      </div>
    `;
  }

  if (normalized.includes("travel graph") || normalized.includes("s-d-t") || normalized.includes("distance-time")) {
    return `
      <div class="diagram-card">
        <div class="diagram-title">Travel graph example</div>
        <svg class="diagram-svg" viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Distance-time travel graph">
          ${cartGrid}
          <line x1="50" y1="180" x2="420" y2="180" stroke="#8f6a45" stroke-width="2"/>
          <line x1="50" y1="180" x2="50" y2="30" stroke="#8f6a45" stroke-width="2"/>
          <polyline fill="none" stroke="#8f6a45" stroke-width="3" points="70,170 140,120 200,120 280,70 360,100"/>
          <text x="205" y="114" font-size="11" fill="#4f4438">stationary</text>
          <text x="332" y="196" font-size="11" fill="#4f4438">time</text>
          <text x="14" y="24" font-size="12" fill="#4f4438" transform="rotate(-90 14,24)">distance (km)</text>
          <text x="230" y="196" font-size="10" fill="#4f4438">30</text>
          <text x="310" y="196" font-size="10" fill="#4f4438">45</text>
          <text x="34" y="143" font-size="10" fill="#4f4438">20</text>
          <text x="34" y="83" font-size="10" fill="#4f4438">40</text>
        </svg>
        <div class="diagram-note">Steeper sections mean faster speed. Flat section means stationary. Suggested scale: x = 5 min per large square, y = 5 km per large square.</div>
      </div>
    `;
  }

  if (
    normalized.includes("plotting graphs") ||
    normalized.includes("graphical solution") ||
    normalized.includes("tangent to estimate gradient")
  ) {
    return `
      <div class="diagram-card">
        <div class="diagram-title">Coordinate graph example</div>
        <svg class="diagram-svg" viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Straight line graph example">
          ${cartGrid}
          <line x1="50" y1="180" x2="420" y2="180" stroke="#8f6a45" stroke-width="2"/>
          <line x1="230" y1="200" x2="230" y2="30" stroke="#8f6a45" stroke-width="2"/>
          <line x1="70" y1="160" x2="380" y2="70" stroke="#b98a53" stroke-width="3"/>
          <line x1="70" y1="90" x2="380" y2="160" stroke="#8f6a45" stroke-width="3"/>
          <circle cx="230" cy="115" r="4" fill="#8f6a45"/>
          <text x="238" y="110" font-size="11" fill="#4f4438">intersection</text>
          <text x="407" y="196" font-size="11" fill="#4f4438">x</text>
          <text x="236" y="24" font-size="11" fill="#4f4438">y</text>
          <text x="266" y="196" font-size="10" fill="#4f4438">1</text>
          <text x="306" y="196" font-size="10" fill="#4f4438">2</text>
          <text x="346" y="196" font-size="10" fill="#4f4438">3</text>
          <text x="214" y="143" font-size="10" fill="#4f4438">-1</text>
          <text x="214" y="83" font-size="10" fill="#4f4438">1</text>
        </svg>
        <div class="diagram-note">Use gradients and intercepts to sketch quickly; intersections solve simultaneous graphically. Suggested scale: 1 large square = 1 unit on both axes.</div>
      </div>
    `;
  }

  if (normalized.includes("trig graphs")) {
    return `
      <div class="diagram-card">
        <div class="diagram-title">Trig graph example \\(y = \\sin x\\)</div>
        <svg class="diagram-svg" viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sine graph over one cycle">
          ${cartGrid}
          <line x1="50" y1="110" x2="420" y2="110" stroke="#8f6a45" stroke-width="2"/>
          <line x1="50" y1="180" x2="50" y2="40" stroke="#8f6a45" stroke-width="2"/>
          <path d="M50,110 C95,40 140,40 185,110 C230,180 275,180 320,110 C365,40 410,40 420,55" fill="none" stroke="#8f6a45" stroke-width="3"/>
          <text x="115" y="195" font-size="11" fill="#4f4438">\\(90^\\circ\\)</text>
          <text x="210" y="195" font-size="11" fill="#4f4438">\\(180^\\circ\\)</text>
          <text x="300" y="195" font-size="11" fill="#4f4438">\\(270^\\circ\\)</text>
          <text x="388" y="195" font-size="11" fill="#4f4438">\\(360^\\circ\\)</text>
          <text x="35" y="113" font-size="10" fill="#4f4438">0</text>
          <text x="35" y="53" font-size="10" fill="#4f4438">1</text>
          <text x="35" y="173" font-size="10" fill="#4f4438">-1</text>
        </svg>
        <div class="diagram-note">Key points: 0deg, 90deg, 180deg, 270deg, 360deg. Suggested scale: x = 90deg blocks, y = 1 unit per large square.</div>
      </div>
    `;
  }

  return "";
}

function normalizeAnswerForCheck(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/\[/g, "")
    .replace(/\]/g, "")
    .replace(/\{/g, "")
    .replace(/\}/g, "")
    .replace(/×/g, "x")
    .replace(/≈/g, "=")
    .replace(/−/g, "-")
    .replace(/\u2212/g, "-");
}

function isAnswerClose(user, expected) {
  const normalizedUser = normalizeAnswerForCheck(user);
  const normalizedExpected = normalizeAnswerForCheck(expected);
  if (!normalizedUser || !normalizedExpected) {
    return false;
  }
  if (normalizedUser === normalizedExpected) {
    return true;
  }

  if (normalizedExpected.includes("±")) {
    const plus = normalizedExpected.replace("±", "+");
    const minus = normalizedExpected.replace("±", "-");
    if (normalizedUser === plus || normalizedUser === minus) {
      return true;
    }
    if (
      normalizedUser === plus.replace(/^[a-z]+=+/, "") ||
      normalizedUser === minus.replace(/^[a-z]+=+/, "")
    ) {
      return true;
    }
  }

  const alternatives = normalizedExpected
    .split(/or/)
    .map((part) => part.trim())
    .filter(Boolean)
    .flatMap((part) => [part, part.replace(/^[a-z]+=+/, "")]);
  if (alternatives.includes(normalizedUser)) {
    return true;
  }

  const tuples = [...normalizedExpected.matchAll(/-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?/g)].map((match) => match[0]);
  if (tuples.length && tuples.includes(normalizedUser.replace(/^[a-z,=]+/, ""))) {
    return true;
  }

  const symbolic = /[√π\/]|[a-z]/i.test(normalizedExpected);
  if (!symbolic) {
    const userNumber = Number(normalizedUser.replace(/[^0-9.-]/g, ""));
    const expectedNumber = Number(normalizedExpected.replace(/[^0-9.-]/g, ""));
    if (Number.isFinite(userNumber) && Number.isFinite(expectedNumber) && Math.abs(userNumber - expectedNumber) <= 0.02) {
      return true;
    }
  }

  return false;
}

function hintsForPercentOfAmount(question) {
  const match = question.match(/find\s+([\d.]+)%\s+of\s+([\d.]+)/i);
  if (!match) {
    return null;
  }

  const percent = Number(match[1]);
  const amount = Number(match[2]);
  const decimal = percent / 100;
  const result = amount * decimal;

  return [
    "Hint 1: Turn the percentage into a decimal or fraction, then multiply by the whole amount.",
    `Hint 2 (your problem): ${percent}% = ${decimal}, so calculate ${amount} x ${decimal}.`,
    `Hint 3 (full worked):\n${percent}% of ${amount}\n= ${percent / 100} x ${amount}\n= ${result}`
  ];
}

function hintsForPercentageOfAnother(question) {
  const match = question.match(/what is\s+([\d.]+)\s+as a percentage of\s+([\d.]+)/i);
  if (!match) {
    return null;
  }

  const part = Number(match[1]);
  const whole = Number(match[2]);
  const fraction = part / whole;
  const percent = fraction * 100;

  return [
    "Hint 1: Write part over whole, then multiply by 100.",
    `Hint 2 (your problem): ${part} as a percentage of ${whole} means (${part}/${whole}) x 100.`,
    `Hint 3 (full worked):\n(${part}/${whole}) x 100 = ${fraction} x 100 = ${percent}%`
  ];
}

function hintsForMidpoint(question) {
  const match = question.match(/midpoint of\s*\((-?\d+),\s*(-?\d+)\)\s*and\s*\((-?\d+),\s*(-?\d+)\)/i);
  if (!match) {
    return null;
  }

  const x1 = Number(match[1]);
  const y1 = Number(match[2]);
  const x2 = Number(match[3]);
  const y2 = Number(match[4]);
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  return [
    "Hint 1: Average the x-coordinates, then average the y-coordinates.",
    `Hint 2 (your problem): x-midpoint = (${x1} + ${x2}) / 2 and y-midpoint = (${y1} + ${y2}) / 2.`,
    `Hint 3 (full worked):\n((${x1} + ${x2}) / 2, (${y1} + ${y2}) / 2)\n= (${midX}, ${midY})`
  ];
}

function hintsForDistance(question) {
  const match = question.match(/distance between\s*\((-?\d+),\s*(-?\d+)\)\s*and\s*\((-?\d+),\s*(-?\d+)\)/i);
  if (!match) {
    return null;
  }

  const x1 = Number(match[1]);
  const y1 = Number(match[2]);
  const x2 = Number(match[3]);
  const y2 = Number(match[4]);
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distanceSquared = dx * dx + dy * dy;

  return [
    "Hint 1: Find the horizontal and vertical differences first, then use Pythagoras.",
    `Hint 2 (your problem): dx = ${x2} - ${x1} = ${dx}, dy = ${y2} - ${y1} = ${dy}.`,
    `Hint 3 (full worked):\nd = sqrt((${dx})^2 + (${dy})^2)\n= sqrt(${dx * dx} + ${dy * dy})\n= sqrt(${distanceSquared})`
  ];
}

function hintsForFractionArithmetic(question) {
  const multiplyMatch = question.match(/\(?\s*(\d+)\s*\/\s*(\d+)\s*\)?\s*[x×]\s*\(?\s*(\d+)\s*\/\s*(\d+)\s*\)?/i);
  if (multiplyMatch) {
    const a = Number(multiplyMatch[1]);
    const b = Number(multiplyMatch[2]);
    const c = Number(multiplyMatch[3]);
    const d = Number(multiplyMatch[4]);
    return [
      "Hint 1: Multiply the numerators together and the denominators together.",
      `Hint 2 (your problem): (${a}/${b}) x (${c}/${d}) = (${a} x ${c}) / (${b} x ${d}).`,
      `Hint 3 (full worked):\n(${a}/${b}) x (${c}/${d}) = ${a * c}/${b * d}`
    ];
  }

  const divideMatch = question.match(/\(?\s*(\d+)\s*\/\s*(\d+)\s*\)?\s*÷\s*\(?\s*(\d+)\s*\/\s*(\d+)\s*\)?/i);
  if (divideMatch) {
    const a = Number(divideMatch[1]);
    const b = Number(divideMatch[2]);
    const c = Number(divideMatch[3]);
    const d = Number(divideMatch[4]);
    return [
      "Hint 1: Keep the first fraction, flip the second, then multiply.",
      `Hint 2 (your problem): (${a}/${b}) ÷ (${c}/${d}) = (${a}/${b}) x (${d}/${c}).`,
      `Hint 3 (full worked):\n(${a}/${b}) ÷ (${c}/${d}) = (${a}/${b}) x (${d}/${c}) = ${a * d}/${b * c}`
    ];
  }

  const addSubMatch = question.match(/(\d+)\s*\/\s*(\d+)\s*([+-])\s*(\d+)\s*\/\s*(\d+)/i);
  if (!addSubMatch) {
    return null;
  }

  const a = Number(addSubMatch[1]);
  const b = Number(addSubMatch[2]);
  const op = addSubMatch[3];
  const c = Number(addSubMatch[4]);
  const d = Number(addSubMatch[5]);
  const common = b * d;
  const left = a * d;
  const right = c * b;
  const numerator = op === "+" ? left + right : left - right;

  return [
    "Hint 1: Make the denominators the same before combining the numerators.",
    `Hint 2 (your problem): common denominator = ${common}, so rewrite as ${left}/${common} ${op} ${right}/${common}.`,
    `Hint 3 (full worked):\n${left}/${common} ${op} ${right}/${common} = ${numerator}/${common}`
  ];
}

function hintsForSingleBracketExpansion(question) {
  const match = question.match(/^\s*expand:\s*([+-]?\d+)\(([^)]+)\)\s*$/i);
  if (!match) {
    return null;
  }

  const coefficient = Number(match[1]);
  const inner = match[2];
  return [
    "Hint 1: Multiply the outside number by every term inside the bracket.",
    `Hint 2 (your problem): distribute ${coefficient} across (${inner}).`,
    `Hint 3 (full worked):\nApply ${coefficient} to each term in (${inner}), then collect the result carefully.`
  ];
}

function hintsForHistogram(question) {
  const densityMatch = question.match(/class has width\s+([\d.]+)\s+and frequency\s+([\d.]+)\.\s*find the frequency density/i);
  if (densityMatch) {
    const width = Number(densityMatch[1]);
    const frequency = Number(densityMatch[2]);
    const density = frequency / width;
    return [
      "Hint 1: In a histogram, frequency density = frequency / class width.",
      `Hint 2 (your problem): frequency density = ${frequency} / ${width}.`,
      `Hint 3 (full worked):\nfrequency density = frequency / class width\n= ${frequency} / ${width}\n= ${density}`
    ];
  }

  const frequencyMatch = question.match(/class has width\s+([\d.]+)\s+and density\s+([\d.]+)\.\s*find the frequency/i);
  if (frequencyMatch) {
    const width = Number(frequencyMatch[1]);
    const density = Number(frequencyMatch[2]);
    const frequency = width * density;
    return [
      "Hint 1: Frequency = class width x frequency density.",
      `Hint 2 (your problem): frequency = ${width} x ${density}.`,
      `Hint 3 (full worked):\nfrequency = class width x frequency density\n= ${width} x ${density}\n= ${frequency}`
    ];
  }

  const areaMatch = question.match(/bar area is\s+([\d.]+)\s+and the class width is\s+([\d.]+)\.\s*find the density/i);
  if (areaMatch) {
    const area = Number(areaMatch[1]);
    const width = Number(areaMatch[2]);
    const density = area / width;
    return [
      "Hint 1: Bar area = class width x frequency density, so divide the area by the width.",
      `Hint 2 (your problem): density = ${area} / ${width}.`,
      `Hint 3 (full worked):\narea = width x density\n${area} = ${width} x density\ndensity = ${area} / ${width} = ${density}`
    ];
  }

  if (/why does the area of a histogram bar represent frequency/i.test(question)) {
    return [
      "Hint 1: A histogram bar uses height for frequency density, not raw frequency.",
      "Hint 2: Multiply the height (density) by the width of the class interval.",
      "Hint 3 (full worked):\nbar area = class width x frequency density\nand frequency = class width x frequency density\nso the bar area represents the frequency."
    ];
  }

  if (/vertical axis of a histogram/i.test(question)) {
    return [
      "Hint 1: The vertical axis is not frequency unless all class widths are equal.",
      "Hint 2: Histograms correct for unequal widths by plotting frequency density.",
      "Hint 3 (full worked):\nThe vertical axis on a histogram is frequency density."
    ];
  }

  if (/frequency density/i.test(question)) {
    return [
      "Hint 1: Think about how histogram height is adjusted for the width of each class.",
      "Hint 2: Divide the frequency by the class width.",
      "Hint 3 (full worked):\nfrequency density = frequency / class width."
    ];
  }

  return null;
}

function factoriseInteger(value) {
  let remaining = Math.abs(Number(value));
  const factors = [];

  for (let divisor = 2; divisor * divisor <= remaining; divisor += 1) {
    while (remaining % divisor === 0) {
      factors.push(divisor);
      remaining /= divisor;
    }
  }

  if (remaining > 1) {
    factors.push(remaining);
  }

  return factors;
}

function formatPrimeFactors(value) {
  const factors = factoriseInteger(value);
  if (!factors.length) {
    return String(value);
  }

  const counts = new Map();
  factors.forEach((factor) => counts.set(factor, (counts.get(factor) || 0) + 1));
  return [...counts.entries()]
    .map(([factor, count]) => (count === 1 ? `${factor}` : `${factor}^${count}`))
    .join(" x ");
}

function hintsForPrimeFactorAndMultiples(question) {
  const primeMatch = question.match(/prime factorise\s+(\d+)/i);
  if (primeMatch) {
    const value = Number(primeMatch[1]);
    const factors = factoriseInteger(value);
    return [
      "Hint 1: Start dividing by the smallest prime number that works, then keep going until only primes remain.",
      `Hint 2 (your problem): ${value} breaks into primes ${factors.join(", ")}.`,
      `Hint 3 (full worked):\n${value} = ${factors.join(" x ")} = ${formatPrimeFactors(value)}`
    ];
  }

  const hcfLcmMatch = question.match(/hcf and lcm of\s+(\d+)\s+and\s+(\d+)/i);
  if (hcfLcmMatch) {
    const first = Number(hcfLcmMatch[1]);
    const second = Number(hcfLcmMatch[2]);
    return [
      "Hint 1: Prime factorise both numbers first.",
      `Hint 2 (your problem): ${first} = ${formatPrimeFactors(first)} and ${second} = ${formatPrimeFactors(second)}.`,
      "Hint 3 (full worked):\nFor HCF use the shared prime factors with the smallest powers.\nFor LCM use every prime factor with the largest powers."
    ];
  }

  return null;
}

function hintsForIndicesAndStandardForm(question) {
  const standardOrdinary = question.match(/write\s+([\d.]+)\s*x\s*10\^(-?\d+)\s+as an ordinary number/i);
  if (standardOrdinary) {
    const coefficient = Number(standardOrdinary[1]);
    const power = Number(standardOrdinary[2]);
    return [
      "Hint 1: A positive power moves the decimal point to the right. A negative power moves it to the left.",
      `Hint 2 (your problem): move the decimal point in ${coefficient} by ${Math.abs(power)} place(s) ${power >= 0 ? "to the right" : "to the left"}.`,
      `Hint 3 (worked direction): rewrite ${coefficient} x 10^${power} as an ordinary number step by step.`
    ];
  }

  const ordinaryStandard = question.match(/write\s+([\d.]+)\s+in standard form/i);
  if (ordinaryStandard) {
    const value = ordinaryStandard[1];
    return [
      "Hint 1: Place the decimal point so the first number is between 1 and 10.",
      `Hint 2 (your problem): rewrite ${value} as a number between 1 and 10, then count how many places the decimal moved.`,
      "Hint 3 (worked direction): adjust the power of 10 to match the decimal movement."
    ];
  }

  const sfMultiply = question.match(/simplify:\s*\(([\d.]+)\s*x\s*10\^(-?\d+)\)\(([\d.]+)\s*x\s*10\^(-?\d+)\)/i);
  if (sfMultiply) {
    const a = Number(sfMultiply[1]);
    const b = Number(sfMultiply[2]);
    const c = Number(sfMultiply[3]);
    const d = Number(sfMultiply[4]);
    return [
      "Hint 1: Multiply the number parts together, then add the powers of 10.",
      `Hint 2 (your problem): (${a} x ${c}) x 10^(${b} + ${d}).`,
      "Hint 3 (worked direction): simplify the coefficient, then adjust it so the final answer is back in standard form."
    ];
  }

  const sfDivide = question.match(/simplify:\s*\(([\d.]+)\s*x\s*10\^(-?\d+)\)\s*\/\s*\(([\d.]+)\s*x\s*10\^(-?\d+)\)/i);
  if (sfDivide) {
    const a = Number(sfDivide[1]);
    const b = Number(sfDivide[2]);
    const c = Number(sfDivide[3]);
    const d = Number(sfDivide[4]);
    return [
      "Hint 1: Divide the number parts, then subtract the powers of 10.",
      `Hint 2 (your problem): (${a} / ${c}) x 10^(${b} - ${d}).`,
      "Hint 3 (worked direction): simplify the coefficient, then rewrite in proper standard form if needed."
    ];
  }

  const sfAddSub = question.match(/^(Add|Subtract):\s*([\d.]+)\s*x\s*10\^(-?\d+)\s*([+-])\s*([\d.]+)\s*x\s*10\^(-?\d+)/i);
  if (sfAddSub) {
    return [
      "Hint 1: Make sure both terms have the same power of 10 before combining the number parts.",
      "Hint 2: Combine the coefficients only after the power of 10 matches.",
      "Hint 3 (worked direction): add or subtract the coefficients, then leave the answer in standard form."
    ];
  }

  const primePower = question.match(/simplify:\s*\(([a-z])\^(-?\d+)\)\^(-?\d+)/i);
  if (primePower) {
    const base = primePower[1];
    const inner = Number(primePower[2]);
    const outer = Number(primePower[3]);
    return [
      "Hint 1: When a power is raised to another power, multiply the indices.",
      `Hint 2 (your problem): ${base}^(${inner} x ${outer}).`,
      `Hint 3 (full worked):\n(${base}^${inner})^${outer} = ${base}^${inner * outer}`
    ];
  }

  const indexMultiply = question.match(/simplify:\s*([a-z])\^(-?\d+)\s*x\s*\1\^(-?\d+)/i);
  if (indexMultiply) {
    const base = indexMultiply[1];
    const first = Number(indexMultiply[2]);
    const second = Number(indexMultiply[3]);
    return [
      "Hint 1: Same base and multiplication means add the indices.",
      `Hint 2 (your problem): ${base}^(${first} + ${second}).`,
      `Hint 3 (full worked):\n${base}^${first} x ${base}^${second} = ${base}^${first + second}`
    ];
  }

  const indexDivide = question.match(/simplify:\s*([a-z])\^(-?\d+)\s*\/\s*\1\^(-?\d+)/i);
  if (indexDivide) {
    const base = indexDivide[1];
    const first = Number(indexDivide[2]);
    const second = Number(indexDivide[3]);
    return [
      "Hint 1: Same base and division means subtract the indices.",
      `Hint 2 (your problem): ${base}^(${first} - ${second}).`,
      `Hint 3 (full worked):\n${base}^${first} / ${base}^${second} = ${base}^${first - second}`
    ];
  }

  const negativeIndex = question.match(/simplify:\s*(\d+)?([a-z])\^-(\d+)/i);
  if (negativeIndex) {
    const coefficient = negativeIndex[1] ? `${negativeIndex[1]}` : "";
    const base = negativeIndex[2];
    const power = Number(negativeIndex[3]);
    return [
      "Hint 1: A negative index moves the factor to the denominator.",
      `Hint 2 (your problem): ${coefficient}${base}^-${power} becomes ${coefficient ? coefficient + "/" : "1/"}${base}^${power}.`,
      "Hint 3 (worked direction): rewrite the expression with positive indices only."
    ];
  }

  const fractionalIndex = question.match(/simplify:\s*([a-z]|\d+)\^\((\d+)\/(\d+)\)/i);
  if (fractionalIndex) {
    const value = fractionalIndex[1];
    const numerator = Number(fractionalIndex[2]);
    const denominator = Number(fractionalIndex[3]);
    return [
      "Hint 1: The denominator gives the root and the numerator gives the power.",
      `Hint 2 (your problem): ${value}^(${numerator}/${denominator}) means the ${denominator}th root, then power ${numerator}.`,
      "Hint 3 (worked direction): convert to a root form first, then simplify."
    ];
  }

  return null;
}

function hintsForStraightLineWork(question) {
  const gradientCoords = question.match(/gradient between\s*\((-?\d+),\s*(-?\d+)\)\s*and\s*\((-?\d+),\s*(-?\d+)\)/i);
  if (gradientCoords) {
    const x1 = Number(gradientCoords[1]);
    const y1 = Number(gradientCoords[2]);
    const x2 = Number(gradientCoords[3]);
    const y2 = Number(gradientCoords[4]);
    return [
      "Hint 1: Gradient = change in y / change in x.",
      `Hint 2 (your problem): (${y2} - ${y1}) / (${x2} - ${x1}).`,
      `Hint 3 (full worked):\nm = (${y2 - y1}) / (${x2 - x1})`
    ];
  }

  const gradientEquation = question.match(/gradient of (?:the line )?y\s*=\s*([+-]?\d+(?:\.\d+)?)x\s*([+-]\s*\d+)?/i);
  if (gradientEquation) {
    const gradient = Number(gradientEquation[1]);
    return [
      "Hint 1: In y = mx + c, the gradient is the number in front of x.",
      `Hint 2 (your problem): here m = ${gradient}.`,
      `Hint 3 (full worked):\nCompare the equation to y = mx + c, so the gradient is ${gradient}.`
    ];
  }

  if (/equation of the line/i.test(question)) {
    return [
      "Hint 1: Use y = mx + c.",
      "Hint 2: Find the gradient first, then substitute one known point to work out c.",
      "Hint 3 (worked direction): build the full line equation in the form y = mx + c."
    ];
  }

  if (/give two points on/i.test(question)) {
    return [
      "Hint 1: Choose easy x-values such as 0 and 1 or use the x- and y-intercepts.",
      "Hint 2: Substitute each chosen x-value into the line equation to get the matching y-value.",
      "Hint 3 (worked direction): write the two resulting coordinate pairs clearly."
    ];
  }

  if (/intersection of/i.test(question)) {
    return [
      "Hint 1: At the intersection, both equations have the same y-value.",
      "Hint 2: Set the two expressions for y equal to each other and solve for x first.",
      "Hint 3 (worked direction): once x is known, substitute back into either line to get y."
    ];
  }

  if (/parallel/i.test(question)) {
    return [
      "Hint 1: Parallel lines have the same gradient.",
      "Hint 2: Keep the gradient the same, then use the given point to find the new intercept.",
      "Hint 3 (worked direction): write the matching y = mx + c equation or compare the gradients directly."
    ];
  }

  if (/perpendicular/i.test(question)) {
    return [
      "Hint 1: Perpendicular gradients multiply to -1.",
      "Hint 2: Use the negative reciprocal of the original gradient.",
      "Hint 3 (worked direction): find the new gradient first, then use the given point if an equation is needed."
    ];
  }

  return null;
}

function hintsForFormulae(question) {
  if (/make .* subject/i.test(question) || /make .* the subject/i.test(question)) {
    return [
      "Hint 1: Treat the letters like algebra and undo operations in reverse order.",
      "Hint 2: If the subject appears more than once, collect those terms together first.",
      "Hint 3 (worked direction): isolate the target letter one step at a time without skipping lines."
    ];
  }

  return null;
}

function hintsForQuadratics(question) {
  if (/factorise:/i.test(question)) {
    return [
      "Hint 1: Think about which two bracket numbers multiply to the constant term and add to the x-coefficient.",
      "Hint 2: For a non-monic quadratic, use factor pairs of the first and last coefficients.",
      "Hint 3 (worked direction): build the two brackets, then check by expanding."
    ];
  }

  if (/solve:/i.test(question) && /x\^2/.test(question)) {
    return [
      "Hint 1: Factorise the quadratic first if possible.",
      "Hint 2: Then use the zero-product rule: if a bracket product is zero, one bracket must be zero.",
      "Hint 3 (worked direction): solve each bracket equation separately."
    ];
  }

  if (/vertex|x-intercepts|open up or down/i.test(question)) {
    return [
      "Hint 1: For x-intercepts, solve y = 0. For the vertex, read it from the completed-square form if possible.",
      "Hint 2: The sign of the x^2 term tells you whether the parabola opens up or down.",
      "Hint 3 (worked direction): use the graph feature named in the question only, rather than trying to sketch everything."
    ];
  }

  if (/form the equation|hits the ground|product 56/i.test(question)) {
    return [
      "Hint 1: Translate the words into a product or quadratic expression first.",
      "Hint 2: If the question asks when something is zero, set the expression equal to 0.",
      "Hint 3 (worked direction): build the quadratic model carefully before solving or simplifying."
    ];
  }

  return null;
}

function hintsForGeometrySimilarityAndUnits(question) {
  if (/circumference|area of|perimeter of/i.test(question) && !/compound|similar|histogram/i.test(question)) {
    return [
      "Hint 1: Choose the correct formula before substituting values.",
      "Hint 2: Keep track of whether the question wants area, perimeter, or circumference.",
      "Hint 3 (worked direction): substitute the measurements carefully and simplify the result."
    ];
  }

  if (/L-shape|shaded area|remaining area|total area/i.test(question)) {
    return [
      "Hint 1: Split the compound shape into simpler shapes or subtract the missing piece.",
      "Hint 2: Work out each smaller area separately before combining them.",
      "Hint 3 (worked direction): add or subtract the simpler areas to get the final total."
    ];
  }

  if (/scale factor|similar|area ratio|volume ratio/i.test(question)) {
    return [
      "Hint 1: Decide whether the question is about length, area, or volume.",
      "Hint 2: Length uses the scale factor, area uses the square, and volume uses the cube.",
      "Hint 3 (worked direction): apply the correct scale-factor rule before calculating the final answer."
    ];
  }

  if (/convert .* to /i.test(question)) {
    return [
      "Hint 1: Write down the metric conversion you need first.",
      "Hint 2: Decide whether to multiply or divide by 10, 100, or 1000.",
      "Hint 3 (worked direction): convert in one clear step and keep the unit in the answer."
    ];
  }

  return null;
}

function hintsForDataHandling(question) {
  if (/mean of/i.test(question)) {
    return [
      "Hint 1: Add all the values, then divide by how many values there are.",
      "Hint 2: Count the number of data points carefully before dividing.",
      "Hint 3 (worked direction): total the data set first, then divide by the frequency count."
    ];
  }

  if (/median of/i.test(question)) {
    return [
      "Hint 1: Put the values in order before finding the middle.",
      "Hint 2: If there are an even number of values, average the two middle numbers.",
      "Hint 3 (worked direction): sort the list first, then identify the centre."
    ];
  }

  if (/mode of/i.test(question)) {
    return [
      "Hint 1: The mode is the value that appears most often.",
      "Hint 2: Scan for repeats before committing to an answer.",
      "Hint 3 (worked direction): count the repeated values and choose the most frequent one."
    ];
  }

  if (/range of/i.test(question)) {
    return [
      "Hint 1: Range = largest value - smallest value.",
      "Hint 2: Identify the extremes first, then subtract.",
      "Hint 3 (worked direction): use the biggest and smallest numbers only."
    ];
  }

  if (/interquartile range/i.test(question)) {
    return [
      "Hint 1: Find Q1 and Q3 from the ordered list first.",
      "Hint 2: IQR = Q3 - Q1.",
      "Hint 3 (worked direction): split the ordered data set and subtract the quartiles."
    ];
  }

  if (/class midpoints/i.test(question)) {
    return [
      "Hint 1: A class midpoint is halfway between the lower and upper class boundary.",
      "Hint 2: Add the class endpoints and divide by 2.",
      "Hint 3 (worked direction): find each midpoint separately, one class at a time."
    ];
  }

  if (/estimate the mean/i.test(question)) {
    return [
      "Hint 1: Use midpoint x frequency for each class.",
      "Hint 2: Add the midpoint products, then divide by the total frequency.",
      "Hint 3 (worked direction): build a small working table of midpoint, frequency, and midpoint x frequency."
    ];
  }

  if (/cumulative frequencies|cumulative frequency/i.test(question) && /find the class frequencies/i.test(question)) {
    return [
      "Hint 1: Consecutive class frequencies come from differences between cumulative totals.",
      "Hint 2: The first class frequency is just the first cumulative value.",
      "Hint 3 (worked direction): subtract each cumulative total from the next one."
    ];
  }

  if (/find the cumulative frequencies/i.test(question)) {
    return [
      "Hint 1: Keep a running total as you move through the classes.",
      "Hint 2: Add each new class frequency to the total so far.",
      "Hint 3 (worked direction): build the list one total at a time from left to right."
    ];
  }

  if (/horizontal axis of a cumulative frequency graph/i.test(question)) {
    return [
      "Hint 1: The x-axis uses the end of each class interval, not the frequencies.",
      "Hint 2: Think about where each cumulative total is plotted.",
      "Hint 3 (worked direction): cumulative frequency graphs use upper class boundaries on the horizontal axis."
    ];
  }

  if (/vertical axis of a cumulative frequency graph/i.test(question)) {
    return [
      "Hint 1: The y-axis shows the running total of the data.",
      "Hint 2: It increases as more classes are included.",
      "Hint 3 (worked direction): the vertical axis is cumulative frequency."
    ];
  }

  if (/final point on a cumulative frequency graph/i.test(question)) {
    return [
      "Hint 1: The final point includes every data value in the set.",
      "Hint 2: So it represents the total frequency collected.",
      "Hint 3 (worked direction): read the last cumulative value as the full sample size."
    ];
  }

  if (/which cumulative frequency gives the median|which cumulative frequency gives q1|which cumulative frequency gives q3/i.test(question)) {
    return [
      "Hint 1: Convert the position into a fraction of the total number of data values.",
      "Hint 2: Median is halfway, Q1 is a quarter, and Q3 is three quarters of the total.",
      "Hint 3 (worked direction): multiply the total size by 1/2, 1/4, or 3/4 as needed."
    ];
  }

  if (/census|sample|bias|primary|secondary|continuous|representative/i.test(question)) {
    return [
      "Hint 1: Focus on the data vocabulary being tested, not a calculation.",
      "Hint 2: Ask what kind of data source, sample, or bias issue the question is naming.",
      "Hint 3 (worked direction): choose the term that matches the definition in the question."
    ];
  }

  return null;
}

function hintsForInequalities(question) {
  const linearMatch = question.match(/^solve:\s*([+-]?\d*)x\s*([+-]\s*\d+)?\s*(<=|>=|<|>)\s*([+-]?\d+(?:\.\d+)?)\s*$/i);
  if (linearMatch) {
    const coefficient = linearMatch[1] === "" || linearMatch[1] === "+" ? 1 : (linearMatch[1] === "-" ? -1 : Number(linearMatch[1]));
    const constantTerm = linearMatch[2] ? Number(linearMatch[2].replace(/\s+/g, "")) : 0;
    const comparator = linearMatch[3];
    const rhs = Number(linearMatch[4]);
    const moved = rhs - constantTerm;
    return [
      "Hint 1: Solve it like an equation first, then keep the inequality sign in view.",
      `Hint 2 (your problem): ${coefficient}x ${constantTerm >= 0 ? "+" : ""}${constantTerm} ${comparator} ${rhs}, so first move the constant.`,
      "Hint 3 (worked direction): isolate x carefully, and only reverse the inequality if you divide by a negative."
    ];
  }

  if (/x\^2/.test(question) && /<=|>=|<|>/.test(question)) {
    return [
      "Hint 1: Factorise the quadratic first and find the roots.",
      "Hint 2: Mark the roots on a number line, then test which intervals satisfy the inequality.",
      "Hint 3 (worked direction): use the factorised form to decide whether the solution lies between the roots or outside them."
    ];
  }

  if (/boundary line|solid or dashed|above or below|satisfy/i.test(question)) {
    return [
      "Hint 1: Use a dashed line for strict inequalities and a solid line when equality is included.",
      "Hint 2: Test an easy point such as (0,0) if it is not on the boundary.",
      "Hint 3 (worked direction): decide the boundary type first, then choose the correct side of the line."
    ];
  }

  return null;
}

function hintsForAnglesPolygonsAndCircleTheorems(question) {
  if (/corresponding|co-interior|alternate|straight-line|vertically opposite/i.test(question)) {
    return [
      "Hint 1: Identify which angle fact is being used before doing any arithmetic.",
      "Hint 2: Corresponding and alternate angles are equal; co-interior angles sum to 180°.",
      "Hint 3 (worked direction): write the angle fact first, then solve the simple equation."
    ];
  }

  if (/sum of the interior angles|regular polygon|exterior angle|interior angle/i.test(question)) {
    return [
      "Hint 1: For an n-sided polygon, interior angle sum = (n - 2) x 180.",
      "Hint 2: In a regular polygon, exterior angle = 360 / number of sides.",
      "Hint 3 (worked direction): decide whether you need an angle sum, one interior angle, or one exterior angle."
    ];
  }

  if (/semicircle|centre|cyclic quadrilateral|same segment|alternate segment|tangent|chord/i.test(question)) {
    return [
      "Hint 1: Name the exact circle theorem first rather than trying to guess from the diagram.",
      "Hint 2: Most of these questions use either equality of angles, sum to 180°, or a fixed right angle.",
      "Hint 3 (worked direction): write the theorem statement in words, then substitute the angle values."
    ];
  }

  if (/intersecting chords|segment product equals segment product/i.test(question)) {
    return [
      "Hint 1: Multiply the two segments on one chord.",
      "Hint 2: Set that product equal to the product of the two segments on the other chord.",
      "Hint 3 (worked direction): form one equation from the equal products, then solve for the missing length."
    ];
  }

  return null;
}

function hintsForTrigAndBearings(question) {
  if (/find sin|find cos|find tan/i.test(question)) {
    return [
      "Hint 1: Identify which two sides are being compared to the named angle.",
      "Hint 2: Use SOH, CAH, or TOA to match the ratio.",
      "Hint 3 (worked direction): write the trig ratio in fraction form before simplifying."
    ];
  }

  if (/use sine|use cosine|use tangent|find the angle|angle of elevation|angle of depression/i.test(question)) {
    return [
      "Hint 1: Label the opposite, adjacent, and hypotenuse relative to the marked angle.",
      "Hint 2: Choose the trig ratio that uses the sides you know and the one you need.",
      "Hint 3 (worked direction): set up the trig equation first, then solve for the side or angle."
    ];
  }

  if (/bearing|direction is this|due south|due north|north-west|north-east/i.test(question)) {
    return [
      "Hint 1: Bearings are measured clockwise from north and written as three digits.",
      "Hint 2: Match the compass direction to the correct clockwise turn from north.",
      "Hint 3 (worked direction): picture the compass first, then write the bearing or direction."
    ];
  }

  if (/3D|body diagonal|base and the diagonal/i.test(question)) {
    return [
      "Hint 1: Use Pythagoras on the base first if needed, then again in 3D.",
      "Hint 2: Treat the cuboid diagonal question as two linked right triangles.",
      "Hint 3 (worked direction): find the 2D diagonal first, then combine it with the height."
    ];
  }

  return null;
}

function hintsForRatioAndProportion(question) {
  if (/simplify the ratio|equivalent/i.test(question)) {
    return [
      "Hint 1: Divide both parts of the ratio by the same common factor.",
      "Hint 2: For equivalent ratios, simplify both and compare the simplest forms.",
      "Hint 3 (worked direction): reduce the ratio fully before deciding or answering."
    ];
  }

  if (/which is greater/i.test(question)) {
    return [
      "Hint 1: Turn the ratios into fractions or decimals so they are comparable.",
      "Hint 2: Compare the value of the first part divided by the second part.",
      "Hint 3 (worked direction): rewrite both ratios in a common form, then decide which is larger."
    ];
  }

  if (/directly proportional|inversely proportional/i.test(question)) {
    return [
      "Hint 1: Write the proportionality statement as an equation with a constant k.",
      "Hint 2: Use the given pair of values to find k before substituting the new values.",
      "Hint 3 (worked direction): build the k-equation first, then solve the second part of the problem."
    ];
  }

  if (/twice as many workers|taps fill a tank|inverse proportion/i.test(question)) {
    return [
      "Hint 1: In inverse proportion, multiplying one quantity by a number divides the other by the same number.",
      "Hint 2: Keep the product of the two quantities constant.",
      "Hint 3 (worked direction): compare how many times larger or smaller the first quantity becomes, then reverse that effect on the second."
    ];
  }

  return null;
}

function hintsForBounds(question) {
  if (/lower and upper bounds|lower bound|upper bound|error interval/i.test(question)) {
    return [
      "Hint 1: Halve the rounding unit, then subtract and add that amount to the stated value.",
      "Hint 2: The lower bound is inclusive and the upper bound is exclusive in an error interval.",
      "Hint 3 (worked direction): identify the rounding step first, then use half of it on either side."
    ];
  }

  if (/upper bound for the area|lower bound for the area|upper bound for the speed|lower bound for km\/l|upper bound for its perimeter/i.test(question)) {
    return [
      "Hint 1: For an upper bound, use values that make the result as large as possible. For a lower bound, use values that make it as small as possible.",
      "Hint 2: Apply the bounds before doing the calculation, not after.",
      "Hint 3 (worked direction): choose the correct upper or lower values for each measurement, then calculate."
    ];
  }

  if (/appropriate degree of accuracy/i.test(question)) {
    return [
      "Hint 1: Think about the context: money, people, time, and measurement often suggest different sensible rounding.",
      "Hint 2: Keep enough accuracy to be useful, but do not pretend the value is more precise than it really is.",
      "Hint 3 (worked direction): round to a sensible unit for the quantity named in the question."
    ];
  }

  return null;
}

function hintsForArcSectorAndMensuration(question) {
  if (/arc length/i.test(question)) {
    return [
      "Hint 1: Arc length is the same fraction of the full circumference as the angle is of 360°.",
      "Hint 2: Start from 2pi r, then multiply by angle/360.",
      "Hint 3 (worked direction): write the fraction of the circle first, then apply it to the circumference."
    ];
  }

  if (/area of a sector/i.test(question) || /semicircle/i.test(question) && /area/i.test(question)) {
    return [
      "Hint 1: Sector area is the same fraction of the full circle area as the angle is of 360°.",
      "Hint 2: Start from pi r^2, then multiply by angle/360.",
      "Hint 3 (worked direction): calculate the full circle area first or write it symbolically, then take the fraction you need."
    ];
  }

  if (/area of a segment/i.test(question)) {
    return [
      "Hint 1: Segment area = sector area - triangle area.",
      "Hint 2: Work out the sector first, then subtract the triangle inside it.",
      "Hint 3 (worked direction): keep the sector and triangle parts separate until the final subtraction."
    ];
  }

  if (/volume of a cylinder|surface area of a cylinder|volume of a sphere|surface area of a sphere|curved surface area|volume of a prism/i.test(question)) {
    return [
      "Hint 1: Choose the correct formula before substituting any numbers.",
      "Hint 2: Keep volume and surface area formulas separate so you do not mix them up.",
      "Hint 3 (worked direction): write the formula first, then substitute values and simplify."
    ];
  }

  if (/compound/i.test(question) && /volume|remaining volume|total volume/i.test(question)) {
    return [
      "Hint 1: Break the solid into simpler volumes or subtract the missing piece.",
      "Hint 2: Calculate each component separately before combining them.",
      "Hint 3 (worked direction): add or subtract the simpler volumes in the final step only."
    ];
  }

  return null;
}

function hintsForAdvancedQuadraticsAndSequences(question) {
  if (/quadratic formula/i.test(question) || /^solve using the quadratic formula/i.test(question)) {
    return [
      "Hint 1: Identify a, b, and c from ax^2 + bx + c = 0 first.",
      "Hint 2: Substitute into the formula carefully, especially the negative b and the square root part.",
      "Hint 3 (worked direction): simplify the discriminant first, then finish the two solutions."
    ];
  }

  if (/form \(x \+ a\)\^2 \+ b|completing the square|write .* in the form/i.test(question)) {
    return [
      "Hint 1: Take half of the x-coefficient, put it in the bracket, then adjust the constant term.",
      "Hint 2: Expanding your bracket is a good way to check the correction outside it.",
      "Hint 3 (worked direction): build the square first, then balance the constant."
    ];
  }

  if (/1 linear, 1 quadratic|solve simultaneously/i.test(question)) {
    return [
      "Hint 1: Substitute the linear expression for y into the quadratic one.",
      "Hint 2: That should give you one quadratic in x to solve first.",
      "Hint 3 (worked direction): solve the quadratic for x, then substitute each x back to get the matching y-values."
    ];
  }

  if (/sequence|nth term|common difference|common ratio|first term|recurrence|series/i.test(question)) {
    return [
      "Hint 1: Decide whether the sequence is arithmetic, geometric, quadratic, or recurrence-based before calculating.",
      "Hint 2: Look for a common difference, a common ratio, or a recursive rule in the terms given.",
      "Hint 3 (worked direction): choose the matching sequence method first, then find the required term or sum."
    ];
  }

  if (/sum of the first|series/i.test(question)) {
    return [
      "Hint 1: A series means you are adding terms, not just finding the next one.",
      "Hint 2: List the required number of terms first if that is quicker than using a formula.",
      "Hint 3 (worked direction): find the relevant terms, then add them carefully."
    ];
  }

  return null;
}

function hintsForProbabilityAndFurtherGraphs(question) {
  if (/probability|sample space|mutually exclusive|independent|tree diagram|binomial/i.test(question)) {
    if (/not A|not a/i.test(question)) {
      return [
        "Hint 1: Use the complement rule.",
        "Hint 2: P(not A) = 1 - P(A).",
        "Hint 3 (worked direction): subtract the given probability from 1."
      ];
    }

    if (/two heads|both times|both occur|with replacement|then/i.test(question)) {
      return [
        "Hint 1: For successive independent events, multiply the probabilities along the branches.",
        "Hint 2: If the question says 'with replacement', the probabilities stay the same on the second step.",
        "Hint 3 (worked direction): write the two event probabilities first, then multiply."
      ];
    }

    if (/sample space|how many outcomes/i.test(question)) {
      return [
        "Hint 1: Multiply the number of outcomes for each stage of the experiment.",
        "Hint 2: For coins, dice, and spinners, list the options in each step before multiplying.",
        "Hint 3 (worked direction): count the possibilities in each stage, then find the total."
      ];
    }

    if (/mutually exclusive|independent/i.test(question)) {
      return [
        "Hint 1: Ask whether the events can happen together, and whether one changes the other.",
        "Hint 2: Mutually exclusive means 'cannot happen together'; independent means 'one does not affect the other'.",
        "Hint 3 (worked direction): match the question wording to the correct definition."
      ];
    }

    if (/binomial|\(.*\)\^2/i.test(question)) {
      return [
        "Hint 1: Expand the square as first term squared, double the product, then last term squared.",
        "Hint 2: Keep the middle term structure clear before simplifying.",
        "Hint 3 (worked direction): use (a + b)^2 = a^2 + 2ab + b^2 or the minus version."
      ];
    }

    return [
      "Hint 1: Identify whether this is a single-event probability, a combined event, or a definition question.",
      "Hint 2: Use a sample space or tree diagram if the outcomes are happening in stages.",
      "Hint 3 (worked direction): write the relevant probability rule first, then apply it."
    ];
  }

  if (/sine rule|cosine rule|area of a triangle|ambiguous case|trig graph/i.test(question)) {
    if (/sine rule/i.test(question) || /a = .* A = .* B =/i.test(question)) {
      return [
        "Hint 1: Match each side with its opposite angle before substituting.",
        "Hint 2: Use a/sin A = b/sin B or an equivalent rearrangement.",
        "Hint 3 (worked direction): substitute the known side-angle pair first, then solve for the missing side."
      ];
    }

    if (/cosine rule|included angle/i.test(question)) {
      return [
        "Hint 1: Use the two sides and the included angle in a^2 = b^2 + c^2 - 2bc cos A.",
        "Hint 2: Square the two known sides first before subtracting the cosine term.",
        "Hint 3 (worked direction): substitute carefully, then square-root at the end."
      ];
    }

    if (/area of a triangle|including angle/i.test(question)) {
      return [
        "Hint 1: Use area = 1/2 ab sin C.",
        "Hint 2: The two side lengths must be the ones around the included angle.",
        "Hint 3 (worked direction): substitute the two sides and the angle, then simplify."
      ];
    }

    if (/ambiguous case|how many possible triangles/i.test(question)) {
      return [
        "Hint 1: Compare the known side opposite the known angle with the possible height.",
        "Hint 2: This tells you whether there are 0, 1, or 2 triangles.",
        "Hint 3 (worked direction): use the sine rule or height idea first, then decide how many triangles are possible."
      ];
    }

    if (/sin x|cos x/i.test(question)) {
      return [
        "Hint 1: Recall the key values from the trig graph at 0°, 90°, 180°, 270°, and 360°.",
        "Hint 2: Check whether the question is asking for sine or cosine before reading the graph value.",
        "Hint 3 (worked direction): identify the angle first, then read the corresponding trig value."
      ];
    }
  }

  if (/plotting graphs|reading solutions off a graph|rearrange .* graphical solution|tangent to estimate gradient|distance-time graph|travel graph|compound measures|speed-distance-time/i.test(question)) {
    if (/speed|distance|time/i.test(question) && !/travel graph|distance-time graph/i.test(question)) {
      return [
        "Hint 1: Use the triangle relationship speed = distance / time.",
        "Hint 2: Rearrange the formula if the question asks for distance or time instead.",
        "Hint 3 (worked direction): pick the correct formula form, then substitute the two known values."
      ];
    }

    if (/pressure|density|force|mass|volume/i.test(question)) {
      return [
        "Hint 1: Choose the correct compound-measure formula first.",
        "Hint 2: Keep the units attached so you do not mix up which quantity is missing.",
        "Hint 3 (worked direction): rearrange only if needed, then substitute the known values."
      ];
    }

    if (/travel graph|distance-time graph|flat section|steeper line|average speed|horizontal/i.test(question)) {
      return [
        "Hint 1: On a travel graph, gradient represents speed.",
        "Hint 2: Flat means stationary, steeper means faster, and a downward slope means returning.",
        "Hint 3 (worked direction): read the graph feature first, then convert it into the travel meaning or speed calculation."
      ];
    }

    if (/rearrange .* form y =|graphical solution/i.test(question)) {
      return [
        "Hint 1: Move every term except y to the other side first.",
        "Hint 2: If the equation is not already in y = ..., isolate y completely before plotting.",
        "Hint 3 (worked direction): rewrite the equation in plotting form, then find the graphical solution."
      ];
    }

    if (/tangent/i.test(question) && /gradient/i.test(question)) {
      return [
        "Hint 1: Estimate the rise and run from two clear points on the tangent, not the curve.",
        "Hint 2: Gradient = rise / run, and a downward tangent gives a negative value.",
        "Hint 3 (worked direction): choose two easy points on the tangent line and calculate the ratio."
      ];
    }

    if (/x-intercepts|y-axis|vertex|minimum point/i.test(question)) {
      return [
        "Hint 1: Read the feature directly from the graph definition being asked about.",
        "Hint 2: x-intercepts happen where y = 0, and the y-intercept happens where x = 0.",
        "Hint 3 (worked direction): substitute or identify the correct graph feature only, rather than over-solving."
      ];
    }

    return [
      "Hint 1: Decide whether the question is about plotting, interpreting, or estimating from the graph.",
      "Hint 2: Use the relevant graph feature directly instead of treating every question like algebra.",
      "Hint 3 (worked direction): identify the graph skill first, then read or calculate the required value."
    ];
  }

  return null;
}

function hintsForFifthFormTopics(question) {
  if (/differentiate|gradient when|stationary point|rate of change|velocity/i.test(question)) {
    if (/stationary point/i.test(question)) {
      return [
        "Hint 1: Differentiate first, then set the derivative equal to 0.",
        "Hint 2: Solve for x before substituting back into the original function if you need the full coordinate.",
        "Hint 3 (worked direction): find dy/dx, solve dy/dx = 0, then use that x-value in the original expression."
      ];
    }

    if (/gradient when|rate of change|velocity/i.test(question)) {
      return [
        "Hint 1: Differentiate the expression first to get the gradient or rate function.",
        "Hint 2: Only substitute the given x or t value after you have found the derivative.",
        "Hint 3 (worked direction): find dy/dx or ds/dt first, then evaluate it at the required value."
      ];
    }

    return [
      "Hint 1: Use the power rule: bring the power down, then reduce it by 1.",
      "Hint 2: Rewrite roots or fractions as powers first if that makes the differentiation easier.",
      "Hint 3 (worked direction): rewrite into index form if needed, then differentiate term by term."
    ];
  }

  if (/set|complement|intersection|union|venn/i.test(question)) {
    return [
      "Hint 1: Decide whether the question is asking about membership, complement, overlap, or everything combined.",
      "Hint 2: Intersection means common elements, union means all elements, and complement means everything outside the set inside U.",
      "Hint 3 (worked direction): write the set operation in symbols first, then list or count the elements."
    ];
  }

  if (/\/\(x|\b[a-z]\/[a-z]|\balgebraic fractions?\b|simplify: .*\/.*\+|simplify: .*\/.*-/i.test(question)) {
    return [
      "Hint 1: If the denominators match, combine the numerators only.",
      "Hint 2: If the denominators differ, find a common denominator before adding or subtracting.",
      "Hint 3 (worked direction): write one combined fraction line first, then simplify."
    ];
  }

  if (/rationalise the denominator/i.test(question)) {
    return [
      "Hint 1: Multiply top and bottom by the surd in the denominator.",
      "Hint 2: This removes the surd from the denominator because sqrt(a) x sqrt(a) = a.",
      "Hint 3 (worked direction): multiply numerator and denominator by the required surd, then simplify."
    ];
  }

  if (/translate|reflect|rotate|transformation/i.test(question)) {
    return [
      "Hint 1: Identify the type of transformation before changing the coordinates.",
      "Hint 2: A translation adds a vector, a reflection changes sign relative to an axis, and a rotation follows the centre and angle.",
      "Hint 3 (worked direction): apply the coordinate rule for the named transformation only."
    ];
  }

  if (/compass|construction arcs|geometric constructions/i.test(question)) {
    return [
      "Hint 1: Think about the purpose of each construction tool rather than calculating anything.",
      "Hint 2: A compass is for equal distances and arcs, and a ruler is for straight lines.",
      "Hint 3 (worked direction): answer using the key construction idea the question is checking."
    ];
  }

  return null;
}

function hintsForFinalFifthFormTopics(question) {
  if (/construct|bisecting an angle|perpendicular bisector|equilateral triangle|compass/i.test(question)) {
    return [
      "Hint 1: Decide which construction fact is being tested before thinking about the tools.",
      "Hint 2: Most of these rely on equal radii, right angles, or equal side lengths.",
      "Hint 3 (worked direction): name the geometric property first, then apply it to the question."
    ];
  }

  if (/domain|range|composite functions?|inverses?|inverse of a quadratic|transformation of graphs/i.test(question)) {
    if (/composite/i.test(question)) {
      return [
        "Hint 1: Work inside-out for a composite function.",
        "Hint 2: Apply the inner function first, then feed that result into the outer function.",
        "Hint 3 (worked direction): identify f and g clearly, then evaluate the inner step before the outer one."
      ];
    }

    if (/inverse/i.test(question)) {
      return [
        "Hint 1: Swap x and y, then rearrange to make y the subject.",
        "Hint 2: Check whether the original function is one-to-one on the domain being used.",
        "Hint 3 (worked direction): reverse the function step by step, then write the inverse neatly."
      ];
    }

    if (/domain|range/i.test(question)) {
      return [
        "Hint 1: Domain is about allowed x-values; range is about resulting y-values.",
        "Hint 2: Look for square roots, denominators, or graph shape restrictions.",
        "Hint 3 (worked direction): decide what x can be first, then work out the matching y-values."
      ];
    }

    if (/transformation of graphs|shifted|reflected/i.test(question)) {
      return [
        "Hint 1: Horizontal changes happen inside the bracket; vertical changes happen outside.",
        "Hint 2: Reflections change signs in different places depending on the axis.",
        "Hint 3 (worked direction): compare the transformed graph directly with the original base graph."
      ];
    }

    return [
      "Hint 1: Identify whether the question is about input values, output values, reversing a function, or combining two functions.",
      "Hint 2: Keep the function notation clear so you do not mix the operations up.",
      "Hint 3 (worked direction): write one function step at a time, then simplify."
    ];
  }

  if (/proof|even|odd|non-negative|always true|circular|definitions/i.test(question)) {
    return [
      "Hint 1: Decide whether the question wants a definition, a general algebraic form, or the structure of a proof.",
      "Hint 2: For even and odd numbers, use 2k and 2k + 1 rather than numerical examples.",
      "Hint 3 (worked direction): start from a general representation or known fact, then show the required conclusion."
    ];
  }

  if (/vector|parallelogram|triangle law|divides AB in the ratio/i.test(question)) {
    return [
      "Hint 1: Keep direction in mind as well as size.",
      "Hint 2: Add and subtract vectors component-wise, and use the triangle law for linked sides.",
      "Hint 3 (worked direction): write the vector relationship first, then simplify the vector components or statement."
    ];
  }

  return null;
}

function genericSkillHints(skill, answer) {
  const normalizedSkill = String(skill || "").toLowerCase();

  if (normalizedSkill.includes("collecting like terms")) {
    return [
      "Hint 1: Group the like terms first, then combine only terms with the same letters.",
      "Hint 2: Keep variable terms and constant terms separate while you tidy the expression.",
      `Hint 3 (worked direction): collect each matching term carefully to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("common factor")) {
    return [
      "Hint 1: Look for the biggest number and letter factor that every term shares.",
      "Hint 2: Divide each term by that common factor to build the bracket.",
      `Hint 3 (worked direction): take out the highest common factor and simplify to ${answer}.`
    ];
  }

  if (normalizedSkill.includes("equivalent fractions")) {
    return [
      "Hint 1: Multiply the numerator and denominator by the same number.",
      "Hint 2: Work out what the denominator has been scaled by first, then use the same scale factor on the numerator.",
      `Hint 3 (worked direction): apply the same multiplier top and bottom to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("mixed numbers") || normalizedSkill.includes("top-heavy")) {
    return [
      "Hint 1: For mixed to improper, do whole x denominator + numerator. For improper to mixed, divide the numerator by the denominator.",
      "Hint 2: Keep the denominator the same when you convert between the two forms.",
      `Hint 3 (worked direction): use the conversion rule carefully to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("calculator")) {
    return [
      "Hint 1: Type the whole expression with brackets where needed, rather than trying to do it in your head halfway through.",
      "Hint 2: Check whether the display should stay exact or be given as a decimal before you press enter.",
      `Hint 3 (worked direction): enter the full calculation cleanly and compare the display to ${answer}.`
    ];
  }

  if (normalizedSkill.includes("rounding") || normalizedSkill.includes("sig fig") || normalizedSkill.includes("d.p.")) {
    return [
      "Hint 1: Find the place value you are rounding to, then look one digit to the right.",
      "Hint 2: If that next digit is 5 or more, round up. If it is 4 or less, keep the target digit the same.",
      `Hint 3 (worked direction): round only once, at the final target place, to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("estimate") || normalizedSkill.includes("approximate")) {
    return [
      "Hint 1: Round each number to 1 significant figure or another sensible easy value before calculating.",
      "Hint 2: Keep the estimate simple and mental; do not switch back to the exact numbers halfway through.",
      `Hint 3 (worked direction): use the rounded values only, then simplify to about ${answer}.`
    ];
  }

  if (normalizedSkill.includes("fraction")) {
    return [
      "Hint 1: Decide whether this is convert, add, subtract, multiply, or divide before doing any arithmetic.",
      "Hint 2: Write one clean intermediate fraction line so you can see the structure.",
      `Hint 3 (worked direction): finish the fraction method carefully to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("recurring")) {
    return [
      "Hint 1: Let the recurring decimal equal x, shift the decimal point, then subtract.",
      "Hint 2: Choose the shift so the repeating part lines up underneath itself.",
      `Hint 3 (worked direction): use the subtraction method cleanly until you reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("reverse percentage")) {
    return [
      "Hint 1: The given value is the final amount, not 100%, so identify the remaining or increased percentage first.",
      "Hint 2: Write the final amount as a multiplier of the original, then divide back.",
      `Hint 3 (worked direction): reverse the percentage step carefully to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("percent")) {
    return [
      "Hint 1: Decide whether this is a direct percentage, change, reverse percentage, or compound multiplier question.",
      "Hint 2: Write the multiplier or percentage fraction explicitly before calculating.",
      `Hint 3 (worked direction): carry the percentage method through to ${answer}.`
    ];
  }

  if (normalizedSkill.includes("midpoint")) {
    return [
      "Hint 1: Average the x-values and average the y-values separately.",
      "Hint 2: Keep the coordinate brackets visible so you do not mix x and y.",
      `Hint 3 (worked direction): compute each average cleanly to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("distance")) {
    return [
      "Hint 1: Turn the coordinate question into a right triangle using dx and dy.",
      "Hint 2: Square both differences before adding them.",
      `Hint 3 (worked direction): use Pythagoras all the way through to ${answer}.`
    ];
  }

  if (normalizedSkill.includes("pythagoras")) {
    return [
      "Hint 1: Write a^2 + b^2 = c^2 before substituting any values.",
      "Hint 2: Decide first whether you are finding the hypotenuse or a shorter side.",
      `Hint 3 (worked direction): substitute carefully into Pythagoras and simplify to ${answer}.`
    ];
  }

  if (normalizedSkill.includes("surd")) {
    return [
      "Hint 1: Rewrite the surd using the largest square factor you can spot.",
      "Hint 2: Only like surds can be added or subtracted directly.",
      `Hint 3 (worked direction): simplify the surd expression step by step to ${answer}.`
    ];
  }

  if (normalizedSkill.includes("prime factor") || normalizedSkill.includes("hcf") || normalizedSkill.includes("lcm")) {
    return [
      "Hint 1: Break each number into prime factors first before looking for common or total factors.",
      "Hint 2: For HCF take shared primes with the smallest powers; for LCM take every prime with the largest powers.",
      `Hint 3 (worked direction): write the prime factors clearly and build the result to ${answer}.`
    ];
  }

  if (normalizedSkill.includes("indices") || normalizedSkill.includes("index")) {
    return [
      "Hint 1: Decide whether you are multiplying, dividing, raising a power to a power, or rewriting the form.",
      "Hint 2: Keep the base the same and apply only the index rule that matches the operation.",
      `Hint 3 (worked direction): use the index laws carefully until you reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("standard form")) {
    return [
      "Hint 1: Keep the number part between 1 and 10 when you finish.",
      "Hint 2: Moving the decimal left gives a positive power of 10; moving it right gives a negative power of 10.",
      `Hint 3 (worked direction): adjust the decimal point and power together to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("gradient") || normalizedSkill.includes("line")) {
    return [
      "Hint 1: For a gradient, use change in y over change in x.",
      "Hint 2: For an equation, keep the form y = mx + c in mind and identify m and c clearly.",
      `Hint 3 (worked direction): work through the line method carefully to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("equation")) {
    return [
      "Hint 1: Keep the variable terms together and the constants together.",
      "Hint 2: Write the next algebra line only, not the final jump.",
      `Hint 3 (worked direction): simplify step by step to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("elimination") || normalizedSkill.includes("substitution") || normalizedSkill.includes("geometrical interpretation")) {
    return [
      "Hint 1: Decide whether you are combining equations, substituting one into the other, or interpreting the meeting point of two lines.",
      "Hint 2: After finding one variable, always substitute back to get the other or the full coordinate.",
      `Hint 3 (worked direction): follow the simultaneous-equation method carefully to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("formula")) {
    return [
      "Hint 1: Treat the letters like algebra terms and isolate the target letter step by step.",
      "Hint 2: Undo addition/subtraction before multiplication/division when rearranging.",
      `Hint 3 (worked direction): rearrange one operation at a time to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("factorising") || normalizedSkill.includes("factorising") || normalizedSkill.includes("parabola") || normalizedSkill.includes("quadratic")) {
    return [
      "Hint 1: Look for the quadratic structure first: factorise, solve, or read key features from the graph.",
      "Hint 2: If factorising, think about the two bracket numbers before expanding anything.",
      `Hint 3 (worked direction): carry the quadratic method through carefully to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("perimeter") || normalizedSkill.includes("area") || normalizedSkill.includes("compound shape")) {
    return [
      "Hint 1: Write the relevant formula first and label the dimensions you actually know.",
      "Hint 2: For compound shapes, split the shape into simpler pieces before calculating.",
      `Hint 3 (worked direction): calculate each part carefully and combine them to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("similar")) {
    return [
      "Hint 1: Decide whether the question is about length, area, or volume before using the scale factor.",
      "Hint 2: Length scales linearly, area uses the square of the scale factor, and volume uses the cube.",
      `Hint 3 (worked direction): apply the correct scale-factor rule to reach ${answer}.`
    ];
  }

  if (normalizedSkill.includes("data") || normalizedSkill.includes("location") || normalizedSkill.includes("dispersion") || normalizedSkill.includes("frequency") || normalizedSkill.includes("histogram")) {
    return [
      "Hint 1: Decide whether you need a summary statistic, a cumulative total, or a frequency density.",
      "Hint 2: Keep the table organised so each step matches the graph or class interval information.",
      `Hint 3 (worked direction): follow the data-handling method carefully to reach ${answer}.`
    ];
  }

  return [
    "Hint 1: Identify the exact method from the command word.",
    "Hint 2: Write the first transformed line only, not the final answer jump.",
    `Hint 3 (worked direction): follow that method all the way to ${answer}.`
  ];
}

function problemSpecificHints(question, answer, skill) {
  const normalizedSkill = String(skill || "").toLowerCase();
  const rawQuestion = String(question || "");

  const linearMatch = rawQuestion.match(/^\s*solve:\s*([+-]?\d*)x\s*([+-]\s*\d+)?\s*=\s*([+-]?\d+(?:\.\d+)?)\s*$/i);
  if (linearMatch) {
    const coefficient = linearMatch[1] === "" || linearMatch[1] === "+" ? 1 : (linearMatch[1] === "-" ? -1 : Number(linearMatch[1]));
    const constantTerm = linearMatch[2] ? Number(linearMatch[2].replace(/\s+/g, "")) : 0;
    const rhsValue = Number(linearMatch[3]);
    const rhsAfterMove = rhsValue - constantTerm;
    const xValue = rhsAfterMove / coefficient;
    const moveText = constantTerm >= 0 ? `${rhsValue} - ${constantTerm}` : `${rhsValue} + ${Math.abs(constantTerm)}`;

    return [
      "Hint 1: Isolate the x-term first, then divide by the coefficient of x.",
      `Hint 2 (your problem): ${coefficient}x ${constantTerm >= 0 ? "+" : ""}${constantTerm} = ${rhsValue}\nSo ${coefficient}x = ${moveText}`,
      `Hint 3 (full worked):\n${coefficient}x ${constantTerm >= 0 ? "+" : ""}${constantTerm} = ${rhsValue}\n${coefficient}x = ${moveText}\n${coefficient}x = ${rhsAfterMove}\nx = ${xValue}`
    ];
  }

  const foilMatch = rawQuestion.match(/^\s*expand:\s*\(x\s*([+-])\s*(\d+)\)\(x\s*([+-])\s*(\d+)\)\s*$/i);
  if (foilMatch) {
    const first = (foilMatch[1] === "-" ? -1 : 1) * Number(foilMatch[2]);
    const second = (foilMatch[3] === "-" ? -1 : 1) * Number(foilMatch[4]);
    const middle = first + second;
    const constant = first * second;
    const firstText = first >= 0 ? `+ ${first}` : `- ${Math.abs(first)}`;
    const secondText = second >= 0 ? `+ ${second}` : `- ${Math.abs(second)}`;
    const middleText = middle >= 0 ? `+ ${middle}` : `- ${Math.abs(middle)}`;
    const constantText = constant >= 0 ? `+ ${constant}` : `- ${Math.abs(constant)}`;

    return [
      "Hint 1: Use FOIL (first, outer, inner, last), then collect like terms.",
      `Hint 2 (your problem): (x ${firstText})(x ${secondText}) = x^2 ${secondText}x ${firstText}x ${constantText}`,
      `Hint 3 (full worked):\n(x ${firstText})(x ${secondText})\n= x·x + x·${second} + ${first}·x + ${first}·${second}\n= x^2 ${second >= 0 ? "+" : ""}${second}x ${first >= 0 ? "+" : ""}${first}x ${constantText}\n= x^2 ${middleText}x ${constantText}`
    ];
  }

  if (normalizedSkill.includes("compounding percentage")) {
    return [
      "Hint 1: Use a multiplier each period, not repeated addition or subtraction.",
      "Hint 2 (worked similar): 100 grows by 10% for 2 years: 100 x 1.1^2.",
      "Hint 3 (full worked similar): 100 x 1.1^2 = 121, so +21% overall."
    ];
  }

  if (normalizedSkill.includes("completing the square")) {
    return [
      "Hint 1: Make a perfect square first, then balance the constant term.",
      "Hint 2 (worked similar): x^2 + 6x + 5 = (x + 3)^2 - 4.",
      "Hint 3 (full worked similar): x^2 + 6x + 5 = x^2 + 6x + 9 - 4 = (x + 3)^2 - 4."
    ];
  }

  return (
    hintsForPercentOfAmount(rawQuestion) ||
    hintsForPercentageOfAnother(rawQuestion) ||
    hintsForMidpoint(rawQuestion) ||
    hintsForDistance(rawQuestion) ||
    hintsForFractionArithmetic(rawQuestion) ||
    hintsForSingleBracketExpansion(rawQuestion) ||
    hintsForPrimeFactorAndMultiples(rawQuestion) ||
    hintsForIndicesAndStandardForm(rawQuestion) ||
    hintsForStraightLineWork(rawQuestion) ||
    hintsForFormulae(rawQuestion) ||
    hintsForQuadratics(rawQuestion) ||
    hintsForGeometrySimilarityAndUnits(rawQuestion) ||
    hintsForDataHandling(rawQuestion) ||
    hintsForHistogram(rawQuestion) ||
    hintsForInequalities(rawQuestion) ||
    hintsForAnglesPolygonsAndCircleTheorems(rawQuestion) ||
    hintsForTrigAndBearings(rawQuestion) ||
    hintsForRatioAndProportion(rawQuestion) ||
    hintsForBounds(rawQuestion) ||
    hintsForArcSectorAndMensuration(rawQuestion) ||
    hintsForAdvancedQuadraticsAndSequences(rawQuestion) ||
    hintsForProbabilityAndFurtherGraphs(rawQuestion) ||
    hintsForFifthFormTopics(rawQuestion) ||
    hintsForFinalFifthFormTopics(rawQuestion) ||
    genericSkillHints(skill, answer)
  );
}

function renderPractice(panel, options = {}) {
  const force = options.force === true;
  if (panel.dataset.loaded === "1" && !force) {
    return;
  }

  const skill = panel.dataset.skill || "This skill";
  const year = panel.dataset.year || "";
  const set = pickSet(skill, year);
  const diagramHtml = graphDiagram(skill);
  const misconception = igcseMisconceptionMap[skill] || "";

  const poolItems = normalizeQuestionItems(set);
  const selectedItems = selectQuestionItems(set, 3);
  const canReroll = poolItems.length > selectedItems.length;
  const qBlocks = selectedItems
    .map((item, index) => {
      const question = item.q || "";
      const answer = item.a || "";
      const hints = item.hints || problemSpecificHints(question, answer, skill);
      return `
        <li class="practice-q" data-i="${index}" data-answer="${escapeHtml(answer)}" data-h1="${escapeHtml(hints[0])}" data-h2="${escapeHtml(hints[1])}" data-h3="${escapeHtml(hints[2])}" data-hint-level="0">
          <div>${latexifyLine(question)}</div>
          ${renderQuestionMedia(item)}
          <div class="answer-row">
            <input type="text" class="student-answer" placeholder="Type your answer" aria-label="Answer for question ${index + 1}" />
            <button type="button" class="btn-check">Check</button>
            <button type="button" class="btn-hint">Hint 1</button>
          </div>
          <div class="feedback" aria-live="polite"></div>
          <div class="hints" hidden></div>
        </li>`;
    })
    .join("");

  const answerItems = selectedItems.map((item) => `<li>${latexifyLine(item.a || "")}</li>`).join("");
  const metaNote = canReroll
    ? `<p class="note-lite">Showing ${selectedItems.length} questions from a ${poolItems.length}-question pool. Use "New set" to reshuffle.</p>`
    : `<p class="note-lite">Showing ${selectedItems.length} authored questions for this skill.</p>`;

  panel.innerHTML = `
    <div class="practice-actions">
      <h4>Quick Practice - ${escapeHtml(skill)} ${set.bespoke ? '<span class="badge-bespoke">bespoke</span>' : ""}</h4>
      ${canReroll ? '<button type="button" class="btn-hint btn-reroll">New set</button>' : ""}
    </div>
    ${misconception ? `<div class="misconception-note">${escapeHtml(misconception)}</div>` : ""}
    ${metaNote}
    <ol>${qBlocks}</ol>
    ${diagramHtml}
    <details class="solution-box">
      <summary>Show full solutions</summary>
      <ol>${answerItems}</ol>
    </details>
  `;
  panel.dataset.loaded = "1";

  panel.querySelectorAll(".practice-q").forEach((questionEl) => {
    const expected = questionEl.dataset.answer || "";
    const input = questionEl.querySelector(".student-answer");
    const feedback = questionEl.querySelector(".feedback");
    const hintButton = questionEl.querySelector(".btn-hint");
    const checkButton = questionEl.querySelector(".btn-check");
    const hints = questionEl.querySelector(".hints");
    const runCheck = () => {
      const userAnswer = input?.value || "";
      const accepted = isAnswerClose(userAnswer, expected);
      feedback.className = `feedback ${accepted ? "ok" : "no"}`;
      feedback.textContent = accepted
        ? "Good - your answer is accepted."
        : "Not quite yet. Try a hint, then check notation or rounding.";
    };

    checkButton?.addEventListener("click", runCheck);
    input?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") {
        return;
      }
      event.preventDefault();
      runCheck();
    });

    hintButton?.addEventListener("click", () => {
      if (!hints) {
        return;
      }
      let level = Number(questionEl.dataset.hintLevel || "0");
      level = Math.min(3, level + 1);
      questionEl.dataset.hintLevel = String(level);
      const text = questionEl.dataset[`h${level}`] || "";
      hints.hidden = false;
      hints.textContent = `- ${text}`;
      hintButton.textContent = level >= 3 ? "Hint 3 (max)" : `Hint ${level + 1}`;
    });
  });

  panel.querySelector(".btn-reroll")?.addEventListener("click", () => {
    renderPractice(panel, { force: true });
  });

  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise([panel]).catch(() => {});
  }
}

function updateYearNavState() {
  const hash = window.location.hash.replace(/^#/, "").toLowerCase();
  document.querySelectorAll("[data-year-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.yearNav === hash);
  });
}

function filterYearSections(activeHash) {
  const sections = document.querySelectorAll(".planner-section");
  const validHashes = new Set(["shell", "remove", "fifth-form"]);
  const shouldFilter = validHashes.has(activeHash);

  sections.forEach((section) => {
    section.hidden = shouldFilter ? section.id !== activeHash : false;
  });
}

function bindSkillPanels() {
  document.querySelectorAll("details.skill-item").forEach((skillEl) => {
    skillEl.addEventListener("toggle", () => {
      if (!skillEl.open) {
        return;
      }
      const panel = skillEl.querySelector(".practice-panel");
      if (panel) {
        renderPractice(panel);
      }
    });
  });
}

function openYearFromHash() {
  const hash = window.location.hash.replace(/^#/, "").toLowerCase();
  updateYearNavState();
  filterYearSections(hash);
  if (!hash) {
    return;
  }

  const activeSummary = document.getElementById(hash);
  activeSummary?.scrollIntoView?.({ block: "start" });
}

function bootPlanner() {
  if (!plannerRoot) {
    return;
  }

  if (!curriculum.length) {
    plannerRoot.innerHTML = '<p class="note-lite">Curriculum data could not be loaded.</p>';
    return;
  }

  renderCurriculum(curriculum);
  renderPlannerStats();
  bindSkillPanels();
  openYearFromHash();
  window.addEventListener("hashchange", openYearFromHash);
}

(window.igcseQuestionBankReady || Promise.resolve())
  .then(() => {
    bootPlanner();
  })
  .catch(() => {
    if (plannerRoot) {
      plannerRoot.innerHTML = '<p class="note-lite">Question bank files could not be loaded.</p>';
    }
  });
