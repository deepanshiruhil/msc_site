"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Overline label */}
      <p
        className="section-label"
        style={{ marginBottom: "1.5rem", letterSpacing: "0.18em" }}
      >
        Microsoft Student Chapter · IGDTUW
      </p>

      {/* Main tagline — Build. Collaborate. Lead. */}
      <h1 className="hero-tagline">
        <span className="line-1" style={{ display: "block" }}>
          Build.
        </span>
        <span className="line-2" style={{ display: "block" }}>
          Collaborate.
        </span>
        <span
          className="line-3"
          style={{
            display: "block",
            background: "var(--blue-gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Lead.
        </span>
      </h1>

      {/* Description */}
      <p className="hero-description">
        IGDTUW&apos;s Microsoft Student Chapter — where women technologists run
        hackathons, host industry sessions, and shape each other&apos;s careers.
      </p>

      {/* CTA buttons */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="/about" className="btn-primary">
          Learn more
        </Link>
        <Link href="/sponsors" className="btn-outline">
          Our sponsors
        </Link>
      </div>
    </section>
  );
}
