---
name: Pitching 101
description: The complete beginner's guide to MLB pitching — premium sports editorial.
colors:
  navy: "#0a1628"
  navy-light: "#0d1b30"
  navy-mid: "#111f3a"
  card-bg: "#131d30"
  card-border: "#1f3050"
  red: "#c8102e"
  red-deep: "#a50d24"
  blue: "#002d72"
  blue-light: "#1a4a8a"
  clay: "#c4793a"
  clay-bright: "#d9944f"
  grass: "#2d5a27"
  cream: "#faf3e8"
  white: "#f5f5f5"
  heading: "#f0f4f8"
  text: "#c9d5e3"
  muted: "#94a3bb"
  fastball: "#ef4444"
  breaking: "#60a5fa"
  offspeed: "#4ade80"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.8rem, 6.5vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.8rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.16em"
  data:
    fontFamily: "DM Mono, 'SF Mono', 'Fira Code', monospace"
    fontSize: "1.1rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  annotation:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  sm: "8px"
  md: "12px"
  lg: "18px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "28px"
  lg: "64px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "15px 36px"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "15px 36px"
  card-pitch:
    backgroundColor: "{colors.card-bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "28px"
  badge:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.clay}"
    rounded: "{rounded.pill}"
    padding: "7px 18px"
    typography: "{typography.label}"
  input-search:
    backgroundColor: "{colors.navy-mid}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: Pitching 101

## 1. Overview

**Creative North Star: "The Stadium at Dusk"**

A deep navy field sits under floodlights in the quiet seconds before a pitch. That is the whole system: a cool, near-black ground (`#0a1628`) lit by warm, sparing glows — clay amber, a single hot red, the cool wash of stadium blue. Nothing is bright by default; light is something the page earns, the way a stat or a trajectory earns attention against the dark. The mood is atmospheric and a little cinematic, premium without being loud, the hush of a ballpark rather than the roar.

The personality is **authoritative, inviting, crafted** — a printed sports annual translated to screen. Playfair Display carries the editorial voice in the headlines; Geist keeps the prose legible and modern; DM Mono presents the numbers as artifacts to admire. Density is editorial: generous section rhythm (112px), comfortable line height (1.72), and varied section shapes rather than a stamped template. A faint film-grain overlay and decorative infield-diamond silhouettes give the surface texture without ever competing with content.

This system explicitly rejects the **generic SaaS landing page** (no gradient-hero-plus-feature-grid scaffolding), the **dry textbook** (explanation is paced and visual, never a wall of reference text), **loud ESPN/sportsbook hype** (no garish screaming graphics or ad-clutter density), and anything **childish or clip-art** (beginner-friendly is not kiddie — no cartoon illustration, no emoji soup).

**Key Characteristics:**
- Dark navy ground; warmth and color arrive as sparse, deliberate accents.
- Serif display + sans body + mono data — three voices, each with a job.
- Depth from atmosphere (colored glows, glass, lift-on-hover), not heavy shadows.
- Pitch families are color-coded (red / blue / green) as a consistent legend.
- Editorial pacing — varied section rhythm over uniform card grids.

## 2. Colors

A cool dark palette lit by three warm/saturated accents and a consistent three-color pitch-family legend.

### Primary
- **Floodlit Navy** (`#0a1628`): The body ground and the system's anchor. Everything else is read against it. `Navy Light` (`#0d1b30`) and `Navy Mid` (`#111f3a`) tier the alt sections and inset fields just above the ground.
- **Mound Red** (`#c8102e`): The single hottest accent — the primary call-to-action, the logo mark, selection highlight. Deepens to `Red Deep` (`#a50d24`) on press. Used sparingly; its rarity is its power.

### Secondary
- **Dusk Clay** (`#c4793a`): The warm editorial accent — links, the short rule above each section heading, focus rings, decorative diamond strokes, and the italic hero accent word. Brightens to `Clay Bright` (`#d9944f`) on link hover and the hero accent. This is the color of stadium light.
- **Deep Stadium Blue** (`#002d72`): The cool counter-glow, used atmospherically in hero/section radial gradients and as a deep structural accent. `Blue Light` (`#1a4a8a`) for raised variants.

### Tertiary
- **Outfield Grass** (`#2d5a27`): A reserved natural accent for grass/field motifs and positive-state tints.
- **Warm Cream** (`#faf3e8`): The shimmer highlight that travels across the hero headline; a barely-there warm light, never a surface fill.

### Neutral
- **Heading** (`#f0f4f8`) and **White** (`#f5f5f5`): Brightest inks, reserved for headings and on-accent text.
- **Body Text** (`#c9d5e3`): Default reading ink — sits near the ink end of the ramp to hold ≥4.5:1 on navy surfaces.
- **Muted** (`#94a3bb`): Secondary text, nav links, captions. Verify ≥4.5:1 before using on lighter navy tiers.
- **Card Surface** (`#131d30`) / **Card Border** (`#1f3050`): The raised editorial card and its thin defining stroke.

