# Implementation Plan — User Named Watchlists

---

## Phase 1 — Database Migration

### Work
1. Connect to the PostgreSQL database and execute the migration:
   - `DELETE FROM watchlist` — remove all existing entries as agreed
   - `ALTER TABLE watchlist DROP CONSTRAINT watchlist_pkey`
   - `ALTER TABLE watchlist ADD COLUMN watchlist_name TEXT NOT NULL DEFAULT ''`
   - `ALTER TABLE watchlist ADD PRIMARY KEY (username, watchlist_name, ticker)`
   - `CREATE TABLE watchlists (username TEXT NOT NULL, name TEXT NOT NULL, display_order INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (username, name))`
2. Update `src/sql` to reflect the final two-table schema.

### Testing
- Connect to the database and verify both tables exist with the correct columns and constraints (`\d watchlist`, `\d watchlists`).
- Confirm the `watchlist` table is empty after migration.
- Confirm the old `PRIMARY KEY (username, ticker)` constraint is gone.
- Confirm `PRIMARY KEY (username, watchlist_name, ticker)` is present.
- Confirm `watchlists` table has the correct primary key and column types.

---

## Phase 2 — New Watchlist-level API Endpoints

### Work
Create `src/app/api/watchlists/route.ts` and `src/app/api/watchlists/[name]/route.ts`:

1. `GET /api/watchlists/all` — LEFT JOIN query returning all watchlists with nested entries: `[{ name, display_order, entries: [{ ticker, notes }] }]`
2. `GET /api/watchlists` — Returns `[{ name, display_order }]` ordered by `display_order`
3. `POST /api/watchlists` — Creates a watchlist. Validates: non-empty, alphanumeric + spaces, max 30 chars, unique per user, fewer than 50 existing. Returns `{ ok: true }` or `{ error: "..." }`. Sets `display_order` to `max(existing) + 1`.
4. `PATCH /api/watchlists/:name` — Renames a watchlist. Validates uniqueness and name rules. Cascades new name to all `watchlist` entry rows in a transaction.
5. `DELETE /api/watchlists/:name` — Deletes the watchlist row and all its entries in a transaction.
6. `POST /api/watchlists/reorder` — Accepts `[{ name, display_order }]` and updates all rows in a single transaction.

### Testing
- `GET /api/watchlists/all` with no watchlists → returns `[]`
- `POST /api/watchlists` with a valid name → row appears in `watchlists` table with correct `display_order`
- `POST /api/watchlists` with a duplicate name → returns `{ error: "Watchlist name must be unique" }`
- `POST /api/watchlists` with invalid characters → returns appropriate error
- `POST /api/watchlists` with a name exceeding 30 characters → returns appropriate error
- `POST /api/watchlists` when 50 watchlists already exist → returns appropriate error
- `GET /api/watchlists/all` after creating two watchlists → returns both with empty `entries` arrays
- `PATCH /api/watchlists/:name` with a valid new name → row updated in `watchlists`, name cascaded in `watchlist` entries
- `PATCH /api/watchlists/:name` with a duplicate new name → returns error
- `DELETE /api/watchlists/:name` → row removed from `watchlists`, all associated `watchlist` entries removed
- `POST /api/watchlists/reorder` with reordered array → `display_order` values updated correctly for all rows
- `GET /api/watchlists` → returns watchlists ordered by `display_order`

---

## Phase 3 — Update Existing Entry-level API Endpoints

### Work
Update the two existing route files to carry the `watchlist_name` dimension:

1. `GET /api/watchlist?name=:watchlist_name` — filter by `watchlist_name` query param (was: return all entries)
2. `POST /api/watchlist` — add `watchlist_name` to required body fields; update conflict key to `(username, watchlist_name, ticker)`
3. `PATCH /api/watchlist/:ticker?name=:watchlist_name` — scope notes update by `watchlist_name` query param
4. `DELETE /api/watchlist/:ticker?name=:watchlist_name` — scope delete by `watchlist_name` query param

