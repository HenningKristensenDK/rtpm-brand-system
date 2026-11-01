# RTPM Logo Specification

**Version:** 2.0 · **Date:** 2026.10.11 · **Owner:** Henning Kristensen · **Status:** Approved

Change from v1.0: two versions instead of three lockups. The "Real Time" lockup is the logo. The icon alone covers small spaces. Icon + RTPM (A) and the descriptor lockup (B) are retired, and so is the app tile. A tab icon (favicon) is added.

The mark identifies; it does not explain. The full name "Real Time Project Management" is written in the text near the logo, not inside it.

## The two versions

| Version | Composition | Use |
|---|---|---|
| **Logo** | Icon + "Real Time" | Everywhere a logo is placed: website header, decks, documents, LinkedIn, email signature, campaign end cards. |
| **Icon** | Icon alone | Where a wordmark cannot be read: browser tab, avatar, app icon, watermark. |

**Name in text.** On every page, profile, first slide and document, write "Real Time Project Management" in full the first time, then "RTPM". RTPM stays the short name, the domain (rtpm.dk) and the file-name prefix. Descriptor lines ("Project Management", "Project Control") are never part of the logo; use them in copy and infographics.

## Construction (ratios of icon height `x`)

- **Logo**: wordmark "Real Time" 0.95x, Barlow Semi Condensed 700, tracking −0.012em, gap 0.36x, cap height centred on the icon.
- **Clear space**: 0.5x on all four sides (1x on a photograph), measured from the icon bounding box.

## Minimum sizes

- Logo: 16px icon height on screen, 8mm in print.
- Icon: 16px. Below 32px use the tab icon file (below), not the master icon.

## Tab icon (favicon)

The master icon's channels between the brackets are 5.2% of its width, under one pixel at 16px, so it closes up in a browser tab. The tab icon is the same mark drawn on a 32-pixel grid with the channels set to 2 units (1px at 16px), so the four brackets stay apart. Use it only at 64px and below.

- `rtpm-favicon.svg`: navy, switches to white when the browser runs in dark mode. The default in every app.
- `rtpm-favicon.ico`: 16 and 32px navy, for browsers without SVG favicon support.
- `rtpm-favicon-180.png`: apple-touch icon.
- `rtpm-favicon-navy.svg`, `rtpm-favicon-white.svg`: fixed colour variants.

No background square. The mark sits directly on the tab.

## Colourways: always one flat colour

| Role | Colour | Value | Use |
|---|---|---|---|
| Primary | Ink Navy | `#070474` | Default, on Paper White or near-white |
| Reverse | White | `#ffffff` | On Ink Navy and on dark browser chrome |
| Icon only | Signal Indigo | `#0D08D2` | Only where Ink Navy is too heavy in small UI |
| Icon only | Black | `#000000` | Single-colour print, engraving |

Never gold, gradient, multi-colour or status-coloured logos. Indigo is never used on a dark background: it disappears there (see the tab icon).

## The icon

Four brackets around a shared open centre: several parties, one common record. Corners are sharp, deliberately: rounding closes the channels between brackets that keep it legible small.

## Misuse

**To the mark:** round corners, outline, re-space, stretch or skew, substitute the typeface, add shadow or glow, rotate, mirror, add a tagline inside the lockup, box or badge it, put it on a coloured square.

**To placement:** busy photo area, reverse logo on a mid-tone or gradient, navy logo on a dark background, breaking clear space, more than one logo per surface, on a face-and-hook visual (see marketing-rules.md), the icon alone where the logo would fit, recolouring to a customer's brand.

## File set (all in `assets/logos/`)

| Filename | Use |
|---|---|
| `rtpm-realtime-navy` / `-white` | Logo |
| `rtpm-icon-navy` / `-white` / `-indigo` / `-black` | Icon, 32px and above |
| `rtpm-favicon` (svg, ico, 180 png), `rtpm-favicon-navy` / `-white` | Tab icon, below 32px |
| `rtpm-primary-*`, `rtpm-descriptor-*` | Retired (icon + RTPM, descriptor lockup). Kept for existing apps until replaced. |

Each file contains the complete assembled mark. Never recompose icon and wordmark by hand.

**Production note:** wordmark text must be outlined in every distributed file so the mark never depends on Barlow Semi Condensed being installed.