### Pitch-Family Legend
- **Fastball Red** (`#ef4444`), **Breaking Blue** (`#60a5fa`), **Offspeed Green** (`#4ade80`): A fixed, learnable legend. The same three hues mark pitch cards (top stripe), abbreviation chips, trajectory diagrams, and strike-zone overlays. Consistency is the teaching tool.

### Named Rules
**The One Red Rule.** Mound Red (`#c8102e`) is the only true call-to-action color. It appears on the primary CTA and the brand mark — almost nowhere else. If a second red button shows up on a screen, one of them is wrong.

**The Earned-Light Rule.** The ground is dark; color is light the page earns. Warmth lives in accents, type, and glows — never in the body background.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, 'Times New Roman', serif)
**Body Font:** Geist (with system-ui, sans-serif)
**Label/Mono Font:** DM Mono (with 'SF Mono', 'Fira Code', monospace) for all numbers and stats
**Annotation Font:** Newsreader (with Georgia, serif) for SVG diagram and chart labels

**Character:** A high-contrast serif (Playfair) for the editorial voice, paired against a clean modern sans (Geist) on the serif-vs-sans contrast axis — never two similar sans together. DM Mono gives velocity, break, and usage numbers the precise, tabular feel of a stat line. Newsreader is used inside SVG diagram labels for print-like annotation.

### Hierarchy
- **Display** (Playfair, 700, `clamp(2.8rem, 6.5vw, 4.8rem)`, lh 1.18, ls -0.02em): The hero `h1` only. Ceiling stays under 6rem — confident, not shouting.
- **Headline** (Playfair, 700, `clamp(1.8rem, 4vw, 2.75rem)`, lh 1.18): Section `h2` headers.
- **Title** (Geist, 600, ~1.05rem, lh 1.3): `h4`–`h6`, card titles, sub-headings — sans, not serif, at small sizes for legibility.
- **Body** (Geist, 400, 1rem, lh 1.72): Reading prose. Cap measure at 65–75ch.
- **Label** (Geist, 700, 0.72rem, ls 0.16em, UPPERCASE, clay): Badges, nav links, small UI — the only place tracked uppercase is allowed.
- **Data** (DM Mono, 500, ~1.1rem): Velocity, break, count, and usage numbers.
- **Annotation** (Newsreader, 600, ~10px): SVG diagram and chart labels (trajectories, strike-zone maps), for a print-like editorial caption feel.

### Named Rules
**The Serif-Up-Top Rule.** Playfair appears only at `h1`–`h3` display sizes, where its high contrast sings. Below ~1.3rem, switch to Geist — small Playfair turns spindly and hurts legibility.

**The Numbers-Are-Mono Rule.** Every stat (velocity, break, usage %, count) is set in DM Mono. Numbers are artifacts here; mono makes them line up and read as data, not prose.

## 4. Elevation

Depth comes from **atmosphere, not weight.** Surfaces are flat dark planes separated by thin `#1f3050` borders and one-step tonal lifts (`navy` → `navy-light` → `card-bg`). Real shadows appear only as a *response to state* — a card lifting on hover, the nav gaining a shadow once scrolled — and they read as diffuse colored glows (clay, red, deep black) rather than hard drop shadows. The fixed nav is the one piece of glass: `backdrop-filter: blur(20px) saturate(1.4)` over a translucent navy.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 12px 40px rgba(0,0,0,0.3)`): Cards on hover, paired with a `translateY(-2px)` and a border-color shift to clay.
- **Red Glow** (`box-shadow: 0 4px 24px rgba(200,16,46,0.25)` → `0 8px 32px rgba(200,16,46,0.35)` on hover): Reserved for the primary CTA only.
- **Scroll Bar** (`box-shadow: 0 1px 24px rgba(0,0,0,0.3)`): The nav once `.scrolled`.
- **Focus Ring** (`box-shadow: 0 0 0 3px rgba(196,121,58,0.1)` + clay border): Inputs and selects on focus.
- **Inset Tint** (`box-shadow: inset 0 0 12px rgba(...,0.08)`): Soft interior glow on advantage/heat cells.

### Named Rules
**The Flat-At-Rest Rule.** Surfaces are flat by default. If a card has a drop shadow before you touch it, the shadow is wrong — depth is a reaction (hover, focus, scroll), not a resting state.

## 5. Components

### Buttons
- **Shape:** Gently rounded (8px, `{rounded.sm}`).
- **Primary (CTA):** Mound Red (`#c8102e`) fill, white text, `15px 36px` padding, weight 700, with the Red Glow shadow.
- **Hover / Focus:** Deepen to `#a50d24`, `translateY(-2px)`, intensify the glow. Transition `0.28s cubic-bezier(0.4,0,0.2,1)`. Focus-visible shows a 2px clay outline at 3px offset.

