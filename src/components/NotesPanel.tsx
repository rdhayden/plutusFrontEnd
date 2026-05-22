"use client";

import { useEffect, useRef } from "react";
import styles from "./NotesPanel.module.css";

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
      className={styles.panel}
      style={{ top: y, left: x }}
    >
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.title}>Notes — {ticker}</span>
        <button aria-label="Close notes" onClick={onClose} className={styles.closeBtn}>×</button>
      </div>

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={note}
        onChange={(e) => onChange(ticker, e.target.value)}
        placeholder="Add notes for this ticker..."
        className={styles.textarea}
      />

      {/* Footer */}
      <div className={styles.footer}>
        <button onClick={() => onDelete(ticker)} className={styles.btnDelete}>Delete</button>
      </div>
    </div>
  );
}
