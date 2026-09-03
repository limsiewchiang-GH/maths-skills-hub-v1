// Shared helpers used by both the year-group pages (igcse-page.js)
// and the Practice Zone (practice-page.js): HTML escaping, math-text
// normalization for MathJax, and small render/shuffle utilities.

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderQuestionMedia(item) {
  if (!item?.image) {
    return "";
  }

  const alt = item.imageAlt || "Question diagram";
  const caption = item.imageCaption ? `<div class="question-image-caption">${escapeHtml(item.imageCaption)}</div>` : "";
  return `
    <figure class="question-media">
      <img class="question-image" src="${escapeHtml(item.image)}" alt="${escapeHtml(alt)}" loading="lazy" />
      ${caption}
    </figure>
  `;
}

function shuffleItems(items) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

function wrapMath(expr) {
  const normalized = normalizeMath(expr)
    .replace(/\s+or\s+/g, " \\text{ or } ");
  return `\\(${normalized}\\)`;
}

function isLikelyMathSnippet(text) {
  const allowedWords = new Set(["sqrt", "cbrt", "pi", "sin", "cos", "tan", "log", "ln", "exp"]);
  const words = String(text || "").match(/[A-Za-z]+/g) || [];
  return words.every((word) => allowedWords.has(word.toLowerCase()) || word.length <= 2);
}

