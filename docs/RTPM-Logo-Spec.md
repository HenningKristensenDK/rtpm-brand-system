# RTPM Logo Specification

**Version:** 1.0
**Date:** 2026.08.04
**Owner:** Henning Kristensen
**Status:** Approved — insert as a section of the RTPM Brand System

> Paste this file into the brand system as the logo section. It is the source of truth for the mark. Changes require a version bump and a dated changelog entry.

---

## 1. Principle

The mark identifies; it does not explain. The previous lockup carried "Project Management" at a size nobody could read, which signalled indecision rather than clarity. Descriptors now live either in a dedicated descriptor lockup at a legible size, or in the copy beside the logo, which lets the same identity address a project director and a CIO without being redrawn.

---

## 2. The three approved lockups

| Lockup | Composition | Use |
|---|---|---|
| **A · Primary** | Icon + RTPM | Application, website header, documents, decks, email signature. Anywhere the reader already knows who RTPM is. Nine jobs out of ten. |
| **B · Cold contact** | Icon + RTPM + descriptor | LinkedIn profile, first slide, business card, tender cover, trade stand. Anywhere the reader does not yet know what RTPM is. |
| **C · Real Time** | Icon + Real Time | Product-family and platform contexts where the words carry more than the initials: video corners, campaign end cards, partner material. |

The icon alone is used only where a wordmark cannot be read at all: app icon, favicon, avatar, watermark.

---

## 3. Construction

Every dimension is a ratio of icon height, written **x**. Nothing is set in absolute pixels, so the lockup rebuilds correctly at any size without being re-judged by eye.

| Lockup | Element | Value | Note |
|---|---|---|---|
| All | Icon | x — square, sharp corners | Defines every other dimension |
| A | Wordmark size | 0.88 x | Barlow Semi Condensed 700 |
| A | Tracking | −0.034 em | Identical to B, so the two lockups match |
| A | Gap | 0.28 x | Optical, not metric |
| B | Wordmark size | 0.88 x | Cap height flush to icon top |
| B | Wordmark tracking | −0.034 em | Identical to A |
| B | Descriptor | 0.25 x · Inter 500 · 0.01 em | Baseline flush to icon bottom · 10px floor |
| B | Descriptor wording | Project Control | Title Case, tracked flush to the M |
| C | Wordmark size | 0.95 x | Barlow Semi Condensed 700 |
| C | Tracking · gap | −0.012 em · 0.36 x | Cap height centred on the icon |
| All | Clear space | 0.5 x on all four sides | Measured from the icon bounding box |

**Type:** Barlow Semi Condensed 700 for all wordmarks. Inter 500 for the descriptor. No other typeface may be substituted.

---

## 4. Clear space and minimum sizes

- Clear space is **0.5 x** on all four sides. No type, image edge, rule or button may enter it. On a photograph, clear space doubles to **1 x**.
- **Lockup A:** minimum 16px icon height on screen, 8mm in print.
- **Lockup B:** minimum 40px icon height on screen, 12mm in print. Below 40px the descriptor would fall under a 10px floor, so the descriptor is dropped and lockup A is used instead.
- **Icon alone:** minimum 16px.
- Every file is checked at 16px before release.

---

## 5. Colourways

| Role | Colour | Value | Use |
|---|---|---|---|
| Primary | Ink Navy | `#070474` | Default. On Paper White or any near-white surface. |
| Secondary | Signal Indigo | `#0d08d2` | Only where Ink Navy is unavailable or too heavy, e.g. a small screen UI mark. |
| Reverse | White | `#ffffff` on `#070474` | The only approved dark background is Ink Navy. |
| Monochrome | Black | `#000000` | Single-colour print, engraving, stamps, third-party templates that reject colour. |

The logo is always **one flat colour**.

### Not permitted

- Gold-only logos
- Gradient logos
- Multi-colour logos, including a coloured icon beside a differently coloured wordmark
- Status-colour logos in red, amber or green

Accent Gold is a highlight colour in layouts and never a logo colour.

---

## 6. The icon

Four brackets around a shared open centre: several parties, one common record.

Corners are **sharp**. Softening was tested and rejected: the narrow negative-space channels between the brackets are what make the mark legible small, and rounding closes them from both sides. Sharp corners also match Barlow Semi Condensed, which has flat square terminals — a soft mark beside hard letters reads as two drawing systems.

App tile: icon at a 14% inset on an Ink Navy field.

---

## 7. Misuse

### Never do this to the mark

Round the icon corners. Outline the icon or the letters. Re-space, stretch, condense or skew the wordmark. Substitute another typeface for Barlow Semi Condensed. Add a shadow, glow, bevel or 3D extrusion. Rotate the lockup or set it on a diagonal. Re-order the elements or mirror the lockup. Add a tagline, year, product name or slash inside the lockup. Enclose the lockup in a box, pill or badge. Rebuild the lockup by eye instead of using the ratios in section 3.

### Never do this to placement

Place the logo on a busy area of a photograph. Place the reverse logo on a mid-tone or on a gradient. Place the navy logo on a dark background. Break clear space with type, a rule, a button or an image edge. Use more than one logo per surface. Put the logo on a face or hook visual, where no mark is permitted. Use lockup B below 40px icon height. Use the icon alone where the lockup would fit. Pair the logo with a partner logo without a 1 x separator rule. Recolour the logo to match a customer's brand.

---

## 8. File set

| Filename | Format | Use |
|---|---|---|
| `rtpm-primary-navy` | SVG · PNG | Lockup A on light |
| `rtpm-primary-white` | SVG · PNG | Lockup A on Ink Navy |
| `rtpm-primary-indigo` | SVG | Lockup A, secondary colourway |
| `rtpm-primary-black` | SVG | Lockup A, single-colour print |
| `rtpm-descriptor-navy` · `-white` | SVG · PNG | Lockup B, cold contact |
| `rtpm-realtime-navy` · `-white` | SVG · PNG | Lockup C |
| `rtpm-icon-navy` · `-white` · `-indigo` · `-black` | SVG · PNG | Icon alone |
| `rtpm-appicon` | SVG · PNG 1024 | App tile, 14% inset on Ink Navy |

**Production notes.** SVG is the master format for screen and print. Wordmark text must be converted to outlines in every distributed file, so the mark cannot break where Barlow Semi Condensed is not installed — the SVGs in this handoff still carry live text and must be outlined once in a vector editor before distribution. PNG exports are produced at 1x, 2x and 3x with a transparent background. No file contains a background rectangle except the app tile.
