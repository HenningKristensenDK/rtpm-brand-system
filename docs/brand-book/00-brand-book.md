RTPM (Real Time Project Management) builds AI-first project controls for project directors, PMO leaders and executives in renewables, hyperscale data-centre and infrastructure construction. This system is Brand System v4. It covers every surface RTPM ships: the mark, the product, mobile, the agent, the marketing templates and the website.

Source of truth: the repository `HenningKristensenDK/rtpm-brand-system`. Change the brand there first; this system is updated from it.

## The doctrine, read first

- **Tie-breaker:** RTPM should resemble a board presentation before it resembles a marketing campaign. When a visual decision is open, that settles it. The palette does not grow, no accent colour is added, and no canvas gets a second highlight.
- **Hierarchy:** Position, then Size, then Colour, then Weight. Solve communication with layout, scale and whitespace before reaching for colour. Colour confirms what layout already established.
- **Stop condition:** if something is not in this system, stop and ask. No hardcoded hex values, no new components that duplicate existing ones, no library icons in place of the thirteen module pictograms.

## Content fundamentals

- Voice: authoritative, governance-grade, plain. Lead with control, accountability, real-time clarity, single source of truth and risk to COD. No hype, no soft marketing italics.
- Sentence case everywhere. Never Title Case. Headlines 5 to 7 words. No em dashes in headlines, no stacked question marks.
- Never say "AI-powered" in a hero. AI is an enabling capability, not the category.
- Signature structures, repeated verbatim, never reworded, never a seventh: Chasing vs Real-Time · Responsibility vs Authority · Manual vs Automated · Fragmented vs Single Source of Truth · Information vs Knowledge · Reporting vs Visibility. On a before/after canvas the left-hand term renders flat, with no accent.
- Every figure carries a source. An unsourced statistic is not usable in this market. Placeholder copy and figures stay marked as placeholders until approved.

## Colour

- Dark surface: `rtpm-ink-navy` (`color-surface-dark`). Never an accent.
- Insight, principle, conclusion: `rtpm-indigo`. Default emphasis on light grounds; links (`color-text-link`), selected states, chart series 1.
- Breakthrough, key takeaway, the one action: `rtpm-gold`. Text highlight on dark grounds only. In product and website it is the single primary action (`color-action-primary-bg`), at most one per screen.
- Text: `color-text-primary` on `color-surface-page` and `color-surface-card`; `color-text-secondary` for supporting copy; `color-text-on-dark` and `color-text-on-dark-muted` on `color-surface-dark`. Never pure black for text.
- Surfaces: `color-surface-page` (paper tint, evidence), `color-surface-card` (white), `color-surface-inset`. Borders: `color-border-default`, `color-border-subtle`.
- Status has fixed meaning and is never decoration: critical `color-status-critical`, high `color-status-high`, medium `color-status-medium` (amber, never gold), low/done `color-status-low`, none `color-status-none`. Pills use the `-bg` and `-text` pairs.
- Charts use `color-chart-1` to `color-chart-5` in that order, at most five series. Red only for negative values.

## The one-highlight rule (marketing)

Exactly one text highlight per canvas: a single contiguous span of 1 to 4 words that reads on its own. Gold on dark grounds, indigo on light grounds, never both, never gold text on a light ground. This holds for before/after and comparison layouts too. If a canvas seems to need two highlights, rewrite the message. The website has no text highlight at all: gold is reserved for one CTA button per page, inside the one navy band.

## Typography

- `rtpm-font-display` (Barlow Semi Condensed) is the marketing display voice: headlines on visuals, carousels and slides. Bold 700 for headlines, SemiBold 600 for sub-heads, line-height 1.1. Never in product UI or on the website.
- `rtpm-font-ui` (Inter) is everything else: body on visuals, all product and app UI, and the whole website. Weights 400, 500, 600, 700. Tabular figures in number columns.
- Product type styles: `type-display`, `type-subhead`, `type-ui-title`, `type-body` (13 to 14px base), `type-label`, `type-eyebrow`, `type-caption`.
- Marketing formats: 4:5 (1080×1350, min headline 88px, body 25px) and 16:9 (1920×1080, min headline 96px, thumbnails 132px and at most 4 words). A 16:9 is never a crop of a 4:5: each format is its own design.

