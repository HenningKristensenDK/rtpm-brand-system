# RTPM 4 · Website Architecture

Governs the structure of rtpm.dk (Step 4 of 4 in RTPM Brand System v4); it inherits all tokens from RTPM 1. Core Tokens and reuses components from RTPM 0 and RTPM 2 (plus RTPM 3 for mobile rules), adding no new component.

## Website architecture

The last surface. rtpm.dk is a website for owner-side buyers evaluating a control platform, not a campaign site: role-based routes, sector-specific paths, and a procurement layer a CIO can read without asking for a call. Source examples render at 1440px, true size. All copy in the source is placeholder except the approved category line.

### Type rule for this surface

- Use Inter only on the website, the same as the product.
- Never use Barlow Semi Condensed on rtpm.dk. It is the marketing voice.
- Keep the typeface continuous from site to app: a buyer moving from the site into the app should not notice a change. That continuity is part of the trust argument.
- Text secondary `#595B78` on page tint `#F7F7FB` clears WCAG AA for body copy (see RTPM 1. Core Tokens, "Contrast requirements").
- Below 15px, use text secondary for captions only, never for running body text.

### Emphasis, not highlight

- Do not use word-level gold text highlighting on rtpm.dk. The Accent Gold rule (RTPM 1) and the carousel and headline highlight pattern (RTPM 2) are marketing-only devices.
- The website's emphasis mechanism is the category line, set in Primary Indigo, small caps, on light surfaces, as stated in the homepage hero rule (section A).
- Reserve gold for exactly one CTA button per page, inside the one navy band (see Surface rhythm).
- Never use gold for headline words, and never on a light background (dark-only rule in RTPM 1).
- No website headline, on any page type, carries a bold-yellow word span.
- If a future page needs word-level emphasis in body copy, use Primary Indigo with the same discipline as the gold pattern: one span, no function words. Different in colour only.

### Principles

| Principle | Rule |
|---|---|
| Category first, product second | The visitor must know what kind of thing RTPM is inside four seconds. Features come after the category is established, never before. |
| Routes, not a funnel | Five roles and two sectors reach different pages. A €500M data centre PMC and a renewables portfolio director do not share an argument. |
| Proof over promise | Real product screens, real workflow sequences, real governance answers. No stock photography, no abstract illustration, no invented metrics. |
| Light, with one dark band | Paper white throughout. Ink Navy appears once per page as a single full-bleed band, and it always carries the trust argument. |

## A. Homepage above the fold

1440 × 900, the whole argument in one screen. Five elements, one screen: category, outcome, live workflow proof, tenant statement, one action. Status: Candidate for locking.

**Purpose.** A director who lands from a LinkedIn post has one screen to decide whether this is relevant to a project worth hundreds of millions: category, consequence, evidence, and how it runs inside their tenant.

**Must include (and nothing else above the fold):**

- The category line.
- One operational outcome.
- A live workflow proof snippet.
- The tenant-native trust statement.
- A single primary action.

**Layout rules:**

- Split 52/48, text left.
- H1 at 56px Inter 600, max two lines.
- The workflow proof is a real three-step sequence, not a diagram. Reuse the linear strip component from RTPM 2, section C; do not create a separate pattern.
- Place the role bar directly under the fold, as the first thing scrolled to.

**Site header (as shown in the example):**

- Wordmark: RTPM (lockup A, per lock tracker).
- Nav: Platform ▾, By role ▾, By sector ▾, Governance, Insight.
- Right side: Sign in, primary button "Book a working session" (wording is an open decision).

**Hero slots:**

| Slot | Content |
|---|---|
| Category line | "Customer-side control layer for complex capital projects" (the approved category line; indigo small caps) |
| H1 | Placeholder headline naming the outcome |
| Support paragraph | Placeholder: two sentences that name the reader and the consequence, in their language, without describing software |
| Primary action | "Book a working session" |
| Low-commitment alternative | "See the control layer" |
| Tenant statement | Example text: "Environment-native. Runs inside your own Microsoft 365 or Google tenant. Your data stays where your governance already covers it." |
| Right side | Workflow proof card titled "One sequence, start to reported", tagged "Live", with a placeholder slot for a real product screen and a link "Walk the sequence →" |
| Built for line | "Owners · PMCs · Owner's representatives" |

