# Research — Refactor CSS to CSS Modules

## Overview

12 components in `src/components/`. Only `ChartPanel.tsx` (which hosts the tab bar) currently uses a CSS module (`ChartTabBar.module.css`). All other styling is done via inline `style={{...}}` props — approximately 200+ instances across the codebase. `globals.css` contains no component-level class definitions at all; it only has reset rules and 5 typography utility classes.

---

## Q1 — Scope of inline styles

### Findings

Inline `style={{...}}` props are the **primary** styling mechanism across all 12 components. The CSS modules refactor is effectively only meaningful if it covers inline styles, because `globals.css` has no component CSS to move.

Inline styles in the codebase fall into four categories:

| Category | Description | Migratable? |
|---|---|---|
| **Static layout** | Fixed values (padding, flex layout, borders, colours) | Yes — direct CSS module class |
| **State-conditional** | Value depends on a boolean prop/state (`isActive`, `liveMode`, `alreadyIn`) | Yes — conditional `className` with `.active` modifier class |
| **`onMouseEnter/Leave` hover** | Background toggled via JS event handlers | Yes — replace with CSS `:hover` in the module |
| **JS-computed positions** | `top`/`left` from `getBoundingClientRect()` (context menus, dropdowns) | No — must remain inline |

Examples of JS-computed positions that must stay inline:
- `SearchResults.tsx` context menu: `top: contextMenu.y, left: contextMenu.x`
- `ChartPanel.tsx` pill dropdown: positions from `getBoundingClientRect()`

**Hard-coded raw colours** (not using design tokens) also exist in `CandlestickChart.tsx` and `VolumeChart.tsx` for chart library config (passed as JS objects to the charting library, not rendered as CSS at all) — these are out of scope regardless.

### Recommendation

**Migrate inline styles to CSS modules.** Limiting the refactor to moving globals.css content only would accomplish almost nothing — there is no component CSS there to move. The real inconsistency is that `ChartTabBar.module.css` uses a CSS module while every other component uses inline styles. The refactor should normalise this.

### Decision needed

> **Q1-D1:** Should JS-computed positions (context menu x/y coordinates) continue as inline styles, or should the goal be to eliminate *all* inline styles? (Recommended: allow inline to remain for computed values only.)

---

## Q2 — globals.css — what stays?

### Findings

`globals.css` (61 lines) contains:
1. `@import "tailwindcss"` and `@import "../styles/design-tokens.css"`
2. A universal reset (`*`, `body`) — 8 lines
3. Five typography utility classes: `.heading-1`, `.heading-2`, `.heading-3`, `.body-1`, `.body-2`

The typography classes are used across 9+ files as `className="heading-3"`, `className="body-2"`, etc.

**Option A — Keep typography in globals.css (recommended)**
Genuinely global — used across unrelated components and page files. No mechanical benefit to moving them. `globals.css` remains as the global stylesheet for truly shared, document-level styles.

**Option B — Export from a shared CSS module**
E.g. `src/styles/typography.module.css` with `:global(.heading-1) { ... }`. This preserves scoping intent but adds friction: every component needs to import the shared module just to get a class name.

**Option C — Re-express as Tailwind utilities**
Tailwind is already imported. Typography tokens could become `@utility heading-1 { ... }` in Tailwind v4 syntax. This is a separate initiative, not a straightforward refactor.

### Recommendation

**Option A.** The typography classes are legitimately global — they provide document-wide typographic consistency, similar to a CSS reset. They belong in `globals.css`. No change needed to this file.

---

## Q3 — design-tokens.css

### Findings

`design-tokens.css` defines ~45+ CSS custom properties used extensively via `var(--color-*)`, `var(--space-*)`, `var(--inset-*)`, `var(--radius-*)`, `var(--font-*)` throughout inline styles and the typography classes. It is the design foundation of the system.

### Recommendation

**Leave untouched.** The CSS modules refactor will *continue* to reference these tokens via `var(--...)` inside module class definitions, exactly as `ChartTabBar.module.css` already does. Moving token definitions into modules would break the global cascade they depend on.

---

## Q4 — Tailwind usage

### Findings

`@import "tailwindcss"` appears in `globals.css` but **no Tailwind utility classes** are used directly in any component (no `className="flex"`, `className="p-4"`, etc.). The typography class names (`.heading-3`, `.body-2`) look Tailwind-like but are custom CSS defined in `globals.css`, not Tailwind utilities.

### Recommendation

**Out of scope.** Tailwind is effectively dormant in the current codebase. No action needed as part of this refactor.

---

## Q5 — One module per component file, or per feature?

### Findings

All 12 components are self-contained files in `src/components/`. There are no sub-components sharing a parent container that would naturally share a module. `ChartPanel.tsx` is the largest component — it renders the tab bar, chart area, signal config, and watchlist sidebar — but those sub-areas are already separate component files (`ChartTabBar` styles live in `ChartTabBar.module.css`, not `ChartPanel.module.css`).

