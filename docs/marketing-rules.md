# RTPM Marketing & Web Visual Rules

Full extraction from RTPM 2 (Marketing Graphics) and RTPM 4 (Website
Architecture). These govern LinkedIn graphics, video thumbnails, outreach
slides, carousels, and rtpm.dk. Read this before generating any marketing
or web asset — it's more specific than "use the brand colors."

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
multi-section layouts.** Exactly **one** text highlight per canvas, in
yellow (`--rtpm-gold`, `#FFCC00`), on dark backgrounds only. This has
been explicitly reconfirmed after review: a canvas with two contrasting
halves (old/new, before/after, good/bad) still gets exactly one
highlight, placed only on the "new"/"good" side. The "old"/"before" side
must render with zero yellow — its flatness is deliberate and IS the
argument, not a gap to fill with a second highlight.

- The highlight is a single contiguous span of 1–4 words forming one
  grammatical unit. Two separated highlighted phrases = violation, even
  if each is short.
- A yellow tag/chip counts as the one highlight — if a tag is used, the
  headline itself stays white.
- Structural yellow (a divider rule, step marker, swipe cue) is separate
  and doesn't count against the limit — a boundary doesn't compete with
  a word. A divider rule between two halves is structural; it is never
  a substitute for, or an argument to add, a second text highlight.
- No underline, no bold-as-emphasis, no color other than yellow/indigo
  is a substitute for the highlight. If a word needs emphasis and the
  canvas's one yellow highlight is already used elsewhere, that word
  gets no emphasis at all — not underline, not a different color.

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
  **indigo** highlight instead of gold (gold is unreadable on light).
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
miss" row in indigo — it's the observation, not another fact. **Never
declare one framework better** — owners choose for reasons outside the
graphic. No tick/cross glyphs — this is a comparison, not a scorecard.

### D. Single-stat card, milestone/announcement, article banner
- **Single-stat (4:5, content-gated)**: one number at 380px gold, one
  context line, source line at base — an unsourced stat isn't usable in
  this market.
- **Milestone/announcement (4:5)**: tag chip (MILESTONE/WEBINAR/LAUNCH),
  headline, date-time-location line, wordmark permitted, **light ground**
  — this is the one case where the brand speaks, not Henning personally.
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
  gold rule and color shift carry the direction.

---

## 7. Website (rtpm.dk) — different rules from marketing

**Typography: Inter only, everywhere.** Barlow Semi Condensed never
appears on the website — it's a marketing-only voice. A buyer moving
from the site into the product app should notice zero typeface change;
that continuity is part of the trust argument.

**No gold text highlighting on the website at all.** The website's
emphasis mechanism is the category line, set in Primary Indigo, small
caps. Gold is reserved for exactly **one CTA button per page**, inside
the one navy band — never on headline words, never on light backgrounds.

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
3. Exactly one gold highlight, one grammatical unit, dark background
   only (marketing) — or no gold highlight at all, reserved for one CTA
   button (website).
4. Is a logo actually permitted on this asset type? (Carousel closer /
   milestone / banner only — not face-and-hook, not carousel interiors.)
5. Is this one of the three content-gated templates (single-stat card,
   carousel data interior, framework matrix)? If so, flag as
   placeholder-only until real figures are approved.
6. Sentence case, 5–7 words, no em-dashes, no stacked question marks.
