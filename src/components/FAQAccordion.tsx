"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is MSC-IGDTUW all about?",
    a: "MSC IGDTUW is a technical club under Microsoft Learn Student Ambassador. It's a platform for students to learn about new technologies, network with peers, nurture their skills, and foster a strong sense of student community.",
  },
  {
    q: "What prompts joining MSC?",
    a: "MSC-IGDTUW believes the right guidance can help you achieve ultimate success. We promise to nurture you throughout your journey — you will not miss any opportunity if you are with us.",
  },
  {
    q: "What will MSC provide?",
    a: "The club organises informative webinars, seminars, technical hackathons, and ideathons — aimed at giving you the best resources and tools to learn and grow.",
  },
  {
    q: "What does MSC have in stock for us?",
    a: "MSC IGDTUW offers members access to all meet-ups and sessions, plus exclusive Microsoft-supported events and resources. It's the right place for students who have a passion for technology and a desire to share and grow.",
  },
  {
    q: "What's so special about MSC?",
    a: "Through our collaboration with the Azure Developer Community (supported by Microsoft Azure), members get special events — including networking sessions and learning opportunities at the Microsoft office in Gurugram.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl font-semibold tracking-tight text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-sm text-center mb-12">
          Everything you need to know about joining and being part of MSC.
        </p>

        <div className="divide-y divide-border/60">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="
                    flex w-full items-center justify-between
                    py-5 text-left text-sm font-medium
                    hover:text-blue-500 transition-colors duration-150
                  "
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="ml-4 shrink-0 text-xl text-muted-foreground transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>

                {/* Animated answer */}
                <div
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease, opacity 0.25s ease",
                  }}
                >
                  <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground mb-3">Still have questions?</p>
          <a
            href="/contact"
            className="
              inline-flex items-center gap-1.5
              text-sm font-medium text-blue-500
              hover:underline underline-offset-4
            "
          >
            Contact us →
          </a>
        </div>

      </div>
    </section>
  );
}