### Testing
- `GET /api/watchlist?name=Holdings` with entries in multiple watchlists → returns only Holdings entries
- `GET /api/watchlist` with no `name` param → returns 400 error
- `POST /api/watchlist` with `{ watchlist_name, ticker }` → row inserted with correct watchlist_name
- `POST /api/watchlist` twice for the same `(watchlist_name, ticker)` → upsert, no duplicate row
- `POST /api/watchlist` for the same ticker in two different watchlists → two separate rows exist
- `PATCH /api/watchlist/:ticker?name=Holdings` → notes updated only for the Holdings row
- `DELETE /api/watchlist/:ticker?name=Holdings` → only the Holdings row removed; same ticker in another watchlist unaffected

---

## Phase 4 — `useWatchlists` Hook

### Work
Create `src/hooks/useWatchlists.ts`:

1. **State**: `watchlists: Watchlist[]` (each with `name`, `displayOrder`, `isOpen`, `entries`), `notes: Record<string, string>`
2. **Bootstrap**: `useEffect` calls `GET /api/watchlists/all` on mount; populates state
3. **Handlers** (all optimistic, fire-and-forget):
   - `createWatchlist(name)` — validates name client-side, adds to state, calls `POST /api/watchlists`; returns error string or null
   - `deleteWatchlist(name)` — removes from state, calls `DELETE /api/watchlists/:name`
   - `renameWatchlist(oldName, newName)` — validates client-side, updates state, calls `PATCH /api/watchlists/:name`; returns error string or null
   - `reorderWatchlists(reordered)` — updates state, calls `POST /api/watchlists/reorder`
   - `toggleWatchlist(name)` — flips `isOpen` (UI-only, not persisted)
   - `addTicker(watchlistName, result)` — adds entry to state, calls `POST /api/watchlist`
   - `removeTicker(watchlistName, ticker)` — removes entry from state, calls `DELETE /api/watchlist/:ticker?name=`
   - `updateNote(ticker, note)` — updates `notes` map, debounced `PATCH /api/watchlist/:ticker?name=` for each watchlist containing the ticker
   - `deleteNote(ticker)` — clears note from map, cancels debounce, immediate `PATCH` with empty string
4. **Derived value**: `tickerMembership: Map<string, Set<string>>` — computed from `watchlists` state; maps each ticker to the set of watchlist names it belongs to

### Testing
- On mount, `GET /api/watchlists/all` is called and state is populated correctly
- `createWatchlist` with valid name → watchlist appears in state; `POST /api/watchlists` called with correct body
- `createWatchlist` with duplicate name → returns error string; state unchanged
- `createWatchlist` with invalid name → returns error string; no API call made
- `deleteWatchlist` → watchlist removed from state; `DELETE` called
- `renameWatchlist` → name updated in state; `PATCH` called
- `reorderWatchlists` → `displayOrder` values updated in state; `POST /api/watchlists/reorder` called
- `addTicker` → entry appears in correct watchlist in state; `POST /api/watchlist` called
- `removeTicker` → entry removed from correct watchlist only; same ticker in other watchlists unaffected
- `updateNote` → note updated in `notes` map; debounced `PATCH` fires after 600ms
- `tickerMembership` correctly reflects a ticker present in two watchlists

---

## Phase 5 — Core UI: Watchlist Component & Page Integration

### Work
1. Update `Watchlist.tsx`:
   - Accept `name: string` prop — render in header instead of hardcoded "Watchlist"
   - Accept `onDelete: () => void` — render a × delete icon in the header (always visible)
   - Accept `dragHandleProps` — render a drag handle icon (left of the name); wired up in Phase 8
2. Update `page.tsx`:
   - Call `useWatchlists()` and destructure its return value
   - Remove `watchlistItems`, `watchlistOpen`, `watchlistNotes` state variables and all associated handlers
   - Replace the single `<Watchlist>` with a mapped list of `<Watchlist>` panels from `watchlists`
   - Add an "Add Watchlist" button above/below the panel list (opens modal — wired in Phase 6)

### Testing
- Page renders with zero watchlists → sidebar shows only "Add Watchlist" button, no panels
- Page renders with two watchlists from `useWatchlists` → two panels appear with correct names
- Clicking a panel header collapses/expands it independently of the other
- Each panel's × delete icon calls `deleteWatchlist` (without confirmation at this phase — confirmation dialog wired in Phase 6)
- Ticker rows render correctly inside each panel; clicking loads the chart; hover reveals remove button

