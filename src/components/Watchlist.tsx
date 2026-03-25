"use client";

import { useState, useRef, useEffect } from "react";
import { WatchlistEntry } from "@/lib/types";
import NotesPanel from "./NotesPanel";

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
  const [hoveredTicker, setHoveredTicker] = useState<string | null>(null);
  const [headerHovered, setHeaderHovered] = useState(false);
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
    <div style={{ borderBottom: "1px solid var(--color-border)", flexShrink: 0 }}>
      {/* Accordion header */}
      <div
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        {/* Drag handle — wired up in Phase 8 */}
        <button
          {...dragHandleProps}
          aria-label="Drag to reorder"
          style={{
            flexShrink: 0,
            padding: "var(--inset-s) 0 var(--inset-s) var(--inset-s)",
            background: "transparent",
            border: "none",
            cursor: "grab",
            color: "var(--color-text-muted)",
            display: "flex",
            alignItems: "center",
            opacity: headerHovered ? 0.6 : 0,
            transition: "opacity 0.15s",
          }}
        >
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
          <div style={{ flex: 1, padding: "var(--inset-xs) var(--inset-xs)", minWidth: 0 }}>
            <input
              ref={renameInputRef}
              value={renameValue}
              onChange={(e) => { setRenameValue(e.target.value); setRenameError(null); }}
              onKeyDown={handleRenameKeyDown}
              onBlur={commitRename}
              style={{
                width: "100%",
                padding: "2px var(--inset-xs)",
                background: "var(--color-bg-secondary)",
                border: `1px solid ${renameError ? "var(--color-negative)" : "var(--color-border)"}`,
                borderRadius: "var(--radius-s)",
                color: "var(--color-text-primary)",
                fontSize: "var(--body-1-size)",
                fontWeight: 600,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            {renameError && (
              <div style={{ fontSize: "var(--body-2-size)", color: "var(--color-negative)", marginTop: "2px" }}>
                {renameError}
              </div>
            )}
          </div>
        ) : (
          /* Toggle button — name + chevron */
          <button
            onClick={onToggle}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "var(--inset-s) var(--inset-xs) var(--inset-s) var(--inset-xs)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              minWidth: 0,
            }}
          >
            <span
              className="heading-3"
              style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              {name}
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                color: "var(--color-text-muted)",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
                flexShrink: 0,
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}

        {/* Pencil rename button — hover-revealed, hidden while renaming */}
        {!isRenaming && (
          <button
            aria-label={`Rename watchlist ${name}`}
            onClick={startRenaming}
            style={{
              flexShrink: 0,
              padding: "var(--inset-s) var(--inset-xs)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-muted)",
              display: "flex",
              alignItems: "center",
              opacity: headerHovered ? 0.7 : 0,
              transition: "opacity 0.15s",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        )}

        {/* Delete watchlist button — hover-revealed, hidden while renaming */}
        {!isRenaming && (
          <button
            aria-label={`Delete watchlist ${name}`}
            onClick={onDelete}
            style={{
              flexShrink: 0,
              padding: "var(--inset-s) var(--inset-s) var(--inset-s) var(--inset-xs)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-muted)",
              fontSize: "16px",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              opacity: headerHovered ? 1 : 0,
              transition: "opacity 0.15s",
            }}
          >
            ×
          </button>
        )}
      </div>

      {/* Accordion body */}
      {isOpen && (
        <div>
          {items.length === 0 && (
            <div
              style={{
                padding: "var(--inset-s) var(--inset-s) var(--inset-m)",
                textAlign: "center",
                color: "var(--color-text-muted)",
                fontSize: "var(--body-2-size)",
              }}
            >
              Right-click a search result to add it here.
            </div>
          )}
          {items.map((item) => (
            <div
              key={item.ticker}
              onContextMenu={(e) => handleContextMenu(e, item.ticker)}
              style={{
                display: "flex",
                alignItems: "center",
                background:
                  hoveredTicker === item.ticker
                    ? "var(--color-bg-secondary)"
                    : "transparent",
                transition: "background 0.15s",
              }}
              onMouseEnter={() => setHoveredTicker(item.ticker)}
              onMouseLeave={() => setHoveredTicker(null)}
            >
              <button
                onClick={() => onSelect(item)}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "10px var(--inset-xs) 10px var(--inset-s)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-xs)",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "var(--body-1-size)",
                      color: "var(--color-text-primary)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.ticker}
                  </span>
                  {notes[item.ticker] && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline
                        points="14 2 14 8 20 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </div>
                <div
                  className="body-2"
                  style={{
                    color: "var(--color-text-muted)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "100%",
                  }}
                >
                  {item.name}
                </div>
              </button>
              <button
                aria-label={`Remove ${item.ticker} from watchlist`}
                onClick={() => onRemove(item.ticker)}
                style={{
                  flexShrink: 0,
                  padding: "0 var(--inset-s) 0 var(--inset-xs)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-text-muted)",
                  fontSize: "14px",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                  opacity: hoveredTicker === item.ticker ? 1 : 0,
                  transition: "opacity 0.15s",
                }}
              >
                ×
              </button>
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