**Workflow proof sequence (example):**

1. Early warning raised on site. Package PM, at the point of observation.
2. Change order quantified and approved. Named approver, logged decision, contract reference attached.
3. Report is already current. No monthly cycle between the event and the board pack.

**Role bar (under the fold):** label "Start where you sit", then Executive, Project Director, PMO & Controls, CIO & IT, Procurement.

**Do:**

- Lead with the category line in indigo caps. It is the only thing that must be read.
- Make the hero's right side a real sequence with real role names, not an abstract graphic.
- Put the tenant statement above the fold. For a CIO it is the qualifying question.
- Offer one primary action plus one low-commitment alternative. Never three.

**Don't:**

- Open on a dark hero. Dark heroes read as campaign; this audience is buying infrastructure.
- Use Barlow here, or any headline above 56px.
- Put a customer logo wall above the fold before real named references exist.
- Say "AI-powered" in the hero. AI is an enabling capability, never the category.

## B. Role-based navigation

Five roles, five different arguments. The "By role" panel: each role gets its own question, its own proof, and its own landing page. Status: Candidate for locking.

**Purpose.** On a capital project the buying group is five people who disagree about what matters. An executive asks about exposure, a CIO about tenancy, procurement about exit. One page cannot answer all five without becoming vague.

**Must include.** Five entries, each with the role name, the question that role actually asks, and a route. The panel is a directory, not a menu of features.

**Layout rules:**

- Full-width dropdown panel, five equal columns.
- Opens on hover and on focus.
- Each column: role, question in quotes, three-line answer, one link.
- A right rail carries the sector split ("Or by sector": Renewables →, Data centres →) so a visitor can cross over. A visitor who does not identify with a role picks their sector instead.
- No icons in this panel. Roles are not modules. The thirteen pictograms in RTPM 1. Core Tokens, section 07, are a module-only set and are never applied to a role, a sector or a page type.

**The five roles:**

| Role | Question (in their words) | Answer in panel | Route | Proof format on role page |
|---|---|---|---|---|
| Executive | "Which projects threaten COD or the capital envelope?" | Portfolio exposure, ranked, with the accountable name against each project. | Executive view → | Portfolio table |
| Project Director | "What is late, and who is holding it?" | Live register, risk matrix and approval queues without waiting for a monthly cycle. | Director view → | Register |
| PMO & Controls | "Is the control process actually being run?" | Register currency, contractual clocks, ageing by workstream and by holder. | PMO view → | Ageing charts |
| CIO & IT | "Where does the data live and who can reach it?" | Tenant-native deployment, identity, residency, and the AI approval boundary. | IT view → | Architecture diagram |
| Procurement | "What are we signing, and how do we leave?" | Commercial model, support terms, portability and exit, stated before the call. | Procurement view → | Terms |

**What changes per role page:** the headline question, the product screens shown, the three outcomes listed, the proof format (table above), and the call to action's commitment level.

**What never changes:** the category line, the tenant statement, the header, the footer, the type scale, and the claim itself. Five entrances, one building: a director and a CIO comparing notes must recognise the same product.

**Do:**

- Write each role's question in their words, in quotes. It is the only copy they will read in the panel.
- Give procurement and IT full pages, not a section of the FAQ. They are the two roles that stop deals.
- Keep the sector rail in the panel so an unidentified visitor still has a route.

**Don't:**

- List modules in the role panel. A role does not want a feature index.
- Add a sixth role. Five is the buying group; more dilutes each argument.
- Change the category line or the claim per role. That reads as a different product each time.

## C. Sector routes

Renewables and data centres. Two sectors, two vocabularies: the same platform, described in the terms each sector already uses internally. Status: Candidate for locking.

