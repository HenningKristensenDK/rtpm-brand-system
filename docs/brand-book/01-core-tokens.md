# RTPM 1 · Core Tokens

This document governs the foundation tokens and system badges of RTPM Brand System v4 (colour, type, the mark, status and severity, actions, icons, meaning and hierarchy); every other RTPM document inherits from it.

Source: RTPM Brand System v4, Step 1 of 4, Foundations. "Core tokens & system badges". Dated 2026.08.04, status at issue: awaiting Henning's review. The elements here repeat on every surface and are hardest to change later. Each block is a candidate for LOCK. Nothing here is decorative.

## 01 · Colour

Status in source: "locked proposal".

- Use two blues only. The sampled range #0A0868 to #2E2CA1 collapses to Ink Navy for surface and Primary Indigo for signal.
- Treat anything between the two blues as a sampling artifact. It is retired.
- Never use pure black for text.
- Two meanings cannot share a hex.

### Core palette

| Token | Hex | Use |
|---|---|---|
| Ink Navy | #070474 | Dark surfaces: sidebar, hero band, footer, media overlay. Logo colour on light. |
| Primary Indigo | #0D08D2 | Signal only: active states, key nodes, hairlines, links, first chart series. Never a large fill. |
| Accent Gold | #FFCC00 | One primary action per screen. One highlight per visual: a single contiguous span, on dark only. |
| Ink | #15162B | All body and heading text on light. Never pure black. |

### Surfaces and neutrals

| Token | Hex |
|---|---|
| Page | #F7F7FB |
| Card | #FFFFFF |
| Border | #E6E6F0 |
| Indigo tint | #E7E6FA |
| Text secondary | #595B78 |
| Muted / icon | #8A8CA6 |

### Status scale (fixed meaning)

| Status | Hex |
|---|---|
| Critical | #E63946 |
| High | #FF8B00 |
| Medium | #E0A800 |
| Low / Done | #28A745 |

- Locked: Medium status is #E0A800, not #FFCC00. Gold means primary action and nothing else.
- #E0A800 is a darker amber-gold, legible on white and clearly not a button.

### Surfaces, extended

In constant use across the system. Declared here so there is a rule to follow.

| Token | Hex | Use |
|---|---|---|
| Inset | #FAFAFD | Nested surface inside a card |
| Rule, inner | #F0F0F5 | Hairline inside a card |
| Tint border | #D6D4F5 | Border on an Indigo tint fill |
| Disabled fill | #F2F2F7 | Disabled control background |
| Disabled label | #B9BACB | Disabled text; dashed guides |

- Collision resolved: use #F0F0F5 for the inner hairline rule only.
- Use #E6E6F0 for the chart "not started / remainder" grey. A fill can afford a step darker, and it then matches the pending stepper node.

### Status tints

Every status needs a pill background and an accessible label, or each pill is improvised.

| Status | Pill background | Label text |
|---|---|---|
| Critical | #FDECEE | #B02A34 |
| High | #FFF3E5 | #B36200 |
| Medium | #FDF4DD | #8A6600 |
| Low | #E8F6EB | #1B7A31 |

### Hover states

| Token | Hex | Use |
|---|---|---|
| Gold hover | #F2C200 | Primary action, hover |
| Indigo hover | #0A06A8 | Secondary action, hover |

### Contrast requirements

| Pairing | Values | Ratio | Level | Use |
|---|---|---|---|---|
| Ink on Page | #15162B on #F7F7FB | 16.63:1 | AAA | Body and headings at any size |
| Secondary on Card | #595B78 on #FFFFFF | 6.58:1 | AA | Captions and labels down to 12px |
| White on Ink Navy | #FFFFFF on #070474 | 16.42:1 | AAA | Labels and headlines on the dark band |

- All three pairings clear WCAG AA (4.5:1 for body, 3:1 for large text) with margin. Two of three also meet AAA (7:1). Secondary on Card meets AA only.
- Muted #8A8CA6 on white is 3.3:1. It passes AA for large text and non-text only. Never use it for body copy.

## 02 · Typography

