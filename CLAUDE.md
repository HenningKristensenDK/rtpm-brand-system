# RTPM Design System — instructions for Claude Code

This repo (`rtpm-design-system`) is the single source of truth for RTPM's
visual identity. Any other repo (e.g. `rtpm-website`) that builds UI must
follow these rules automatically — don't wait to be reminded.

## Doctrine — read first, settles anything the rules below don't cover

**Tie-breaker: RTPM should resemble a board presentation before it
resembles a marketing campaign.** Do not expand the palette, add accent
colours, increase visual complexity, or weaken the one-highlight rule.

**Hierarchy: Position > Size > Colour > Weight.** Solve communication with
layout, structure, scale and whitespace before reaching for colour.
Colour is reinforcement, not the primary mechanism.

**Colour meaning** (not just usage):
- Indigo `#0D08D2` = insight, principle, conclusion, operating truth,
  key concept. Default emphasis on light grounds.
- Gold `#FFCC00` = breakthrough, contrast, challenge, key takeaway.
  Dark grounds only; on the website, CTA only.
- Ink Navy `#070474` = dark surface, never an accent.

**Highlight rule:** one highlight per canvas, one contiguous span of 1–4
words standing alone as a phrase. Gold on dark grounds, indigo on light
grounds, never both on one canvas, never gold text on a light ground. If
a canvas needs two highlights, the message is not clear enough — rewrite
it rather than adding one.

**Signature structures** — repeat verbatim, never reword or invent a
seventh: Chasing vs Real-Time · Responsibility vs Authority · Manual vs
Automated · Fragmented vs Single Source of Truth · Information vs
Knowledge · Reporting vs Visibility.

Full doctrine: `docs/marketing-rules.md` Part 0 and section 9.

## Non-negotiable rules

1. **Never hardcode a color, font, spacing, or radius value.** Always
   import from `tokens/tokens.css` and reference a `--color-*`,
   `--type-*`, `--radius-*`, or `--font-*` semantic variable. If a value
   you need doesn't exist as a semantic token, say so — don't invent a
   hex or a pixel value and move on.
2. **Reuse existing components before writing new ones.** Check
   `components/` first: `Button`, `Card`, `Kpi`, `StatusPill`,
   `StatusStepper`, `Logo`. Only write a new component if none of these
   fit, and if you do, follow the same pattern (semantic tokens only,
   JSDoc comment stating the brand rule it encodes).
3. **At most one `<Button variant="primary">` visible per screen.** Gold
   means "the one thing to do here." A second primary button on the
   same screen is a bug.
4. **Status colors are fixed-meaning, never repurposed:** critical=red,
   high=orange, medium=amber `#E0A800` (never gold), low/done=green,
   none=grey.
5. **Logo:** always render via the `<Logo />` component — never recreate
   the mark with divs or raw SVG by hand. Respect the lockup rules in
   `docs/logo-spec.md` (Lockup B needs ≥40px icon height, etc.) — the
   component enforces most of this itself, but check `assetsBasePath` is
   set to wherever `assets/logos/*.svg` actually resolves in this app.
6. **Website vs. marketing typography split:** if this is `rtpm.dk` or
   any website-facing page, use `--font-ui` (Inter) only — never
   `--font-display` (Barlow Semi Condensed). Barlow is marketing-only.
   See `docs/marketing-rules.md` section 7 for the full website rules
   (three-surface rhythm, no gold text highlight on the website, one CTA
   per page, indigo sparingly for category labels, proof points,
   statistics and section anchors).
7. **If this work is a marketing asset** (LinkedIn graphic, thumbnail,
   slide) rather than product/website UI, read `docs/marketing-rules.md`
   in full before generating anything — the one-highlight rule, format
   doctrine (4:5 vs 16:9), and logo rationing rules are strict and have
   no exceptions, including for before/after or comparison layouts.
8. **Icons:** thirteen module pictograms only, sharp corners, monoline,
   matching the logo's construction. Never a library icon (Lucide,
   Feather or any other set), and never applied to a role, sector or
   page type.

## When something doesn't fit

If a task needs a value, component, or pattern that doesn't exist yet in
this token/component set, stop and flag it rather than improvising a
one-off that bypasses the system. Improvised one-offs are exactly what
this repo exists to prevent.

## Where the truth lives

- Doctrine (colour meaning, hierarchy, highlight rule, signature
  structures): `docs/marketing-rules.md` Part 0 + section 9, and
  `docs/RTPM 1. Core Tokens.dc.html` sections 08–11
- Colors, type, spacing, radius, shadow: `tokens/tokens.css` (only file)
- Components: `components/*.tsx`
- Logo rules: `docs/logo-spec.md`
- Marketing/website visual rules: `docs/marketing-rules.md`
- Original source docs (for provenance only, not for daily reference):
  `docs/RTPM 0-4 *.dc.html`
