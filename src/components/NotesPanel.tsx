"use client";

import { useEffect, useRef } from "react";

interface NotesPanelProps {
  ticker: string;
  note: string;
  position: { x: number; y: number };
  onChange: (ticker: string, note: string) => void;
  onClose: () => void;
  onDelete: (ticker: string) => void;
}

const PANEL_WIDTH = 280;
const PANEL_HEIGHT = 220;

export default function NotesPanel({
  ticker,
  note,
  position,
  onChange,
  onClose,
  onDelete,
}: NotesPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Clamp position so the panel stays within the viewport
  const x = Math.min(position.x, window.innerWidth - PANEL_WIDTH - 8);
  const y = Math.min(position.y, window.innerHeight - PANEL_HEIGHT - 8);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const handleMouseDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      style={{
        position: "fixed",
        top: y,
        left: x,
        width: `${PANEL_WIDTH}px`,
        zIndex: 1000,
        background: "var(--color-bg)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-m)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--inset-xs) var(--inset-s)",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg-secondary)",
        }}
      >
        <span
          style={{
            fontSize: "var(--body-1-size)",
            fontWeight: 600,
            color: "var(--color-text-primary)",
          }}
        >
          Notes — {ticker}
        </span>
        <button
          aria-label="Close notes"
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text-muted)",
            fontSize: "16px",
            lineHeight: 1,
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          ×
        </button>
      </div>

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={note}
        onChange={(e) => onChange(ticker, e.target.value)}
        placeholder="Add notes for this ticker..."
        style={{
          flex: 1,
          resize: "none",
          border: "none",
          outline: "none",
          padding: "var(--inset-s)",
          fontSize: "var(--body-2-size)",
          color: "var(--color-text-primary)",
          background: "var(--color-bg)",
          fontFamily: "inherit",
          lineHeight: 1.5,
          height: "130px",
        }}
      />

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "var(--inset-xs) var(--inset-s)",
          borderTop: "1px solid var(--color-border)",
          gap: "var(--space-xs)",
          background: "var(--color-bg-secondary)",
        }}
      >
        <button
          onClick={() => onDelete(ticker)}
          style={{
            padding: "4px var(--inset-s)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-s)",
            background: "transparent",
            cursor: "pointer",
            fontSize: "var(--body-2-size)",
            color: "var(--color-negative)",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
