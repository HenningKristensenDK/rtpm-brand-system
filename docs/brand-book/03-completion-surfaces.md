# RTPM 3 · Completion Surfaces

Extends RTPM 0 Product Design System without revising it; inherits every token from RTPM 1 Core Tokens.

Source: RTPM Brand System v4, completion set, 2026.08.04 ("Mobile, states, boards").

## Scope and inherited constraints

The five surfaces left unfinished after sections 01 to 08. Nothing here revises approved work: the tokens, the four-stage rule, the register anatomy and the record pattern are treated as locked and extended. Sections continue the Product Design System numbering (09 to 13, plus 14 lock tracker).

Inherited and unchanged:

- Two blues: `#070474` surface, `#0D08D2` signal.
- Gold `#FFCC00` for one primary action.
- The four-level severity scale.
- The four-stage workflow rule.
- Spacing 4 / 8 / 12 / 16 / 24 / 32.
- Card radius 14, input radius 9.
- No new token is introduced in this document. All content in the source is placeholder.

## 09 · Mobile app design system

Frame: 390 × 844, shown at true size. Status: Candidate for locking.

### What mobile is for

A deliberate subset, not the desktop app made narrow.

| Context | Scope |
|---|---|
| On site | Raise a record at the point of observation, photograph it, assign an owner. This is the only creation flow mobile carries. |
| Between meetings | Clear the personal queue: approve, comment, tick a checklist item, send an update that is already drafted. |
| Not on mobile | Registers as tables, the risk matrix, portfolio dashboards, bulk edits, and configuration. Offered as an "open on desktop" hand-off, never as a pinched-in table. |
| Consequence | Navigation is a four-item tab bar, not the eleven-module sidebar. Modules are reached through search and through the queue, not by browsing. |

### Layout rules

| Rule | Value |
|---|---|
| Margins | 16px. Content gutter 16. Cards are full-bleed to those margins, radius 14 as on desktop. |
| Hit targets | 48px. Minimum 44, standard 48. Rows are 72 to 88px because they carry three lines of context. |
| Type floor | 13px. Body 15, labels 13, never below. The desktop 11.5px caption size does not exist on mobile. |
| One navy anchor | Header navy, tab bar white with a top border. The same rule that stops the desktop L, applied vertically. |

### Tab bar

Four items, in order: Queue, Records, Raise, Agent.

### Three core screens

1. **Queue** (the mobile home). Not a dashboard: a list of what is owed by this person.
   - Header: RTPM wordmark, search, avatar; project selector (project name, sector · capacity · client).
   - "My queue" with item count (NN items).
   - Each card carries: ID, severity, title (up to two lines), clock (for example "Overdue NN days", "Held NN days", "Due DD Mon"), and state (for example Assessed, Quantified, Under review).
   - Agent card at the bottom: agent name plus a one-line summary, tap to open the panel. Marked with the gold hairline (2px top border `#FFCC00`).
2. **Record**. Same eight sections as desktop, one column, primary action docked.
   - Back link, ID, title (up to three lines), created and last edited dates (YYYY.MM.DD).
   - Stage block: "Stage three, 3 of 4 · owner".
   - Fields: Status, Priority, Due, Workstream.
   - Responsible: avatar, name, role and organisation.
   - Checklist with "N of N" count.
   - Docked primary action "Send Update" in gold, plus an overflow (⋯) button. Primary button height 48px, radius 9.
3. **Raise**. Three steps (step indicator "1 of 3"). The only creation flow on mobile.
   - Header: Cancel, "Raise a record", Next.
   - Type options: Risk, Nonconformance, Early warning, Site observation.
   - Title field ("Describe what you observed…").
   - Evidence: camera or file. Location and time are captured with the image and written to the audit trail.
   - Severity: Crit, High, Med, Low.

### Do

- Open on the queue. A phone user has a task, not a browsing intent.
- Turn register rows into cards carrying ID, severity, title, state and the clock.
- Dock the primary action. It must be reachable with a thumb without scrolling.
- Keep the desktop section order in the record. Familiarity across devices is the point.

### Don't

- Put a horizontally scrolling table on a phone. Offer the desktop hand-off instead.
- Ship the eleven-module sidebar as a hamburger drawer.
- Hide destructive or approval actions behind a swipe. Both need a visible, deliberate tap.
- Drop below 13px type or 44px targets to fit more in.

## 10 · Empty and zero-data states

Six causes, six different messages. Empty is not one state. Status: Candidate for locking.

### Purpose

In a governance system, why a list is empty matters more than the fact that it is. An empty register can mean nothing has happened, nothing has been recorded, or the viewer is not permitted to see it. Those are three completely different facts about a project, and conflating them is a governance failure, not a UX one.

