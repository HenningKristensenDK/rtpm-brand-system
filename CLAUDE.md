# RTPM Design System — instructions for Claude Code

This repo (`rtpm-design-system`) is the single source of truth for RTPM's
visual identity. Any other repo (e.g. `rtpm-website`) that builds UI must
follow these rules automatically — don't wait to be reminded.

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
   high=orange, medium=amber (never gold), low/done=green, none=grey.
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
   per page).
7. **If this work is a marketing asset** (LinkedIn graphic, thumbnail,
   slide) rather than product/website UI, read `docs/marketing-rules.md`
   in full before generating anything — the one-highlight rule, format
   doctrine (4:5 vs 16:9), and logo rationing rules are strict and have
   no exceptions, including for before/after or comparison layouts.

## When something doesn't fit

If a task needs a value, component, or pattern that doesn't exist yet in
this token/component set, stop and flag it rather than improvising a
one-off that bypasses the system. Improvised one-offs are exactly what
this repo exists to prevent.

## Where the truth lives

- Colors, type, spacing, radius, shadow: `tokens/tokens.css` (only file)
- Components: `components/*.tsx`
- Logo rules: `docs/logo-spec.md`
- Marketing/website visual rules: `docs/marketing-rules.md`
- Original source docs (for provenance only, not for daily reference):
  `docs/RTPM_0-4_*.html`