Two fonts, two jobs.

- The brief names Montserrat; the current brand file retires it. Follow the newer file: Montserrat stays retired.
- Use Barlow Semi Condensed for display and Inter for everything else.
- Use Semi Condensed, not Condensed. Condensed loses legibility at deck body sizes.

### Display voice: Barlow Semi Condensed

| Role | Weight | Size | Line height | Notes |
|---|---|---|---|---|
| Display headline | 700 | 52px | 1.08 | Sentence case, 5 to 7 words. Letter spacing in sample: -0.005em |
| Sub-head | 600 | 26px | 1.15 (sample) | One line only |

- Use display type for marketing, decks, carousels and thumbnails only. Never in app UI.

### Working voice: Inter

| Role | Weight | Size | Line height | Notes |
|---|---|---|---|---|
| UI title | 600 | 16px | (see source) | |
| Field label | 500 | 13px | (see source) | Letter spacing in sample: 0.02em |
| Body copy | 400 | 14px | 1.5 | Base UI size is 13 to 14px |
| Tabular figures | 600 | 22px in sample | (see source) | Tabular numerals; letter spacing in sample -0.01em |

- Set number columns in tabular figures so digits align down the column. Sample: "€4.8m · 72% · 20 · 11 Sept 2026".

### Radius (shown in section 02)

| Element | Radius |
|---|---|
| Cards | 14 |
| Inputs | 9 |
| Pills | full |

### Spacing grid (shown in section 02)

Steps: 4, 8, 12, 16, 24, 32.

## 03 · The mark

Logo specification v1.0, approved 2026.08.04.

- The mark identifies; it does not explain. Put descriptors either in a dedicated lockup at a legible size or in the copy beside the logo.
- The previous lockup carried an unreadable descriptor, which signalled indecision. It is replaced.

### Lockups

| Lockup | Composition | Use |
|---|---|---|
| A · Primary | Icon + RTPM | App, website header, documents, decks, signature. Anywhere the reader already knows RTPM. Nine jobs out of ten. |
| B · Cold contact | Icon + RTPM + descriptor | LinkedIn profile, first slide, card, tender cover, trade stand. Anywhere the reader does not yet know what RTPM is. |
| C · Real Time | Icon + Real Time | Product-family and platform contexts where the words carry more than the initials: video corners, end cards, partner material. |
| Icon alone | Icon / app tile | Only where a wordmark cannot be read at all: app icon, favicon, avatar, watermark. Tile is a 14% inset on Ink Navy, square as supplied; the operating system applies its own mask. |

### Construction

Every dimension is a ratio of icon height, x.

| Lock | Element | Value | Note |
|---|---|---|---|
| All | Icon | x | Square, sharp corners |
| A | Wordmark | 0.88 x | Barlow Semi Condensed 700 |
| A | Tracking · gap | -0.034 em · 0.28 x | Gap is optical, not metric |
| B | Wordmark | 0.88 x · -0.034 em | Cap height flush to icon top |
| B | Descriptor | 0.25 x · Inter 500 | Baseline flush to icon bottom · 10px floor |
| C | Wordmark | 0.95 x · -0.012 em | Cap height centred on the icon · gap 0.36 x |
| All | Clear space | 0.5 x | All four sides, from the icon bounding box |

- Use Barlow Semi Condensed 700 for every wordmark and Inter 500 for the descriptor. No substitution.
- Never rebuild the lockup by eye. Use the ratios.

### Clear space and minimum size

- Keep clear space of 0.5 x. Nothing enters it: no type, rule, button or image edge.
- On a photograph, double clear space to 1 x.

| Lockup | Minimum size |
|---|---|
| Lockup A | 16px · 8mm |
| Lockup B | 40px · 12mm |
| Icon alone | 16px |

- Below 40px the descriptor falls under its 10px floor, so use lockup A instead.
- Check every file at 16px before release.

### Why the corners are sharp

- The icon is four brackets around a shared open centre: several parties, one common record.
- Softening was tested and rejected. The narrow negative-space channels make the mark legible small, and rounding closes them from both sides.
- Sharp corners also match Barlow Semi Condensed, which has flat square terminals.

