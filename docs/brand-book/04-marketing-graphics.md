# RTPM 2 · Marketing Graphics

Governs the LinkedIn and marketing graphics templates (Brand System v4, step 2 of 4, high-frequency marketing assets); all tokens are inherited from RTPM 1 Core Tokens, and this is the one place the gold text highlight is permitted on a shipped surface.

## LinkedIn and marketing graphics

Templates are specified at true export dimensions (shown at 40% in the source). Marketing runs the dark, bold end of the system: the same tokens as the product, turned up. Every canvas is measured in real pixels, so type sizes read straight off the spec. All copy, numbers and subject matter are placeholder: what is under review is the template system and the visual hierarchy, not the content.

### Global rules

**One highlight, not one word**

- One text highlight per canvas in `#FFCC00`: a single contiguous span of one to four words forming one grammatical unit, on dark only.
- Two separated text highlights is the violation, not two words.
- A yellow tag counts as the highlight. The headline then stays white.
- Structural gold is separate and is not a text highlight: one divider rule, step marker or swipe cue per canvas is permitted alongside the text highlight, because a boundary or a marker does not compete with a word.
- On light grounds the highlight is Indigo `#0D08D2`. Never both colours on one canvas.
- If a canvas needs two highlights to communicate, the message is not clear enough yet (see RTPM 1, section 10).

**Sentence case, 5 to 7 words**

- Headlines: Barlow Semi Condensed Bold, line-height 1.1.
- No Title Case, no em dashes in headlines, no question marks stacked on hooks.

**Logo is rationed**

- No logo on face-and-hook or carousel interiors.
- Permitted on the closer, milestone cards and banners.
- Placed artwork only, never re-typed.

**Placeholder until approved**

- Every canvas ships with placeholder copy and placeholder figures. Nothing is populated until RTPM approves the case-study numbers and subject matter.

### Format doctrine: two formats, two designs

Status: Candidate for locking. A 16:9 asset is never a cropped 4:5. Each format is composed for where it is read.

| | 4:5 Mobile-first | 16:9 Presentation-first |
|---|---|---|
| Canvas | 1080 × 1350 | 1920 × 1080 |
| Read where | At 400px on a phone | Slide deck, video thumbnail, website hero; all viewed on a wide screen at distance |
| Minimum headline | 88px | 96px (thumbnails: 132px minimum, four words maximum) |
| Body | Minimum 25px; nothing below 24px survives | 26px |
| Composition | Vertical stacking. One column, information descending. Never side-by-side columns (they halve to unreadable) | Horizontal division. Content sits in two or three vertical zones. The width is the asset: one centred headline wastes the format |
| Margins | Not stated at doctrine level; 88px on face + hook 4:5 and carousel | 104px, wider than 4:5 so the composition breathes on a projected screen |
| Safe zone | Bottom 180px is at risk (caption and swipe cue crowd it). Nothing essential below 1170px | Not stated |
| Test | Thumb-scale test: the asset must land its point at 25% before it earns the tap | |

Do:
- Rewrite the headline for each format. Four words in 16:9 is a different sentence, not a shorter one.
- Reposition the subject. A figure centred for 4:5 belongs at a third in 16:9.
- Treat the two as siblings sharing tokens, not one asset in two sizes.

Don't:
- Export 16:9 by cropping the top and bottom off a 4:5. Margins and type scale both break.
- Letterbox a 4:5 into a 16:9 frame with navy bars.
- Carry 4:5 type sizes into 16:9. They read small at presentation distance.

## A. Face + hook overlay

The stop-scroll asset. Highest frequency in the system.

### Face + hook: 4:5 feed post

1080 × 1350. Status: Candidate for locking.

- **Purpose:** Henning's personal-brand post. A face and one sharp line: the line does the work, the face buys the second of attention that lets it be read.
- **Must include:** real talking-head photo, one headline of max two lines, no RTPM logo. Name and role strip at the base.
- **Layout:** figure bleeds off the right edge and the bottom. Headline occupies the left 58% with 88px margins. Headline 96px / 1.08.
- **Variants:**
  - Variant 1, full-bleed navy (default). Yellow highlight.
  - Variant 2, light split, for contrast in a feed run. Indigo highlight replaces yellow on light ground.
- **Logo:** not permitted.
- **Values in the visual example:** variant 1 headline 96px / 1.08 white with the highlight span in `#FFCC00`; variant 2 headline 92px / 1.08 in `#15162B` with the highlight span in `#0D08D2`, preceded by an Inter 26px / 600 uppercase indigo tag; name strip Inter 34px / 700 white, role Inter 27px / 400 in `#CFCEFF`.

