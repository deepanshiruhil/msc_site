"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home",       href: "#top" },
  { label: "About us",   href: "#about" },
  { label: "Events",     href: "/events" },
  { label: "Blogs",      href: "/blog" },
  { label: "Sponsors",   href: "#sponsors" },
  { label: "Team",       href: "/team" },
  { label: "Contact us", href: "/contact" },
  { label: "FAQ",        href: "#faq" },
];

export default function GlassdoorNavbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("msc-theme") as "dark" | "light" | null;
    const initial = stored || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("msc-theme", next);
  };

  return (
    <nav className="navbar">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.65rem 1.5rem",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image src="/logo.png" alt="MSC" width={38} height={38} />
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "0.1rem",
            listStyle: "none",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s, background 0.2s",
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--blue-mid)";
                  el.style.background = "var(--blue-glow)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--text-secondary)";
                  el.style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
              fontSize: "1.3rem",
              padding: "0.25rem",
            }}
            className="mobile-btn"
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: "1px solid var(--border)", padding: "0.5rem 1.5rem 1rem" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.55rem 0",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-btn  { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
