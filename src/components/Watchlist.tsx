"use client";

import { useState, useRef, useEffect } from "react";
import { WatchlistEntry } from "@/lib/types";
import NotesPanel from "./NotesPanel";
import styles from "./Watchlist.module.css";

interface NotesPanelState {
  ticker: string;
  x: number;
  y: number;
}

interface WatchlistProps {
  name: string;
  items: WatchlistEntry[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (entry: WatchlistEntry) => void;
  onRemove: (ticker: string) => void;
  onDelete: () => void;
  onRename: (newName: string) => string | null; // returns error string or null on success
  notes: Record<string, string>;
  onNoteChange: (ticker: string, note: string) => void;
  onNoteDelete: (ticker: string) => void;
  dragHandleProps?: React.HTMLAttributes<HTMLButtonElement>;
}

export default function Watchlist({
  name,
  items,
  isOpen,
  onToggle,
  onSelect,
  onRemove,
  onDelete,
  onRename,
  notes,
  onNoteChange,
  onNoteDelete,
  dragHandleProps,
}: WatchlistProps) {
  const [notesPanel, setNotesPanel] = useState<NotesPanelState | null>(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState("");
  const [renameError, setRenameError] = useState<string | null>(null);
  const renameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isRenaming) {
      renameInputRef.current?.focus();
      renameInputRef.current?.select();
    }
  }, [isRenaming]);

  const startRenaming = () => {
    setRenameValue(name);
    setRenameError(null);
    setIsRenaming(true);
  };

  const commitRename = () => {
    const trimmed = renameValue.trim();
    if (trimmed === name) {
      setIsRenaming(false);
      return;
    }
    const error = onRename(trimmed);
    if (error) {
      setRenameError(error);
      renameInputRef.current?.focus();
    } else {
      setIsRenaming(false);
    }
  };

  const cancelRename = () => {
    setIsRenaming(false);
    setRenameError(null);
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") commitRename();
    if (e.key === "Escape") cancelRename();
  };

  const handleContextMenu = (e: React.MouseEvent, ticker: string) => {
    e.preventDefault();
    setNotesPanel({ ticker, x: e.clientX, y: e.clientY });
  };

  const handleNoteDelete = (ticker: string) => {
    onNoteDelete(ticker);
    setNotesPanel(null);
  };

  return (
    <div className={styles.root}>
      {/* Accordion header */}
      <div className={styles.header}>
        {/* Drag handle */}
        <button {...dragHandleProps} aria-label="Drag to reorder" className={styles.dragHandle}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <circle cx="4" cy="2" r="1" />
            <circle cx="8" cy="2" r="1" />
            <circle cx="4" cy="6" r="1" />
            <circle cx="8" cy="6" r="1" />
            <circle cx="4" cy="10" r="1" />
            <circle cx="8" cy="10" r="1" />
          </svg>
        </button>

        {isRenaming ? (
          /* Inline rename input */
          <div className={styles.renameWrapper}>
            <input
              ref={renameInputRef}
              value={renameValue}
              onChange={(e) => { setRenameValue(e.target.value); setRenameError(null); }}
              onKeyDown={handleRenameKeyDown}
              onBlur={commitRename}
              className={`${styles.renameInput}${renameError ? ` ${styles.renameInputError}` : ""}`}
            />
            {renameError && <div className={styles.renameError}>{renameError}</div>}
          </div>
        ) : (
          /* Toggle button — name + chevron */
          <button onClick={onToggle} className={styles.toggleBtn}>
            <span className={`heading-3 ${styles.toggleBtnName}`}>{name}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${styles.chevron}${isOpen ? ` ${styles.chevronOpen}` : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}

        {/* Pencil rename button — hover-revealed, hidden while renaming */}
        {!isRenaming && (
          <button aria-label={`Rename watchlist ${name}`} onClick={startRenaming} className={styles.renameBtn}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        )}

        {/* Delete watchlist button — hover-revealed, hidden while renaming */}
        {!isRenaming && (
          <button aria-label={`Delete watchlist ${name}`} onClick={onDelete} className={styles.deleteBtn}>×</button>
        )}
      </div>

      {/* Accordion body */}
      {isOpen && (
        <div>
          {items.length === 0 && (
            <div className={styles.emptyMsg}>Right-click a search result to add it here.</div>
          )}
          {items.map((item) => (
            <div key={item.ticker} onContextMenu={(e) => handleContextMenu(e, item.ticker)} className={styles.itemRow}>
              <button onClick={() => onSelect(item)} className={styles.itemBtn}>
                <div className={styles.itemMeta}>
                  <span className={styles.itemTicker}>{item.ticker}</span>
                  {notes[item.ticker] && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className={styles.noteIcon}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                </div>
                <div className={`body-2 ${styles.itemName}`}>{item.name}</div>
              </button>
              <button
                aria-label={`Remove ${item.ticker} from watchlist`}
                onClick={() => onRemove(item.ticker)}
                className={styles.removeBtn}
              >×</button>
            </div>
          ))}
        </div>
      )}

      {/* Notes panel */}
      {notesPanel && (
        <NotesPanel
          ticker={notesPanel.ticker}
          note={notes[notesPanel.ticker] ?? ""}
          position={{ x: notesPanel.x, y: notesPanel.y }}
          onChange={onNoteChange}
          onClose={() => setNotesPanel(null)}
          onDelete={handleNoteDelete}
        />
      )}
    </div>
  );
}
