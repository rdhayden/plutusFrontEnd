# Implementation Plan — Refactor CSS to CSS Modules

## Decisions in effect

- **JS-computed inline styles** (context menu coordinates, dropdown positions from `getBoundingClientRect`) remain as inline styles.
- **Each component gets its own CSS module** — no shared modules.
- **globals.css** unchanged — reset rules and typography utility classes (`.heading-1` … `.body-2`) stay global.
- **design-tokens.css** unchanged — all `var(--...)` references continue to work inside module classes.
- **Naming convention:** camelCase throughout, matching existing `ChartTabBar.module.css`.

## Migration rules applied to every component

| Inline style pattern | What to do |
|---|---|
| Static layout/appearance | Move to a CSS module class |
| `onMouseEnter/Leave` toggling background | Replace with CSS `:hover` pseudo-class in the module |
| State-conditional style (e.g. `isActive ? colorA : colorB`) | Add a modifier class (e.g. `.linkActive`) and apply with `className={isActive ? styles.linkActive : styles.link}` |
| JS-computed value (`top: x, left: y` from coords) | Leave as inline style |
| Chart library JS config objects | Out of scope — not CSS |

---

## Phase 1 — Simple, stateless components

**Components:** `ConfirmDialog.tsx`, `AddWatchlistModal.tsx`, `SearchBar.tsx`, `CandlestickChart.tsx`, `VolumeChart.tsx`

These components have few or no state-conditional styles. Patterns are straightforward static layout.

### ConfirmDialog.tsx
Create `ConfirmDialog.module.css`. Classes needed:
- `.backdrop` — `position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 1000`
- `.dialog` — centred fixed panel, border, shadow, width 320px
- `.message` — body text
- `.footer` — flex row, justify end, gap
- `.btnCancel` — secondary button style
- `.btnConfirm` — destructive/negative button style

### AddWatchlistModal.tsx
Create `AddWatchlistModal.module.css`. Classes needed:
- `.backdrop` — same as ConfirmDialog backdrop
- `.modal` — centred fixed panel (same structure)
- `.header` — flex row, border-bottom, bg-secondary
- `.title` — label text style
- `.closeBtn` — icon button
- `.body` — form padding
- `.label` — form label
- `.input` — text input base style
- `.inputError` — modifier: `border-color: var(--color-negative)` (for error state)
- `.errorMsg` — error text below input
- `.footer` — flex row, justify end, gap
- `.btnCancel` — secondary button
- `.btnSubmit` — primary/bold button

### SearchBar.tsx
Create `SearchBar.module.css`. (Read file first to determine classes needed.)

### CandlestickChart.tsx / VolumeChart.tsx
Create `CandlestickChart.module.css` / `VolumeChart.module.css` for container wrapper styles only. Chart library colour config in JS objects is unchanged.

**Test after Phase 1:** Visual inspection — no layout regressions on modal, search bar. Run existing test suite.

---

## Phase 2 — Components with active/hover state logic

**Components:** `Header.tsx`, `NotesPanel.tsx`, `SignalConfigPanel.tsx`

These introduce state-conditional class application.

