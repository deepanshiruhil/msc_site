import Image from "next/image";
import Link from "next/link";
import SponsorsGrid from "@/components/SponsorsGrid";
import JoinUs from "@/components/JoinUs";
import FAQAccordion from "@/components/FAQAccordion";
import ThemeToggle from "@/components/ThemeToggle";

/*Navigation*/
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="MSC Logo" width={36} height={36} />
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#top"      className="hover:text-foreground transition-colors">Home</Link>
          <Link href="#about"    className="hover:text-foreground transition-colors">About us</Link>
          <Link href="/events"   className="hover:text-foreground transition-colors">Events</Link>
          <Link href="/blog"     className="hover:text-foreground transition-colors">Blogs</Link>
          <Link href="#sponsors" className="hover:text-foreground transition-colors">Sponsors</Link>
          <Link href="/team"     className="hover:text-foreground transition-colors">Team</Link>
          <Link href="/contact"  className="hover:text-foreground transition-colors">Contact us</Link>
          <Link href="#faq"      className="hover:text-foreground transition-colors">FAQ</Link>
        </div>

        {/* Theme toggle lives here */}
        <ThemeToggle />
      </div>
    </nav>
  );
}

/*Hero*/
function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      <Image
        src="/logo.png"
        alt="Microsoft Learn Student Ambassador"
        width={80}
        height={80}
        className="mb-8"
      />

      <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-4">
        Microsoft Student Chapter · IGDTUW
      </p>

      {/* ── NEW TAGLINE (replaces "Your journey to knowledge") ── */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
        Build.<br />
        Collaborate.<br />
        <span className="text-blue-500">Lead.</span>
      </h1>

      <p className="max-w-lg text-muted-foreground text-base sm:text-lg leading-relaxed mb-10">
        IGDTUW&apos;s Microsoft Student Chapter — where women technologists run
        hackathons, host industry sessions, and shape each other&apos;s careers.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#about"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
        >
          Learn more
        </a>
        <a
          href="#sponsors"
          className="px-6 py-3 rounded-xl border border-border hover:bg-secondary text-sm font-medium transition-colors"
        >
          Our sponsors
        </a>
      </div>
    </section>
  );
}

/* ─── About ──────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold tracking-tight mb-6">About Us</h2>
      <p className="text-muted-foreground leading-relaxed">
        We are the{" "}
        <span className="text-foreground font-medium">
          Microsoft Learn Student Ambassador Student Chapter
        </span>
        , your one-stop spot for sessions, hackathons, and mentorship. Learn
        from experts, seniors, and peers as you grow into tomorrow&apos;s tech
        leaders. We empower women technologists through collaboration,
        creativity, and innovation.
      </p>
    </section>
  );
}

/* ─── Recent Events ──────────────────────────────────────────────── */
function RecentEvents() {
  const events = [
    {
      title: "Summer Bootcamp",
      img: "/images/summer_bootcamp.jpg",
      desc: "Under the AI-DS Department, IGDTUW — the spirit of the season.",
    },
    {
      title: "IDEATE-IT-UP 2026",
      img: "/images/Ideate-it-up.png",
      desc: "IGDTUW Hackathon — the flagship event of 2026.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-card border-y border-border/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-10">
          Recent Events
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {events.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl overflow-hidden border border-border/40 bg-background"
            >
              <div className="relative h-52">
                <Image src={e.img} alt={e.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-1">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <Image src="/logo.png" alt="MSC Logo" width={48} height={48} className="mb-4" />
          <p className="text-muted-foreground text-xs leading-relaxed">
            MLSA-IGDTUW © 2025 | All Rights Reserved.
          </p>
        </div>

        <div>
          <p className="font-medium mb-3">Links</p>
          <ul className="space-y-2 text-muted-foreground">
            {[
              ["Home",       "#top"],
              ["About Us",   "#about"],
              ["Events",     "/events"],
              ["FAQ",        "#faq"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-foreground transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-medium mb-3">Get in Touch</p>
          <p className="text-muted-foreground mb-3">IGDTUW, New Delhi, India</p>
          <div className="flex gap-3">
            <a href="https://x.com/IgdtuwMsc"                     target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">X</a>
            <a href="https://www.instagram.com/msc.igdtuw/"        target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/msc-igdtuw/"      target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page assembly ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <RecentEvents />

        {/* Sponsors — static grid, no carousel */}
        <SponsorsGrid />

        {/* Join Us — new section above FAQ */}
        <JoinUs />

        {/* FAQ — smooth accordion */}
        <FAQAccordion />
      </main>
      <Footer />
    </>
  );
}
