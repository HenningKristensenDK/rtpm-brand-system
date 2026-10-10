# RTPM 0 · Product Design System

Governs the product design language of the RTPM capital project control platform (app shell, dashboards, registers, record panel, control components, AI agents, charts) and inherits every token from RTPM 1 Core Tokens.

Source: RTPM Brand System v4, product design language, 2026.08.04.

## Foundation

The visual operating system for a capital project control platform. Three layers:

| Layer | Name |
|---|---|
| Master | Command Layer (structure) |
| Discipline | Instrument Panel |
| Trust | Institutional Ledger (proof) |

- Inherit all colours, fonts, spacing and radius unchanged from RTPM 1. Core Tokens. No new token is introduced in this file.
- Module icons are specified in RTPM 1. Core Tokens, section 07, and are not redefined here.
- Status stepper and severity indicator are specified in Step 1 (Core Tokens) and are not restated.

Four principles:

- **Every number has an owner.** No figure appears without the person and organisation accountable for it. A KPI with no owner is decoration.
- **State before styling.** Where a record sits in its workflow is the first thing readable on every surface. Colour supports it, never carries it alone.
- **Nothing changes silently.** Every state change writes a visible, attributed, timestamped line. The audit trail is a first-class component, not a log tab.
- **Calm at density.** Screens hold hundreds of rows. Quiet neutrals, hairline rules, one accent. Emphasis is earned by exception only.

## 01 App shell

Left navigation, top bar, project context, global search, profile.

### Shell container (Candidate for locking)

The frame every module inherits. Built once, never per-module.

**Purpose.** Hold the user's place in a portfolio of large projects. At any moment the shell answers three questions without a click: which project am I in, which module am I in, and what is waiting for me.

**Design principles.**
- One dark anchor only: the navy sidebar. The top bar stays light so the eye reads content, not chrome.
- Project context lives in the top bar because it changes. Modules live in the sidebar because they do not.

**Layout rules.**

| Zone | Size | Rules |
|---|---|---|
| Sidebar | 232px | Fixed. Collapses to 60px icon rail below 1280px. Logo once, in the sidebar header. |
| Top bar | 56px | White, 1px bottom border, no shadow. Project switcher left, search centre, actions and profile right. |
| Content | 24px gutter | Page background #F7F7FB, cards white. Max content width unbounded: registers need the room. |
| Right dock | 360px | Reserved for the agent panel and record panels. Overlays content below 1440px, never squeezes a table. |

**Anatomy (from the reference shell).**
- Sidebar module groups: Control (Dashboard, Risk & Opportunities, Interface Management, Change Management, Nonconformance, HSE, Project Economics), Record (Documents, Correspondence, Site Inspection, Permit & Compliance, Time Log), Governance (Roles & Responsibility).
- Sidebar footer: tenant and data-residency line (for example "Tenant · Microsoft 365 · EU-West").
- Top bar: project switcher (project name plus type line, dropdown caret), global search ("Search records, documents, people…", shortcut ⌘K), My Todos with count, profile avatar. Breadcrumb: module / record ID.
- Right dock hosts the agent (for example "Project Manager Agent").

**Do**
- Group sidebar modules under quiet labels: Control, Record, Governance.
- Show an outstanding count on a module only when action is owed by the viewer.
- Keep the tenant and data-residency line permanently visible in the sidebar footer.

**Don't**
- Darken the top bar. Sidebar and top bar both dark fuse into a heavy L.
- Put the project switcher in the sidebar. Context changes, navigation does not.
- Repeat the logo in the top bar, or shrink the table to fit the agent dock.

## 02 Dashboard language

Three dashboard languages: Executive, Project, PMO.

### Information priority: the four-band rule (Candidate for locking)

Every dashboard reads top to bottom in the same order, whatever the role.

| Band | Name | Content |
|---|---|---|
| 1 | Position | Where the project stands right now. One health verdict plus 4 to 6 KPI cards. No charts. |
| 2 | Trajectory | Where it is heading. Milestone timeline, schedule confidence, trend against baseline. |
| 3 | Exceptions | What is wrong and who owns it. Risk matrix, critical items, overdue queues. Each row names a person. |
| 4 | Recommendation | What the agent suggests doing next, always with the evidence it used and an accept/dismiss action. |

### Executive dashboard (Candidate for locking)

Portfolio level. Read in 30 seconds, standing up, before a board call.

