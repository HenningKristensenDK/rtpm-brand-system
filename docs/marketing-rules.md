# RTPM Marketing & Web Visual Rules

Full extraction from RTPM 2 (Marketing Graphics) and RTPM 4 (Website
Architecture). These govern LinkedIn graphics, video thumbnails, outreach
slides, carousels, and rtpm.dk. Read this before generating any marketing
or web asset — it's more specific than "use the brand colors."

v4 · updated 2026-08-14 · doctrine section added (external design review).
Source of truth for the doctrine: `docs/RTPM 1. Core Tokens.dc.html`,
sections 08–11.

---

# Part 0 — Doctrine

Read this before the format rules. It decides *why* a rule exists, and
settles any case the rules below don't cover.

## 0.1 Master brand principle — the tie-breaker

**RTPM should resemble a board presentation before it resembles a
marketing campaign.**

Use this whenever a visual decision is genuinely open. The objective is
not to look more creative; it is to look more authoritative, more
European, more infrastructure-grade and more enterprise-SaaS credible,
through consistency, restraint and hierarchy.

Hard limits, no exceptions:

- Do not expand the colour palette.
- Do not add new accent colours.
- Do not increase visual complexity.
- Do not weaken the one-highlight philosophy.

## 0.2 Hierarchy doctrine

Solve communication in this order. Exhaust each mechanism before
reaching for the next.

**Position > Size > Colour > Weight**

| Mechanism | What it means |
|---|---|
| Position | Where it sits on the canvas, reading order, whitespace around it. Most hierarchy problems are solved here. |
| Size | Scale contrast between the primary statement and its support. A large step reads as hierarchy; a small step reads as noise. |
| Colour | One accent per canvas, per 0.3 and section 2. Confirms what layout already established. |
| Weight | The last and smallest adjustment. If weight is doing the work, the layout above it is unsolved. |

Colour is reinforcement, not the primary communication mechanism.

## 0.3 Colour meaning — what the colours represent

The palette defines where colours may appear. This defines what they
mean. The same meaning holds across website, LinkedIn, presentations,
documents and product UI, so a reader who has seen one RTPM surface
reads the next one faster.

**RTPM Indigo — `#0D08D2`**
Insight, principle, conclusion, operating truth, key concept.
Indigo marks the thing that is true: the definition, the principle being
stated, the conclusion the reader should leave with. Default emphasis
colour on light grounds.

**RTPM Gold — `#FFCC00`**
Breakthrough, contrast, challenge, key takeaway.
Gold marks the turn in the argument: where the reader's assumption
breaks, the takeaway, the single action requested. Dark grounds only.
On the website, gold appears only as a CTA.

**Ink Navy — `#070474`**
Dark surface. Not an accent, never an emphasis colour.

Medium status is `#E0A800`, so that gold `#FFCC00` means "primary
action" and nothing else.

## 0.4 Executive credibility test

**If a canvas requires multiple highlights to communicate its message,
the message is not yet clear enough.** Rewrite the statement rather than
adding a second highlight.

---

## 1. Format doctrine — the rule most likely to be skipped

**A 16:9 asset is never a cropped 4:5. Each format is a separate design.**

| | 4:5 (1080×1350) | 16:9 (1920×1080) |
|---|---|---|
| Read as | Mobile feed, thumb-scroll | Slide, thumbnail, website hero, viewed at distance |
| Min headline | 88px | 96px (thumbnails: 132px, max 4 words) |
| Min body | 25px | 26px |
| Margins | — | 104px |
| Structure | Vertical stack, one column | Horizontal division, 2–3 zones |

**Do:** rewrite the headline per format (4 words in 16:9 is a different
sentence, not a shorter one). Reposition the subject — centered in 4:5
often belongs at a third in 16:9.

**Don't:** crop 16:9 from a 4:5 top/bottom. Don't letterbox a 4:5 into a
16:9 frame with navy bars. Don't carry 4:5 type sizes into 16:9 — they
read small at presentation distance.

---

## 2. The one-highlight rule (applies to all marketing canvases)

**HARD RULE, NO EXCEPTIONS — including before/after, comparison, and
multi-section layouts.** Exactly **one** text highlight per canvas. The
highlight colour is decided by the ground it sits on:

- **Dark ground → Gold `#FFCC00`.**
- **Light ground → Indigo `#0D08D2`.**
- **Never both colours on one canvas.**
- **Never gold text on a light ground** — it does not hold contrast and
  it reads as a warning colour.

