"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section" id="top">
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(37,99,235,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <div style={{ marginBottom: "1.25rem", position: "relative", zIndex: 1 }}>
        <Image src="/logo.png" alt="MSC IGDTUW" width={72} height={72} priority />
      </div>

      {/* Overline */}
      <p
        className="section-label"
        style={{ marginBottom: "1.25rem", position: "relative", zIndex: 1 }}
      >
        Microsoft Student Chapter · IGDTUW
      </p>

      {/* Build. Collaborate. Lead. */}
      <h1
        className="hero-tagline"
        style={{ position: "relative", zIndex: 1 }}
      >
        <span style={{ display: "block", color: "var(--text-primary)" }}>Build.</span>
        <span style={{ display: "block", color: "var(--text-primary)" }}>Collaborate.</span>
        <span
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
      <p className="hero-description" style={{ position: "relative", zIndex: 1 }}>
        IGDTUW&apos;s Microsoft Student Chapter — where women technologists run
        hackathons, host industry sessions, and shape each other&apos;s careers.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2.25rem",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Link href="#about" className="btn-primary">Learn more</Link>
        <Link href="#sponsors" className="btn-outline">Our sponsors</Link>
      </div>
    </section>
  );
}
