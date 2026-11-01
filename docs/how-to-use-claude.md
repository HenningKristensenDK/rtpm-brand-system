# How to use Claude and stay on brand

Internal · Henning & Ranjith · RTPM Brand System v4

Two people, three tools, several projects, one brand system. The website, RTPM Google, Microsoft, EU Sovereign and whatever follows all read from the same source. This is how the work moves between them without drifting.

## The one rule that settles arguments

RTPM should resemble a board presentation before it resembles a marketing campaign. When a visual decision is genuinely open, that decides it. The palette does not expand, no accent colour is added, and no screen gains a second highlight to resolve an ambiguity.

Underneath it sits the hierarchy order: Position, then Size, then Colour, then Weight. Solve communication with layout, structure, scale and whitespace first. Colour confirms what layout already established.

## Where the brand system lives

One repository, one truth: `HenningKristensenDK/rtpm-brand-system` (local folder `C:\Users\henni\rtpm-design-system`). Everything else reads from it. Nothing is redefined locally.

| File | What it governs |
|---|---|
| `tokens/tokens.css` | Every colour, type size, space, radius. The only file that may contain a hex value. |
| `components/` | Button, Card, Kpi, StatusPill, StatusStepper, Logo. Reuse before writing anything new. |
| `docs/marketing-rules.md` | The full doctrine: colour meaning, hierarchy, highlight rule, signature structures, website rules. |
| `docs/RTPM *.dc.html` | The five v4 specification documents and the hub. |
| `CLAUDE.md` | The short version Claude Code reads automatically at the start of every session. |
| `docs/logo-spec.md` | Lockups, clear space, minimum sizes, production notes. |

Derived copies, never edited by hand:
- The Claude design system "RTPM Design System" (the organisation default). Claude Design, Slides and Design artifacts use it automatically. It is updated from this repo.
- `docs/marketing-rules.md` copied into the Claude Projects that write content.

## Which tool for which job

Two layers, not three. Design decides what a screen says and in what order. Code builds it. Skip the middle layer: every extra hand-off is a place where detail slips.

**Claude Design: decide the screen.** A new dashboard is a hierarchy problem before it is a code problem: what a project director sees in three seconds, what comes second, what should not be there at all. Faster to settle visually. The RTPM design system is the default, so the rules apply without being asked for. State the format (4:5 or 16:9, marketing or website), because that decides typeface and highlight colour.

**Claude Code: build it.** Code implements a design that exists, rather than interpreting one that was described. `CLAUDE.md` loads automatically, so the token and component rules are already in force. For marketing work, add "read docs/marketing-rules.md first": the full doctrine lives there, not in `CLAUDE.md`.

**Claude Project: research, writing, architecture.** Where accumulated context belongs: industry research, knowledge files, positioning, post copy, comments, and the question of what to build (modules, priority, data model). Not a relay between design and code. Nothing loads automatically here, so `marketing-rules.md` is added to the project's knowledge files.

## What a brief contains

A request for a graphic carries the story, not the design. Colour, typeface, highlight and margins are already decided; restating them only creates room to contradict the system. Four things are worth saying:

1. The one point the reader should leave with. If it takes two sentences, it is not ready.
2. The format: 4:5 for the feed, 16:9 for slides and thumbnails. These are two separate designs, never a crop of one another.
3. Whether a signature structure applies: Chasing vs Real-Time, Responsibility vs Authority, Manual vs Automated, Fragmented vs Single Source of Truth, Information vs Knowledge, Reporting vs Visibility. Recognition comes from repeating these, in RTPM's wording.
4. The figure and its source, if the graphic rests on one. An unsourced statistic is not usable in this market.

Research stays in the project. What crosses over is the conclusion it produced, not the material behind it.

## Staying in sync

Sync is git, not Claude. Same routine for both of us, every session, in whichever repo you are working in.

- **Before you start:** `git checkout main` then `git pull`. This pulls down the other person's work first.
- **While you work:** never commit straight to main. Ask Claude Code to branch first (`feat/…`, `docs/…`, `fix/…`), then push and open a pull request. Nothing is official until it is merged.
- **After the merge:** `git checkout main` then `git pull`.

A file's date on disk only changes if its content changed. `git status` is the measure, not File Explorer.

## One thing to check before you brief

Marketing and website carry different rules: different typeface, different use of gold, different grounds. Say which context you are in. The rules live in `docs/marketing-rules.md`: section 7 for the website, sections 1 to 6 for marketing.

## The stop condition

If it is not in the system, stop and ask. Do not invent it. No hardcoded hex values, no new components that duplicate existing ones, no library icons in place of the thirteen module pictograms. Both of us instruct Claude to flag the gap rather than fill it.
