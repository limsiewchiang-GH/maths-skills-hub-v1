# Maths Skills Hub Content Roadmap And Tracker

Last updated: 2026-05-31 (browser QA phase)

## Current Baseline

| Area | Current state | Status |
| --- | --- | --- |
| Site structure | Hub now focuses on Shell, Remove, Fifth Form, and Practice Zone only | Complete |
| Navigation | Year groups are top-level destinations and Practice Zone has 4 streams | Complete |
| Curriculum map | 46 topics and 182 skills loaded into the planner | Complete |
| Random practice engine | Skills can support 3 random questions from a larger pool, with `New set` where available | Complete |
| Question banks | Shell, Remove, and Fifth Form now have full 6-question pools | Complete |
| Hints | All three year groups now have question-specific hint support | Complete |
| Question bank structure | Authored questions now live in topic-based files under `data/questions/` | Complete |
| Diagram workflow | Image-backed questions can use real source diagrams stored beside the topic assets | Complete |
| Practice Zone balance | Mixed Practice now draws one question each from Shell, Remove, and Fifth Form | Complete |
| Analytics | GA4 page-view tracking is installed on the public student-facing pages | Complete |
| QA | Static smoke checks are passing | Complete |
| GitHub sync | Latest polish pushed to `origin/main` at commit `0ce0172` | Complete |

## Scope Snapshot

| Year group | Topics | Skills | Content priority |
| --- | --- | --- | --- |
| Shell | 20 | 77 | First build-out pass |
| Remove | 17 | 68 | Second build-out pass |
| Fifth Form | 9 | 37 | Third build-out pass |
| Total | 46 | 182 | Full roadmap scope |

## Definition Of Done For A Completed Skill

| Check | Requirement |
| --- | --- |
| Question pool | At least 6 authored questions for priority skills |
| Render | 3 random questions appear reliably |
| Hinting | At least 1 useful hint per question or a clear authored hint set |
| Answers | Works with both `Check` and `Enter` |
| Practice Zone | Eligible questions can appear in the correct year-group stream |
| QA | Quick browser check completed after content batch |

## Delivery Schedule

| Week beginning | Focus | Main output | Target status |
| --- | --- | --- | --- |
| 2026-04-20 | Shell Topics 1-5 | Expand core algebra, linear algebra, fractions, recurring decimals, percentages | Complete early |
| 2026-04-27 | Shell Topics 6-10 | Expand calculator, rounding, Pythagoras, surds, coordinates | Complete early |
| 2026-05-04 | Shell Topics 11-20 | Finish Shell coverage and top up weak pools | Complete early |
| 2026-05-11 | Remove Topics 1-6 | Expand early Remove algebra, graphs, ratio, bounds, probability foundations | Complete early |
| 2026-05-18 | Remove Topics 7-12 | Expand mid-course Remove content and strengthen mixed retrieval | Complete early |
| 2026-05-25 | Remove Topics 13-17 | Finish Remove coverage and close obvious hint gaps | Complete early |
| 2026-06-01 | Fifth Form Topics 1-5 | Expand higher-tier algebra, functions, geometry, proof foundations | Complete early |
| 2026-06-08 | Fifth Form Topics 6-9 | Finish Fifth Form coverage, vectors, constructions, revision content | Complete early |
| 2026-06-15 | QA and refinement | Browser smoke pass, cross-year polish, release-ready content review | In progress |

## Session Tracker

| Workstream | Next task | Owner | Status | Notes |
| --- | --- | --- | --- | --- |
| Shell authoring | Review completed Shell coverage and spot weak hints or awkward questions | Codex + user | Complete | All 20 topics expanded and hint-polished |
| Remove authoring | Build 6-10 question pools for Topics 1-6 | Codex + user | Complete | Topics 21-26 expanded with supporting hints |
| Remove authoring | Build 6-10 question pools for Topics 7-12 | Codex + user | Complete | Topics 27-32 expanded with supporting hints |
| Remove authoring | Build 6-10 question pools for Topics 13-17 | Codex + user | Complete | Remove is now fully expanded |
| Fifth Form authoring | Build 6-10 question pools for Topics 1-5 | Codex + user | Complete | Topics 38-42 expanded with supporting hints |
| Fifth Form authoring | Build 6-10 question pools for Topics 6-9 | Codex + user | Complete | Fifth Form is now fully expanded |
| Hint writing | Cross-year hint review and polish | Codex + user | Next | Run after live browser issues are collected |
| Practice Zone quality | Check balance across Shell, Remove, Fifth Form, Mixed | Codex | Complete | Mixed Practice now balances one question per year group |
| Diagram authoring | Keep using real source diagrams as image assets instead of redraws | Codex + user | Active pattern | Best workflow established during Topic 22 work |
| Browser QA | Run the live browser smoke checklist and fix issues found | Codex + user | In progress | Checklist lives in `planning/qa/browser-smoke-checklist.md` |
| Author guidance | Add a short checklist for image-backed question authoring | Codex | Backlog | Would help keep future diagram questions consistent |
| Maths formatting | Final Fifth Form and cross-year LaTeX cleanup pass | Codex + user | Backlog | Pick up any remaining sentence-pattern edge cases after browser QA |
| Analytics review | Confirm GA4 receives live traffic after deployment | User | Next | Check Realtime in Google Analytics after visiting the live GitHub Pages site |

