# Design Discussion — User Named Watchlists

---

## 1. Summary of Change Request

The application currently has a single, hardcoded Watchlist panel in the sidebar. Users cannot organise tickers by purpose — everything goes into one undifferentiated list.

This feature replaces the fixed panel with a dynamic system of user-created, named watchlists. Users will be able to:

- Create any number of named watchlists (up to 50) via an "Add Watchlist" button
- Add tickers from search results into a chosen watchlist
- Rename, delete, and reorder watchlists
- Have their watchlists restored automatically on every page load

The database schema is also extended as part of this ticket: all watchlist entries will be stored with the name of the watchlist they belong to, and a new metadata table will track watchlist names and display order. Any existing watchlist entries will be deleted as part of the migration.

---

---

## 6. Resolved Design Questions

### Q1 — Page load fetch strategy
**Decision: single combined bootstrap endpoint.**
`GET /api/watchlists/all` returns all watchlists with their entries nested in one SQL join. This replaces the N+1 pattern (metadata fetch then one entry fetch per watchlist) that would have resulted from the base CRUD endpoints alone. The four separate CRUD endpoints remain unchanged for mutations.

### Q2 — "Already in watchlist" state in SearchResults
**Decision: grey out per watchlist.**
The watchlist name submenu greys out and disables any watchlist name that already contains the selected ticker, matching the existing visual convention. `useWatchlists` provides a `Map<string, Set<string>>` (ticker → set of watchlist names it belongs to) so `SearchResults` can check membership per watchlist without additional fetching.

### Q3 — Rename interaction trigger
**Decision: hover-revealed pencil icon in the panel header.**
A pencil SVG icon appears in the watchlist panel header on hover, sitting between the name and the right-side controls (chevron, × delete). Clicking it replaces the name text with an inline `<input>`. This is discoverable without adding permanent clutter to the header, and is consistent with the hover-reveal pattern already used for the × remove button on ticker rows.

### Q4 — `display_order` update strategy
**Decision: contiguous integers, single batch endpoint.**
A dedicated `POST /api/watchlists/reorder` endpoint accepts `[{ name, display_order }]` and updates all rows in a single transaction. One HTTP request is made per drag-end. `display_order` values are always `0, 1, 2, …, n-1`. The existing `PATCH /api/watchlists/:name` retains its rename-only responsibility.

### Q5 — Error feedback location
**Decision: inline error below the input field.**
Validation errors ("Watchlist name must be unique", "Name must be alphanumeric", etc.) appear directly beneath the name input inside the modal, rendered in `var(--color-negative)`. The modal stays open until the error is resolved. The same pattern applies to the rename inline input in the panel header.

---

## 5. Patterns to Follow

### 5.1 Optimistic fire-and-forget persistence

State is updated immediately in React and the API call is made afterwards with no `await`. A `.catch()` logs the error but does not roll back the UI. No loading indicator is shown for write operations.

This keeps the UI feeling instant and avoids complicating handlers with async loading states for operations that are very unlikely to fail in a single-user local setup.

```typescript
// Update local state immediately
setWatchlistItems((prev) => prev.filter((item) => item.ticker !== ticker));

// Persist to DB — fire and forget
fetch(`/api/watchlist/${encodeURIComponent(ticker)}?name=${encodeURIComponent(watchlistName)}`, {
  method: "DELETE",
}).catch(() => console.error("Failed to delete watchlist entry"));
```

All write handlers in `useWatchlists` should follow this pattern: mutate state first, then kick off the fetch.

---

### 5.2 Fixed-position floating overlay (Escape + click-outside)

Used by `NotesPanel.tsx` and the `SearchResults` context menu. A `useEffect` registers document-level `mousedown` and `keydown` listeners when the overlay is open and removes them on cleanup. The overlay is rendered at a fixed screen position with `zIndex: 1000`.

This pattern applies to: the "Add Watchlist" modal, the delete confirmation dialog, and the watchlist name submenu on search results.

```typescript
const overlayRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleMouseDown = (e: MouseEvent) => {
    if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
      onClose();
    }
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };
  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("keydown", handleKeyDown);
  return () => {
    document.removeEventListener("mousedown", handleMouseDown);
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [onClose]);

return (
  <div
    ref={overlayRef}
    style={{
      position: "fixed",
      top: y,
      left: x,
      zIndex: 1000,
      background: "var(--color-bg)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-m)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    }}
  >
    {/* overlay content */}
  </div>
);
```