### Design principles

- Every empty state names its cause, states what is true, and offers exactly one action, or none.
- No illustrations, no mascots, no exclamation marks.
- A striped placeholder block stands in where a chart or table would be, so the layout does not collapse and the reader sees what is missing.

### Layout rules

| Rule | Value |
|---|---|
| In place, not centred | The message sits inside the container it explains, at its top-left, so surrounding structure stays legible. |
| Three lines maximum | Cause heading 15px semibold, one explanatory line 13px, one action. Nothing else. |
| Colour is earned | Neutral by default. Only "restricted" and "unavailable" take a status colour, because only they are conditions. |

### The six states

| # | Context | Count shown | Heading | Explanatory line | Action |
|---|---|---|---|---|---|
| 1 | Register, nothing recorded | 0 items | Nothing recorded yet | This register is live but no record has been created. An empty register on an active project is itself worth noticing. | Create the first record |
| 2 | Register, filtered | 0 of NN items (filter chips shown, removable) | No records match these filters | NN records exist in this register. Two filters are hiding all of them. | Clear all filters |
| 3 | Register, restricted (tag: Restricted) | a dash, then "items" | You do not have access to this register | Records exist. Your role does not include them. The count is withheld deliberately, not missing. | Request access |
| 4 | Dashboard, new project (tag: Setup incomplete) | KPI values shown as a dash | Three steps before this dashboard reports | Setup checklist of three steps, completed steps ticked. | (checklist, see source) |
| 5 | Chart, data unavailable (tag: Unavailable; meta "Last read HH:MM") | n/a | Could not read the source | The last successful read was at HH:MM. Figures shown elsewhere on this screen may predate it. | Retry |
| 6 | Queue, cleared (tag: Clear) | 0 items | Nothing is owed by you | NN items are open on this project, all with other owners. This is a good empty state and it is allowed to look like one. | None |

### Do

- Say how many records exist when the view is filtered or restricted. The count is the fact.
- Use a dash for a withheld or absent number, never a zero.
- Timestamp the last successful read whenever data could be stale.
- Let a cleared queue read as an achievement. Not every empty state is a problem.

### Don't

- Use one generic "No data" message for all six causes.
- Show a zero where the real answer is "you may not see this".
- Add an illustration, an icon set or encouraging copy. This audience reads it as evasion.
- Collapse the container. A missing chart leaves its frame so the absence is visible.

## 11 · Agent states

Eight states · one gold hairline · no animation. Status: Candidate for locking.

Section 06 locked the agent's principles and its two main screens. These are the states in between.

### Purpose

An agent that cannot say "I don't know", "I'm not allowed to see that" or "this data is old" is not governable. Each state exists so the agent can be honest about its own limits in a form an auditor would accept.

### Design principles

- Every state is a header dot plus a sentence.
- The dot uses the locked status scale: green ready, gold working, red failed, grey inert.
- The sentence carries a count or a timestamp wherever one exists.
- No spinner, no pulsing dots, no shimmer.
- The agent panel header carries the gold hairline (2px top border `#FFCC00`). It is the only AI marker.

### Layout rules

| Rule | Value |
|---|---|
| State lives in the header | Dot and label in the panel header, never floating over the thread. The thread stays a record. |
| Progress is counted | "Reading N of NN records": a number that changes, not a bar that animates. Cancellable at any point. |
| Failures stay in the thread | A refusal or an error is a message in the thread, not a toast. It is part of the audit record. |

### The eight states

| # | State | Header label | Dot | Behaviour | Body / action |
|---|---|---|---|---|---|
| 01 | Ready | Ready | Green | Idle and scoped. The header states the boundary: scoped to this record, NN records readable. | none |
| 02 | Working | Working | Gold | A count, not a spinner. Cancellable while it runs. | "Reading N of NN records" · Cancel |
| 03 | Answered | Answered | Green | Answer plus the records it read, as chips. Never an answer without sources. | Answer body, source record chips (e.g. RK-0NN, CO-0NN) |
| 04 | No answer possible | No answer | Grey | States what is missing and who could supply it. Never a guess. | Names the missing input and its owner |
| 05 | Blocked by permission | Restricted | Gold | The agent inherits the user's access and says so plainly. | "Answering would require records outside your access. NN records were excluded from this answer." |
| 06 | Answering on stale data | Stale | Gold | Answers, but declares the age of what it read. The warning sits above the answer, not below. | "Last sync HH:MM. NN records may have changed since." |
| 07 | Failed | Failed | Red | Stays in the thread as a record. Retry does not erase the failure. | "Could not complete." plus support reference · Retry |
| 08 | Disabled by tenant | Off | Grey | Some customers switch AI off. The panel stays, explains, and does not nag. | "Agent features are disabled for this tenant by your administrator." |

