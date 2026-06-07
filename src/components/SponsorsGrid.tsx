"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const sponsors = [
  { name: "Rise In",            logo: "/images/risein.png"            },
  { name: "AlgoPrep",           logo: "/images/algoprep.png"          },
  { name: "DoraHacks",          logo: "/images/dorahacks.png"         },
  { name: "HackerRank",         logo: "/images/hackerrank.png"        },
  { name: "GeeksForGeeks",      logo: "/images/gfg.png"               },
  { name: "InterviewBuddy",     logo: "/images/interviewbuddy.png"    },
  { name: "Unstop",             logo: "/images/unstop.png"            },
  { name: "Eduquest Education", logo: "/images/eduquesteducation.jpeg" },
  { name: "My Certificate",     logo: "/images/mycertificate.png"     },
  { name: "Fueler",             logo: "/images/fueler.svg"            },
  { name: "Certopus",           logo: "/images/certopus.png"          },
  { name: "StockEdge",          logo: "/images/stockedge.png"         },
  { name: "Banyan Nation",      logo: "/images/banyannation.png"      },
];

export default function SponsorsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);

  /* ── Scroll-reveal observer ── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Spark / particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number;
      r: number; alpha: number; color: string;
    }[] = [];

    const colors = ["#0078D4", "#50A8FF", "#005A9E", "#2B8FE0", "#A8D4FF"];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* Spawn particles */
    for (let i = 0; i < 55; i++) {
      particles.push({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        vx:    (Math.random() - 0.5) * 0.4,
        vy:    (Math.random() - 0.5) * 0.4,
        r:     Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        /* Move */
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        /* Draw dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        /* Connect nearby dots */
        particles.forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 90) * 0.12;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
        ctx.globalAlpha = 1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="reveal relative py-24 px-6 overflow-hidden"
    >
      {/* Spark canvas sits behind everything */}
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

      {/* Blue radial glow in centre */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,120,212,0.07) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 reveal" style={{ transitionDelay: "0.05s" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0078D4",
              marginBottom: "0.75rem",
            }}
          >
            Backed by
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0078D4 0%, #50A8FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sponsors
            </span>
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--color-muted-foreground)",
              fontSize: "1.0625rem",
              maxWidth: "36rem",
              margin: "0.75rem auto 0",
            }}
          >
            Supporters helping us build opportunities, skills, and community.
          </p>
        </div>

        {/* Grid — full colour logos */}
        <div
          className="reveal-stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "1rem",
          }}
        >
          {sponsors.map((s) => (
            <div key={s.name} className="sponsor-card" title={s.name}>
              <Image
                src={s.logo}
                alt={s.name}
                width={110}
                height={50}
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