---

### 5.3 Collapsible accordion panel

Used by the existing `Watchlist.tsx`. A header `<button>` toggles `isOpen` state passed in from the parent. The chevron SVG rotates 180° via a CSS `transform`. The body is conditionally rendered — not hidden with CSS — so collapsed panels add no DOM cost.

Each named watchlist panel should follow this exact structure. `isOpen` is owned by `useWatchlists` (UI-only state, not persisted).

```tsx
<div style={{ borderBottom: "1px solid var(--color-border)", flexShrink: 0 }}>
  <button onClick={onToggle} style={{ display: "flex", justifyContent: "space-between", width: "100%", /* ... */ }}>
    <span className="heading-3">{name}</span>
    <svg
      style={{
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s",
      }}
      /* chevron path */
    />
  </button>

  {isOpen && (
    <div>
      {/* ticker rows */}
    </div>
  )}
</div>
```

---

### 5.4 CSS design tokens for all styling

All colours, spacing, typography, and radii are applied via CSS custom properties defined in `src/styles/design-tokens.css`. Hardcoded values are never used for these concerns.

Key token groups:

| Category | Examples |
|----------|---------|
| Colours | `var(--color-bg)`, `var(--color-bg-secondary)`, `var(--color-border)`, `var(--color-text-primary)`, `var(--color-text-muted)`, `var(--color-negative)` |
| Spacing (inset/padding) | `var(--inset-xs)`, `var(--inset-s)`, `var(--inset-m)` |
| Spacing (gap) | `var(--space-xs)`, `var(--space-s)` |
| Typography | `var(--body-1-size)`, `var(--body-2-size)` — or class names `heading-3`, `body-2` |
| Radii | `var(--radius-s)`, `var(--radius-m)` |

```tsx
// Correct
<div style={{ background: "var(--color-bg)", padding: "var(--inset-s)" }}>
  <span className="heading-3">{name}</span>
</div>

// Wrong — never use hardcoded values
<div style={{ background: "#1a1a2e", padding: "8px" }}>
```

---

### 5.5 Custom hook for watchlist state (`useWatchlists`)

There is no existing custom hook in the codebase — all state currently lives inline in `page.tsx`. This feature introduces `src/hooks/useWatchlists.ts` as the first hook, following a pattern where the hook owns all state and API calls and returns plain values and stable callbacks. Components receive everything as props; they do not call the hook themselves.

`page.tsx` calls the hook once and distributes its return value downward:

```typescript
// src/hooks/useWatchlists.ts
export function useWatchlists() {
  const [watchlists, setWatchlists] = useState<Watchlist[]>([]);
  const [notes, setNotes] = useState<Record<string, string>>({});

  // Load all watchlists + entries on mount via single bootstrap call
  useEffect(() => { /* GET /api/watchlists/all */ }, []);

  const createWatchlist = useCallback((name: string) => {
    // Optimistic update then POST /api/watchlists
  }, []);

  const addTicker = useCallback((watchlistName: string, result: TickerSearchResult) => {
    // Optimistic update then POST /api/watchlist
  }, []);

  // ... deleteWatchlist, renameWatchlist, reorder, removeTicker, updateNote

  return { watchlists, notes, createWatchlist, addTicker, /* ... */ };
}

// src/app/page.tsx
const { watchlists, notes, createWatchlist, addTicker } = useWatchlists();
```

Handlers returned by the hook are wrapped in `useCallback` (matching the existing convention in `page.tsx`) so their references are stable when passed as props.

---

## 4. Out of Scope

- **Authentication and multi-user support.** All routes will continue to use the hardcoded `USERNAME = "plutus"` constant. The `username` column is retained in the schema for future use but no login, session, or user management work is included.

- **Per-watchlist notes.** Notes are per-ticker globally — the same note appears on a ticker regardless of which watchlist it is viewed in. Separate notes per watchlist occurrence are not supported.

- **Reordering tickers within a watchlist.** Drag-to-reorder applies only to watchlist panels in the sidebar. The order of tickers inside a given watchlist panel is not user-configurable (entries are returned ordered by ticker symbol as today).

- **Migration framework.** No ORM, Prisma Migrate, Alembic, or similar tooling is introduced. The schema change is applied as a manually executed SQL migration and the `src/sql` file is updated to reflect the final state.

