# Paste this into the "RTPM brand system v4" design project

---

Four corrections to the RTPM v4 knowledge files. Each is a find-and-replace or a
small addition — do not redesign anything, do not change layout, copy, or any
value not named below.

## 1. RTPM 0. Product Design System — remove `#5652E0`

`#5652E0` is not one of the five locked chart series
(`#0D08D2`, `#00C794`, `#FF8B00`, `#00ACFF`, `#AA00D3`). Section 07 of
RTPM 1 states no sixth series colour exists and none of the five may be
substituted. It appears 11 times:

- The age-band bar charts (5 bars, each with a `#5652E0` middle segment) and the
  `#5652E0` legend swatch labelled "15–30 d".
- The five trend bars in the data-visualisation section.

Replace every `#5652E0` with `#00C794` — series 2, the correct second colour in
the fixed sequence.

## 2. RTPM 0. Product Design System — remove `#6F6DC9`

Used 4 times on the Ink Navy sidebar: the group labels "Control", "Record",
"Governance", and the "Tenant · Microsoft 365 · EU-West" line.

RTPM 1 declares only `#CFCEFF` for muted text on Ink Navy. Replace every
`#6F6DC9` with `#CFCEFF`.

## 3. RTPM 2. Marketing Graphics — two fixes

- The workflow-visual connector rule uses `#5652E0`. It is a hairline, which is
  precisely what Primary Indigo is for. Change to `#0D08D2`.
- The step-5 marker circle (68px, white "5") and a progress-bar fill both use
  `#00C794`. That is a chart category colour doing UI duty, outside its stated
  scope. Change both to `#0D08D2`.

## 4. RTPM 4. Website Architecture — one fix

The step-3 marker circle (26px, white "3") uses `#00C794`. Same issue as above.
Change to `#0D08D2`.

---

## 5. RTPM 1. Core Tokens — add the missing declarations

This is the file that causes the other three. Section 01 declares 4 brand
colours, 6 neutrals and 4 status colours. The system actually runs on about 30.
Every value below is already in constant use across all five files but is
declared nowhere, so there is no rule to follow and drift is inevitable.

Add to section 01, in the existing card style, without changing anything already
there.

**A new "Surfaces — extended" row:**

| Name | Hex | Use |
|---|---|---|
| Inset | `#FAFAFD` | Nested surface inside a card. Used 78 times across the five files. |
| Rule, inner | `#F0F0F5` | Hairline inside a card, one step lighter than Border. |
| Tint border | `#D6D4F5` | Border on an Indigo tint fill. |
| Disabled fill | `#F2F2F7` | Disabled control background. |
| Disabled label | `#B9BACB` | Disabled control text; dashed construction guides. |

**A new "Status tints" block** — each status needs a background and an
accessible label colour, or every pill in the system is improvised:

| Status | Pill background | Label |
|---|---|---|
| Critical | `#FDECEE` | `#B02A34` |
| High | `#FFF3E5` | `#B36200` |
| Medium | `#FDF4DD` | `#8A6600` |
| Low / Done | `#E8F6EB` | `#1B7A31` |

**Two hover states**, currently stated in prose in section 06 but not declared:

- Gold hover `#F2C200`
- Indigo hover `#0A06A8`

## 6. RTPM 1. Core Tokens — resolve one genuine collision

`#F0F0F5` currently carries two meanings: the inner hairline rule inside a card,
and the chart "not started / remainder" grey in the data-visualisation section of
RTPM 0.

RTPM 1 already states the principle: two meanings cannot share a hex. That is the
stated reason Medium status moved from `#FFCC00` to `#E0A800`. The same reasoning
applies here.

Pick one and note the decision in section 01:

- **Option A** — keep `#F0F0F5` as the inner rule, move the chart grey to
  `#E6E6F0` (Border). The chart grey is a fill and can afford to be a step
  darker; it also then matches the pending stepper node.
- **Option B** — keep `#F0F0F5` as the chart grey and drop the inner rule to
  `#F7F7FB` (Page).

Option A is the smaller change and reads better at chart scale.

---

## Why

There is now a `tokens/` package that is the machine-readable version of these
five files — `tokens.css` for React and `tokens.json` for anything else. It is
what `/design-sync` will publish, so whatever ends up in RTPM 1 becomes the
system every future project inherits. These edits close the gap between the two
so the documentation and the tokens do not disagree from day one.