**Purpose.** Answer one question across the portfolio: which projects threaten commercial operation date (COD) or capital envelope, and is anyone already on it. No operational detail.

**Layout rules.**
- One row of portfolio KPIs, then one row per project.
- Rank project rows by exposure, never alphabetically.
- Maximum eight rows before pagination. An executive view that scrolls has failed.
- Header carries a freshness stamp (for example "Live · updated 4 min ago").

**Anatomy.**
- Portfolio KPI row (reference set): Portfolio health (verdict plus "n of n need attention"), COD at risk, Exposure under review, Decisions owed by owner, Reporting currency (records updated this week).
- Project table columns: Project (name plus type line), Health, COD, Exposure, Top exception, Accountable.
- Health values used: Green, Amber, Red, Watch. Red may carry "Escalated", Watch may carry "On hold".
- COD expressed as signed days against baseline (for example "+11 d") or "On date".

**Do**
- Express schedule slip in days against baseline, signed, not as a percentage.
- Name the single top exception per project and link straight to the record.
- State how fresh the data is. Executives distrust dashboards that could be stale.

**Don't**
- Use a traffic-light grid with no owner column. Health without accountability is noise.
- Show sparklines or trend charts at portfolio level. That is Band 2, project view.
- Colour a whole row or cell background red. Status lives in the indicator, not the surface.

### Project dashboard (Candidate)

The project director's daily screen.

**Purpose and layout.**
- All four bands on one screen.
- KPI row, milestone timeline, then a three-column exception floor: risk matrix, control queues, critical items.
- Agent docked right, never inline.
- Reference KPIs: Project health, Critical risks, Schedule confidence.
- Critical item rows carry title plus "record ID · state · overdue flag".

**Do**
- Make every matrix count clickable. It is a filter, not a picture.
- Carry the record ID on every listed item.

**Don't**
- Exceed six KPI cards. Seven means the priority was never decided.
- Fill empty matrix cells with 0. Use a dash.

### PMO dashboard (Candidate)

Process compliance, not project status.

**Purpose and layout.** Is the control process actually being run. Throughput and ageing, contractual clocks, and who is holding the queue. Measures the system, not the site.

**Anatomy.**
- KPIs: Register currency, Contractual clocks breached, Median close-out.
- Chart: open items by workstream and age. Age bands: 0 to 14 d, 15 to 30 d, 30 d +.
- List: approval queues by holder, with days held per person.

**Do**
- Measure ageing in days held, and name who holds it.
- Separate contractual clocks from internal targets.

**Don't**
- Rank people by volume. This is a queue view, not a scoreboard.
- Grade age bands in status colours. Ageing is a measure: use the chart sequence, not severity red.

## 03 Register language

Risk, Document, Correspondence, Change.

### Universal register anatomy (Candidate for locking)

One structure. Only the columns change between modules.

**Purpose.** The register is the ledger: where a project proves what was raised, when, by whom, and what happened next. Every module's list view is the same object with a different column set, so a user who learns one has learned all of them.

**Design principles.**
- Five fixed columns in every register: ID, title, state, owner, date.
- Module-specific columns insert between state and owner.
- Rows never change background colour. State is carried by the indicator so a printed register survives greyscale.

**Layout rules: five stacked zones.**

| Zone | Rules |
|---|---|
| 1 · Header | Module name, live count ("20 of 20 items"), view toggle (Board / Table), and one primary New action. |
| 2 · Filter bar | Max six dropdowns, all defaulting to "All". Active filters become removable chips below. |
| 3 · Summary strip | Totals, completion donut, distribution by workstream and by stakeholder. Every element filters the table. |
| 4 · Table | Row height 44px. Sticky header. ID column monospaced tabular. Sort by one column, indicated in the header. |
| 5 · Row action | Whole row opens the record panel. Destructive actions sit at the far right, icon only, never on hover alone. |

Reference risk register columns: ID, Title, Status, Priority, Workstream, Due (sort indicator), Responsible, row action (⋯).

**Do**
- Zebra alternate rows with #FAFAFD only, never with status tints.
- Turn the state indicator and due date red together when a record is overdue.
- Keep the responsible person visible in the row. Registers are read to find who to call.
- Show active filters as removable chips so a filtered export is never mistaken for the full register.

