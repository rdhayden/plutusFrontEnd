"use client";

import { useEffect } from "react";

interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ message, onConfirm, onCancel }: ConfirmDialogProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onCancel]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onCancel}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 1000,
        }}
      />

      {/* Dialog */}
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
          padding: "var(--inset-m)",
        }}
      >
        <p
          style={{
            margin: "0 0 var(--inset-m) 0",
            fontSize: "var(--body-1-size)",
            color: "var(--color-text-primary)",
            lineHeight: 1.5,
          }}
        >
          {message}
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-xs)" }}>
          <button
            onClick={onCancel}
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
            No
          </button>
          <button
            onClick={onConfirm}
            style={{
              padding: "var(--inset-xs) var(--inset-m)",
              background: "transparent",
              border: "1px solid var(--color-negative)",
              borderRadius: "var(--radius-s)",
              cursor: "pointer",
              fontSize: "var(--body-2-size)",
              color: "var(--color-negative)",
              fontWeight: 600,
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </>
  );
}
