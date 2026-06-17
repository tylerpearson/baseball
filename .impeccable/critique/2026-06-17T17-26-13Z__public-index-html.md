---
target: public/index.html
total_score: 33
p0_count: 0
p1_count: 1
timestamp: 2026-06-17T17-26-13Z
slug: public-index-html
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Glossary search gives no result-count/empty feedback |
| 2 | Match System / Real World | 4 | Plain-language teaching; jargon defined inline via tooltips + glossary |
| 3 | User Control and Freedom | 3 | Filters/search clearable; no explicit search clear button |
| 4 | Consistency and Standards | 4 | Pitch-family color legend is consistent across every surface |
| 5 | Error Prevention | 3 | Selects constrain input; free-text search is low-stakes |
| 6 | Recognition Rather Than Recall | 4 | Cheat sheet, glossary, labeled icons, consistent legend |
| 7 | Flexibility and Efficiency | 3 | Family filters, sort, compare tool; no keyboard shortcuts (not needed) |
| 8 | Aesthetic and Minimalist Design | 3 | Mostly clean; eyebrow-on-every-section adds reflexive scaffolding |
| 9 | Error Recovery | 2 | Empty glossary search shows a blank panel with no message |
| 10 | Help and Documentation | 4 | The page IS documentation; contextual tooltips + searchable glossary |
| **Total** | | **33/40** | **Good** |

## Anti-Patterns Verdict

**Does this look AI-generated? No — it reads as human-crafted with a couple of cadence tells.** Genuine domain expertise, custom hand-built SVG movement diagrams, a consistent three-color pitch-family legend, and a real editorial voice put it well clear of template slop. The tells that remain are textural, not structural.

**LLM assessment:** Three soft AI-cadence signals: (1) em-dash overuse in body copy; (2) a tracked-uppercase clay eyebrow above nearly every section ("Start Here", "Quick Reference", "The Arsenal") — the eyebrow-on-every-section reflex PRODUCT.md lists as an anti-reference; (3) the hero `h1` metallic shimmer is technically `background-clip: text` + gradient — a documented absolute-ban, though here it's a single light traveling through one heading color, the most defensible form.

**Deterministic scan** (`detect.mjs`, 4 findings):
- `em-dash-overuse` (warning): 57 em-dashes in body text — **agrees with the LLM read.** Real.
- `design-system-font` (warning): `Newsreader` used (SVG diagram labels) but absent from DESIGN.md frontmatter typography — **real but trivial doc-sync nit.**
- `single-font` "only font used is dm mono" (warning): **false positive.** The page uses Playfair Display, Geist, DM Mono, and Newsreader. Geist loads from the jsdelivr CDN rather than Google Fonts, so the detector's font extraction missed it.
- `numbered-section-markers` "Sequence: 10, 11, 12" (advisory): **likely false positive.** No 01/02/03 section scaffolding exists in the markup; this matched stat/index numbers, not display markers.

**Visual overlays:** Not available — no browser automation in this environment, so the live detector overlay and rendered-pixel contrast sampling were not run. Contrast notes below are estimated from token values and should be confirmed with `/impeccable audit` against the running page.

## Overall Impression

A genuinely well-made educational page: semantic HTML, a skip link, `prefers-reduced-motion` handling, `focus-visible` rings, ARIA `tablist`/`table` roles, labeled SVGs, and a debounced search. The information architecture is sound — cheat sheet before the deep dive, progressive disclosure via expandable cards, family filters. The single biggest opportunity is the **glossary search empty state**: it's the one interactive surface that fails silently.

## What's Working

- **The consistent pitch-family legend.** Red/blue/green threads through cheat-sheet dots, card top-stripes, abbreviation chips, trajectory diagrams, and heat maps. One learnable system — exactly the teaching tool the brief wants.
- **Accessibility foundations are real, not decorative.** Skip link, reduced-motion fallback, focus-visible, ARIA roles, and meaningful SVG `aria-label`s are all present in source.
- **Progressive disclosure of complexity.** Cheat sheet → expandable deep-dive cards → compare tool lets a newcomer go as deep as they want without a wall of text up front.

