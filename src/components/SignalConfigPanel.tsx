"use client";

import { useState } from "react";
import { AvailableSignal, SignalParameter } from "@/lib/types";
import styles from "./SignalConfigPanel.module.css";

interface SignalConfigPanelProps {
  signal: AvailableSignal;
  defaultTicker: string;
  defaultExchange: string | null;
  onSubmit: (
    signalName: string,
    specification: { name: string; value: string }[]
  ) => void;
  onClose: () => void;
  duplicateMessage: string | null;
}

function validateValue(value: string, paramType: string): string | null {
  if (value === "") return "Value is required";
  if (paramType === "INTEGER") {
    if (!/^-?\d+$/.test(value)) return "Must be an integer";
  } else if (paramType === "FLOAT") {
    if (!/^-?\d+(\.\d+)?$/.test(value)) return "Must be a number";
  }
  return null;
}

export default function SignalConfigPanel({
  signal,
  defaultTicker,
  defaultExchange,
  onSubmit,
  onClose,
  duplicateMessage,
}: SignalConfigPanelProps) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const p of signal.parameters) {
      if (p.name === "ticker") initial[p.name] = defaultTicker;
      else if (p.name === "exchange") initial[p.name] = defaultExchange ?? "";
      else if (p.default != null) initial[p.name] = String(p.default);
      else initial[p.name] = "";
    }
    return initial;
  });

  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (paramName: string, value: string) => {
    setValues((prev) => ({ ...prev, [paramName]: value }));
    if (submitted) {
      const param = signal.parameters.find((p) => p.name === paramName);
      if (param) {
        setErrors((prev) => ({
          ...prev,
          [paramName]: validateValue(value, param.value),
        }));
      }
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const newErrors: Record<string, string | null> = {};
    let hasError = false;
    for (const param of signal.parameters) {
      const error = validateValue(values[param.name] ?? "", param.value);
      newErrors[param.name] = error;
      if (error) hasError = true;
    }
    setErrors(newErrors);
    if (hasError) return;

    const specification = signal.parameters.map((p) => ({
      name: p.name,
      value: values[p.name],
    }));
    onSubmit(signal.name, specification);
  };

  const getInputType = (param: SignalParameter): string => {
    if (param.value === "INTEGER" || param.value === "FLOAT") return "text";
    return "text";
  };

  const getPlaceholder = (param: SignalParameter): string => {
    if (param.value === "INTEGER") return "e.g. 14";
    if (param.value === "FLOAT") return "e.g. 1.5";
    return "e.g. AAPL";
  };

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className="heading-3">Configure {signal.name}</span>
        <button aria-label="Close signal config" onClick={onClose} className={styles.closeBtn}>
          &times;
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className={styles.form}
      >
        {signal.parameters.map((param) => (
          <div key={param.name} className={styles.field}>
            <label className={`body-1 ${styles.fieldLabel}`}>
              {param.name} ({param.value})
            </label>
            <input
              type={getInputType(param)}
              inputMode={
                param.value === "INTEGER"
                  ? "numeric"
                  : param.value === "FLOAT"
                    ? "decimal"
                    : "text"
              }
              placeholder={getPlaceholder(param)}
              value={values[param.name] ?? ""}
              onChange={(e) => handleChange(param.name, e.target.value)}
              aria-label={param.name}
              className={`${styles.fieldInput}${errors[param.name] ? ` ${styles.fieldInputError}` : ""}`}
            />
            {errors[param.name] && (
              <span role="alert" className={styles.fieldError}>{errors[param.name]}</span>
            )}
          </div>
        ))}

        <button type="submit" className={styles.btnSubmit}>Add Signal</button>
      </form>

      {duplicateMessage && (
        <div role="status" className={styles.duplicateMsg}>{duplicateMessage}</div>
      )}
    </div>
  );
}
