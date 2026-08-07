# RTPM Design System — sync notes

## Repo shape
This repo had no package.json/build tooling at all when the first sync ran
(2026-08-06) — just raw `.tsx` files under `components/` and `tokens/`. Added
minimal packaging (`package.json`, `tsconfig.json`, root `index.ts` barrel,
`tsup` build) purely to make it syncable. See commit "Add package.json, build
tooling, and barrel entry for design-sync".

## Components
Only 3 components exist: Button, StatusPill, StatusStepper. All are plain
React, inline `style` objects referencing `var(--color-*)` / `var(--type-*)`
tokens from `tokens/tokens.css` — no CSS-in-JS, no external component
stylesheet. `cssEntry` points directly at `tokens/tokens.css`.

## Fonts
`tokens/tokens.css` loads Inter + Barlow Semi Condensed via a Google Fonts
`@import url(...)` (added during the first sync, 2026-08-06) — matching
exactly what the five source HTML docs already load via `<link>`. This
resolved `[FONT_MISSING]` as `[FONT_REMOTE]` (informational, no action).
Real source, not a placeholder/substitute — no user sign-off needed for a
substitute, since none was used.

## Render check
Playwright + Chromium were not cached on this machine; installed fresh
(~200MB) with explicit user OK before the first render check.

## First-sync preview scope
All 3 components were authored with rich previews (no floor cards) — user
chose "author all" over floor cards since the component count is small.
Previews: `Button` (Variants/Sizes/Disabled), `StatusPill` (AllStatuses, all
5 levels), `StatusStepper` (InProgress, Overdue). All graded `good` on first
pass, no known render warns to track.

## Second sync (2026-08-06): Card + Kpi added
Added `Card` and `Kpi` (renamed from `KPI` — see below). Both authored with
rich previews on this sync (`Card`: Variants/Padding; `Kpi`: TrendStates) —
kept the "author everything" precedent from the first sync rather than
leaving them as floor cards.

**Converter limitation found — all-caps component names silently drop.**
The original component was named `KPI`. The discovery heuristic
(`isComponentName` in `lib/dts.mjs`) excludes any export matching
`^[A-Z][A-Z0-9_]+$` (treated as an enum/constant, not a component) —
`cfg.componentSrcMap` can add the name back at the first filter pass
(`lib/source-kit.mjs`), but `package-build.mjs`'s SECOND filter pass
(around the "excluded N enum/type/context/hook exports" log line) re-applies
the same heuristic unconditionally, with no override that survives it. There
is no documented config field that exempts a pinned name from that second
pass. Renamed `KPI` → `Kpi` (also `KPIProps`→`KpiProps`, `KPIOwner`→`KpiOwner`,
`KPITrend`→`KpiTrend`) rather than forking the converter script — cheaper,
permanent, and avoids a maintenance surface. **If a future component name is
all-caps (an acronym), rename it before syncing** — don't rely on
`componentSrcMap` to rescue it.

## Third sync (2026-08-06): Kpi contract change (goodDirection)
`Kpi`'s trend prop was split into `trend: KpiTrendDirection` +
`goodDirection?: KpiGoodDirection` — the old naive up=green/down=red logic
was wrong for metrics where a rising number is bad (e.g. churn, resolution
time). Re-authored the `Kpi` preview around the real axis this introduces:
`GoodDirection` sweeps all 4 combinations (up-is-good × up/down,
down-is-good × up/down) so the color logic is actually exercised both ways,
plus `MissingGoodDirection` demonstrating the safe neutral fallback when
`goodDirection` is omitted (also logs a dev `console.warn`, not visible in a
static screenshot). Verified the fix pixel-by-pixel (no PIL/ImageMagick on
this machine — wrote a throwaway PNG decoder) rather than eyeballing colors,
since red vs. green is exactly the thing this fix changes and a
misjudgment here would ship the same bug back into the design agent's
reference. The driver correctly cleared Kpi's old grade on the contract
change and left the other 4 components untouched — no manual intervention
needed.

## Fourth sync (2026-08-07): Logo added — asset-hosting gap + two real SVG bugs

Added `Logo`, which renders real SVG files from `assets/logos/` via
`<img src="{assetsBasePath}/{filename}.svg">` rather than bundling them.
This surfaced three separate, real problems — none of them design-sync
tooling issues:

