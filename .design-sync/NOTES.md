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

## Re-sync risks
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