function formatInlineMathText(raw) {
  let marked = raw;
  const tokens = [];
  const pushMath = (expr) => {
    const key = `@@M${tokens.length}@@`;
    tokens.push(expr);
    return key;
  };

  marked = marked.replace(/(\d+(?:\.\d+)?)pi\s*(cm|mm|m)\^([23])/gi, (_, value, unit, power) =>
    pushMath(`${value}\\pi \\text{ ${unit} }^${power}`)
  );
  marked = marked.replace(/(\d+(?:\.\d+)?)\s*(cm|mm|m)\^([23])/gi, (_, value, unit, power) =>
    pushMath(`${value}\\text{ ${unit} }^${power}`)
  );
  marked = marked.replace(/(\d+(?:\.\d+)?)pi\b/gi, (_, value) => pushMath(`${value}\\pi`));
  marked = marked.replace(/\((-?\d+(?:\.\d+)?(?:\s*,\s*-?\d+(?:\.\d+)?){1,2})\)/g, (_, coords) => pushMath(`(${coords})`));
  marked = marked.replace(/\b([A-Za-z])\s+in\s+(R|\[[^\]]+\])/g, (_, variable, setExpr) => pushMath(`${variable} \\in ${setExpr}`));
  marked = marked.replace(/\[[^\[\]]+\]/g, (value) => (/[\d,]/.test(value) ? pushMath(value) : value));

  // Curly-brace set literals, e.g. "{1,2,3}" or "{a,b,c,d}". Braces are TeX GROUPING
  // characters, not literal glyphs, so a bare "{...}" passed into \(...\) unescaped would
  // render invisibly (MathJax treats it as an empty group around its content) rather than
  // showing the braces — escape them to "\{...\}" before tokenising. Restricted to content
  // with a digit or comma (mirrors the "[...]" bracket rule above) plus the empty/whitespace
  // set "{}"/"{ }" case, so incidental prose isn't needlessly math-wrapped.
  marked = marked.replace(/\{[^{}]*\}/g, (value) =>
    /[\d,]/.test(value) || /^\{\s*\}$/.test(value)
      ? pushMath(value.replace(/\{/g, "\\{").replace(/\}/g, "\\}"))
      : value
  );

  // Completed-square template patterns like "(x + a)^2 + b" or "a(x + b)^2 + c", where a lone
  // letter stands in for a generic coefficient rather than a specific number.
  marked = marked.replace(
    /(?:\b[a-z]\(|\()x\s*[+\-]\s*[a-z]\)\^-?\d+(?:\s*[+\-]\s*[a-z]\b)?/gi,
    (candidate) => pushMath(candidate)
  );

  // General fallback: any digit/operator/paren-heavy run not already caught above (e.g.
  // "4x^2 + 6x - 2x - 3", "3x^(-1/2)"). Runs BEFORE the narrower fraction/single-letter-equation
  // regexes below so it can claim a whole contiguous expression as one unit; wrapMath/
  // normalizeMath then handles fractions, exponent-bracing and x-as-multiplication *inside* it.
  // Also recognises the bare keywords "pi"/"sin"/"cos"/"tan"/"sqrt"/"cbrt" and the degree
  // symbol as valid content mid-run, so formula-template hints like "(90/360) x pi x 4^2"
  // or "30 x tan(45°)" get captured as one contiguous math region instead of fragmenting
  // around the keyword (word-bounded so it can't match inside prose like "using"/"spin").
  // sin/cos/tan/pi require a full word boundary on both sides (so they can't match inside
  // "using"/"spin"/"opinion"). sqrt/cbrt use a looser rule instead — not preceded by a letter,
  // followed by "(" — since digits count as word characters, a strict \b would fail on the
  // common compact coefficient form "2sqrt(3)" (no space), leaving it unconverted.
  const mathKeyword = "(?:\\b(?:sin|cos|tan|pi)\\b|(?<![A-Za-z])(?:sqrt|cbrt)(?=\\())";
  // The digit-start alternative excludes a digit immediately preceded by "<letter>/" — that
  // signals a word-placeholder pseudo-fraction like "(angle/360)" where a prior attempt to
  // start the match at the opening "(" already failed (the word breaks the run), and starting
  // fresh mid-way at the digit would wrongly split off an unbalanced ")" with no matching "(".
  // Leaving such placeholder text unmatched is correct: it isn't real, renderable numeric math.
  // The letter-caret start alternative requires the letter NOT be preceded by another letter,
  // so it only matches an isolated single-letter variable (e.g. "x^2"), not the tail of an
  // ordinary word immediately followed by a caret (e.g. word-placeholder hints using "^" like
  // "x-component^2" would otherwise mis-parse the "t" in "componen[t]" as a math base).
  const generalFallbackRe = new RegExp(
    `(?:(?<![A-Za-z])[A-Za-z]\\^|${mathKeyword}|(?<![A-Za-z]/\\d*)\\d|\\()(?:[\\d+\\-*/^().,.\\sxX°]|${mathKeyword})*[\\d)°]`,
    "g"
  );
  marked = marked.replace(generalFallbackRe, (candidate) => {
    if (candidate.includes("@@M")) return candidate; // already-tokenised region
    const trimmed = candidate.trim();
    const hasOperator =
      /[+\-*/^]/.test(trimmed) || /x/i.test(trimmed) || new RegExp(mathKeyword, "i").test(trimmed);
    if (hasOperator && trimmed.length >= 3) {
      return pushMath(trimmed);
    }
    return candidate;
  });

  // Content class allows an already-tokenised "@@M#@@" placeholder as one atom (from the general
  // fallback above), so e.g. "b = 8 x sin(45°) / sin(30°)" unifies into one region instead of
  // splitting at the placeholder boundary. The placeholder is resolved back to its source text
  // before re-tokenising the combined candidate, since the final loop only replaces tokens once
  // (not recursively) — leaving it unresolved would leak "@@M#@@" into the rendered HTML.
  // Excludes raw "{"/"}" too: those are TeX grouping characters, not literal glyphs, so if any
  // slipped past the dedicated set-notation regex above unescaped, swallowing them here would
  // render them invisibly instead of leaving them as plain (if unstyled) visible text.
  marked = marked.replace(
    /\b((?:[A-Za-z]\(x\)|[A-Za-z])\s*(?:=|>=|<=|>|<)\s*(?:[^,.;!?@{}]|\.(?=\d)|@@M\d+@@)+?)(?=\s+(?:at|when|with|if|for|where|and|or|on|in|not|makes|invertible|shifted|reflected)\b|[,!?;]|\.(?!\d)|$)/g,
    (candidate) => {
      const resolved = candidate.replace(/@@M(\d+)@@/g, (_, i) => tokens[Number(i)] || "");
      return isLikelyMathSnippet(resolved) ? pushMath(resolved.trim()) : candidate;
    }
  );
  marked = marked.replace(/(\d+)\.\u0305(\d+)/g, (_, whole, recurring) => pushMath(`${whole}.\\overline{${recurring}}`));
  marked = marked.replace(/(\d+)\s+(\d+)\s*\/\s*(\d+)/g, (_, whole, numerator, denominator) => `${whole} ${pushMath(`${numerator}/${denominator}`)}`);
  marked = marked.replace(/\b(\d+)\s*\/\s*(\d+)\b/g, (_, numerator, denominator) => pushMath(`${numerator}/${denominator}`));
  marked = marked.replace(/\bdy\/dx\b/g, () => pushMath("dy/dx"));
  marked = marked.replace(/\b\d+°\b/g, (value) => pushMath(value));

  const tokenRe = /@@M(\d+)@@/g;
  let output = "";
  let lastIndex = 0;
  let match;

  while ((match = tokenRe.exec(marked)) !== null) {
    output += escapeHtml(marked.slice(lastIndex, match.index));
    output += wrapMath(tokens[Number(match[1])] || "");
    lastIndex = tokenRe.lastIndex;
  }
  output += escapeHtml(marked.slice(lastIndex));

  return output;
}