**1. No hosting path for the SVGs.** `assetsBasePath` defaults to
`/assets/logos`, which nothing serves in a sync preview or (likely) a
Claude Design canvas. Fixed by shipping the actual `assets/logos/*.svg`
files as part of the upload (added `assets/**` to the `finalize_plan`
writes/deletes globs — NOT one of the base skill's standard globs, this
repo-specific addition must be re-added on every future `finalize_plan`
call for this project) and pointing the authored preview's
`assetsBasePath` at `../../../assets/logos` (mirrors the exact relative
depth `_vendor/react.js` already uses from `components/general/<Name>/`).
**Re-copy `assets/logos/*.svg` into `ds-bundle/assets/logos/` after every
`package-build.mjs`/`resync.mjs` run** — the build wipes and regenerates
`--out` entirely, and this directory isn't part of what the converter
copies itself.
Documented the underlying gap in `conventions.md` too (the design agent
must set `assetsBasePath` itself — there's no way to make the bare
default work generically).

**2. 8 of 13 logo SVGs used live `<text font-family="Barlow Semi
Condensed">` / `<text font-family="Inter">` with no fallback family and
no embedded font.** `<img>`-referenced SVGs cannot load external
stylesheets/fonts at all (browser security model) — so any consumer
without that exact font already installed got a wrong-metrics fallback
font clipped by the tight viewBox, e.g. "RTPM" → "RTPI". This is a
production bug independent of this sync (rtpm.dk itself would hit it).
Fixed by converting all 8 to real vector outlines — downloaded
Barlow Semi Condensed Bold and Inter Medium (static instance via
`fonts.googleapis.com/css2?family=Inter:wght@500`, since Inter ships only
as a variable font in google/fonts now) and used `opentype.js` to emit
per-glyph `<path>` elements. Verified geometrically (computed bounding
boxes match the original tight viewBox to within ~1.5px) before trusting
the visual check.

**3. A second, unrelated bug the outline conversion exposed:** the
descriptor lockup's "Project Control" text has a 'j' whose descender hook
extends to y=54.65, but the original `viewBox height="52"` clips it —
invisible with live text (which was already broken for reason #2), but
very visible once converted to a real vector shape ("Project" → "Proiect").
Confirmed by direct bounding-box computation, not eyeballing. Fixed by
widening `rtpm-descriptor-navy.svg` / `-white.svg` to
`viewBox="0 0 164 55"` (was 52) — the extra 3 units are transparent
padding below existing content, nothing shifts. **Every other file/text
in the set was checked and fits with margin** (see the box-check script
approach below) — this was the only overflow.

Tooling notes for whoever re-verifies Logo later:
- `.ds-sync/storybook/http-serve.mjs`'s MIME map is missing `.svg` (and
  most other non-JS/CSS/JSON/PNG types) — this is the SAME server
  `package-validate.mjs`'s render check uses internally, so without this
  fix the render check's own screenshots show broken images regardless of
  whether the SVGs are actually fine. Not committed anywhere (`.ds-sync/`
  is gitignored, scripts are re-copied fresh each sync) — **re-patch
  `MIME` in that file if debugging an image-loading component again**:
  add at least `'.svg': 'image/svg+xml'`.
- Do NOT trust "renders, non-empty root" as proof an `<img>`-based
  component looks right — `naturalWidth`/`naturalHeight` can be `0` while
  `complete` is `true` (wrong MIME type on the image response), and a
  Chromium `<img>`-SVG viewBox clip can silently drop a real glyph feature
  that inline-SVG rendering of the identical file does not. When a
  component loads external assets by URL, verify the ACTUAL decoded pixels
  (screenshot a real render), not just "no JS error."

## Re-sync risks
- **`finalize_plan` needs `assets/**` added to both `writes` and `deletes`
  manually every time** — it's not one of the base skill's standard globs.
  Forgetting it means Logo's SVGs silently don't get (re-)uploaded even
  though the component itself does.
- If more components are added to `components/` without also being
  re-exported from root `index.ts`, they won't be discovered (the converter
  bundles from the `dist/` entry, which comes from `index.ts`). Update the
  barrel when adding components.
- `tokens/tokens.css` is the sole styling source. If a future component needs
  a token that doesn't exist yet, the README's own rule applies: add it to
  `tokens/tokens.css`, never inline a hex.
- No Storybook, no per-component docs (`docs/` holds only prose HTML/MD, not
  per-component usage files) — `.prompt.md` files are synthesized from `.d.ts`
  + JSDoc + the authored preview `.tsx`, not a real doc. If real per-component
  docs get added later, point `docsDir`/`docsMap` at them.
- `.design-sync/conventions.md` was authored against a 3-component surface.
  If the DS grows meaningfully (new styling idiom, a provider gets added,
  new fixed-meaning rules), revisit it — it won't auto-update, and a stale
  convention actively misleads the design agent.
