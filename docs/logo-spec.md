# RTPM Logo Specification

**Version:** 1.0 · **Owner:** Henning Kristensen · **Status:** Approved

The mark identifies; it does not explain. Descriptors live in a dedicated
descriptor lockup at a legible size, or in surrounding copy — never
crammed into the primary mark at unreadable size.

## The three lockups

| Lockup | Composition | Use |
|---|---|---|
| **A · Primary** | Icon + RTPM | App, website header, documents, decks, email signature. 9 jobs out of 10. |
| **B · Cold contact** | Icon + RTPM + descriptor ("Project Control") | LinkedIn profile, first slide, business card, tender cover — reader doesn't yet know what RTPM is. |
| **C · Real Time** | Icon + "Real Time" | Product-family/platform contexts, video corners, campaign end cards. |

Icon alone only where a wordmark can't be read at all: app icon, favicon,
avatar, watermark.

## Construction (ratios of icon height `x` — never absolute pixels)

- **A**: wordmark 0.88x, tracking −0.034em, gap 0.28x (optical, not metric),
  Barlow Semi Condensed 700
- **B**: wordmark 0.88x (same tracking as A, cap height flush to icon top),
  descriptor 0.25x · Inter 500 · 0.01em tracking, baseline flush to icon
  bottom, 10px floor, wording is always "Project Control" in Title Case,
  tracked flush to the M
- **C**: wordmark 0.95x, tracking −0.012em, gap 0.36x, cap height centred
  on the icon
- **All**: clear space 0.5x on all four sides (1x on a photograph), measured
  from the icon bounding box

## Minimum sizes

- Lockup A: 16px icon height on screen / 8mm print
- Lockup B: **40px minimum** (12mm print) — below that the descriptor falls
  under its 10px floor, so drop to Lockup A instead. Never shrink B past
  this.
- Icon alone: 16px

## Colorways — always one flat color, never mixed

| Role | Color | Value | Use |
|---|---|---|---|
| Primary | Ink Navy | `#070474` | Default, on Paper White or near-white |
| Secondary | Signal Indigo | `#0D08D2` | Only where Ink Navy is too heavy (small screen UI) |
| Reverse | White | on Ink Navy only | The only approved dark background |
| Monochrome | Black | `#000000` | Single-color print, engraving |

**Never**: gold-only, gradient, multi-color (icon one color + wordmark
another), or status-colored (red/amber/green) logos. Gold is a layout
highlight color, never a logo color.

## The icon

Four brackets around a shared open center — several parties, one common
record. Corners are **sharp**, deliberately — rounding closes the
negative-space channels between brackets that keep it legible small, and
a soft mark beside Barlow Semi Condensed's flat terminals reads as two
drawing systems. App tile: icon at 14% inset on Ink Navy field.

## Misuse — never do this

**To the mark:** round corners, outline, re-space/stretch/skew, substitute
the typeface, add shadow/glow/bevel/3D, rotate or set on a diagonal,
reorder or mirror elements, add a tagline/year/slash inside the lockup,
box or badge it, rebuild by eye instead of by the ratios above.

**To placement:** on a busy photo area, reverse logo on mid-tone or
gradient, navy logo on dark background, breaking clear space with type
or a rule, more than one logo per surface, on a face-and-hook visual
(no mark permitted there — see marketing-rules.md), Lockup B below 40px,
icon alone where a full lockup would fit, pairing with a partner logo
without a 1x separator rule, recoloring to match a customer's brand.

## File set (all in `assets/logos/`)

| Filename | Use |
|---|---|
| `rtpm-primary-navy` / `-white` / `-indigo` / `-black` | Lockup A |
| `rtpm-descriptor-navy` / `-white` | Lockup B |
| `rtpm-realtime-navy` / `-white` | Lockup C |
| `rtpm-icon-navy` / `-white` / `-indigo` / `-black` | Icon alone |
| `rtpm-appicon` | App tile, 14% inset on Ink Navy, 1024px |

Each file already contains the complete assembled lockup (icon + wordmark
where applicable) — never recompose icon and wordmark manually as
separate elements.

**Production notes:** SVG is the master format for screen and print;
wordmark text is converted to outlines in every distributed file so the
mark never depends on Barlow Semi Condensed being installed. PNG exports
ship at 1x, 2x and 3x with a transparent background — no file carries a
background rectangle except the app tile.