- **Python backend changes.** All watchlist persistence is handled by the Next.js API routes. No changes are required to the FastAPI ticker search service or the Strawberry GraphQL signals service.

- **Watchlist import, export, or sharing.** Users cannot share watchlists between accounts, export them to a file, or import from external sources.

---

## 3. Desired End State

### Problems solved

- The user is no longer forced to keep all tickers in a single undifferentiated list. They can group tickers by purpose (e.g. "Holdings", "Watchlist", "Shortlist").
- Watchlists persist across page loads — all named watchlists and their entries are restored automatically when the page is opened.
- The database schema correctly records which watchlist each ticker entry belongs to.

### What a user can do after this feature ships

**Creating watchlists**
- Click an "Add Watchlist" button (located where the old fixed panel was) to open a modal.
- Enter a name (alphanumeric and spaces only, max 30 characters). The watchlist is created and its panel appears in the sidebar.
- If a watchlist with that name already exists, an inline error reads "Watchlist name must be unique".
- Up to 50 watchlists can be created.

**Adding tickers**
- Right-click a search result → "Add to watchlist" → a dropdown lists all existing watchlist names. Clicking a name adds the ticker to that watchlist (up to 1000 entries per watchlist).
- If no watchlists exist, the dropdown shows only "no watchlists".
- The same ticker may be added to more than one watchlist.

**Managing watchlists**
- Each watchlist panel is collapsible (expand/collapse via its header).
- Double-clicking the watchlist name (or clicking a pencil icon) allows the user to rename it inline. The new name is validated for uniqueness and character rules before being saved.
- Clicking the × icon on a panel header deletes the watchlist. If the watchlist contains tickers a confirmation dialog appears: "Watchlist not empty, are you sure you want to delete it?" with Yes/No buttons. Confirming removes the watchlist and all its entries from the database.
- Watchlist panels can be dragged up or down the sidebar to reorder them. The new order is persisted immediately.

**Notes**
- Right-clicking a ticker inside any watchlist panel opens the notes editor, unchanged from today. Notes are per-ticker and shared across all watchlists — if the same ticker appears in two watchlists it shows the same note in both.

### Database end state

Two tables replace the current single table:

```sql
-- Ticker entries (one row per watchlist+ticker combination)
CREATE TABLE watchlist (
  username       TEXT    NOT NULL,
  watchlist_name TEXT    NOT NULL,
  ticker         TEXT    NOT NULL,
  notes          TEXT    NOT NULL DEFAULT '',
  PRIMARY KEY (username, watchlist_name, ticker)
);

-- Watchlist metadata (one row per watchlist)
CREATE TABLE watchlists (
  username      TEXT    NOT NULL,
  name          TEXT    NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (username, name)
);
```

The migration deletes all existing `watchlist` rows, alters the table to add the `watchlist_name` column and new primary key, and creates the `watchlists` table. The `src/sql` file is updated to reflect the final schema.

### API end state

Ten routes in total (four updated, six new).

#### New routes — `/api/watchlists`

