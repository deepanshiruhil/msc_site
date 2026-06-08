"use client";

import { useState } from "react";
import Image from "next/image";

const GALLERY_ITEMS = [
  { src: "/gallery/20260317_145735.jpg",  label: "Mind Matrix",       icon: "🧠" },
  { src: "/gallery/insider.png",           label: "Insider Sessions",  icon: "💡" },
  { src: "/gallery/20260317_151731.jpg",   label: "Workshops & Talks", icon: "🖥️" },
  { src: "/gallery/team.JPG",              label: "Networking Nights", icon: "🤝" },
  { src: "/images/gallery-auditorium.jpg", label: "Engaging Sessions", icon: "🎤" },
  { src: "/gallery/msc_team.JPG",          label: "Core Team",         icon: "👥" },
  { src: "/gallery/IMG_0421.jpg",          label: "Ideate-It-Up 2026", icon: "🏆" },
  { src: "/gallery/20260317_145735.jpg",   label: "Community",         icon: "🌐" },
  { src: "/gallery/insider.png",           label: "Hackathon",         icon: "⚡" },
];

export default function CircularGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [broken, setBroken] = useState<Set<number>>(new Set());

  return (
    <section
      id="gallery"
      className="section-pad"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="container">
        {/* Header */}
        <p className="section-label" style={{ marginBottom: "0.4rem" }}>
          Memories
        </p>
        <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
          Our <span className="accent">Gallery</span>
        </h2>

        {/* 3×3 static grid */}
        <div
          className="section-lift"
          style={{
            padding: "1.25rem",
            border: "1px solid var(--border)",
          }}
        >
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid var(--border)",
                  aspectRatio: "4/3",
                  background: "var(--bg-secondary)",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 0 0 2px var(--blue-mid), 0 8px 32px var(--blue-glow)";
                  el.style.transform = "translateY(-4px) scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.transform = "none";
                }}
              >
                {/* Icon fallback */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    zIndex: 0,
                  }}
                >
                  {item.icon}
                </div>

                {/* Photo */}
                {!broken.has(i) && (
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width:768px) 50vw, 33vw"
                    style={{ objectFit: "cover", zIndex: 1 }}
                    onError={() => setBroken((p) => new Set([...p, i]))}
                  />
                )}

                {/* Label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "0.4rem 0.6rem",
                    background: "linear-gradient(to top,rgba(8,13,26,0.80),transparent)",
                    color: "#fff",
                    fontSize: "0.73rem",
                    fontWeight: 500,
                    zIndex: 2,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "0.76rem",
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
          }}
        >
          ↑ all 9 photos visible at once · click any to lightbox · hover to lift
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(90vw,800px)",
              aspectRatio: "4/3",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
              background: "var(--bg-card)",
              cursor: "default",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "5rem",
              }}
            >
              {GALLERY_ITEMS[lightbox].icon}
            </div>

            {!broken.has(lightbox) && (
              <Image
                src={GALLERY_ITEMS[lightbox].src}
                alt={GALLERY_ITEMS[lightbox].label}
                fill
                style={{ objectFit: "cover", zIndex: 1 }}
                priority
                onError={() => setBroken((p) => new Set([...p, lightbox]))}
              />
            )}

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: "0.75rem", right: "0.75rem",
                zIndex: 10, background: "rgba(0,0,0,0.55)", border: "none",
                borderRadius: "50%", width: "2.25rem", height: "2.25rem",
                color: "#fff", fontSize: "1rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >✕</button>

            {/* Prev */}
            <button
              onClick={() => setLightbox((lightbox - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
              style={{
                position: "absolute", left: "0.75rem", top: "50%",
                transform: "translateY(-50%)", zIndex: 10,
                background: "rgba(0,0,0,0.50)", border: "none",
                borderRadius: "50%", width: "2.5rem", height: "2.5rem",
                color: "#fff", fontSize: "1.4rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >‹</button>

            {/* Next */}
            <button
              onClick={() => setLightbox((lightbox + 1) % GALLERY_ITEMS.length)}
              style={{
                position: "absolute", right: "0.75rem", top: "50%",
                transform: "translateY(-50%)", zIndex: 10,
                background: "rgba(0,0,0,0.50)", border: "none",
                borderRadius: "50%", width: "2.5rem", height: "2.5rem",
                color: "#fff", fontSize: "1.4rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >›</button>
          </div>
        </div>
      )}
    </section>
  );
}