Dot and label colours as rendered in the source: green dot `#28a745` / text `#1b7a31`; gold dot `#e0a800` / text `#8a6600`; red dot `#e63946` / text `#b02a34`; grey dot `#8a8ca6` / text `#595b78`.

### Do

- State how many records were excluded when access limits an answer. Silence looks like a full answer.
- Put the stale-data warning above the answer. Below it, nobody reads it.
- Keep failures and refusals in the thread so the exchange remains auditable.
- Let the agent be switched off cleanly. Tenant control is a procurement requirement.

### Don't

- Animate the working state. A changing count is the only motion permitted.
- Show errors as toasts that vanish. Nothing about the agent disappears.
- Let the agent guess when records are missing. "No answer possible" is a valid, expected outcome.
- Introduce a new colour for AI. The gold hairline is the only marker.

## 12 · Board view

The Board toggle sits beside every register Table toggle. Columns are the four workflow stages. Status: Candidate for locking.

Not custom lanes. The board is the register's four-stage rule turned sideways.

### Purpose

Show where work is stuck. A table answers "what is on the register"; a board answers "what has stopped moving, and in whose hands". It is a working view for a weekly control meeting, not a reporting view.

### Design principles

- The columns cannot be renamed, reordered or added to. They are the record type's four stages, so a board is directly comparable to its table and to every other module's board.
- Ageing is the board's headline signal: cards carry days-in-stage, and a column reports how many of its cards are stale.

### Layout rules

| Rule | Value |
|---|---|
| Four columns, equal width | Minimum 260px each. Column header carries the stage name, the count, and the stale count when above zero. |
| Card is five facts | ID, severity, title, owner, days in stage. Nothing else fits and nothing else is needed to decide. |
| Drag writes an audit line | Moving a card is a state change: it is attributed, timestamped, and can require a reason. Never a silent drag. |
| Forward only by default | Backward moves are permitted but prompt for a reason, because a regression is a fact someone will ask about. |

### Anatomy

- Toolbar: register name, "NN of NN items · grouped by stage", Board / Table toggle, "Swimlane: none" selector, "+ New".
- Column header: stage name, count, stale count tag (e.g. "N stale") when above zero. Column header has a 2px gold top border (`#FFCC00`) in the source.
- Card: ID, severity, title (up to two lines at column width), owner initials and name, days in stage ("NN d").
- Drop target: "Drop to move to stage three. Writes an audit line: who moved it, from where, at what time."
- Stage four cards show "Closed". Resolved cards leave the board after NN days and remain in the table.

### Do

- Show days-in-stage on every card, and turn it red only past the stage's own threshold.
- Report the stale count in the column header. A column of eight where five are stale is the finding.
- Offer swimlanes by workstream or by organisation. Both answer "whose queue is blocked".
- Keep the source position visible while a card is dragged, at reduced opacity.

### Don't

- Allow custom columns. The four stages are the record type's contract with every other view.
- Let a drag change state silently. Every move is attributed and logged like any other edit.
- Colour whole cards by severity. The left border and the dot carry it, as in the register.
- Keep resolved cards on the board indefinitely. The board is for work in motion.

## 13 · Operational workflow states

Stage is where · state is how it is going. Two independent axes. Status: Candidate for locking.

The four-stage rule is untouched. These states sit across it, not inside it.

### Purpose

A record at stage three can be running normally, waiting on a third party, formally on hold, escalated, or superseded. All five look identical on the stepper. Without a second axis the register cannot distinguish work that is progressing from work that has stopped, and the whole control claim fails.

### Design principles

- Nine states, one visible at a time, chosen by a fixed precedence so two people reading the same record never see a different label.
- Six use the locked status scale; three are neutral (Draft, In progress, Superseded) because they are administrative, not conditions.
- Every non-normal state requires a reason and an owner before it can be applied.

### The nine states (in precedence order)

| Prec. | State | Means | Requires | Clock |
|---|---|---|---|---|
| 1 | Escalated | Raised above the normal owner because it is stuck or material. Outranks every other state. | Reason, escalated-to person, date | Runs |
| 2 | Overdue | Past its due date or contractual reply date, still in play. | Nothing, derived from the date | Runs |
| 3 | Awaiting external | Blocked on a party outside the project: authority, supplier, regulator. | Named party, expected date | Runs |
| 4 | On hold | Deliberately paused by a decision. Different from blocked: someone chose this. | Reason, approver, review date | Paused |
| 5 | Draft | Created but not submitted. Visible only to its author and does not count in register totals. | Nothing | Not started |
| 6 | Reopened | Closed then reopened. Carries its previous close date so the gap is visible. | Reason, previous close date | Restarts |
| 7 | In progress | The normal state. Shows no badge at all: silence means healthy. | Nothing | Runs |
| 8 | Superseded | Replaced by another record. Read-only, and links forward to its replacement. | Successor record ID | Stopped |
| 9 | Closed | Stage four reached and signed off. Read-only, stays in the register permanently. | Sign-off person, date | Stopped |

