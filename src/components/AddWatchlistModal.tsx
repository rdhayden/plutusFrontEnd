"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./AddWatchlistModal.module.css";

interface AddWatchlistModalProps {
  onConfirm: (name: string) => string | null; // returns error string or null on success
  onClose: () => void;
}

export default function AddWatchlistModal({ onConfirm, onClose }: AddWatchlistModalProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = onConfirm(name);
    if (result !== null) {
      setError(result);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} className={styles.backdrop} />

      {/* Modal */}
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.title}>Add Watchlist</span>
          <button onClick={onClose} aria-label="Close" className={styles.closeBtn}>×</button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className={styles.body}>
          <label htmlFor="watchlist-name" className={styles.label}>
            Watchlist name
          </label>
          <input
            id="watchlist-name"
            ref={inputRef}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError(null);
            }}
            placeholder="e.g. Holdings"
            className={`${styles.input}${error ? ` ${styles.inputError}` : ""}`}
          />
          {error && <div className={styles.errorMsg}>{error}</div>}

          {/* Footer */}
          <div className={styles.footer}>
            <button type="button" onClick={onClose} className={styles.btnCancel}>Cancel</button>
            <button type="submit" className={styles.btnSubmit}>Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
