# RTPM Brand System v4 — tokens

`tokens.css` and `tokens.json` are the same set of values in two formats. Every
value was extracted from the five RTPM v4 knowledge files; nothing was invented.

**Scope.** Web-facing surfaces: the marketing site, rtpm.dk, and any React-based
product demo or next-gen frontend. Not the Power Apps / SharePoint / Dataverse
delivery product — that UI is constrained by the platform and cannot consume
these files. Where the two need to agree (status colours, module names, the
mark), `tokens.json` is the reference a Power Apps theme is built from by hand.

## Two layers

**Primitives** (`--rtpm-*`) are raw values. They are never referenced by a
component.

**Semantics** (`--color-*`, `--type-*`, `--radius-*`) are what components
consume. `--color-action-primary-bg` rather than `--rtpm-gold`.

The reason is that primitives answer "what colour is this" and semantics answer
"what is this for". Only the second survives a rebrand, and only the second
stops gold from being used as a status colour by someone who only saw the hex.

If a component needs a value the semantic layer does not express, the token set
is missing something. Add it here. Do not inline a hex.

## Using it

**In CSS or React with plain CSS variables:**

```jsx
import "./tokens/tokens.css";

const Button = ({ variant = "secondary", ...props }) => (
  <button
    style={{
      height: "var(--size-control-height)",
      borderRadius: "var(--radius-control)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--type-label-size)",
      fontWeight: "var(--rtpm-weight-semibold)",
      border: "none",
      cursor: "pointer",
      padding: "0 18px",
      background: `var(--color-action-${variant}-bg)`,
      color: `var(--color-action-${variant}-text)`,
    }}
    {...props}
  />
);
```

**Elsewhere:** `tokens.json` is the machine-readable copy. It follows the DTCG
shape (`$value` / `$type`, `{primitive.color.gold}` aliases) so Style Dictionary
can emit Swift, XML, SCSS or a Tailwind theme from it without a rewrite.

## Making this the shared source of truth

The five HTML files are documentation. They render the system but nothing can
read them. The order that gets you a system working across design, code and
future projects:

1. **Put `tokens/` in the repo.** One place a hex is ever written.
2. **Build the components on top of it** — shell, card, status pill, stepper,
   table, button. Each consuming only the semantic layer.
3. **Add the guide** — the prose rules from the five files, condensed into
   markdown next to the tokens.
4. **Run `/design-sync` in Claude Code** inside that package. It reads the
   tokens and components and publishes them as the design system every future
   Claude Design project inherits. It syncs *from* code, which is why the code
   has to exist first.
5. **SharePoint mirror** stays manual, but mirrors the repo, not the HTML files.

## Resolved — all source files updated

Every gap found in the first pass has been closed in the five RTPM v4 files, so
the documentation and these tokens now agree.

| Value | Resolution |
|---|---|
| `#5652E0` | Removed. 11 uses in RTPM 0 charts became `#00C794` (series 2); the RTPM 2 connector rule became `#0D08D2`. Not a valid colour anywhere in the system. |
| `#6F6DC9` | Removed. 4 uses in the RTPM 0 sidebar consolidated into `#CFCEFF`. |
| `#00C794` as UI | Removed. The RTPM 2 and RTPM 4 step markers became `#0D08D2`. The colour is chart-categories-only again. |
| `#FAFAFD` | Ratified into RTPM 1 section 01 as Inset. |
| Tint pairs | Ratified as a Status tints block in RTPM 1. |
| `#F2C200`, `#0A06A8` | Ratified as hover states in RTPM 1. |
| `#F2F2F7`, `#B9BACB`, `#F0F0F5`, `#D6D4F5` | Ratified in Surfaces — extended. |
| `#F0F0F5` collision | Option A. `#F0F0F5` now means the inner card rule only; chart "not started" moved to `#E6E6F0`, with `#DCDCE8` as its border so the fill stays visible. Three chart-grey instances were found, not one. |

One consequence worth knowing: after the `#00C794` removals, RTPM 2 contains no
chart-series colour at all. That is correct — it is a marketing file.