## Priority Issues

- **[P1] Glossary search fails silently on no match.** The input hides non-matching `.glossary-item`s; when nothing matches, the user sees a blank panel with no message and no result count.
  - **Why it matters:** Visibility of system status and error recovery both break here. A first-timer searching a term that isn't in the glossary can't tell if the search is broken, the term doesn't exist, or the page froze.
  - **Fix:** Render a "No terms match '<query>'" empty state when zero items are visible, and announce the result count via an `aria-live="polite"` region for screen readers.
  - **Suggested command:** `/impeccable harden`

- **[P2] Em-dash cadence reads as AI.** ~57 em-dashes across the body copy.
  - **Why it matters:** It's the single strongest "AI wrote this" tell on an otherwise human-feeling page, and PRODUCT.md's whole brand line is "crafted."
  - **Fix:** Convert a chunk to commas, colons, periods, and parentheses; keep em-dashes for genuine interruptions only.
  - **Suggested command:** `/impeccable clarify`

- **[P2] Eyebrow on (nearly) every section.** A tracked-uppercase clay kicker sits above almost every section header.
  - **Why it matters:** PRODUCT.md explicitly names "tiny tracked eyebrow above every section" as an anti-reference; at this frequency it's AI grammar, not voice.
  - **Fix:** Keep the kicker on 1–2 anchor sections where it earns its place; vary the cadence elsewhere (lead with the headline, or use a short standfirst line).
  - **Suggested command:** `/impeccable typeset`

- **[P2] Confirm contrast on small clay text.** Clay (`#c4793a`) section labels at 0.72rem and clay links sit on dark navy; this is the band most likely to fall short of 4.5:1 for small text.
  - **Why it matters:** Body/small text below AA contrast is the most common real accessibility failure, and the audience includes low-vision users (WCAG 2.1 AA is the stated bar).
  - **Fix:** Measure against rendered pixels; if short, bump small clay text toward `clay-bright` (`#d9944f`) or reserve clay for large text only.
  - **Suggested command:** `/impeccable audit`

## Persona Red Flags

**Jordan (Confused First-Timer):** Mostly well-served — plain language, inline tooltips, a cheat sheet. **Red flag:** searches the glossary for a term that isn't there and gets a blank panel with no "nothing found" message; can't tell whether the search broke. The `//` logo accent is decorative and meaningless to a newcomer.

**Riley (Deliberate Stress Tester):** Probes edges. **Red flags:** empty/no-match glossary search has no empty state; pasting a long string or emoji into the search just blanks the list silently. No visible "X results" count to confirm the filter did anything.

**Casey (Distracted Mobile User):** Hamburger nav and 44×44 targets are present. **Red flags to verify on device:** the 7-item nav collapses to a menu (good), but the compare tool's side-by-side selects and the count matrix table can get cramped one-handed; confirm the heat-map SVGs and count grid stay legible and tappable at 480px.

**The Curious Partner (project persona — a newcomer dragged into fandom):** Wants pitching to "click" fast. Served well by the hero → basics → cheat-sheet ramp. **Red flag:** the sheer number of sections (Basics, Cheat Sheet, Arsenal, Pitcher Types, Strategy, Compare, Legends, Glossary) can feel like homework; there's no "if you only read one thing" signpost or sense of progress through the page.

## Minor Observations

- `Newsreader` is a fourth font used only in SVG labels but isn't in DESIGN.md's frontmatter typography — add it or note it as an intentional diagram-only face.
- No visible clear ("×") affordance on the glossary search; users must select-all-delete.
- The decorative film-grain overlay sits at `z-index: 9999`, just below the skip link (`10001`) and above the nav (`1000`) — confirm it never intercepts pointer events (it sets `pointer-events: none`, so OK, but worth keeping in mind).

## Questions to Consider

- What if one section were marked as the "start here, read this first" path, so the page feels like a guided ramp rather than a table of contents?
- Does every section need its own uppercase kicker, or would the page feel more editorial if most sections just led with the headline?
- What would the glossary search feel like if it counted matches live ("3 terms") and offered a graceful empty state — would it become a feature rather than a filter?