Do:
- Let the figure crop at the edge. A floating cut-out with air around it reads as a stock asset.
- Apply the reading test: read only the highlighted words. If they do not say something on their own, the span is wrong.
- On the light variant, switch the highlight to indigo. Yellow on white is unreadable.

Don't:
- Add the RTPM logo. This is a personal post; the logo makes it an ad.
- Run the headline over the face. Text stays in its own column.
- Exceed two lines of headline, or drop below 88px type. It must survive a phone thumbnail.

### Face + hook: 16:9 video thumbnail

1920 × 1080. Status: Candidate for locking.

- **Purpose:** video thumbnail. Read at 320px wide in a feed, so it carries three or four words and nothing else.
- **Must include:** face, headline of max four words, no RTPM logo. A topic tag is permitted above the headline.
- **Layout:** face right, text left, split at 58/42. Headline 132px minimum. No play button: LinkedIn draws its own and two compete.
- **Highlight:** the topic tag is the canvas's one highlight; the whole headline is set in white.
- **Logo:** not permitted.
- **Values in the visual example:** topic tag Inter 30px / 600 uppercase `#FFCC00`; headline Barlow Semi Condensed 148px / 700 / 1.03 white; name Inter 32px / 500 `#CFCEFF` at 104px from the left.

Do:
- Use the tag line to carry the specifics so the headline can stay short.
- Set the whole headline in white. The tag is already the canvas's one highlight.

Don't:
- Add a play triangle, a red circle, or an arrow pointing at the face.
- Reuse the 4:5 headline. Four words is a different sentence, not a crop.

## B. Carousel suite

Cover, interior, closer. 1080 × 1350. Status: Candidate for locking.

A carousel is cover, N interiors, closer. Nothing else exists.

| Slide type | Must include | Ground | Logo |
|---|---|---|---|
| Cover | Headline, rehook line, profile chip, swipe cue | Dark (navy), so the deck opens on contrast | No RTPM logo |
| Interior | Phase tag, one idea, page-indicator dots. Max 30 words of body | Light `#F7F7FB`: interiors are read, not scanned | No |
| Closer | One outcome number, one low-friction offer line | Back to dark, closing the loop with the cover | RTPM wordmark permitted |

Shared grid:

- **Margins 88px**, identical on all three types, so type does not shift as the reader swipes.
- **Dark, light, dark:** cover and closer navy, interiors `#F7F7FB`. Highlight on cover and closer only; a deck with yellow on every slide reads as noise.
- **Indicator bottom-left:** dots on interiors, always the same position. Current dot indigo on light and yellow on dark.
- **6 to 9 slides.** Below six there is no argument. Above nine nobody finishes.
- **Interior variants:** text-only, and data.

Values in the visual example:

| Element | Value |
|---|---|
| Cover tag | Inter 27px / 600 uppercase `#FFCC00` |
| Cover headline | Barlow Semi Condensed 116px / 700 / 1.05 white |
| Cover rehook line | Inter 30px / 400 / 1.5 `#CFCEFF` |
| Profile chip | Name Inter 30px / 700 white; role Inter 25px / 400 `#CFCEFF` |
| Swipe cue | "Swipe" Inter 26px / 600 white; arrow 34px / 600 `#FFCC00` |
| Interior phase number | Barlow Semi Condensed 46px / 700 `#0D08D2`; phase label Inter 25px / 600 `#595B78` |
| Interior headline | 100px / 1.06 (text variant), 92px / 1.06 (data variant), `#15162B` |
| Interior body | Inter 32px / 400 / 1.55 `#595B78` (text variant) |
| Data rows | Label Inter 26px / 500, value Inter 28px / 700, `#15162B` |
| Page indicator | Inter 24px / 500 `#8A8CA6` ("2 of 6") |
| Closer number | Barlow Semi Condensed 250px / 700 / 0.9 `#FFCC00` |
| Closer statement | Barlow Semi Condensed 78px / 700 / 1.1 white |
| Closer offer line | Inter 30px / 400 / 1.55 `#CFCEFF` |

Do:
- Carry the cover's number through to the closer. The deck should resolve, not just stop.
- Keep one idea per interior. If a slide needs a second sub-head, it is two slides.
- Use the chart-sequence green for the one bar that contradicts the expectation.

Don't:
- Put the wordmark on interiors, or the profile chip on every slide.
- Alternate dark and light slide by slide. Dark opens, light explains, dark closes.
- Number the cover. Slide 1 has no phase tag number; the dots start on slide 2.