---

## Phase 6 — Create, Rename & Delete Interactions

### Work
1. **Add Watchlist modal** (`src/components/AddWatchlistModal.tsx`):
   - Fixed-position overlay following the floating overlay pattern (Section 5.2)
   - Single text input for the name; Submit and Cancel buttons
   - Inline error below input in `var(--color-negative)` for validation failures
   - On successful submit calls `createWatchlist(name)` and closes
2. **Rename inline input** in `Watchlist.tsx`:
   - Pencil icon in panel header, visible only on header hover
   - Clicking replaces the name `<span>` with an `<input>` pre-filled with the current name
   - Enter or blur → calls `renameWatchlist(oldName, newName)`; inline error below input if invalid
   - Escape → cancels and reverts to name display
3. **Delete confirmation dialog** (`src/components/ConfirmDialog.tsx`):
   - Reusable modal with a message string, "Yes" and "No" buttons
   - Shown from `Watchlist.tsx` × click when `entries.length > 0`; skipped when watchlist is empty
   - "Yes" → calls `deleteWatchlist(name)`; "No" → closes

### Testing
- "Add Watchlist" button opens the modal
- Submitting empty name → inline error shown, modal stays open
- Submitting duplicate name → inline error "Watchlist name must be unique"
- Submitting invalid characters → inline error shown
- Submitting valid unique name → modal closes, new panel appears in sidebar
- Escape or Cancel closes the modal without creating a watchlist
- Pencil icon appears on panel header hover; clicking activates inline input
- Renaming to a duplicate → inline error shown, name unchanged
- Renaming to a valid name → panel header updates immediately
- Escape during rename → reverts to original name
- Clicking × on an empty watchlist → no confirmation, watchlist removed immediately
- Clicking × on a non-empty watchlist → confirmation dialog appears with correct message
- "No" in confirmation → dialog closes, watchlist remains
- "Yes" in confirmation → watchlist panel removed, entries gone from state

---

## Phase 7 — SearchResults Context Menu Update

### Work
Update `SearchResults.tsx`:
1. Replace `watchlistTickers: Set<string>` prop with `tickerMembership: Map<string, Set<string>>` and `watchlistNames: string[]`
2. Replace the single "Add to watchlist" button in the context menu with a list of watchlist names
3. Each name is a clickable row calling `onAddToWatchlist(result, watchlistName)`
4. Names where `tickerMembership.get(result.ticker)?.has(name)` is true are greyed out and disabled
5. When `watchlistNames` is empty, render a single non-clickable row with text "no watchlists"
6. Update `onAddToWatchlist` signature in `page.tsx` and `useWatchlists` to accept `(result, watchlistName)`

### Testing
- Right-click a search result with no watchlists → context menu shows "no watchlists"
- Right-click with two watchlists → both names appear as options
- Clicking a watchlist name → `addTicker` called with correct watchlist name; context menu closes
- Ticker already in "Holdings" but not "Shortlist" → "Holdings" greyed/disabled, "Shortlist" clickable
- Ticker in all watchlists → all names greyed out
- Ticker in no watchlists → all names active

---

## Phase 8 — Drag-to-Reorder

### Work
1. Install `@dnd-kit/core` and `@dnd-kit/sortable`
2. In `page.tsx`, wrap the watchlist panel list in `<DndContext>` and `<SortableContext>`
3. Make each `Watchlist` panel a sortable item; pass `dragHandleProps` (from Phase 5 stub) to the drag handle icon
4. On `onDragEnd`: compute new `display_order` values (`0, 1, 2, …`) and call `reorderWatchlists`
5. `reorderWatchlists` updates state immediately (optimistic) and fires `POST /api/watchlists/reorder`

### Testing
- Dragging a panel to a new position reorders the panels visually
- `POST /api/watchlists/reorder` is called with the full reordered array after drag-end
- Reloading the page restores panels in the reordered order (persisted via bootstrap endpoint)
- Dragging does not affect the contents of any watchlist panel
- Drag works when panels are both collapsed and expanded