### Logo colour

| Version | Colour | Use |
|---|---|---|
| Primary · Ink Navy | #070474 | Default, on Paper White or any near-white surface |
| Secondary · Signal Indigo | #0D08D2 | Only where navy is unavailable or too heavy, e.g. a small screen UI mark |
| Reverse · White | #FFFFFF on #070474 | Ink Navy is the only approved dark background |
| Monochrome · Black | #000000 | Single-colour print, engraving, third-party templates that reject colour |

- One flat colour, always.
- Not permitted: gold-only logos, gradients, multi-colour logos (including a coloured icon beside a differently coloured wordmark), and status-colour logos in red, amber or green.
- Accent Gold is a highlight colour in layouts and never a logo colour.

### Never to the mark

- Round the icon corners, or outline the icon or the letters.
- Re-space, stretch, condense or skew the wordmark, or substitute another typeface.
- Add a shadow, glow, bevel or 3D extrusion. Rotate or set on a diagonal.
- Re-order or mirror the elements. Add a tagline, year, product name or slash inside the lockup.
- Enclose the lockup in a box, pill or badge.

### Never to placement

- Reverse logo on a mid-tone or a gradient; navy logo on a dark background.
- More than one logo per surface, or a logo on a face-and-hook visual.
- Lockup B below 40px icon height, or the icon alone where the lockup would fit.
- A partner logo without a 1 x separator rule.
- Recolour the mark to match a customer's brand.

### Production

- SVG is the master for screen and print.
- Convert wordmark text to outlines in every distributed file so the mark cannot break where Barlow Semi Condensed is absent. The handoff SVGs still carry live text and must be outlined once before distribution.
- Supply PNGs at 1x, 2x, 3x on transparent ground.
- No file carries a background rectangle except the app tile.

## 04 · Status stepper

