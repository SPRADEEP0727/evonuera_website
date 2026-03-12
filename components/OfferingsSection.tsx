"use client";

import { useEffect, useRef, useState } from "react";
import CTAButton from "./CTAButton";

const offerings = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI System Development",
    desc: "Custom AI solutions built for your business workflows — from LLM integrations to full automation pipelines.",
    highlights: ["End-to-end architecture", "LLM integration", "Production deployment"],
    cta: { label: "View Services", href: "/services" },
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Custom AI Agents",
    desc: "Intelligent agents that interact with tools, APIs, and real-world systems to automate complex tasks.",
    highlights: ["Multi-tool orchestration", "API integration", "Autonomous workflows"],
    cta: { label: "View Services", href: "/services" },
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "AI Education & Training",
    desc: "Structured programs to train professionals and teams to build production AI systems from scratch.",
    highlights: ["8-week programs", "Hands-on projects", "Mentor-led sessions"],
    cta: { label: "Explore Programs", href: "/learning" },
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "AI Products",
    desc: "Building our own AI-powered products that solve real problems — starting with an AI Fitness App.",
    highlights: ["Real-world products", "AI-first design", "Continuous improvement"],
    cta: { label: "View Products", href: "/products" },
  },
];

export default function OfferingsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(offerings.length).fill(false)
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-both relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two-column layout: sticky left heading + scrolling right cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="badge badge-dot mb-6">Our Offerings</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Everything AI.{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">One Company.</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              From building AI systems for your business to training your team
              — Evonuera covers the full AI lifecycle.
            </p>
            <div className="hidden lg:block">
              <CTAButton href="/services" variant="primary" size="lg">
                Explore All Services →
              </CTAButton>
            </div>
          </div>

          {/* Right — cards that animate in on scroll */}
          <div className="space-y-6">
            {offerings.map((item, i) => (
              <div
                key={item.title}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`bg-white rounded-2xl p-8 lg:p-10 group gradient-border transition-all duration-700 ease-out hover:shadow-lg ${
                  visibleCards[i]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 group-hover:from-brand-primary/30 group-hover:to-brand-secondary/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-extrabold mb-2" style={{ background: 'linear-gradient(135deg, #6a3acc, #cc3a3a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <CTAButton href={item.cta.href} variant="outline" size="sm">
                      {item.cta.label} →
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden text-center">
            <CTAButton href="/services" variant="primary" size="lg">
              Explore All Services →
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