**Option A — Strict 1:1 (one module per component file) (recommended)**
`Header.module.css` for `Header.tsx`, `SearchResults.module.css` for `SearchResults.tsx`, etc. Clear ownership, easy to find.

**Option B — Grouped by feature**
E.g. a shared `Modal.module.css` for `AddWatchlistModal` and `ConfirmDialog` which share structural patterns (backdrop, centred dialog, header/body/footer layout). Reduces duplication of near-identical class definitions.

### Recommendation

**Option A for most components; Option B is acceptable for modals.** `AddWatchlistModal.tsx` and `ConfirmDialog.tsx` share a nearly identical structure (fixed backdrop + centred dialog). A shared `Modal.module.css` for these two is a reasonable exception to the 1:1 rule. All other components should have their own module.

### Decision needed

> **Q5-D1:** Shared `Modal.module.css` for `AddWatchlistModal` and `ConfirmDialog`, or separate modules for each?

---

## Q6 — Naming convention for CSS module classes

### Findings

`ChartTabBar.module.css` uses **camelCase** throughout: `.tabBar`, `.tab`, `.tabActive`, `.tabBtn`, `.tabBtnActive`, `.ticker`, `.tickerActive`, `.closeBtn`, `.pill`, `.pillDropdown`, `.pillDropdownItem`.

camelCase is the standard convention for CSS modules in React/Next.js projects because it allows clean object-property access: `styles.tabBar`, `styles.tabBtnActive`.

### Recommendation

**Continue camelCase** to match the existing module. No decision needed.

---

## Q7 — Priority / ordering of components

### Component inventory by estimated complexity

| Component | Inline style count (approx) | Notable complexity |
|---|---|---|
| `ChartPanel.tsx` | 50+ | Dynamic positions, conditional classes, resize logic |
| `Watchlist.tsx` | 40+ | Hover state, rename mode, inline conditional styles |
| `SearchResults.tsx` | 30+ | Context menu (must stay inline), hover via JS |
| `Header.tsx` | 20+ | Active link state, toggle button position animation |
| `SortableWatchlistItem.tsx` | 20+ | Hover state, drag handle |
| `SignalConfigPanel.tsx` | 20+ | Form layout |
| `NotesPanel.tsx` | 15+ | Positioning (fixed panel) |
| `AddWatchlistModal.tsx` | 15+ | Modal structure, error state |
| `ConfirmDialog.tsx` | 10+ | Modal structure |
| `SearchBar.tsx` | 10+ | Input styling |
| `CandlestickChart.tsx` | 5 | Chart container only; colours in JS config |
| `VolumeChart.tsx` | 5 | Chart container only; colours in JS config |

### Recommendation

Migrate **simplest first** to establish the pattern, then work up to complex:

1. `ConfirmDialog.tsx` + `AddWatchlistModal.tsx` — simple, nearly identical modal structure; good for establishing shared modal module
2. `SearchBar.tsx`, `CandlestickChart.tsx`, `VolumeChart.tsx` — small containers, quick wins
3. `Header.tsx`, `NotesPanel.tsx`, `SignalConfigPanel.tsx`
4. `SortableWatchlistItem.tsx`, `SearchResults.tsx`
5. `Watchlist.tsx`
6. `ChartPanel.tsx` — largest; leave for last

---

## Q8 — Acceptance criteria for "done"

### Findings

`globals.css` currently has **no component-level CSS at all** — only reset rules and typography utilities. So the current inconsistency is not "component styles leaking into globals.css" but rather "one component uses a CSS module, eleven use inline styles."

**Option A — globals.css contains only reset + token import**
Matches the ticket goal literally. Already nearly true — just need to ensure no component classes are added there during the refactor.

**Option B — All components use CSS modules for all static styles**
The real goal implied by the ticket: normalise the approach so all components look like `ChartTabBar`. Inline styles remain only for JS-computed values (coordinates, dynamic values) and state-conditional colour/appearance is handled via conditional `className` with modifier classes in the module.

### Recommendation

**Option B.** The goal is stylistic consistency, not just file organisation. Done means: every component has a `ComponentName.module.css` file, all static and hover styles are defined there, state-conditional styles use conditional `className`, and the only remaining inline styles are for truly dynamic computed values (coordinates, values that cannot be expressed as CSS classes).

---

## Summary of decisions needed from user

| # | Question | Options |
|---|---|---|
| Q1-D1 | Allow inline styles to remain for JS-computed positions (e.g. context menu x/y)? | **Yes (recommended)** / No — eliminate all inline |
| Q5-D1 | Shared `Modal.module.css` for AddWatchlistModal + ConfirmDialog, or separate modules? | **Shared (recommended)** / Separate |
