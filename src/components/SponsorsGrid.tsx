"use client";

import Image from "next/image";

// Update with real logo paths. Keep all logos in /public/images/sponsors/
const SPONSORS = [
  { name: "Rise In",        logo: "/images/sponsors/risein.png"        },
  { name: "HackerRank",     logo: "/images/sponsors/hackerrank.png"    },
  { name: "DoraHacks",      logo: "/images/sponsors/dorahacks.png"     },
  { name: "GeeksForGeeks",  logo: "/images/sponsors/geeksforgeeks.png" },
  { name: "Unstop",         logo: "/images/sponsors/unstop.png"        },
  { name: "Certopus",       logo: "/images/sponsors/certopus.png"      },
  { name: "AlgoPrep",       logo: "/images/sponsors/algoprep.png"      },
  { name: "StockEdge",      logo: "/images/sponsors/stockedge.png"     },
];

export default function SponsorsSection() {
  return (
    <section className="section-pad" id="sponsors">
      <div className="container">
        {/* Section header */}
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>
          Backed by
        </p>
        <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
          Our <span className="accent">Sponsors</span>
        </h2>

        {/* Static grid — all logos visible */}
        <div className="sponsors-grid section-lift" style={{ padding: "1.5rem" }}>
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.name}
              className="sponsor-card"
              title={sponsor.name}
            >
              {/* Try to render logo image, fall back to text */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  sizes="160px"
                  style={{ objectFit: "contain" }}
                  onError={(e) => {
                    // Show text fallback
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      (e.target as HTMLImageElement).style.display = "none";
                      const fallback = parent.querySelector(
                        ".sponsor-fallback"
                      ) as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }
                  }}
                />
                {/* Text fallback */}
                <span
                  className="sponsor-fallback"
                  style={{
                    display: "none",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.03em",
                    textAlign: "center",
                  }}
                >
                  {sponsor.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
          }}
        >
          ↑ static grid · all logos visible · hover → gradient glow lifts the card
        </p>
      </div>
    </section>
  );
}