### Header.tsx
Create `Header.module.css`. Classes needed:
- `.header` — flex bar, height, border-bottom, bg, padding, gap
- `.logo` — heading font, size, weight, letter-spacing
- `.nav` — flex, gap
- `.navLink` — base link style (no active state)
- `.navLinkActive` — modifier: primary colour + bg-secondary
- `.controls` — `marginLeft: auto`, flex, align-center, gap
- `.liveLabel` — body-1, muted text
- `.toggle` — 36×20 pill button base style (bg set inline via `liveMode` boolean — stays inline since it's a colour toggled by state)
- `.toggleThumb` — the white dot (position animated; `left` value depends on `liveMode` — stays inline)

**Note on toggle:** The `background` and `left` values change with `liveMode` state. These are simple enough to keep as inline styles, consistent with the JS-computed-value rule. Alternatively they can use a modifier class `.toggleOn` to set `background`; the `left` property can also be a modifier. Recommend using modifier classes for `.toggleOn` to avoid inline dynamic colour.

### NotesPanel.tsx / SignalConfigPanel.tsx
Read each file; create corresponding module. Apply standard migration rules.

**Test after Phase 2:** Visual check of header active state, live mode toggle animation. Run test suite.

---

## Phase 3 — Components with JS hover + context menus

**Components:** `SortableWatchlistItem.tsx`, `SearchResults.tsx`

### SearchResults.tsx
Create `SearchResults.module.css`. Classes needed:
- `.container` — 280px width, flex column, border-left/right, bg, full height, overflow hidden
- `.header` — padding, border-bottom, flex space-between, align start
- `.subheading` — muted text, marginTop
- `.closeBtn` — icon button (no bg, cursor pointer, border-radius, flex centered)
- `.list` — `flex: 1; overflow: auto`
- `.emptyMsg` — centered muted text
- `.resultBtn` — base result button (layout, width, margin, border-radius, cursor, text-align, transition); **remove `onMouseEnter/Leave`**, add `:hover { background: var(--color-bg-secondary) }`
- `.ticker` — font-weight 600, body-1 size, primary colour
- `.exchangeName` — body-2, muted
- `.resultName` — body-2, muted
- `.contextMenu` — `position: fixed; z-index: 1000` — **top/left stay inline** (JS coordinates)
- `.contextMenuHeader` — muted label, border-bottom, padding, user-select none
- `.contextMenuEmpty` — muted no-watchlists message
- `.contextMenuItem` — watchlist button; base style; **`onMouseEnter/Leave` → `:hover`**
- `.contextMenuItemDisabled` — modifier: muted colour, `cursor: default`

### SortableWatchlistItem.tsx
Read file; create `SortableWatchlistItem.module.css`. Apply standard migration rules.

**Test after Phase 3:** Verify context menu positioning still works. Verify hover states on result buttons. Run test suite.

---

## Phase 4 — Watchlist component

**Components:** `Watchlist.tsx`

This is a complex component with multiple hover state variables (`hoveredTicker`, `headerHovered`), rename mode, and inline conditional styles throughout. Read the full file before starting.

Create `Watchlist.module.css`. Strategy:
- Replace `onMouseEnter/Leave` hover states with CSS `:hover` where the hover styling is purely visual (background, text colour).
- For hover states that control *visibility* of action buttons (e.g. show remove button only on row hover), use CSS `.row:hover .actionBtn { display: flex }` — eliminates `hoveredTicker` state entirely.
- `isRenaming` conditional styles → modifier classes (`.headerRenaming`, `.inputVisible`, etc.).

**Test after Phase 4:** Verify watchlist hover behaviour, rename flow, drag handles. Run test suite.

---

## Phase 5 — ChartPanel

**Component:** `ChartPanel.tsx`

The largest and most complex component. It currently imports `ChartTabBar.module.css` for tab bar styles (already migrated). The remaining inline styles are for the panel layout, sidebar, and any other sub-sections.

Strategy:
- Create `ChartPanel.module.css` alongside the existing `ChartTabBar.module.css`.
- `ChartPanel.tsx` will import both: `import styles from "./ChartPanel.module.css"` (tab styles remain from `ChartTabBar.module.css` via the existing import).
- Layout/container styles (sidebar width, flex layout, chart area, crosshair overlay) → module classes.
- JS-computed values (crosshair position, any pixel offsets derived from measurements) stay inline.

**Test after Phase 5:** Full visual smoke test of chart panel. Verify tab bar still works, crosshair sync, pill dropdown positioning. Run full test suite.

---

## Acceptance criteria

- Every component in `src/components/` has a corresponding `.module.css` file.
- No `style={{...}}` props remain except for JS-computed values (coordinates, dynamically computed pixel values).
- No `onMouseEnter`/`onMouseLeave` handlers remain that solely toggle a CSS property — these are replaced by CSS `:hover`.
- State-conditional appearance uses conditional `className` with modifier classes.
- `globals.css` is unchanged.
- `design-tokens.css` is unchanged.
- All existing tests continue to pass.
- No visual regressions.
