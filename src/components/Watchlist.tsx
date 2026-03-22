"use client";

import { useState } from "react";
import { TickerSearchResult } from "@/lib/types";
import NotesPanel from "./NotesPanel";

interface NotesPanelState {
  ticker: string;
  x: number;
  y: number;
}

interface WatchlistProps {
  items: TickerSearchResult[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (result: TickerSearchResult) => void;
  onRemove: (ticker: string) => void;
  notes: Record<string, string>;
  onNoteChange: (ticker: string, note: string) => void;
  onNoteDelete: (ticker: string) => void;
}

export default function Watchlist({
  items,
  isOpen,
  onToggle,
  onSelect,
  onRemove,
  notes,
  onNoteChange,
  onNoteDelete,
}: WatchlistProps) {
  const [hoveredTicker, setHoveredTicker] = useState<string | null>(null);
  const [notesPanel, setNotesPanel] = useState<NotesPanelState | null>(null);

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
      <button
        onClick={onToggle}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "var(--inset-s)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span className="heading-3">Watchlist</span>
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
                background: hoveredTicker === item.ticker ? "var(--color-bg-secondary)" : "transparent",
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
                      <polyline points="14 2 14 8 20 8" fill="none" stroke="currentColor" strokeWidth="2" />
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

      {/* Notes panel (portal-style fixed positioning) */}
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