**Purpose.** Credibility is vocabulary. A renewables director thinks in COD protection and grid connection; a data centre PMC thinks in RFS dates, OFCI scope and commissioning gates. Using the wrong noun costs the meeting.

**Must include.** Two routes only. Each names the sector's own risk language, the roles it maps to, and the modules that carry the weight in that sector.

**Layout rules:**

- Two equal cards on a light ground, no visual hierarchy between them. RTPM does not signal a preferred sector.
- Each card: sector, the failure it prevents (one sentence, placeholder in source), four terms in that sector's language, buyer types in the footer, one route.
- Section header slots: label "By sector", placeholder headline naming the sector split, placeholder line explaining that the control layer is the same and the risk language is not.

**Card content:**

| | Renewables | Data centres |
|---|---|---|
| Term 1 | COD protection: slip against commercial operation date, in days | PMC reporting: one record across owner, PMC and trades |
| Term 2 | Grid connection: maturation phases and third-party dependency | RFS date: ready-for-service exposure by hall and phase |
| Term 3 | Contractor risk: multi-package exposure and interface management | OFCI scope: owner-furnished interfaces and delivery risk |
| Term 4 | Permit & consent: authority clocks that no contractor controls | Commissioning gates: level gates, witness sign-off, evidence trail |
| Buyer types (footer) | Owners · IPPs · EPC oversight | Hyperscale · colocation · PMC |
| Route | Renewables route → | Data centre route → |

**Do:**

- Use each sector's own abbreviations: COD, RFS, OFCI. Spelling them out signals an outsider.
- Keep the two cards visually identical. Ranking sectors loses the one you ranked second.
- Name the buyer types in the card footer so a visitor can self-identify.

**Don't:**

- Add a third sector before there is delivery experience in it.
- Illustrate sectors with turbine or server-rack imagery. Use real product screens.
- Duplicate the whole site per sector. Two routes converge on one platform story.

## D. Procurement credibility layer

The page that decides whether there is a deal. Answers before the call: data residency, governance, AI approval, exit and portability, stated in public, in writing. Status: Candidate for locking.

**Purpose.** A small vendor selling into a utility or a hyperscaler fails on procurement, not on product. Publishing the answers removes the reason to disqualify RTPM early and signals that the questions were expected.

**Must include:**

- Four sections, each with a plain statement and a downloadable artefact: data residency; governance and access; AI human-in-the-loop approval; exit and portability.
- A named contact, not a form.

**Layout rules:**

- Document-like, not marketed.
- Navy band at the top carrying the position, then a light two-column body of question and answer.
- Every answer is a sentence a buyer can paste into a tender response.

**Page structure (governance page example):**

- Navy band: label "Governance & procurement"; headline "Runs inside your tenant. Your data never leaves your governance."; placeholder paragraph stating the deployment position in one plain sentence a CIO can forward; gold primary action "Download the governance pack"; secondary action "Speak to Henning directly".
- Four Q&A sections:

| Section | Question line | Answer slot (placeholder in source) | Checkmarked facts | Artefact |
|---|---|---|---|---|
| Data residency | Where the record physically lives | Names the tenant, the region, and what, if anything, leaves it. Tender-ready statement. | Placeholder residency facts (2) | Residency statement (PDF) → |
| Governance & access | Who can see what, and who decided | Identity through the customer's own directory, role-based access, and an audit trail that cannot be edited. | Placeholder access facts (2) | Access model (PDF) → |
| AI approval boundary | The agent proposes, a named human disposes | The agent drafts and stages; it never sends, never changes a status, never closes a record. Every accepted draft names its approver in the trail. | Human-in-the-loop on every write; Agent features can be disabled per tenant | AI governance note (PDF) → |
| Exit & portability | How you leave, and what you take | Export format, what is included, how long it takes, and what happens to the audit trail. Stated before signature, not after. | Placeholder portability facts (2) | Exit terms (PDF) → |