### Badge colours (as rendered in the source)

| State | Background | Text | Dot | Note |
|---|---|---|---|---|
| Escalated | `#fdecee` | `#b02a34` | `#e63946` | red |
| Overdue | `#fdecee` | `#b02a34` | `#e63946` | red |
| Awaiting external | `#fff3e5` | `#b36200` | `#ff8b00` | orange |
| On hold | `#fdf4dd` | `#8a6600` | `#e0a800` | gold |
| Draft | `#f0f0f5` | `#595b78` | `#8a8ca6` | neutral |
| Reopened | `#e7e6fa` | `#0d08d2` | `#0d08d2` | signal blue |
| In progress | `#ffffff` | `#595b78` | none | neutral, 1px border `#e6e6f0`; shown in the reference table only, never as a badge in views |
| Superseded | `#f0f0f5` | `#595b78` | none | neutral, text struck through |
| Closed | `#e8f6eb` | `#1b7a31` | `#28a745` | green |

Pills: 12px, weight 600, dot 7px.

### Precedence rule

A record can satisfy several of these at once. The lowest-numbered state is the one displayed, so an escalated record that is also overdue and awaiting an authority reads as Escalated. The others remain visible in the record panel's state block, never lost. Only the badge is singular.

Order: Escalated > Overdue > Awaiting external > On hold > Draft > Reopened > In progress > Superseded > Closed.

### How the state reads in each view

- **Register**: the badge sits after the title, never replacing the stage. Columns: ID, Title, State, Stage, Due. In progress rows show a dash in the State column. On hold rows show "Paused" in Due. Superseded rows show "→ RK-0NN" (successor) in Due.
- **Record**: the state block. One badge leads, the rest are stated as plain outline chips (e.g. "Also overdue NN d", "Also awaiting external"). The reason and the person who applied the leading state appear directly beneath, and the change is written to the audit trail.

### Why silence matters

"In progress" shows no badge. On a register of two hundred rows, every badge is an exception, so the eye counts problems, not records. A system that labels everything labels nothing.

### Do

- Require a reason and an owner before any non-normal state can be applied.
- Stop the clock on hold, and show that it is stopped rather than showing a stale count.
- Link a superseded record forward to its successor, and keep it readable.
- Show secondary states as plain outline chips beside the leading badge.

### Don't

- Add these to the stepper as extra stages. The four-stage rule is locked.
- Show two badges in a register row. One leads, by precedence.
- Delete a superseded or closed record. Nothing leaves the ledger.
- Label the healthy majority. In progress is the absence of a badge.

## Open decisions and lock status

### 14 · Lock tracker (completion set, sections 09 to 13)

| Sect. | Component | Extends | Status |
|---|---|---|---|
| 09 | Mobile scope & navigation | App shell (01) | Candidate |
| 09 | Mobile queue screen | Register anatomy (03) | Candidate |
| 09 | Mobile record screen | Record panel (04) | Candidate |
| 09 | Mobile raise flow | Severity badge (Step 1) | Candidate |
| 10 | Six empty-state causes | Register + dashboard (02, 03) | Candidate |
| 11 | Eight agent states | Agent system (06) | Candidate |
| 12 | Board view & card | Four-stage rule (04) | Candidate |
| 12 | Drag & audit rules | Audit trail (05) | Candidate |
| 13 | Nine operational states | Status scale (Step 1) | Candidate |
| 13 | State precedence order | Register + record + board | Candidate |

Coverage: with these ten locked, the Product Design System covers every surface a future module needs: shell, dashboard, register, board, record, mobile, agent, empty states and operational states. A new module is assembled from them; it should not require new patterns.

### Three decisions for Henning

1. **Mobile scope.** Mobile carries the queue, the record and one raise flow: no registers, no dashboards, no matrix. That is a real limitation. Confirm it, or name the one thing missing from it.
2. **State precedence.** Escalated outranks Overdue, which outranks Awaiting external, which outranks On hold. If buyers read that order differently, this is the moment to reorder it: every view depends on it.
3. **Backward drags.** A card can be dragged back a stage if a reason is given. The stricter alternative is to forbid it entirely and require a reopen. Decide which the governance story needs.