This has been explicitly reconfirmed after review: a canvas with two
contrasting halves (old/new, before/after, good/bad) still gets exactly
one highlight, placed only on the "new"/"good" side. The "old"/"before"
side must render with zero accent — its flatness is deliberate and IS
the argument, not a gap to fill with a second highlight.

- The highlight is a single contiguous span of 1–4 words forming one
  grammatical unit. Two separated highlighted phrases = violation, even
  if each is short.
- **Reading test:** read only the highlighted words. If they do not say
  something on their own, the span is wrong.
- A gold tag/chip counts as the one highlight — if a tag is used, the
  headline itself stays white.
- Structural gold (a divider rule, step marker, swipe cue) is separate
  and doesn't count against the limit — a boundary doesn't compete with
  a word. A divider rule between two halves is structural; it is never
  a substitute for, or an argument to add, a second text highlight.
- No underline, no bold-as-emphasis, no colour other than the ground's
  one accent is a substitute for the highlight. If a word needs emphasis
  and the canvas's one highlight is already used elsewhere, that word
  gets no emphasis at all — not underline, not a different colour.
- If the canvas seems to need two highlights, apply 0.4: rewrite.

## 3. Headline rules

Sentence case, 5–7 words, Barlow Semi Condensed Bold, line-height 1.1.
No Title Case. No em-dashes in headlines. No stacked question marks on
hooks.

## 4. Logo rationing

No logo on face-and-hook posts or carousel interiors. Permitted only on:
the carousel closer, milestone/announcement cards, and banners. Always
placed artwork from `assets/logos/` — never re-typed as text.

## 5. Placeholder discipline

Every template ships with placeholder copy and figures until approved.
Three templates are **content-gated** — cannot be published until real
figures are approved: the single-stat card, the carousel data interior,
and the framework/comparison matrix.

---

## 6. Template reference

### A. Face + hook (highest-frequency asset)
- **4:5 feed post**: real photo, headline max 2 lines at 96px/1.08,
  name+role strip at base, **no RTPM logo** (this is a personal post,
  not an ad). Figure bleeds off right edge and bottom. Headline in left
  58%. Two variants: full-bleed navy (default), or light split with
  **indigo** highlight instead of gold (per 2 — gold is unreadable on
  light).
- **16:9 video thumbnail**: face right, text left, 58/42 split, headline
  132px min, max 4 words, no logo, no play-button graphic (LinkedIn
  already draws one).

### B. Carousel suite
Exactly three slide types — cover, interiors, closer. Nothing else.
- **Cover**: dark ground, headline + rehook line + profile chip + swipe
  cue, no logo.
- **Interior**: light ground (`#F7F7FB`), one idea, max 30 words body,
  phase tag, page-indicator dots. No highlight — highlight only on cover
  and closer, or the deck reads as noise.
- **Closer**: back to dark, one outcome number + one low-friction offer
  line, **RTPM wordmark permitted here only**.
- 6–9 slides total. Below six, no argument; above nine, nobody finishes.
- Margins 88px, identical across all three types so nothing shifts as
  the reader swipes.

### C. Framework / comparison matrix (16:9, content-gated)
Column headers in navy bands, row labels left in 26px caps, hairline
grid only, no zebra striping, max 4 rows. Set the final "what owners
miss" row in indigo — it's the observation, not another fact (0.3:
indigo carries the conclusion). **Never declare one framework better** —
owners choose for reasons outside the graphic. No tick/cross glyphs —
this is a comparison, not a scorecard.

### D. Single-stat card, milestone/announcement, article banner
- **Single-stat (4:5, content-gated)**: one number at 380px gold, one
  context line, source line at base — an unsourced stat isn't usable in
  this market.
- **Milestone/announcement (4:5)**: tag chip (MILESTONE/WEBINAR/LAUNCH),
  headline, date-time-location line, wordmark permitted, **light ground**
  — this is the one case where the brand speaks, not Henning personally.
  Highlight, if any, is indigo (2).
- **Article/newsletter banner (16:9)**: also reused as the rtpm.dk blog
  header. Text left 62%, icon graphic right at low opacity (the one
  permitted decorative use of the mark), headline max 3 lines at 108px.

### F. Dedicated 16:9 compositions (not crops of the 4:5 versions)
- **Single-stat 16:9**: 40/60 split with a vertical rule — number gets
  its own left zone (340px gold), statement runs up to 3 lines (88px
  white), source pinned to base of right zone.
