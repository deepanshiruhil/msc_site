"use client";

import Image from "next/image";

const SPONSORS = [
  { name: "Rise In",           logo: "/images/risein.png" },
  { name: "AlgoPrep",          logo: "/images/algoprep.png" },
  { name: "DoraHacks",         logo: "/images/dorahacks.png" },
  { name: "HackerRank",        logo: "/images/hackerrank.png" },
  { name: "GeeksForGeeks",     logo: "/images/gfg.png" },
  { name: "InterviewBuddy",    logo: "/images/interviewbuddy.png" },
  { name: "Unstop",            logo: "/images/unstop.png" },
  { name: "Eduquest Education",logo: "/images/eduquesteducation.jpeg" },
  { name: "My Certificate",    logo: "/images/mycertificate.png" },
  { name: "Fueler",            logo: "/images/fueler.svg" },
  { name: "Certopus",          logo: "/images/certopus.png" },
  { name: "StockEdge",         logo: "/images/stockedge.png" },
  { name: "Banyan Nation",     logo: "/images/banyannation.png" },
];

export default function SponsorsGrid() {
  return (
    <section
      id="sponsors"
      className="section-pad"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="container">
        {/* Header */}
        <p className="section-label" style={{ marginBottom: "0.4rem" }}>
          Backed by
        </p>
        <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>
          Our <span className="accent">Sponsors</span>
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            marginBottom: "2.5rem",
            fontFamily: "var(--font-sans)",
          }}
        >
          Supporters helping us build opportunities, skills, and community.
        </p>

        {/* Static grid — all logos always visible */}
        <div className="sponsors-grid section-lift" style={{ padding: "1.25rem" }}>
          {SPONSORS.map((sponsor) => (
            <div key={sponsor.name} className="sponsor-card" title={sponsor.name}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "52px",
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
                    (e.target as HTMLImageElement).style.display = "none";
                    const fb = (e.target as HTMLElement)
                      .parentElement
                      ?.querySelector(".sp-fb") as HTMLElement;
                    if (fb) fb.style.display = "flex";
                  }}
                />
                <span
                  className="sp-fb"
                  style={{
                    display: "none",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    textAlign: "center",
                    fontFamily: "var(--font-sans)",
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
            fontSize: "0.76rem",
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