- Use four fixed stages on every record, in every module: Identified, Assessed, Mitigated, Resolved.
- Done is green (#28A745) with a check. Current is indigo with a ring. Pending is a hollow grey node.
- Place the stage owner under the label. The resolved stage carries its date.

| Element | Spec in source |
|---|---|
| Full node | 24px circle |
| Done node | #28A745 fill, white check |
| Current node | White fill, 2px #0D08D2 border, 4px #E7E6FA ring |
| Pending node | White fill, 2px #E6E6F0 border |
| Connector | 2px line; #28A745 between done stages, #E6E6F0 otherwise |
| Stage label | 11.5px, uppercase, letter spacing 0.09em; 600 (700 on current); colour follows node state (pending label #8A8CA6) |
| Owner line | 12px; #8A8CA6 (current: #595B78, 500) |
| Date line | 12px, 600, tabular figures; sample "2026.10.11 target" shown in #E0A800 |

Example owners: Identified, Package PM; Assessed, Lead Scheduler; Mitigated, Quality Manager; Resolved, Commissioning Authority.

### Compact variant (table row / side panel)

- 14px nodes joined by 2px x 28px connectors, followed by the current stage name (13px, 500, Ink) and a count such as "3 of 4" (13px, #8A8CA6).

### Overdue state

- Only the current node turns red: 2px #E63946 border with a 3px light red ring (rgba(230,57,70,0.14)). Label example: "Assessed · overdue 9 days", 13px, 600, #E63946.
- Stage colours never change meaning. Red here reads "this stage is late", not "critical severity".

## 05 · Severity badges

- Use one shape family in three sizes.
- In tables use dot plus label, so colour is never the only carrier of meaning.
- Reserve solid chips for detail headers where a single badge stands alone.

| Variant | Use | Spec in source |
|---|---|---|
| Table: dot + label | Tables | 8px dot in status colour, 8px gap, label 13px 500 |
| Tinted pill | Cards, filters | Status tint background and label colour (see Status tints), 7px dot, full radius, padding 4px 11px, 12px 600 |
| Solid chip | Detail header | Status colour fill, white text, uppercase, full radius, padding 5px 13px, 12px 700, letter spacing 0.04em |
| Count badge | Risk-matrix counts | 26px min width and height, radius 7px, status colour fill, white 13px 700 tabular figures |

- In risk-matrix counts an empty cell is a dash, never a zero (shown as white with #E6E6F0 border and #8A8CA6 dash).

## 06 · Actions & people

- Use one gold action per screen: the one that sends something out of the system and creates a record. Everything else is indigo or ghost.

### Button hierarchy

| Button | Fill | Text | Hover | Use |
|---|---|---|---|---|
| Gold (primary) | #FFCC00 | Ink #15162B, never white | #F2C200 | One per screen, e.g. "Send Update" |
| Indigo | #0D08D2 | #FFFFFF | #0A06A8 | Routine confirm, e.g. "Save record" |
| Secondary outline (shown) | #FFFFFF, 1px #E6E6F0 border | Ink #15162B | #F7F7FB | e.g. "Cancel" |
| Ghost | Transparent | #0D08D2 | #E7E6FA | Inline lookups, e.g. "Look up in R&R" |
| Disabled | #F2F2F7 | #B9BACB | none | Disabled control |

- Height 40px, radius 9. Label in Inter 600, 13.5px in sample.

### Avatar + role chip

- Show initials in a circle (34px with name line; 26px in a compact stack), name in 13.5px 600, organisation in brackets in #8A8CA6, role line 12px #8A8CA6 in the form "Discipline: Role, Organisation type".
- Tint by organisation, not by discipline. Owner-side readers need to see who is contractor and who is customer at a glance.
- Tints use existing pairs, e.g. Indigo tint #E7E6FA with #0D08D2 initials, and the status tint pairs (#FFF3E5 / #B36200, #E8F6EB / #1B7A31, #FDF4DD / #8A6600). The mapping of specific organisations to tints is not stated (see source).
- Collapse further people into a count, e.g. "+2 informed".

## 07 · Icon system

Thirteen modules, thirteen pictograms.

- Give each module one fixed pictogram, so a user recognises the module before reading its label.
- Follow the mark's own geometry, not an external library style.

### Construction

- Sharp corners only: no rounded joins, no rounded caps, matching the logo construction in section 03.
- Monoline stroke at 1.5px (on a 24-unit grid).
- Build from straight lines and right angles wherever possible. Permit a curve only where the pictogram is unreadable without one, and keep the terminals square.

### Sizing

No new size token.

| Size | Placement |
|---|---|
| 16px | Collapsed icon rail and table rows |
| 20px | Expanded sidebar, so the label leads rather than competes |
| 24px | Cards and other standalone placements |

### Colour

- Existing tokens only.
- White on the active row. White at reduced opacity when inactive (sample shows 0.6). Primary Indigo on light surfaces outside the sidebar.
- Never a second colour. Never gold, except where the icon sits inside a gold-background element: rare, and never in the sidebar.
- No fills. One named exception: the small midpoint square on Interface Management is filled by design to mark the point of contact between two parties. No other icon may use a fill, and no future icon may add one without amending this rule explicitly.

### The fixed module set

1. Dashboard
2. Risk & Opportunities
3. Change Management
4. Nonconformance
5. Documents
6. Correspondence
7. Site Inspection
8. Permit & Compliance
9. Time Log
10. Project Economics
11. Roles & Responsibility
12. Interface Management
13. HSE

- The set is complete at thirteen: one icon for each of the thirteen confirmed modules in 000 RTPM Core, section 11.
- Add no further module icon without updating that source file first.
- Never swap an icon for a library icon (Lucide, Feather or any other set), in the product, on the website or in marketing material.
- RTPM 0, RTPM 2 and RTPM 4 inherit this section rather than defining their own icon rule.
- Label rule: the sidebar label reads "HSE", never spelled out, matching 000 RTPM Core and the ICP files. A future HSE marketing or website page follows the external-naming rule in 002 Behavior Rules and expands it on first mention there only. The product sidebar label never changes.

## 08 · Colour meaning

What the colour represents, not only where it appears. Sections 01 to 07 specify where each token may appear; this section specifies what it means. The same meaning holds across website, LinkedIn, presentations, documents and product UI.

| Colour | Hex | Meaning |
|---|---|---|
| RTPM Indigo | #0D08D2 | Insight, principle, conclusion, operating truth, key concept |
| RTPM Gold | #FFCC00 | Breakthrough, contrast, challenge, key takeaway |

- Indigo marks the thing that is true: the definition, the principle being stated, the conclusion the reader should leave with. It is the default emphasis colour on light grounds.
- Gold marks the turn in the argument: where the reader's assumption breaks, the takeaway, the single action requested. Use it on dark grounds only, and on the website only as a CTA.

## 09 · Hierarchy doctrine

Solve communication in this order: Position > Size > Colour > Weight. Exhaust each mechanism before using the next. Colour is reinforcement, never the primary mechanism.

| Order | Mechanism | Rule |
|---|---|---|
| 1 | Position | Where it sits on the canvas, reading order and whitespace. Most hierarchy problems are solved here. |
| 2 | Size | Scale contrast between primary statement and support. A large step reads as hierarchy; a small step reads as noise. |
| 3 | Colour | One accent per canvas, applied per section 10. Confirms what layout already established. |
| 4 | Weight | The last and smallest adjustment. If weight is doing the work, the layout above it is not solved. |

## 10 · Highlight rule

Governs RTPM 2, RTPM 4 and every future surface.

| Ground | Highlight | Rule |
|---|---|---|
| Dark | Gold | One contiguous span, one to four words, standing alone as a phrase |
| Light | Indigo | Gold is never text on a light ground: it does not hold contrast and reads as a warning colour |

Example span: "Responsibility without authority".

- Never use both on one canvas. One accent colour per canvas, chosen by the ground it sits on.
- On the website, gold appears only as a CTA button on a dark ground, never as text emphasis. Indigo may be used sparingly there for category labels, proof points, statistics and section anchors.
- Executive credibility test: if a canvas needs multiple highlights to communicate, the message is not clear enough. Rewrite the statement rather than add a second highlight.

## 11 · Signature structures

RTPM narrative patterns: repeat, do not reinvent. Six recurring oppositions carry the RTPM argument. Treat them as intellectual property: the same six, in the same wording, across marketing, presentations, website and sales material. Recognition comes from repetition, not variation.

| Opposition | Meaning |
|---|---|
| Chasing vs Real-Time | The cost of asking for status instead of seeing it |
| Responsibility vs Authority | Accountability held without the means to act on it |
| Manual vs Automated | Effort spent assembling the picture instead of acting on it |
| Fragmented vs Single Source of Truth | One record everyone reads, rather than several that disagree |
| Information vs Knowledge | Data present in the system versus understanding available to the decision |
| Reporting vs Visibility | Status produced on request versus status that is simply there |

### Master brand principle (tie-breaker)

"RTPM should resemble a board presentation before it resembles a marketing campaign."

- Apply it whenever a visual decision is genuinely open.
- Do not expand the palette, add an accent colour or give a canvas a second highlight to resolve an ambiguity.
- Authority comes from consistency, restraint and hierarchy.

## Open decisions and lock status

Document status at issue (2026.08.04): awaiting Henning's review. Every block is a candidate for LOCK.

| Item | Status in source |
|---|---|
| 01 Colour | Locked proposal |
| Medium status #E0A800 | Locked |
| #F0F0F5 / #E6E6F0 collision | Resolved |
| 03 The mark, logo specification v1.0 | Approved 2026.08.04 |
| Logo handoff SVGs | Open action: still carry live text, must be outlined once before distribution |
| All other sections (02, 04 to 11) | Candidate for LOCK (no separate status stated) |

### Three decisions to lock before Step 2

1. Blues: Ink Navy #070474 for surface, Primary Indigo #0D08D2 for signal. #2E2CA1 and #0A0868 retired.
2. Fonts: Barlow Semi Condensed for display, Inter for everything. Montserrat stays retired.
3. Medium status: Medium moves to #E0A800 so gold #FFCC00 means "primary action" and nothing else.