## C. Workflow visuals

Linear strip 16:9, vertical stack 4:5, plus the before/after split 4:5.

### Linear strip: 16:9

1920 × 1080, max five steps. Status: Candidate for locking.

- **Purpose:** show an operational loop end to end in one wide image, the sequence a buyer recognises from their own project. Reused directly as the hero workflow sequence on rtpm.dk (see RTPM 4. Website Architecture, homepage above the fold).
- **Must include:** max five numbered steps and a takeaway title: a claim, not a topic label. "Early warning to live report in one day", not "Our workflow".
- **Layout:** steps on one baseline, equal width, connected by a 3px hairline. Step numbers in indigo circles on light. Body 26px, step label 38px. Owner or elapsed time under each step where it makes the point.
- **Highlight:** final step marked in chart green.
- **Logo:** icon permitted (per lock tracker).
- **Values in the visual example:** eyebrow Inter 27px / 600 `#0D08D2`; title Barlow Semi Condensed 96px / 700 / 1.05; step number Inter 30px / 700 white; step label Inter 38px / 600 / 1.25; body Inter 26px / 400 / 1.45 `#595B78`.

Do:
- Mark the final step in chart green. It is the outcome, not another step.
- Name the role that acts in each step. A workflow with no actors is a diagram of nothing.

Don't:
- Use arrowheads between steps, or icons inside the numbered circles.
- Title it with a noun phrase. The title is the takeaway.

### Vertical stack: 4:5

1080 × 1350, max four steps. Status: Candidate.

- **Must include and rules:** max four numbered steps, one title line. Mobile-first: the connector runs down the left at x=124px, step labels 44px, body 28px. Four is the ceiling: a fifth step will not clear the caption fold in a feed.
- **Highlight:** the final step marker is the gold (structural gold); the headline stays white.
- **Logo:** not permitted.
- **Values in the visual example:** title Barlow Semi Condensed 88px / 700 / 1.08 white on dark; step number Inter 32px / 700; step label Inter 44px / 600 / 1.2 white; body Inter 28px / 400 / 1.45 `#CFCEFF`.

Do: let the final step marker be the gold. It is the payoff, so the headline stays white.

Don't: compress five steps in by shrinking type. Cut a step instead.

### Before / after split: 4:5

1080 × 1350, exactly one contrast. Status: Candidate.

- **Must include and rules:** exactly one contrast idea, split top and bottom at 50%. Top half light and muted: the old way. Bottom half navy with the indigo glow: the RTPM way.
- **Gold:** the divider is a 4px gold rule, the only gold on the canvas.
- **Logo:** not permitted.
- **Values in the visual example:** labels Inter 27px / 600 ("Today" `#8A8CA6`, "With RTPM" `#FFCC00`); headlines Barlow Semi Condensed 92px / 700 / 1.06 (`#595B78` top, white bottom); supporting lines Inter 29px / 400 / 1.5 (`#8A8CA6` top, `#CFCEFF` bottom).

Do: set the "today" half in muted grey. It should feel flat, because that is the argument.

Don't: use red on the "before" half. This is a contrast, not a fault.

## D. Framework matrix

1920 × 1080, real standards only. Two-column comparison. Status: Candidate for locking. The pattern is under review; the subject matter is not.

- **Purpose:** establish domain credibility. A buyer who recognises the comparison as accurate extends trust to everything else on the feed. Accuracy is therefore a content gate, not a design one.
- **Must include:** two-column or 2×2 structure, bullets of six words maximum, a row-label column so the comparison is like-for-like. Populated only from RTPM-approved source material.
- **Layout:** light ground (reference material). Column headers in navy bands, row labels left in 26px caps. Hairline grid only, no zebra. Max four comparison rows.
- **Highlight:** final row set in indigo (the observation).
- **Logo:** optional icon (per lock tracker).
- **Values in the visual example:** eyebrow Inter 26px / 600 `#0D08D2`; title Barlow Semi Condensed 84px / 700 / 1.05; column header Barlow Semi Condensed 52px / 700 white with sub-label Inter 24px `#CFCEFF`; row label Inter 26px / 600 `#595B78`; cells Inter 32px / 500 `#15162B`; final row Inter 32px / 600 `#0D08D2`.

Do:
- Name the specific edition or option in the column sub-label once approved. Precision is the whole asset.
- Set the final row in indigo. It is the observation, not another fact.
- Verify every figure against source before posting. One wrong number costs the credibility of the account.

