"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "What is MSC-IGDTUW all about?",
    answer:
      "MSC-IGDTUW (Microsoft Student Chapter at Indira Gandhi Delhi Technical University for Women) is a student-led tech community dedicated to empowering women in technology. We organise hackathons, workshops, industry sessions, and networking events to help members grow their skills and careers.",
  },
  {
    question: "What will MSC provide?",
    answer:
      "Members get access to exclusive workshops, mentorship from industry professionals, hands-on hackathon experience, certification opportunities, networking with peers and alumni, and a supportive community of like-minded women technologists.",
  },
  {
    question: "Who can join MSC-IGDTUW?",
    answer:
      "Any student enrolled at IGDTUW who is passionate about technology, innovation, and building a career in tech is welcome to join. We are inclusive of all disciplines, not just CS/IT.",
  },
  {
    question: "How do I join?",
    answer:
      "Keep an eye on our Events page and social media for recruitment announcements at the beginning of each academic year. You can also reach out through the contact form on our website.",
  },
  {
    question: "Are the events only for IGDTUW students?",
    answer:
      "Most internal chapter activities are for IGDTUW students, but several events — such as hackathons and open sessions — are open to participants from other colleges. Check individual event pages for eligibility details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-pad" id="faq">
      <div className="container">
        {/* Section header */}
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>
          Got questions?
        </p>
        <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
          Frequently <span style={{ fontStyle: "italic" }}>Asked</span>{" "}
          <span className="accent">Questions</span>
        </h2>

        {/* Accordion */}
        <div
          className="section-lift"
          style={{
            padding: "0.5rem",
            borderRadius: "16px",
            border: "1px solid var(--border)",
          }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <div key={item.question} className="faq-item">
              <button
                className="faq-trigger"
                aria-expanded={openIndex === i}
                onClick={() => toggle(i)}
              >
                <span>{item.question}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>

              {openIndex === i && (
                <div className="faq-content">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
