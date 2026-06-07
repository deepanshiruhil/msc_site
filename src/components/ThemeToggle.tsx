"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Read initial state from the class set by layout.tsx inline script
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.classList.add("light");
      localStorage.setItem("msc-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("msc-theme", "dark");
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0.4rem",
        borderRadius: "50%",
        color: "var(--color-foreground)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.2s",
      }}
    >
      {isLight ? (
        /* Moon — shown in light mode to switch back to dark */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ) : (
        /* Sun — shown in dark mode to switch to light */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
      )}
    </button>
  );
}