**Don't**
- Exceed eight columns. Detail belongs in the record panel, not the register.
- Hide row actions until hover. Governance users audit with keyboard and print.
- Allow multi-column sort. One sort key, shown in the header, or the ledger is unrepeatable.
- Re-order or rename the five fixed columns per module.

### Column sets per register (Candidate for locking)

Fixed columns in ink, module-specific columns in indigo. Nothing else is permitted.

| Register | State type | Fixed (lead) | Module-specific | Fixed (tail) | Rule |
|---|---|---|---|---|---|
| Risk | 4-stage stepper | ID · Title · Status | Priority · Workstream | Due · Responsible | Sorts by due date ascending. Overdue floats to the top regardless of sort. |
| Document | Review status | ID · Title · Status | Revision · Discipline · Type | Due · Reviewer | Revision is always shown. A document row without a revision is not a record. |
| Correspondence | Reply obligation | ID · Title · Status | Direction · Party · Contract clause | Reply by · Owner | Direction is in/out with an arrow glyph. The contractual reply clock is the due column. |
| Change | Approval workflow | ID · Title · Status | Value · Time impact · Instruction ref | Decision by · Approver | Value column is right-aligned tabular with a signed total in the footer row. |

## 04 Universal record

Risk, Document, Correspondence, NCR, Change, Compliance.

### Record detail panel (Candidate for locking)

One pattern for all six record types. The single most reused screen in the platform.

**Purpose.** Hold everything a record needs to be defensible: what it is, where it stands, who owns it, what was agreed, and what evidence supports it. If a claim were tested, this panel is the exhibit.

**Design principles.**
- Section order never varies between record types. A user auditing a change order and an NCR reads the same shape.
- Types differ only in which optional blocks appear.
- One primary action, always top-right, always the same action: send the update that creates the record.

**Layout rules: fixed section order.**

| # | Section | Rules |
|---|---|---|
| 1 | Identity header | Back, title, record ID chip, created and last-edited stamps. Primary action right. |
| 2 | Workflow state | Full stepper with stage owners. Always above the fold, never inside a tab. |
| 3 | Fields | Two columns. Status and priority first, dates second, classification third. |
| 4 | Involved parties | Responsible and Informed, split. Role and organisation under every name. |
| 5 | Checklist | Counted in the heading. Completed items strike through, never disappear. |
| 6 | Notes | Narrative field. Plain, wide measure, no rich formatting toolbar. |
| 7 | Attachments | Counted tab. Filename, revision, uploader, date. Never thumbnails alone. |
| 8 | Audit trail | Closes the panel. Every entry attributed and timestamped. Read-only, always. |

**Anatomy detail (risk record reference).**
- Header stamp format: "Created YYYY.MM.DD · Last edited YYYY.MM.DD by [person]".
- Stepper stages each carry a stage owner role (risk: Package PM, Lead Scheduler, Quality Manager, Commissioning Auth.) and the done stages a check mark.
- Tabs: Task details, Attachments (n), Audit trail (n).
- Fields: Status, Priority, Start date, Due date, Risk collection, Workstream (with "Look up in R&R" link).
- Parties: "Responsible (n)" and "Informed (n)" blocks; each entry shows initials avatar, name (organisation), and "Workstream: role, organisation type" line.
- Checklist entries: completed item shows initials of who ticked it and date; "+ Add item" at the end.
- Audit entry format: action line, then "Person · Organisation · YYYY.MM.DD HH:MM". Header shows "n entries · read-only".
- Attachment entry: filename, then "Rev X · uploader · date".

**Institutional ledger note.** The audit trail is the trust layer made visible. It is never editable, never collapsible by default, and every entry names a person and an organisation. A record without attribution is not evidence.

**Do**
- Stamp who last edited the record next to when: both, or neither.
- Show the person and organisation behind every checklist tick.
- Count everything in its heading: Checklist (1/2), Attachments (2), Audit trail (14).
- Keep attachment revision letters visible. Revision is the record, the file is the copy.

**Don't**
- Hide the workflow stepper behind a tab. State is the first question, always.
- Delete completed checklist items. Strike them through: completion is evidence.
- Offer a second gold button. One primary action per panel.
- Vary the section order per record type. The pattern is the point.

### The pattern across six record types (Candidate for locking)

Same eight sections. Only the workflow labels and one classification field change.