- **Before/after 16:9**: split turns **vertical** (not horizontal like
  4:5) since a wide screen reads left-to-right. 50/50 split, 4px gold
  rule between, left grey/muted vs right navy-with-glow, takeaway band
  spanning the full width at the base. No arrow between halves — the
  gold rule and colour shift carry the direction.

---

## 7. Website (rtpm.dk) — different rules from marketing

**Typography: Inter only, everywhere.** Barlow Semi Condensed never
appears on the website — it's a marketing-only voice. A buyer moving
from the site into the product app should notice zero typeface change;
that continuity is part of the trust argument.

**No gold text highlighting on the website at all.** Gold is reserved
for exactly **one CTA button per page**, inside the one navy band —
never on headline words, never on light backgrounds.

**Indigo is the website's emphasis mechanism**, used sparingly and only
for: category labels (small caps), proof points, statistics, and section
anchors. It never becomes a decorative colour and it never appears more
than the argument requires.

**Category first, product second.** A visitor must know what kind of
thing RTPM is within four seconds. Never say "AI-powered" in the hero —
AI is an enabling capability, never the category itself.

**Three surfaces, one rhythm, no new colors:**
| Surface | Color | Role |
|---|---|---|
| Paper white | `#FFFFFF` | Default — argument, narrative (~2/3 of any page) |
| Page tint | `#F7F7FB` | Evidence — product screens, proof (cards stay white here so they lift off the ground) |
| Ink Navy | `#070474` | The commitment — once per page, carries the single gold CTA |

Never place two tinted sections adjacent — they merge and the boundary
disappears. Never draw a rule between surfaces — the tone change *is*
the boundary. The footer is the one exception allowed as a second navy
band.

**Role-based navigation, not a features menu.** Five roles (Executive,
Project Director, PMO & Controls, CIO & IT, Procurement), each with its
own question, proof format, and landing page. **No icons in the role
panel** — the thirteen module pictograms are module-only and never
apply to a role, sector, or page type.

**Homepage above the fold** must include, in one screen: category line,
one operational outcome, a live workflow-proof snippet (reuses the
linear-strip component from the marketing system), the tenant-native
trust statement, and exactly one primary action + one low-commitment
alternative — never three CTAs.

**No stock photography, no abstract illustration, no invented metrics.**
Real product screens and real workflow sequences only.

---

## 8. Quick pre-generation checklist

1. Marketing (LinkedIn/thumbnail/slide) or website (rtpm.dk)? → decides
   font: Barlow Semi Condensed vs. Inter-only.
2. 4:5 or 16:9? → these are two separate designs, never derive one from
   the other.
3. Did layout, scale and whitespace do the work before colour did?
   (0.2 — Position > Size > Colour > Weight.)
4. Exactly one highlight, one grammatical unit — gold on dark, indigo on
   light, never both (marketing) — or no text highlight at all, gold
   reserved for one CTA button (website).
5. Is a logo actually permitted on this asset type? (Carousel closer /
   milestone / banner only — not face-and-hook, not carousel interiors.)
6. Is this one of the three content-gated templates (single-stat card,
   carousel data interior, framework matrix)? If so, flag as
   placeholder-only until real figures are approved.
7. Sentence case, 5–7 words, no em-dashes, no stacked question marks.
8. Does the canvas use one of the signature structures (9) where one
   applies — in RTPM's wording, not a paraphrase?

---

## 9. Signature structures — RTPM narrative patterns

Six recurring oppositions carry the RTPM argument. Treat them as RTPM
intellectual property: the same six, in the same wording, repeated across
marketing, presentations, website and sales material. Recognition comes
from repetition, not variation. Do not invent a seventh and do not
reword an existing one.

| Structure | What it says |
|---|---|
| **Chasing vs Real-Time** | The cost of asking for status instead of seeing it. |
| **Responsibility vs Authority** | Accountability held without the means to act on it. |
| **Manual vs Automated** | Effort spent assembling the picture instead of acting on it. |
| **Fragmented vs Single Source of Truth** | One record everyone reads, rather than several that disagree. |
| **Information vs Knowledge** | Data present in the system versus understanding available to the decision. |
| **Reporting vs Visibility** | Status produced on request versus status that is simply there. |

These are the default frame for a before/after or comparison canvas
(6.F) — the "before" side is the left-hand term, and it renders flat,
with no accent.
