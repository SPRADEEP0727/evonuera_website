"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need a technical background to join?",
    a: "No. The program starts from fundamentals. If you can use a computer and are willing to learn, you have everything you need to get started.",
  },
  {
    q: "How long is the program and how many hours per week?",
    a: "The program is 8 weeks long. Expect to invest 7–12 hours per week — a mix of 4–5 hours of live/recorded sessions and 5–7 hours building projects.",
  },
  {
    q: "Are the sessions live or recorded?",
    a: "Both. Core concepts are taught live with recordings provided. You also get async support, office hours, and a community of builders to learn alongside.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. You receive module-level certificates, a program completion certificate, and a portfolio of real projects that demonstrate your skills.",
  },
  {
    q: "What will I actually build?",
    a: "RAG chatbots, AI automation workflows, multi-agent systems, voice AI interfaces, and a final AI MicroSaaS product you can launch and monetize.",
  },
  {
    q: "What tools and software do I need?",
    a: "Just a modern browser and a GitHub account. All AI APIs have free tiers available. We guide you through setup in the first session.",
  },
  {
    q: "Is there job placement support?",
    a: "We provide career guidance, portfolio reviews, referrals, and interview prep. We don't guarantee placements, but we give you every tool to land clients or roles.",
  },
  {
    q: "Can I join from outside India?",
    a: "Yes. The program is remote-first. All sessions are recorded, and support is provided across time zones.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="badge badge-dot mb-6">FAQ</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-medium text-sm leading-relaxed">
                  {faq.q}
                </span>
                <span className={`text-brand-secondary shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