Don't:
- Declare one framework better. Owners choose frameworks for reasons outside this graphic.
- Use tick and cross glyphs. This is a comparison, not a scorecard.
- Exceed four rows, or run bullets past six words.

## E. Stat, announcement, banner

The short-form set.

### Single-stat card: 4:5

1080 × 1350, one number, nothing else. Status: Candidate. Content-gated.

- **Must include and rules:** one dominant number and one line of plain-language context. Number at 380px in gold, source line at the base: a stat with no attribution is not usable in this market. Shown with placeholder digits; the template stays unpopulated until a figure is approved.
- **Logo:** not permitted.
- **Values in the visual example:** context line Inter 27px / 600 `#CFCEFF`; number Barlow Semi Condensed 380px / 700 / 0.82 `#FFCC00`; outcome statement Barlow Semi Condensed 76px / 700 / 1.1 white, two lines maximum; source Inter 25px / 400 / 1.5 `#CFCEFF`.

Do: cite the source in full, and keep the digit count to three characters or fewer at this size.

Don't: populate this template until the figure and its source are approved.

### Milestone / announcement: 4:5

1080 × 1350, webinar, launch, milestone. Status: Candidate.

- **Must include and rules:** tag chip (MILESTONE / WEBINAR / LAUNCH), headline, and a date-time-location line. RTPM wordmark permitted. Light ground so it reads as information rather than opinion: announcements are the one case where the brand speaks, not Henning.
- **Logo:** wordmark permitted in the template text; the lock tracker lists "Yes, icon" (see source).
- **Values in the visual example:** tag Inter 26px / 700; headline Barlow Semi Condensed 104px / 700 / 1.05 `#15162B`; description Inter 31px / 400 / 1.55 `#595B78`; labelled list with labels Inter 25px / 600 `#8A8CA6` (Date, Where, Host) and values Inter 31px / 600 `#15162B`; date format "DD Month YYYY · HH:MM CET".

Do: set date, place and host as a labelled list. It gets screenshotted and forwarded.

Don't: put a registration URL on the canvas. Links go in the post, not the image.

### Article / newsletter banner: 16:9

1920 × 1080, header art for long-form. Reused as the blog header on rtpm.dk. Status: Candidate for locking.

- **Purpose:** header art for a long-form post or newsletter issue; the same asset carries the article template on the website.
- **Must include:** headline of max three lines and a byline. Issue or series number where one exists.
- **Layout:** text left in the first 62%, icon graphic right. No face here; the article is the subject. Headline 108px. Byline strip at the base separated by a hairline.
- **Logo:** the icon as a large low-opacity graphic (watermark). This is the one permitted decorative use of the mark. Max 20% opacity, never crossing the headline.
- **Values in the visual example:** series line Inter 28px / 600 `#FFCC00`; headline Barlow Semi Condensed 108px / 700 / 1.04 white; byline name Inter 32px / 700 white, role Inter 26px / 400 `#CFCEFF`, read time Inter 26px / 500 `#CFCEFF`.

Do:
- Use the icon as a large low-opacity graphic. This is the one permitted decorative use of the mark.
- Number the issues. A series implies continuity, which is the point of a newsletter.

Don't:
- Add a face at full size. The banner competes with the face-and-hook asset if you do.
- Take the watermark above 20% opacity, or let it cross the headline.

## F. Dedicated 16:9 compositions

Composed for width, not cropped from 4:5.

### Single-stat: 16:9

1920 × 1080. Slide, thumbnail and website hero. Sibling of the 4:5 card, not a crop of it. Status: Candidate for locking. Content-gated.

- **How it differs from 4:5:** the 4:5 stacks number over statement. Here they sit side by side, because the width allows the eye to take both in one movement. The number gets its own left zone with a rule dividing it from the argument.
- **Must include:** one number, one statement, one source line. Placeholder digits until a figure is approved.
- **Layout:** split 40/60 with a 2px vertical rule, both zones full-height between 104px margins. Number 340px in gold, statement 88px white, source 26px pinned to the base of the right zone.
- **Ambiguity:** the layout rule states the number at 340px, while the Don't line states "At this width 300px balances the statement" (see source). The visual example uses 340px.
- **Logo:** icon permitted (per lock tracker).
- **Values in the visual example:** context line Inter 27px / 600 `#CFCEFF`; number 340px / 700 / 0.84 `#FFCC00`; statement 88px / 700 / 1.1 white; source Inter 26px / 400 / 1.5 `#CFCEFF`.

