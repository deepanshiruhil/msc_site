import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "3rem 0 2rem",
        fontFamily: "var(--font-sans)",
        marginTop: "4rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontSize: "var(--header-sm)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              MSC-IGDTUW
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                maxWidth: "220px",
              }}
            >
              Building the next generation of women technologists.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--blue-mid)",
                marginBottom: "0.85rem",
              }}
            >
              Navigate
            </p>
            {["Home", "About us", "Events", "Team", "FAQ"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(" ", "-")}`}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  marginBottom: "0.45rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--blue-mid)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--blue-mid)",
                marginBottom: "0.85rem",
              }}
            >
              Connect
            </p>
            {[
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Instagram", href: "https://instagram.com" },
              { label: "Twitter / X", href: "https://x.com" },
              { label: "GitHub", href: "https://github.com/MicrosoftStudentChapterIGDTUW" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  marginBottom: "0.45rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--blue-mid)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="divider" style={{ maxWidth: "100%", marginBottom: "1.25rem" }} />

        <p
          style={{
            textAlign: "center",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          © {new Date().getFullYear()} Microsoft Student Chapter · IGDTUW. Made with 💙 by members.
        </p>
      </div>
    </footer>
  );
}
