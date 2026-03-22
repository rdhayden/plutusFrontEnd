import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/"),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    style,
  }: {
    children: React.ReactNode;
    href: string;
    style?: React.CSSProperties;
  }) => (
    <a href={href} style={style}>
      {children}
    </a>
  ),
}));

import { usePathname } from "next/navigation";

describe("Header", () => {
  it("renders the TradingHub brand name", () => {
    render(<Header />);
    expect(screen.getByText("TradingHub")).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    render(<Header />);
    expect(screen.getAllByText("Back Test").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Scanner").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Charts").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Journal").length).toBeGreaterThanOrEqual(1);
  });

  it("renders navigation links with correct hrefs", () => {
    render(<Header />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("/");
    expect(hrefs).toContain("/backtest");
    expect(hrefs).toContain("/scanner");
    expect(hrefs).toContain("/journal");
  });

  it("highlights Charts as active when pathname is /", () => {
    vi.mocked(usePathname).mockReturnValue("/");
    render(<Header />);
    const chartsLink = screen.getAllByText("Charts")[0].closest("a");
    expect(chartsLink?.style.color).toContain("var(--color-primary)");
  });

  it("highlights Back Test as active when pathname is /backtest", () => {
    vi.mocked(usePathname).mockReturnValue("/backtest");
    const { container } = render(<Header />);

    const links = container.querySelectorAll("a");
    const btLink = Array.from(links).find((a) => a.textContent?.includes("Back Test"));
    expect(btLink?.style.color).toContain("var(--color-primary)");

    const chartsLink = Array.from(links).find((a) => a.textContent?.includes("Charts"));
    expect(chartsLink?.style.color).toContain("var(--color-text-secondary)");
  });
});
