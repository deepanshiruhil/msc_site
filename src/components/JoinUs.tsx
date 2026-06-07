export default function JoinUs() {
  const perks = [
    "Early access to workshops, hackathons, and ideathons",
    "Mentorship from Microsoft Learn Student Ambassadors",
    "Exclusive Microsoft-supported resources and certifications",
    "Networking with peers, seniors, and industry professionals",
    "Priority invitations to MSC events and Azure community sessions at Microsoft Gurugram",
  ];

  return (
    <section className="py-20 px-6 bg-card border-y border-border/40">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left — headline + CTA */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
            Membership
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Join Us Now
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Become part of IGDTUW&apos;s most active tech community — where curiosity
            meets opportunity and ambition meets action.
          </p>
          <a
            href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              bg-blue-600 hover:bg-blue-700 active:bg-blue-800
              text-white text-sm font-medium
              px-6 py-3 rounded-xl
              transition-colors duration-200
            "
          >
            Apply Now →
          </a>
        </div>

        {/* Right — perks list */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            What you get
          </p>
          <ul className="space-y-4">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 text-blue-500 font-bold shrink-0">✓</span>
                <span className="text-foreground/80 leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