function formatJoinedMathClauses(text) {
  const parts = String(text || "")
    .split(/\s+and\s+/i)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) {
    return null;
  }

  const mathLike = parts.every((part) => /[=+\-*/^≤≥≠√()]|\bdy\/dx\b|[²³⁴⁵⁶⁷⁸⁹]/.test(part));
  if (!mathLike) {
    return null;
  }

  return parts.map((part) => wrapMath(part)).join(" and ");
}

function latexifyLine(line) {
  const raw = String(line || "").trim();
  if (!raw) {
    return "";
  }

  // Requires at least one space after the colon (not \s*), so a no-space colon like a ratio
  // "3:4" or "AP:PB" isn't mistaken for a "Label: content" prefix — the label/body split
  // always re-inserts exactly one space, which would otherwise corrupt "3:4" into "3: 4".
  const colonSplit = raw.match(/^([^:]{1,45}:)\s+(.+)$/);
  if (colonSplit) {
    const joinedMath = formatJoinedMathClauses(colonSplit[2]);
    const colonBody = colonSplit[2];
    const colonExpressionLike =
      /^[0-9A-Za-z\s()+\-*/^=.,≤≥≠πθ√±∓⁰¹²³⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉]+$/.test(colonBody) &&
      /[=+\-*/^≤≥≠√±∓]|\bdy\/dx\b|[²³⁴⁵⁶⁷⁸⁹]/.test(colonBody) &&
      colonBody.split(/\s+/).length <= 14 &&
      !/[A-Za-z]{5,}/.test(colonBody);
    return `${escapeHtml(colonSplit[1])} ${joinedMath || (colonExpressionLike ? wrapMath(colonBody) : formatInlineMathText(colonBody))}`;
  }

  const intersectionMatch = raw.match(/^Find(?:\s+the)?\s+intersection\s+of\s+(.+?)\s+and\s+(.+?)\.?$/i);
  if (intersectionMatch) {
    return `Find intersection of ${wrapMath(intersectionMatch[1])} and ${wrapMath(intersectionMatch[2])}`;
  }

  const intersectQuestionMatch = raw.match(/^Do\s+(.+?)\s+and\s+(.+?)\s+intersect\?$/i);
  if (intersectQuestionMatch) {
    return `Do ${wrapMath(intersectQuestionMatch[1])} and ${wrapMath(intersectQuestionMatch[2])} intersect?`;
  }

  const startsWithInstruction = /^(find|solve|write|state|plot|given|if|show|prove|convert|estimate|simplify)\b/i.test(raw);
  const expressionLike = /^[0-9A-Za-z\s()+\-*/^=.,≤≥≠πθ√±∓⁰¹²³⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉]+$/.test(raw) &&
    /[=+\-*/^≤≥≠√±∓]|\bdy\/dx\b|[²³⁴⁵⁶⁷⁸⁹]/.test(raw) &&
    raw.split(/\s+/).length <= 8 &&
    !/[A-Za-z]{5,}/.test(raw) &&
    !startsWithInstruction;

  if (expressionLike) {
    return wrapMath(raw);
  }
  return formatInlineMathText(raw);
}
