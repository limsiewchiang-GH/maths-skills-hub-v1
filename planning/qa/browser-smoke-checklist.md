# Browser Smoke Test Checklist

Last updated: 2026-05-31

## Goal

Run a lightweight live-browser pass across the hub so we catch real rendering, interaction, and content issues that static QA will not find.

## Test Links

- Home: `http://127.0.0.1:8000/index.html?v=browser-qa-1`
- Shell: `http://127.0.0.1:8000/lower-school-sow.html?v=browser-qa-1#shell`
- Remove: `http://127.0.0.1:8000/lower-school-sow.html?v=browser-qa-1#remove`
- Fifth Form: `http://127.0.0.1:8000/lower-school-sow.html?v=browser-qa-1#fifth-form`
- Practice Zone: `http://127.0.0.1:8000/practice.html?v=browser-qa-1`

## Core Checks

- Page loads without getting stuck on loading state
- Topic and skill panels open correctly
- `New set` changes the question set where available
- `Check` validates the answer as expected
- `Enter` submits the same as clicking `Check`
- Hints are relevant to the exact question shown
- Maths formatting renders correctly in LaTeX
- Solutions match the question and answer logic
- Image-backed questions display clearly and use the right diagram
- No irrelevant diagrams appear on unrelated skills

## Coverage Pass

### Shell

- Topic 1 `Basic Algebra`: one algebra simplification skill
- Topic 9 `Coordinates`: `Midpoint of two points`
- Topic 13 `Straight line graphs`: one graph skill and one non-graph skill
- Topic 20 `Histograms and cumulative frequency`: one histogram skill

### Remove

- Topic 21 `Inequalities`: one solving skill
- Topic 22 `Angles and polygons`: `Angles within parallel lines`
- Topic 30 `Quadratics 2`: one solving skill
- Topic 37 `Travel graphs`: one graph interpretation skill

### Fifth Form

- Topic 38 `Surds`: one rationalising skill
- Topic 39 `Differentiation`: one gradient skill and one stationary point skill
- Topic 44 `Functions`: one inverse/composite skill
- Topic 46 `Vectors`: one vector proof or geometry skill

### Practice Zone

- `Shell Practice`
- `Remove Practice`
- `Fifth Form Practice`
- `Mixed Practice`

## Issue Logging Format

When an issue appears, log:

1. Page and topic/skill
2. What was expected
3. What actually happened
4. Screenshot if useful
5. Whether it is layout, formatting, hinting, answer logic, or diagram-related

## Exit Criteria

- No blocking render issues
- No broken answer-check interactions
- No obviously wrong hints or solutions in sampled skills
- No misleading or stray diagrams in sampled skills
- Practice Zone feels balanced and usable in all 4 streams