## Recommended Order Of Work

| Order | What we do next | Why this comes now |
| --- | --- | --- |
| 1 | Browser smoke testing | Highest-value next step now that content and refactor work are complete |
| 2 | Cross-year hint and QA polish | Use live-browser findings to target the real weak spots |
| 3 | Final LaTeX cleanup pass | Catch remaining Fifth Form or sentence-pattern formatting edge cases |
| 4 | Image author checklist | Locks in the real-diagram workflow now that Topic 22 proved it |

## Progress Log

| Date | Update |
| --- | --- |
| 2026-04-17 | Structure refocused to Shell, Remove, Fifth Form, and Practice Zone |
| 2026-04-17 | Practice Zone rebuilt into Shell, Remove, Fifth Form, and Mixed Practice |
| 2026-04-17 | Random question support, `New set`, and `Enter`-to-check behavior added |
| 2026-04-17 | Expanded pools added for selected Shell skills as proof of concept |
| 2026-04-17 | Shell Topics 1-5 expanded into fuller authored question pools with stronger skill-specific hints |
| 2026-04-17 | Shell Topics 6-10 expanded into fuller authored question pools covering calculator work, rounding, Pythagoras, surds, coordinates, and simultaneous equations |
| 2026-04-17 | Shell Topics 11-20 expanded into fuller authored question pools covering number, standard form, straight lines, formulae, quadratics, area, similarity, and data handling |
| 2026-04-17 | Shell Topics 11-20 hints reviewed and upgraded so the support matches the actual question patterns more closely |
| 2026-04-17 | Remove Topics 21-26 expanded into fuller authored question pools covering inequalities, angle facts, trig, circle theorems, and ratio/proportion, with matching hint support |
| 2026-04-18 | Formatter logic tightened so sentence-style prompts, true/false questions, and mixed text-plus-maths prompts render cleanly |
| 2026-04-18 | Remove diagram matching corrected so coordinate graph helpers only appear on genuine straight-line graph skills |
| 2026-04-18 | Remove Topics 27-32 expanded into fuller authored question pools covering bounds, arcs and sectors, mensuration, quadratics, line-quadratic simultaneous equations, and sequences, with matching hint support |
| 2026-04-18 | Remove Topics 33-37 expanded into fuller authored question pools covering probability, further trig, further graphs, compound measures, and travel graphs, with matching hint support |
| 2026-04-18 | Fifth Form Topics 38-42 expanded into fuller authored question pools covering surds, differentiation, set notation, algebraic fractions, and transformations, with matching hint support |
| 2026-04-18 | Fifth Form Topics 43-46 expanded into fuller authored question pools covering constructions, functions, algebraic proof, and vectors, with matching hint support |
| 2026-04-18 | Practice Zone rebalanced so Mixed Practice now pulls one question each from Shell, Remove, and Fifth Form |
| 2026-04-18 | Authored question banks refactored into topic-based files under `data/questions/`, with a manifest loader for the pages |
| 2026-04-18 | Image support added to the question renderer so topic questions can point directly to diagram assets |
| 2026-04-18 | Topic 22 workflow switched from hand-drawn SVG attempts to using the real source diagram image as the asset pattern for future diagram questions |
| 2026-04-18 | Current refactor pushed to GitHub on `main` at commit `4aa6838` |
| 2026-04-18 | Follow-up polish pushed to GitHub on `main` at commit `0ce0172` |
| 2026-05-31 | Browser QA phase started with a dedicated live smoke checklist for Home, Shell, Remove, Fifth Form, and Practice Zone |
| 2026-06-02 | GA4 installed on the public pages using measurement ID `G-211HN0VRSS` |