- Tender question bank: the questions RTPM is asked most, answered once. Each entry is a question plus a single paste-ready sentence (three placeholder entries in source).

**Do:**

- Write answers a buyer can paste into a tender response unedited. That is the whole test.
- Publish exit terms. A vendor confident about leaving is a vendor worth entering.
- Use the page's one gold action here, on the navy band, for the governance pack.
- Offer a named person instead of a form. Procurement trusts accountability, not funnels.

**Don't:**

- Gate the governance pack behind a form. The point is to remove friction, not harvest an email.
- Claim a certification RTPM does not hold. One unverifiable badge voids the page.
- Market on this page. It is a document, and its restraint is the argument.
- Bury AI governance in a footnote. For this audience it is a first-tier question.

## E. Surface rhythm

Three surfaces, no new token. A surface change signals a change of purpose, not alternation; stripes stop meaning anything by the third one. Status: Candidate for locking.

**Purpose.** A long page needs orientation without navigation. Three surfaces give a reader landmarks: this section argues, this section shows, this section is the commitment. The rhythm does the work a subheading cannot.

**Design principles:**

- Use only the three surfaces already locked in Step 1. Add no colour.
- The tone change is the boundary. Draw no rule between sections.
- Never place two tinted sections in a row: adjacent tints merge and the boundary disappears.

**The three permitted surfaces:**

| Surface | Value | Job |
|---|---|---|
| Paper White | `#FFFFFF` | The default. Argument, explanation, narrative. Roughly two thirds of any page. |
| Page tint | `#F7F7FB` | Evidence: product screens, sector routes, workflow sequences, question banks. Cards on it stay white so screenshots lift off the ground. |
| Ink Navy | `#070474` | The commitment. Once per page, always the trust claim. Twice only when the footer is the second. Carries the page's one gold action. |

**Homepage rhythm (five earned changes):**

| Order | Section | Surface |
|---|---|---|
| 1 | Hero | White |
| 2 | Role bar | Tint |
| 3 | How it works | White |
| 4 | Sector routes | Tint |
| 5 | Governance | Navy, one gold action |
| 6 | Closing | White |
| 7 | Footer | Navy |

### Mobile breakpoints

| Element | Rule |
|---|---|
| Hero | Stacks under 768px. The 52/48 split becomes one column, text above the workflow sequence. Single-column stacking and the 16px gutter follow RTPM 3, section 09; no separate mobile grid is defined here. |
| Role panel | Becomes a tap-based accordion (hover and focus do not exist on touch), one role open at a time. Rows keep the 48px target from RTPM 3. |
| Sector cards | Stack vertically under 768px in the same order, neither promoted. Card radius, spacing and type floor are unchanged from the desktop rule. |

**Do:**

- Change surface only where the section's job changes. Five changes on a long page is right.
- Keep cards white on the tint so product screens lift off the ground.
- Let the navy band carry the page's single gold action.
- Open and close the body on white. Navy is a punctuation mark, not a chapter.

**Don't:**

- Alternate white and tint section by section. That is a stripe, not a structure.
- Place two tinted sections next to each other.
- Draw a rule between two surfaces. The tone change is already the boundary.
- Introduce a fourth surface, or tint a section a different colour to "break it up".

## F. Footer & page templates

The site's shell and the remaining page types.

### Site footer

The only place lockup B appears, and where residency is restated. Status: Candidate for locking.

**Layout rules:**

- Navy, once per page. If the page already used its navy band, the footer is the second and last: the only exception to one band per page.
- Four columns: Platform, By role, By sector, Company. Governance sits under Company, not buried in legal.
- Lockup B here. The footer is a cold-contact context (a visitor may arrive deep from search), so the descriptor is permitted.
- Residency line: tenant and region restated in the legal row. It costs one line and answers the recurring question.

**Footer content (example):**