Do:
- Let the statement run to three lines here. The width earns the extra reading.
- Pin the source line to the base of the right zone so it aligns with the number's baseline.

Don't:
- Centre the number. The left zone is what makes this a landscape composition.
- Carry the 380px number size across. At this width 300px balances the statement.

### Before / after: 16:9

1920 × 1080. The contrast runs left to right, not top to bottom. Status: Candidate for locking.

- **How it differs from 4:5:** the 4:5 splits horizontally because a thumb scrolls down. A wide screen reads left to right, so the split turns vertical and the two states sit in argument with each other rather than in sequence.
- **Must include:** exactly one contrast idea, two labelled states, and a single takeaway line spanning the base.
- **Layout:** 50/50 vertical split, 4px gold rule between. Left grey and muted, right navy with the glow. Each half runs 104px margins top and bottom: tag and headline at the top, supporting line pinned to the base above a hairline. Headlines 96px, two lines, identical line count on both halves. Takeaway band 132px across the full width in navy.
- **Logo:** wordmark, housed in the base band.
- **Values in the visual example:** labels Inter 27px / 600 ("Today" `#8A8CA6`, "With RTPM" `#FFCC00`); headlines 96px / 700 / 1.06 (`#595B78` left, white right); supporting lines Inter 30px / 400 / 1.5 (`#8A8CA6` left, `#CFCEFF` right); takeaway Inter 30px / 500 white.

Do:
- Use the base band for the takeaway. It resolves the split and gives the wordmark a home.
- Keep both headlines to the same line count. Asymmetry reads as an error, not emphasis.

Don't:
- Keep the horizontal split from the 4:5 version. In a wide frame it reads as two unrelated banners.
- Add an arrow between the halves. The gold rule and the colour shift carry the direction.

## Open decisions and lock status

### G. Lock tracker

Patterns locked, content unpopulated.

| Template | Format | Logo permitted | Status |
|---|---|---|---|
| Face + hook overlay | 4:5 | No | Candidate |
| Face + hook thumbnail | 16:9 | No | Candidate |
| Carousel cover | 4:5 | No | Candidate |
| Carousel interior, text | 4:5 | No | Candidate |
| Carousel interior, data | 4:5 | No | Candidate |
| Carousel closer | 4:5 | Yes, wordmark | Candidate |
| Workflow, linear strip | 16:9 | Yes, icon | Candidate |
| Workflow, vertical stack | 4:5 | No | Candidate |
| Before / after split | 4:5 | No | Candidate |
| Framework matrix | 16:9 | Optional icon | Candidate |
| Single-stat card | 4:5 | No | Candidate |
| Milestone / announcement | 4:5 | Yes, icon | Candidate |
| Article / newsletter banner | 16:9 | Yes, watermark | Candidate |
| Single-stat, dedicated composition | 16:9 | Yes, icon | Candidate |
| Before / after, dedicated composition | 16:9 | Yes, wordmark | Candidate |
| Format doctrine, 4:5 vs 16:9 | Rule | n/a | Candidate |

No template is Locked; every row is Candidate. In the section headers, nine items (format doctrine, both face + hook formats, carousel suite, linear strip, framework matrix, article banner, single-stat 16:9, before/after 16:9) are marked "Candidate for locking" and the vertical stack, before/after 4:5, single-stat 4:5 and milestone are marked "Candidate".

### Content gates

Single-stat (both formats), carousel data interior and framework matrix are locked as patterns only. They stay unpopulated until RTPM approves the figures and the subject matter. No number on any canvas in this document is a claim.

### Open requests from the source ("Three things I need from you")

1. **Judge the pattern.** Every figure and every subject on these canvases is placeholder. What is being reviewed is the grid, the hierarchy and the type scale. Approve those and the templates can be populated later without reopening the design.
2. **Content gates.** Three templates cannot be published until content is approved: single-stat card, carousel data interior, and the framework matrix. They are locked as patterns, unpopulated as assets.
3. **A landscape portrait.** The 16:9 formats are composed independently, not cropped from 4:5. That needs a wide-frame photograph with shoulder room on one side; the current cut-out is a portrait crop.

### Inconsistencies noted in the source

- Single-stat 16:9 number size: 340px (layout rule and example) versus 300px (Don't line).
- Face + hook 16:9 headline: rule states 132px minimum; the example uses 148px (consistent with a minimum).
- Face + hook 4:5 light variant: rule states 96px headline; the example uses 92px.
- Milestone / announcement logo: template text says "RTPM wordmark permitted"; lock tracker says "Yes, icon".