| Record type | Workflow stages | Classification field | Primary action | Priority scale |
|---|---|---|---|---|
| Risk | Identified → Assessed → Mitigated → Resolved | Risk collection | Send Update | 4-level severity |
| Document | Submitted → Under review → Commented → Approved | Discipline + revision | Issue review | None, dates only |
| Correspondence | Received → Acknowledged → Answered → Closed | Contract clause | Send reply | Reply clock |
| NCR | Raised → Investigated → Corrected → Verified | Defect category | Send Update | 4-level severity |
| Change | Notified → Quantified → Instructed → Agreed | Instruction reference | Submit for approval | Value + time impact |
| Compliance | Required → Applied → Granted → Discharged | Authority + permit type | Send Update | Gate blocking yes/no |

**Four-stage rule.** Every workflow is four stages. Not three, not six. Four stages fit a stepper at every breakpoint, map cleanly onto the done / current / pending visual language, and force a real decision about what the middle of a process actually is.

## 05 Project control components

The parts every module assembles from. They extend the Step 1 foundation (status stepper and severity indicator, not restated) without introducing a new colour or type token.

### KPI card (Candidate)

- One measure, one comparison, one route to detail.
- Anatomy: label above, value in Barlow 30px, context line below.
- A status-coloured left border appears only when the value is off target. That border is the whole alarm system.
- Four states: on target (plain), off target (status left border, owner named in context line), comparison (value plus delta against previous period, for example "▼ 3 vs. last week"), no data (dash, "No data this period").
- Do: name the owner in the context line when the value is off target. Use a dash for no data.
- Don't: fill the card with a status colour, add an icon, or put a sparkline behind the number.

### Risk matrix (Candidate)

- Workstream by severity, counts in cells. Not a probability-impact heat map. Owner-side users think in disciplines, not scoring grids.
- Severity columns: Critical, High, Medium, Low. Rows: workstreams.
- Every cell is a filter into the register ("Click a count to filter"). Empty cells show a dash.
- Do: keep severity columns in fixed order, worst on the left, on every matrix.
- Don't: shade cell backgrounds by count. Density is read from the chips, not a gradient.

### Ownership indicator (Candidate for locking)

Which side of the contract table an obligation sits on: never implied, always stated.

**Purpose.** Answer "whose problem is this" in one glance. Avatar tint carries organisation type, not discipline. An owner-side reader needs to see customer, contractor, authority and advisor apart instantly.

**Layout rules.**
- Initials only, never photographs. A governance register is not a social product.
- Role and organisation always sit under the name in the detail form.

| Context | Avatar size |
|---|---|
| Panels | 34px |
| Headers | 26px |
| Table rows | 24px |
| Stacks | 22px |

**Four organisation tints (background / foreground).**

| Organisation type | Tint | Example role |
|---|---|---|
| Customer side | #E7E6FA / #0D08D2 | Customer PMO |
| Contractor | #FFF3E5 / #B36200 | Contractor |
| Authority | #E8F6EB / #1B7A31 | Permit authority |
| Advisor | #F0F0F5 / #595B78 | Owner's rep |

- Do: distinguish Responsible from Informed structurally, in separate labelled blocks.
- Do: show the organisation in parentheses after the name wherever space allows.
- Don't: reuse the four organisation tints for status. These are identity, not state.
- Don't: show a bare avatar with no name in a register row.

### Approval workflow (Candidate)

- Different from the status stepper: a gate sequence with named approvers, thresholds and a clock.
- Shows who is holding the item right now and how long they have held it ("Held n d").
- Vertical, because approvers carry names and dates that will not fit horizontally.
- Anatomy: header "Approval chain" with value and the threshold it exceeds (for example "exceeds €1m delegated authority"); each gate shows name, approver plus action and date (approved / verified / awaiting since); the current gate shows the contractual reply date; unreached gates state their condition (for example "Required above €1m · not yet reached").
- Do: state the threshold that triggered each gate, and the contractual date if one applies.
- Don't: merge this with the status stepper. Progress and authority are separate facts.

### Audit trail timeline (Candidate)

- The trust layer, made visible. Newest first, read-only, never collapsed by default.
- Every line carries person, organisation and timestamp to the minute.
- Node colour encodes actor class:

| Actor class | Node colour |
|---|---|
| State change (human) | Indigo |
| Field edit (routine) | Grey |
| AI action, human-approved | Gold |

- AI line format: "[Person] approved · [Agent] drafted · timestamp".
- Edit line format shows old → new value.
- Do: show old and new value on every edit. A change with no before-state is not auditable.
- Don't: let an AI action appear without the human who approved it named on the same line.

