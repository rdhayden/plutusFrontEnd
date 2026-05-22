"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

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
    <header className={styles.header}>
      <span className={styles.logo}>TradingHub</span>

      <nav className={styles.nav}>
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink}${isActive ? ` ${styles.navLinkActive}` : ""}`}
            >
              <span className={styles.navLinkIcon}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.controls}>
        <span className={`body-1 ${styles.liveLabel}`}>Live</span>
        <button
          role="switch"
          aria-checked={liveMode}
          aria-label="Toggle live mode"
          onClick={() => onLiveModeChange?.(!liveMode)}
          className={`${styles.toggle}${liveMode ? ` ${styles.toggleOn}` : ""}`}
        >
          <span className={`${styles.toggleThumb}${liveMode ? ` ${styles.toggleThumbOn}` : ""}`} />
        </button>
      </div>
    </header>
  );
}