### Chips / Badges
- **Hero / section badge:** Clay-tinted pill (`rgba(196,121,58,0.12)` fill, `rgba(196,121,58,0.3)` border, 100px radius), clay text, uppercase label type.
- **Pitch abbreviation chip:** Family-colored tint (red/blue/green at ~12% over the family hue), 6px radius — the card's at-a-glance legend tag.

### Cards / Containers
- **Corner Style:** 18px (`{rounded.lg}`) for pitch cards; 12px for tighter UI.
- **Background:** Card Surface (`#131d30`).
- **Border:** 1px `#1f3050`; a **3px top stripe** in the pitch-family color (red / blue / green) — a categorical legend marker, never a left/right side-stripe.
- **Shadow Strategy:** Flat at rest; Lift shadow + clay border on hover (see Elevation).
- **Internal Padding:** 28px (`{spacing.md}`).

### Inputs / Fields
- **Style:** Navy-mid fill (`#111f3a`), thin border, 12px radius, Geist body text.
- **Focus:** Border shifts to clay with a soft `0 0 0 3px rgba(196,121,58,0.1)` ring — a glow, not a hard outline.

### Navigation
- **Style:** Fixed 64px bar, glassmorphic (`backdrop-filter: blur(20px) saturate(1.4)`) over translucent navy; gains a subtle border + Scroll Bar shadow once `.scrolled`.
- **Logo:** Playfair wordmark with a Geist red accent mark.
- **Links:** Muted (`#94a3bb`) uppercase 0.8rem labels, 0.1em tracking; on hover brighten to white and grow a clay underline that wipes in from the left.
- **Mobile:** Hamburger toggle (44×44 hit target) below 768px.

### Signature: Pitch Card & Trajectory Diagram
The defining component. A pitch card carries the family top-stripe, a mono abbreviation chip, velocity/break stats in DM Mono, and an expand toggle revealing an animated SVG trajectory (mound-to-plate path with Newsreader labels). The family color threads through every layer — stripe, chip, diagram path, strike-zone overlay — so the reader learns one consistent legend.

## 6. Do's and Don'ts

### Do:
- **Do** present parallel content as **ruled editorial grids** — borderless entries separated by hairline rules (`1px solid #1f3050`), serif heading + prose, not boxed cards. This is the house pattern for Basics, Pitcher Types, Strategy, and Legends. Reserve actual bordered cards for genuinely card-shaped affordances (the connected pitch index, glossary terms).
- **Do** keep the body ground dark navy (`#0a1628`); let warmth arrive through clay, red, type, and glows — never a tinted-light background.
- **Do** reserve Mound Red (`#c8102e`) for the single primary action and the brand mark (The One Red Rule).
- **Do** set every stat and number in DM Mono so data reads as data.
- **Do** use Playfair only at `h1`–`h3` display sizes; drop to Geist below ~1.3rem.
- **Do** keep surfaces flat at rest and let depth be a reaction to hover/focus/scroll.
- **Do** color-code pitch families consistently (red fastball / blue breaking / green offspeed) across cards, chips, diagrams, and zones.
- **Do** hold WCAG 2.1 AA — body text ≥4.5:1 on its navy surface; verify muted tones before using them on lighter tiers.
- **Do** give every animation (shimmer, trajectory draw, card lift, reveals) a `prefers-reduced-motion: reduce` fallback.

### Don't:
- **Don't** build the **generic SaaS landing page** — no gradient-hero-plus-feature-card-grid, and no tiny tracked eyebrow above sections. Section headings carry a short clay accent rule instead; the kicker text was removed precisely because it had become a per-section reflex.
- **Don't** let it read like a **dry textbook / Wikipedia** — no flat walls of reference text; pace and visualize the explanation.
- **Don't** adopt **loud ESPN / sportsbook hype** — no garish screaming graphics, ad-clutter density, or breaking-news energy.
- **Don't** go **childish or clip-art** — no cartoon illustration, emoji soup, or primary-color kiddie treatment, despite the beginner audience.
- **Don't** use a colored `border-left`/`border-right` stripe as a card accent; the pitch-family marker is a **top** stripe only.
- **Don't** introduce gradient text anywhere except the one existing metallic hero-headline shimmer (single light traveling through the heading color — not a decorative multi-hue gradient).
- **Don't** add a second red CTA to a screen, or set light-gray body text "for elegance" — it breaks contrast on navy.