## 06 AI agent system

Governed, controlled, transparent. The agent proposes. A named human disposes.

| Principle | Rule |
|---|---|
| Bounded | Every agent is scoped to a role and a data boundary, both stated in its header. No general-purpose assistant. |
| Sourced | Every claim cites the records it read, by ID. An answer without citations is a defect. |
| Held | The agent drafts and stages. It never sends, never changes a status, never closes a record on its own. |
| Plain | No sparkles, no glow, no typing flourish, no purple gradient. Gold hairline marks agent surfaces and nothing else does. |

### Agent home (Candidate)

The zero-state front door.

- Open on a question, not a blank box. Greeting form: "Hi [name]. What's on your mind?"
- Under the greeting: agent name, scope and data boundary (for example "Project Manager Agent · scoped to [project] · reads records you have access to").
- Four suggested prompts, each phrased as a real control question this role asks daily (reference: What needs my action today? / Show critical risks and blockers / Who's responsible for civil works? / Find the latest correspondence).
- Input placeholder scoped to the project ("Ask anything about [project]…").
- A skip link to the dashboard is always present ("Skip, open dashboard →"). An agent that cannot be bypassed is a gate, not a tool.
- Do: state the agent's scope and data boundary under the greeting, every time.
- Don't: make this a mandatory interstitial, or offer open-ended "ask me anything" framing.

### Agent chat (Candidate)

Docked panel, general and record-scoped.

- 360px right dock.
- Header: agent name, scope line with records read (for example "Scoped to RK-021 · 4 records read"), state ("Ready").
- Agent messages sit on white with a left indigo rule. The user's own messages sit in a tinted bubble, right-aligned.
- Structured content renders as real components inside the message: a stepper is a stepper, not markdown.
- Record IDs are always links. Source records listed as chips under the answer.
- Message footer: agent name and timestamp.
- Panel footer: "Powered by AI · ISO 31000 framework · drafts require human approval".
- Do: list the source records as chips under every substantive answer.
- Don't: animate a typing indicator with pulsing dots. A plain "Reading 4 records…" line is enough.

### Recommendations and generated actions (Candidate for locking)

Where AI touches the record. The most governance-sensitive surface in the platform.

**Purpose.** Turn an observation into a staged action a human can inspect, edit, approve or reject, with the reasoning and evidence attached, before anything is committed.

**Layout rules.**
- Four fixed parts in order: What changed, Why it matters, Drafted action (shown in full), two-button decision.
- The draft is always visible, never behind "review". Drafted action header names recipients, copies and attached records. Footer note: "Editable before sending. Nothing has been sent."
- Actions: Approve draft, Edit, Dismiss, with "Logged either way".
- Approve is indigo, not gold. Gold means the human sends, and this is still a proposal.
- Header status: "Awaiting your approval".

**States.**

| State | Display |
|---|---|
| Awaiting | Full card with four parts and decision buttons. |
| Working | "Reading n records…". No animation. A count, then a result. |
| Approved | "Sent by [person]", timestamp, written to audit trail as AI-drafted, human-approved. |
| Dismissed | "Dismissed, reason recorded". A rejected recommendation is evidence too. It stays in the trail. |

**Procurement answer.** This screen is what a CIO's AI-governance question is answered with. Human-in-the-loop is not a policy statement here, it is the interface.

**Do**
- Show the full drafted text before approval, editable in place.
- Log dismissals with a reason. Rejections are part of the record.
- Keep the gold hairline as the only marker of an AI surface.

**Don't**
- Let the agent change a status, close a record, or send anything unattended.
- Use gold for the approve button. Gold is reserved for the human send action.
- Add sparkle icons, glows, gradients or a distinct "AI purple".

## 07 Data visualisation

Donuts, gauges, trend, timeline, distribution.

### Two colour systems, never mixed (Candidate for locking)

The single rule that keeps every chart in the platform readable. A chart may use one system or the other. Never both.

**Categories: chart sequence (Locked).** In order, maximum five series:

| Position | Hex |
|---|---|
| 1 | #0D08D2 |
| 2 | #00C794 |
| 3 | #FF8B00 |
| 4 | #00ACFF |
| 5 | #AA00D3 |

- Use when segments are things: workstreams, disciplines, organisations, age bands.
- Position in the sequence is fixed so the same workstream is the same colour on every screen.
- These five are part of the locked system. No sixth series colour exists, and none of the five may be substituted.

**States: status scale.**

| Order | Hex |
|---|---|
| 1 | #E63946 |
| 2 | #FF8B00 |
| 3 | #E0A800 |
| 4 | #28A745 |
| 5 | #F0F0F5 |

- Use only when segments are conditions: severity, completion, compliance.
- Grey (#F0F0F5) is the remainder or "not started".

### Donut

Completion against a whole.
- Two segments only: done and remaining.
- Centre carries the percentage. The count sits outside as a label.
- Anything with more than two categories is a bar chart, not a donut.
- Don't: split a donut into five slices, or hide the underlying counts behind a percentage.

### Gauge

A value against a target.
- Only where a threshold genuinely exists: schedule confidence, forecast against envelope.
- The target is drawn as a tick on the arc. Label states the target and the gap (for example "13 points below target").
- A gauge with no threshold is a number: use a KPI card instead.
- Don't: use a red-amber-green gradient arc. The value colour states the verdict; the track stays grey.

### Status distribution

Composition across a register.
- A single stacked bar, not a pie.
- Reads left to right, worst first. Carries counts inline where they fit.
- Doubles as a filter control. This is the summary strip's workhorse.
- Segments below 5% get their count in the legend.
- Don't: use a pie chart anywhere in the platform.

### Trend chart (Candidate)

Movement against a baseline.
- Bars, not curves. A capital project reports in discrete periods, and a smoothed line implies a continuity the data does not have.
- The baseline is a dashed rule. The current period is the only bar in full indigo.
- Do: show at most six periods, and always draw the baseline.
- Don't: use area fills, gradients, or a smoothed spline.

### Timeline view (Candidate)

Milestones and gates against dates.
- Horizontal, left to right, with the current position marked.
- Node language matches the status stepper exactly: green done, indigo ringed current, hollow pending.
- A slipped milestone shows both baseline and forecast date, stacked, forecast in red.
- Do: strike through the baseline date and show the forecast beneath it when a milestone slips.
- Don't: silently replace a baseline date with a forecast. The original commitment stays visible.

## Open decisions and lock status

### 08 Lock tracker

Mark each candidate locked, or send it back. All components are at Candidate status. Within section 07, the five-colour chart sequence itself is stated as Locked.

| Sect. | Component | Depends on | Status |
|---|---|---|---|
| 01 | App shell container | Step 1 colour + type | Candidate |
| 02 | Four-band information priority | (none) | Candidate |
| 02 | Executive dashboard | KPI card · ownership indicator | Candidate |
| 02 | Project dashboard | Risk matrix · timeline · KPI card | Candidate |
| 02 | PMO dashboard | Chart sequence · ownership | Candidate |
| 03 | Universal register anatomy | Severity badge · ownership | Candidate |
| 03 | Column sets, four registers | Register anatomy | Candidate |
| 04 | Record detail panel | Stepper · ownership · audit trail | Candidate |
| 04 | Six record types · four-stage rule | Record detail panel | Candidate |
| 05 | KPI card | Step 1 status scale | Candidate |
| 05 | Risk matrix | Severity badge | Candidate |
| 05 | Ownership indicator · 4 org tints | Step 1 avatar chip | Candidate |
| 05 | Approval workflow | Ownership indicator | Candidate |
| 05 | Audit trail timeline | Actor-class colours | Candidate |
| 06 | Agent home | Agent governance principles | Candidate |
| 06 | Agent chat panel | App shell right dock | Candidate |
| 06 | Recommendation & staged action | Audit trail · button hierarchy | Candidate |
| 07 | Two colour systems rule | Step 1 status + chart palettes | Candidate |
| 07 | Donut · gauge · distribution | Two colour systems rule | Candidate |
| 07 | Trend chart · timeline view | Status stepper node language | Candidate |


### Open decisions for Henning

1. **Risk matrix axes.** Proposed as workstream × severity rather than probability × impact. Confirm this is how buyers read risk, or the matrix component changes shape.
2. **Four-stage rule.** Every workflow forced to four stages, including document review and change approval. Confirm the stage names proposed for the five non-risk record types.
3. **Organisation tints.** Avatars tinted by organisation type: customer, contractor, authority, advisor. This spends four colours on identity. Confirm it is worth it, or fall back to a single neutral tint.
