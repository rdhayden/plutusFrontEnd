"use client";

import { useEffect } from "react";
import styles from "./ConfirmDialog.module.css";

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
      <div onClick={onCancel} className={styles.backdrop} />

      {/* Dialog */}
      <div className={styles.dialog}>
        <p className={styles.message}>{message}</p>
        <div className={styles.footer}>
          <button onClick={onCancel} className={styles.btnCancel}>No</button>
          <button onClick={onConfirm} className={styles.btnConfirm}>Yes</button>
        </div>
      </div>
    </>
  );
}
