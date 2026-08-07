## Setup

No provider or wrapper component — these are plain React components with no
context dependency. The one thing that must be true for anything to render
correctly: **`tokens/tokens.css` must be loaded on the page.** Every component
styles itself entirely through CSS custom properties defined there; without
it, buttons render with no background/border, status pills render invisible,
and the stepper's dots and rules have no color. There is nothing to
initialize in JS — it is a stylesheet, not a theme provider.

```jsx
import 'rtpm-design-system/tokens/tokens.css';
import { Button, StatusPill, StatusStepper } from 'rtpm-design-system';
```

## Styling idiom — CSS custom properties, two layers

This system has no utility classes and no style/theme props on components.
Everything is `var(--*)` custom properties, in two layers:

- **Primitives** (`--rtpm-*`) — raw values (`--rtpm-gold`, `--rtpm-space-4`).
  Never reference these directly when composing new layout — they answer
  "what color/size is this," not "what is this for."
- **Semantics** (`--color-*`, `--type-*`, `--radius-*`) — what components
  consume and what your own layout glue should reach for too:
  `--color-surface-page`, `--color-surface-card`, `--color-text-primary`,
  `--color-text-secondary`, `--color-border-default`, `--color-action-*-bg`,
  `--color-status-{critical,high,medium,low,none}-{bg,text}`,
  `--type-body-size`, `--type-label-size`, `--radius-card`, `--radius-control`,
  `--font-ui`, `--font-display`.

Fixed rules worth respecting when composing screens: **at most one
`<Button variant="primary">` visible per screen** (gold means "the one thing
to do here"); status colors are fixed-meaning and never repurposed (critical
= red, high = orange, medium = amber — never gold, low/done = green).

## Logo — asset path is not automatic

`<Logo lockup="A" colorway="navy" size={24} />` renders the real brand mark
via `<img src="{assetsBasePath}/{filename}.svg">` — it does NOT bundle the
SVGs inline. `assetsBasePath` defaults to `/assets/logos`, which resolves
against WHATEVER app is rendering the design — there is no guarantee that
path serves anything. Before relying on the default, set `assetsBasePath`
to wherever the SVG files in this system's `assets/logos/` actually get
hosted; otherwise the logo silently renders as a broken image. Never
recreate the mark with divs/SVG-by-hand — always the real `Logo` component.

## Where the truth lives

Read `tokens/tokens.css` before styling anything custom — it is the complete
and only token source (both layers, one file). Per-component API is each
component's `<Name>.d.ts`; there are no separate per-component doc files in
this repo, so the `.d.ts` plus the component's own JSDoc is the API contract.

## Example

```jsx
<div
  style={{
    background: 'var(--color-surface-card)',
    border: '1px solid var(--color-border-default)',
    borderRadius: 'var(--radius-card)',
    boxShadow: 'var(--rtpm-shadow-raised)',
    padding: 'var(--rtpm-space-6)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--rtpm-space-4)',
  }}
>
  <StatusStepper
    steps={[
      { id: 'draft', label: 'Draft', state: 'done' },
      { id: 'review', label: 'Review', state: 'current' },
      { id: 'approved', label: 'Approved', state: 'pending' },
    ]}
  />
  <StatusPill status="high" label="High" />
  <Button variant="primary">Save changes</Button>
</div>
```
