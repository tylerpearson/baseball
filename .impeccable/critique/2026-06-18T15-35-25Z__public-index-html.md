---
target: public/index.html
total_score: 34
p0_count: 0
p1_count: 0
timestamp: 2026-06-18T15-35-25Z
slug: public-index-html
---
# Critique: public/index.html — Pitching 101

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Scroll-spy nav, expand/filter/sort active states, glossary live-region all present; filter/sort results not announced to AT |
| 2 | Match System / Real World | 4 | Plain language with jargon defined inline everywhere; exemplary for the beginner audience |
| 3 | User Control and Freedom | 3 | Expand/collapse, "All Pitches" reset, Esc on mobile nav; compare tool has no clear/reset |
| 4 | Consistency and Standards | 3 | Cohesive design system; Kershaw legend card omits the story block every sibling has |
| 5 | Error Prevention | 3 | Low-stakes; compare allows identical A=B producing a useless side-by-side |
| 6 | Recognition Rather Than Recall | 4 | Cheat sheet, searchable glossary, inline definitions, persistent nav |
| 7 | Flexibility and Efficiency | 3 | Filter, sort, compare, glossary search, skip link — strong accelerators |
| 8 | Aesthetic and Minimalist Design | 4 | Disciplined editorial restraint; every element earns its place |
| 9 | Error Recovery | 3 | Glossary empty state with a suggestion CTA; few other error paths |
| 10 | Help and Documentation | 4 | The site IS documentation; glossary + inline defs + tooltips |
| **Total** | | **34/40** | **Good (upper end) — minor polish, no blockers** |

## Anti-Patterns Verdict

**Does this look AI-generated? No.** It has a committed point of view, a real multi-voice type system (Playfair display + Geist body + DM Mono data + Newsreader diagram labels), hand-built SVG trajectory and heat-map diagrams, and an editorial ruled-grid layout instead of the reflexive boxed-card grid. It passes the brand slop test: a visitor asks "how was this built?", not "which AI made this?"

**Deterministic scan (detect.mjs on the markup):** 2 findings, both false positives.
- `single-font` (warning, index.html:1) — the detector reads only the HTML in isolation and can't see the CSS-linked font stack. Source confirms four families in active use.
- `numbered-section-markers` (advisory, index.html:0, "Sequence: 10,11,12") — traces to data values (counts/stats), not `01/02/03` section scaffolding. No numbered section markers exist.

**Computed contrast (token-based, WCAG):** body text `#c9d5e3` on navy = 12.18:1; muted `#94a3bb` on navy = 7.09:1; clay `#c4793a` on navy = 5.30:1 (4.80 on navy-mid); white on red CTA = 5.40:1. All pass AA. The one value under 4.5 is fastball red `#ef4444` on card-bg (4.48), but red is used there as a decorative stripe/dot, not text. Contrast is genuinely solid.

**Visual overlay:** not available — no browser automation in this session, so no rendered-pixel sampling or live detector overlay. Contrast figures above are computed from tokens and should be confirmed against the running page with a real audit.

## Overall Impression
This is ship-ready. It reads like a printed sports annual brought to screen — exactly the brief — and it adheres to its own DESIGN.md (ruled editorial grids, dark earned-light palette, mono for data, one-red rule). The biggest opportunity isn't a fix, it's an amplification: the page is uniformly excellent but has no single memorable peak — one interactive or visual moment someone screenshots and shares.

## What's Working
- **Inline jargon scaffolding.** Nearly every domain term is defined in parentheses at first use ("pronation (inward rotation of the forearm)", "bullpen (the group of relief pitchers)"). This is the design principle "earn understanding" executed precisely.
- **The ruled editorial grid.** Basics, Pitcher Types, and Legends use hairline `border-top` entries, not boxes — sidestepping the identical-card-grid tell despite the `-card` class names.
- **Motion hygiene.** A single `prefers-reduced-motion` block plus a reveal failsafe (`revealAll` on timeout / `visibilitychange`) means content never ships blank on a backgrounded or prerendered tab — the exact reveal trap most pages fall into.

## Priority Issues

- **[P2] Cheat-sheet family coding is color-only.** The 10 cheat items signal family via a red/blue/green dot with no text family label. Red↔green is the common color-vision-deficiency pair, and the family isn't named here (it is on the arsenal tabs/cards). A colorblind reader can't group the cheat sheet.
  - **Fix:** Add small family subheaders ("Fastballs / Breaking Balls / Offspeed") above each color group, or append a one-word family tag per row. Keeps the dot as reinforcement, not sole carrier.
  - **Suggested command:** /impeccable clarify (or /impeccable layout for the subheaders)

- **[P3] Kershaw legend card is structurally inconsistent.** 9 of 10 legend cards end with the italic `.legend-story` block; Clayton Kershaw's omits it, leaving a noticeably shorter entry and breaking the rhythm of the grid.
  - **Fix:** Add a story line (e.g., his 2014 NL MVP / record scoreless-innings context) or accept the gap deliberately.
  - **Suggested command:** /impeccable polish

- **[P3] Compare tool allows A == B.** Selecting the same pitch in both dropdowns yields an identical, pointless side-by-side. A deliberate user (Riley) hits this immediately.
  - **Fix:** Disable the matching option in the opposite select, or show a gentle "pick a different pitch" state.
  - **Suggested command:** /impeccable harden

- **[P3] Filter/sort changes aren't announced.** The pitch family tabs and the injected sort controls update the grid visually but don't post to an `aria-live` region the way the glossary search does. Screen-reader users get no confirmation the set changed.
  - **Fix:** Reuse the glossary's live-region pattern to announce "Showing N fastballs" on filter/sort.
  - **Suggested command:** /impeccable harden

## Persona Red Flags

**Jordan (Confused First-Timer):** Almost nothing breaks — this page is built for Jordan. Every term is defined inline, the first action ("Start Learning") is unmistakable, and the cheat sheet front-loads orientation. Only snag: on the cheat sheet, the colored dots imply a grouping Jordan can't name without scrolling to the arsenal tabs.

**Sam (Accessibility-Dependent):** Skip link, global `:focus-visible` ring, ARIA roles on the count matrix and tabs, reduced-motion fallback, alt/`aria-label` on every SVG. Strong. Gaps: filter/sort lack live announcements (above), and family meaning leans on color in the cheat sheet (above).

**Casey (Distracted Mobile):** Hamburger nav with focus trap and Esc, responsive breakpoints at 768/480. Verify on a real device: the 4×4 count matrix and the 3-up strike-zone panels are the likeliest cramped spots at 480px — couldn't confirm without a browser this session.

## Minor Observations
- `.diagram-caption` uses repeated uppercase-tracked labels ("OVERHEAD VIEW", "SIDE VIEW: …") across all 10 diagrams. Functional, not section-eyebrow scaffolding — acceptable, but it's the one place the page leans on the tracked-caps motif repeatedly.
- Playfair Display is on the skill's reflex-reject font list. Identity-preservation wins here (it's the committed brand voice), so this is a note, not a fix.
- The hero SVG is static. A subtle one-time trajectory draw-in on load (with the reduced-motion fallback already in place) would give the fold more life without violating the restraint.

## Questions to Consider
- What's the single moment someone screenshots? For a brand/editorial piece, distinctiveness is the bar — where's the peak?
- Could the hero trajectories animate once on load to *show* movement (the core teaching idea) rather than diagram it statically?
- Is "premium sports editorial → navy + Playfair + stadium glow" guessable from the brief alone? It's a deliberate, committed identity — but worth asking whether one section could break frame for emphasis.
