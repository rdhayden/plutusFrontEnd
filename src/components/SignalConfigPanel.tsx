"use client";

import { useState } from "react";
import { AvailableSignal, SignalParameter } from "@/lib/types";

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
    <div
      style={{
        padding: "var(--inset-m)",
        borderBottom: "1px solid var(--color-border-light)",
        background: "var(--color-bg-secondary)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--space-s)",
        }}
      >
        <span className="heading-3">Configure {signal.name}</span>
        <button
          aria-label="Close signal config"
          onClick={onClose}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "18px",
            color: "var(--color-text-secondary)",
            padding: "2px 6px",
          }}
        >
          &times;
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        style={{ display: "flex", gap: "var(--space-s)", flexWrap: "wrap", alignItems: "flex-start" }}
      >
        {signal.parameters.map((param) => (
          <div key={param.name} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <label
              className="body-1"
              style={{ color: "var(--color-text-secondary)", fontSize: "12px" }}
            >
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
              style={{
                padding: "var(--inset-xs) 8px",
                border: `1px solid ${errors[param.name] ? "var(--color-red-60)" : "var(--color-border)"}`,
                borderRadius: "var(--radius-m)",
                fontSize: "var(--body-1-size)",
                color: "var(--color-text-primary)",
                background: "var(--color-bg)",
                width: "140px",
              }}
            />
            {errors[param.name] && (
              <span
                role="alert"
                style={{ color: "var(--color-red-60)", fontSize: "11px" }}
              >
                {errors[param.name]}
              </span>
            )}
          </div>
        ))}

        <button
          type="submit"
          style={{
            padding: "var(--inset-xs) var(--inset-s)",
            border: "1px solid var(--color-primary)",
            borderRadius: "var(--radius-m)",
            fontSize: "var(--body-1-size)",
            color: "#fff",
            background: "var(--color-primary)",
            cursor: "pointer",
            alignSelf: "flex-end",
          }}
        >
          Add Signal
        </button>
      </form>

      {duplicateMessage && (
        <div
          role="status"
          style={{
            marginTop: "var(--space-xs)",
            color: "var(--color-text-muted)",
            fontSize: "12px",
          }}
        >
          {duplicateMessage}
        </div>
      )}
    </div>
  );
}