- Brand block: lockup B (RTPM, descriptor "Project Control"), category line "Customer-side control layer for complex capital projects", plus a placeholder line naming the company position.
- Platform: Control layer, Registers, Reporting, Agents.
- By role: Executive, Project Director, PMO & Controls, CIO & IT, Procurement.
- By sector: Renewables, Data centres.
- Company: About, Governance, Insight, Contact.
- Legal row: © 2026 Real Time Project Management · Privacy · Terms · "Data residency: customer tenant, EU region" · LinkedIn.

### Remaining page types

Specified as structure. Each is assembled from patterns already locked; none needs a new one. Status: Candidate for locking.

| Page | Structure | Reuses | Status |
|---|---|---|---|
| Module page | Problem framing, one real product screen, three outcomes, the workflow sequence, one action. One page per module: Risk, Documents, Correspondence, Change, Compliance. Page header carries the module's icon from RTPM 1. Core Tokens, section 07, at 24px beside the title, the same icon shown in that page's product screenshot. 24px is the "cards and standalone placements" tier, not the 20px sidebar tier. | Hero split · workflow sequence · register screenshot | Candidate |
| Role page | The role's question as the headline, the proof format that role trusts, three outcomes, and a commitment-matched action. Five instances of one template. | Hero split · dashboard screens · sector rail | Candidate |
| Commercial model | How RTPM is priced and what is included, as a structure rather than a tier grid. No published figures until the model is fixed; an empty pricing table costs more credibility than an honest explanation. | Governance page layout · question bank | Blocked on model |
| About | Henning's real position and why RTPM exists, in first person. No invented team bios, no advisory board that does not exist. One portrait, the cold-contact lockup, a direct contact line. | Article layout · lockup B | Candidate |
| Insight article | Header art from the Step 2 article banner, 720px measure, 19px body, byline with portrait, related links in the footer. Where LinkedIn long-form is repurposed and owned. | Step 2 article banner · footer | Candidate |
| Working session | The contact page. Four fields, no qualification quiz, and a plain statement of what the session is: a look at one of their own workflows, not a demo script. | Form patterns from the record panel | Candidate |
| Case study | Held. Nothing is built and nothing is populated until a real project outcome exists and the client has approved its publication. | (none) | On hold |

## Open decisions and lock status

### Lock tracker (Step 4, website architecture)

| Sect. | Component | Inherits | Status |
|---|---|---|---|
| (general) | Inter-only rule for the website | Step 1 typography | Candidate |
| A | Site header | Lockup A · button hierarchy | Candidate |
| A | Homepage above the fold | Workflow sequence · tenant statement | Candidate |
| A | Role bar under the fold | Role-based navigation | Candidate |
| B | By-role navigation panel | Five-role buying group | Candidate |
| B | What changes per role, what never does | Category line · tenant statement | Candidate |
| C | Two sector routes | Sector vocabularies | Candidate |
| D | Procurement credibility layer | Agent governance · audit trail | Candidate |
| D | Tender question bank | (none) | Candidate |
| E | Surface rhythm, three surfaces | Step 1 neutrals · Ink Navy | Candidate |
| F | Site footer | Lockup B · residency line | Candidate |

Nothing in Step 4 is Locked yet. Every section (A to F) and the remaining page types are marked "Candidate for locking". Page-type status: Commercial model is "Blocked on model"; Case study is "On hold".

Once Step 4 is locked, the brand system is complete; no new component was invented for this surface.

### Three decisions for Henning

1. **Primary action wording.** "Book a working session" instead of "Request a demo": it promises a look at their own workflow, not a pitch. It also raises the commitment. Confirm, or name the wording used in outreach today.
2. **Publishing exit terms.** The governance page publishes exit and portability openly, ungated. That is unusual and it is the strongest signal on the site. Confirm willingness to commit those terms in public.
3. **No pricing page.** Commercial model is described in structure with no figures until the model is fixed. The alternative is a tier grid that would have to be defended. Decide which goes live at launch.


All copy other than the category line, plus the residency, access and portability facts and the tender question bank, is placeholder in the source.
