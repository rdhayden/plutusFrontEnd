"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Back Test", href: "/backtest", icon: "⚡" },
  { label: "Scanner", href: "/scanner", icon: "⚙" },
  { label: "Charts", href: "/", icon: "📊" },
  { label: "Journal", href: "/journal", icon: "📋" },
];

interface HeaderProps {
  liveMode?: boolean;
  onLiveModeChange?: (value: boolean) => void;
}

export default function Header({ liveMode = false, onLiveModeChange }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header
      style={{
        height: "var(--header-height)",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-bg)",
        display: "flex",
        alignItems: "center",
        padding: "0 var(--inset-m)",
        gap: "var(--space-l)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-family-heading)",
          fontSize: "var(--heading-2-size)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--color-text-primary)",
        }}
      >
        TradingHub
      </span>

      <nav style={{ display: "flex", gap: "var(--space-xs)" }}>
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-xs)",
                padding: "var(--inset-xs) var(--inset-s)",
                borderRadius: "var(--radius-m)",
                textDecoration: "none",
                fontSize: "var(--body-1-size)",
                fontWeight: 500,
                color: isActive
                  ? "var(--color-primary)"
                  : "var(--color-text-secondary)",
                background: isActive ? "var(--color-bg-secondary)" : "transparent",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              <span style={{ fontSize: "14px" }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--space-xs)" }}>
        <span
          className="body-1"
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "var(--body-1-size)",
          }}
        >
          Live
        </span>
        <button
          role="switch"
          aria-checked={liveMode}
          aria-label="Toggle live mode"
          onClick={() => onLiveModeChange?.(!liveMode)}
          style={{
            width: "36px",
            height: "20px",
            borderRadius: "10px",
            border: "none",
            background: liveMode ? "var(--green-40)" : "var(--grey-60)",
            cursor: "pointer",
            position: "relative",
            transition: "background 0.2s",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "2px",
              left: liveMode ? "18px" : "2px",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "white",
              transition: "left 0.2s",
            }}
          />
        </button>
      </div>
    </header>
  );
}
