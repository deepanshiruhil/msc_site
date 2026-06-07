"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const sponsors = [
  { name: "Rise In",            logo: "/images/risein.png"             },
  { name: "AlgoPrep",           logo: "/images/algoprep.png"           },
  { name: "DoraHacks",          logo: "/images/dorahacks.png"          },
  { name: "HackerRank",         logo: "/images/hackerrank.png"         },
  { name: "GeeksForGeeks",      logo: "/images/gfg.png"                },
  { name: "InterviewBuddy",     logo: "/images/interviewbuddy.png"     },
  { name: "Unstop",             logo: "/images/unstop.png"             },
  { name: "Eduquest Education", logo: "/images/eduquesteducation.jpeg"  },
  { name: "My Certificate",     logo: "/images/mycertificate.png"      },
  { name: "Fueler",             logo: "/images/fueler.svg"             },
  { name: "Certopus",           logo: "/images/certopus.png"           },
  { name: "StockEdge",          logo: "/images/stockedge.png"          },
  { name: "Banyan Nation",      logo: "/images/banyannation.png"       },
];

export default function SponsorsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);

  /* Scroll-reveal: add "visible" when section enters viewport */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          io.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Spark / particle canvas — same blue palette as original hero */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number; y: number; vx: number; vy: number;
      r: number; alpha: number; color: string;
    };

    const colors = ["#0078D4", "#50A8FF", "#005A9E", "#2B8FE0", "#A8D4FF"];
    const pts: Particle[] = Array.from({ length: 60 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.35,
      vy:    (Math.random() - 0.5) * 0.35,
      r:     Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.45 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        /* dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        /* connecting lines */
        pts.forEach((q) => {
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - d / 100) * 0.1;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
        ctx.globalAlpha = 1;
      });

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="reveal"
      style={{
        position: "relative",
        padding: "5rem 1.5rem",
        overflow: "hidden",
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(0,120,212,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "72rem", margin: "0 auto" }}>

        {/* Heading */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#50A8FF",
            marginBottom: "0.75rem",
          }}>
            Backed by
          </p>
          <h2 style={{ marginBottom: "0.75rem" }}>
            Our{" "}
            <span className="text-msc-gradient">Sponsors</span>
          </h2>
          <p style={{ color: "var(--color-muted-foreground)", maxWidth: "36rem", margin: "0 auto" }}>
            Supporters helping us build opportunities, skills, and community.
          </p>
        </div>

        {/* Full-colour logo grid */}
        <div
          className="reveal-stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(148px, 1fr))",
            gap: "1rem",
          }}
        >
          {sponsors.map((s) => (
            <div key={s.name} className="sponsor-card" title={s.name}>
              <Image
                src={s.logo}
                alt={s.name}
                width={120}
                height={54}
                style={{
                  objectFit: "contain",
                  maxHeight: "2.75rem",
                  width: "auto",
                  filter: "none",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
