"use client";

import { useState, useEffect, useRef } from "react";

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
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 1000,
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1001,
          background: "var(--color-bg)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-m)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
          width: "320px",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "var(--inset-s) var(--inset-m)",
            borderBottom: "1px solid var(--color-border)",
            background: "var(--color-bg-secondary)",
          }}
        >
          <span style={{ fontWeight: 600, fontSize: "var(--body-1-size)", color: "var(--color-text-primary)" }}>
            Add Watchlist
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
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

        {/* Body */}
        <form onSubmit={handleSubmit} style={{ padding: "var(--inset-m)" }}>
          <label
            htmlFor="watchlist-name"
            style={{
              display: "block",
              fontSize: "var(--body-2-size)",
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-xs)",
            }}
          >
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
            style={{
              width: "100%",
              padding: "var(--inset-xs) var(--inset-s)",
              background: "var(--color-bg-secondary)",
              border: `1px solid ${error ? "var(--color-negative)" : "var(--color-border)"}`,
              borderRadius: "var(--radius-s)",
              color: "var(--color-text-primary)",
              fontSize: "var(--body-1-size)",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          {error && (
            <div
              style={{
                marginTop: "var(--space-xs)",
                fontSize: "var(--body-2-size)",
                color: "var(--color-negative)",
              }}
            >
              {error}
            </div>
          )}

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "var(--space-xs)",
              marginTop: "var(--inset-m)",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "var(--inset-xs) var(--inset-m)",
                background: "transparent",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-s)",
                cursor: "pointer",
                fontSize: "var(--body-2-size)",
                color: "var(--color-text-primary)",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: "var(--inset-xs) var(--inset-m)",
                background: "var(--color-bg-secondary)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-s)",
                cursor: "pointer",
                fontSize: "var(--body-2-size)",
                color: "var(--color-text-primary)",
                fontWeight: 600,
              }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