## Spacing, radius, elevation

- Spacing grid: `rtpm-space-1` 4px, `rtpm-space-2` 8px, `rtpm-space-3` 12px, `rtpm-space-4` 16px, `rtpm-space-6` 24px, `rtpm-space-8` 32px.
- Radius: `radius-card` 14px for cards, `radius-control` 9px for inputs and buttons, `radius-pill` for pills.
- Shadows: `rtpm-shadow-hairline`, `rtpm-shadow-raised` (cards), `rtpm-shadow-overlay` (popovers, docks).

## The mark

- Navy mark on light grounds, white on dark. Indigo is the digital accent, never the logo colour. Never recolour, outline or add gradients.
- Always place the supplied artwork from the logos group, or the `Logo` component. Never re-type the wordmark or redraw the mark.
- The descriptor "Project Management" shows only on primary, cold-contact touchpoints. Lockup B needs at least 40px icon height.
- No logo on face-and-hook posts or carousel interiors. Permitted on the carousel closer, milestone/announcement cards and banners.

## Iconography

Thirteen module pictograms, one per confirmed module, drawn as 1.5px monoline with sharp corners (`icon-stroke`). They are module-only: never for roles, sectors or page types, and never replaced by a library icon. Sizes `icon-size-sm`, `icon-size-md`, `icon-size-lg`. No stock photography, no abstract illustration.

## Product

- App shell: one dark anchor (navy sidebar) with a light top bar. Never both dark. Logo once, in the sidebar header.
- Components: `Button` (one primary per screen), `Card`, `Kpi`, `StatusPill`, `StatusStepper`, `Logo`. Reuse before building anything new.
- The full product language (dashboards, registers, universal record, project control components, AI agent system, data visualisation, mobile, empty states, board view, operational workflow states) is in the RTPM 0 and RTPM 3 sections.

## Website (rtpm.dk)

Inter only. Three surfaces in rhythm: paper white for argument, page tint for evidence, ink navy once per page for the commitment with the single gold CTA. Never two tinted sections adjacent, never a rule between surfaces. Role-based navigation for five roles, not a features menu. Full specification in the RTPM 4 section.

## The sections of this brand book

- RTPM 1 · Core Tokens: the source of truth every other section inherits from.
- RTPM 0 · Product Design System and RTPM 3 · Completion Surfaces: the product.
- RTPM 2 · Marketing Graphics and the marketing rules: LinkedIn and campaign templates.
- RTPM 4 · Website Architecture: rtpm.dk.
- How to use Claude and stay on brand: which tool for which job, and what a brief contains.

Most components and templates are at Candidate status. Each section ends with its open decisions; treat those as undecided.

## Using the components

- Load the tokens stylesheet first. Every component styles itself through the CSS custom properties; without them buttons, pills and the stepper render without colour. There is no provider or theme wrapper.
- In code, import from the repository package: `import 'rtpm-design-system/tokens/tokens.css'` and `import { Button, Card, Kpi, Logo, StatusPill, StatusStepper } from 'rtpm-design-system'`. In a page built here, the bundle exposes them on `window.RTPM`; mount into a dedicated child node, not the host page's own React root.
- Use the semantic layer (`color-*`, `type-*`, `radius-*`) in components and layout. The `rtpm-*` primitives say what a value is, not what it is for.
- `Logo` renders the real artwork from `{assetsBasePath}/{file}.svg` and does not inline it. Set `assetsBasePath` to where the logo files are actually served; the default `/assets/logos` renders a broken image in most apps.
- Each component's types (`.d.ts`) and README are its API contract.