These routes operate on watchlist metadata (name and display order) rather than ticker entries.

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/watchlists/all` | **Bootstrap endpoint.** Returns all watchlists with their entries nested: `[{ name, display_order, entries: [{ ticker, notes }] }]` via a single LEFT JOIN query. Called once on page load — replaces the previous single `GET /api/watchlist` call. |
| GET | `/api/watchlists` | Returns `[{ name, display_order }]` ordered by `display_order`. Available for cases where metadata alone is needed without entries. |
| POST | `/api/watchlists` | Creates a new watchlist. Body: `{ name }`. Validates uniqueness, alphanumeric + spaces only, max 30 characters, and fewer than 50 existing watchlists. Returns `{ ok: true }` or `{ error: "..." }`. Assigns `display_order` as `max(existing) + 1`. |
| PATCH | `/api/watchlists/:name` | Renames a watchlist. Body: `{ newName: string }`. Validates uniqueness and name rules, then cascades the new name to all matching `watchlist` entry rows within a transaction. |
| POST | `/api/watchlists/reorder` | Updates display order for all watchlists in one transaction. Body: `[{ name, display_order }]` — the complete reordered array. Called once on every drag-end. |
| DELETE | `/api/watchlists/:name` | Deletes the watchlist row and all its ticker entries in a single transaction. Called after the user confirms the deletion dialog. |

#### Updated routes — `/api/watchlist`

These routes already exist but must be updated to carry the `watchlist_name` dimension.

| Method | Route | What changes |
|--------|-------|-------------|
| GET | `/api/watchlist?name=:watchlist_name` | Previously returned all entries for the user. Now requires a `name` query parameter and returns only entries belonging to that watchlist: `[{ ticker, notes }]`. |
| POST | `/api/watchlist` | Previously accepted `{ ticker, notes? }`. Now requires `{ watchlist_name, ticker, notes? }`. The upsert conflict key changes from `(username, ticker)` to `(username, watchlist_name, ticker)`, allowing the same ticker to exist in multiple watchlists. |
| PATCH | `/api/watchlist/:ticker?name=:watchlist_name` | Previously updated notes by ticker alone. Now requires a `name` query parameter to scope the update to the correct watchlist row, since the same ticker may appear in multiple watchlists. |
| DELETE | `/api/watchlist/:ticker?name=:watchlist_name` | Previously deleted by ticker alone. Now requires a `name` query parameter for the same reason — to remove the ticker only from the specified watchlist. |

### Code end state

- A `useWatchlists` custom hook (`src/hooks/useWatchlists.ts`) owns all watchlist state and API interactions. The three watchlist state variables currently in `page.tsx` are removed. On mount the hook calls `GET /api/watchlists/all` to populate all watchlists and entries in one request.
- The `Watchlist` component is updated to accept a `name` prop rendered in the header, a hover-revealed pencil icon for renaming (inline input replaces the name text), a delete (×) icon, and a drag handle.
- `SearchResults` receives a `Map<string, Set<string>>` of ticker membership and renders a per-watchlist submenu on "Add to watchlist" click, with names greyed out where the ticker already belongs.
- `@dnd-kit/core` and `@dnd-kit/sortable` are added as dependencies to power drag-to-reorder.

---

## 2. Current State

### UI

A single `Watchlist` component ([src/components/Watchlist.tsx](src/components/Watchlist.tsx)) renders as a collapsible accordion panel in the left sidebar. Its header is hardcoded to the label "Watchlist". When open it shows a list of ticker rows; each row has a click target to load the ticker on the chart, a hover-revealed × button to remove it, and a right-click handler that opens `NotesPanel` for editing per-ticker notes.

The right-click context menu on **search results** is in [src/components/SearchResults.tsx](src/components/SearchResults.tsx). It contains a single item — "Add to watchlist" (greyed out as "Already in watchlist" if the ticker is already present). There is no concept of choosing which watchlist to add to.

### State

All watchlist state lives as plain `useState` in [src/app/page.tsx](src/app/page.tsx) (777 lines total):

| Variable | Type | Purpose |
|----------|------|---------|
| `watchlistItems` | `TickerSearchResult[]` | The flat list of tickers in the watchlist |
| `watchlistOpen` | `boolean` | Whether the accordion is expanded |
| `watchlistNotes` | `Record<string, string>` | Per-ticker notes, keyed by ticker symbol |

On mount a single `GET /api/watchlist` call loads all entries and populates these variables. There is no global state manager (no Redux, Zustand, or Context API).

### API Routes

All watchlist persistence is handled by Next.js API routes talking directly to PostgreSQL. There is no watchlist code in the Python backend.

| Route | Method | Behaviour |
|-------|--------|-----------|
| `/api/watchlist` | GET | Returns `[{ ticker, notes }]` for all entries, ordered by ticker |
| `/api/watchlist` | POST | Upserts `{ ticker, notes? }` — conflict key is `(username, ticker)` |
| `/api/watchlist/:ticker` | PATCH | Updates notes for a specific ticker |
| `/api/watchlist/:ticker` | DELETE | Removes a ticker entry |

All routes hardcode `const USERNAME = "plutus"` — there is no authentication.

### Database

PostgreSQL, accessed via the `pg` Node.js client ([src/lib/db.ts](src/lib/db.ts)). No ORM. Schema tracked in [src/sql](src/sql):

```sql
CREATE TABLE watchlist (
  username TEXT NOT NULL,
  ticker   TEXT NOT NULL,
  notes    TEXT NOT NULL DEFAULT '',
  PRIMARY KEY (username, ticker)
);
```

There is no concept of watchlist identity, name, or ordering in the schema.
