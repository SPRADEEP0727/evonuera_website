"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  {
    number: "01",
    title: "Foundation & Setup",
    description:
      "Begin with a guided onboarding — meet your cohort, define your learning goals, configure your dev environment, and lay the groundwork for your AI builder journey.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Rapid Prototype Sprint",
    description:
      "Dive into a 48-hour intensive where you architect and deploy your first functional AI application — from a production-grade RAG system to a fully working automation agent.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Autonomous Agent Arena",
    description:
      "Engineer and showcase intelligent AI agents with multi-tool capabilities, persistent memory, and real-time decision making. Benchmark against peers in live sessions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ship Your AI Product",
    description:
      "Transform your strongest project into a market-ready AI MicroSaaS. Master product strategy, rapid deployment pipelines, and launch with a go-to-market plan.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

export default function JourneySection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(phases.length).fill(false)
  );
  const [lineProgress, setLineProgress] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;

      // How far the viewport has scrolled through the timeline
      const scrolled = windowHeight - rect.top;
      const progress = Math.min(Math.max(scrolled / timelineHeight, 0), 1);
      setLineProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-1 relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="badge badge-dot mb-6">Program Journey</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            From Zero to{" "}
            <span className="gradient-text">Deploying AI Systems</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            A 4-phase roadmap that transforms you from beginner to shipping your own AI-powered product.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Center vertical line — background track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />
          {/* Center vertical line — animated fill */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary origin-top"
            style={{ height: `${lineProgress * 100}%` }}
          />

          <div className="space-y-12">
            {phases.map((phase, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={phase.number}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className={`relative flex items-center transition-all duration-700 ease-out ${
                    visibleCards[i]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: visibleCards[i] ? `${i * 150}ms` : "0ms",
                  }}
                >
                  {/* Center dot on the line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white text-sm font-extrabold shadow-lg z-10">
                    {phase.number}
                  </div>

                  {/* Left side */}
                  <div className="w-[calc(50%-2rem)]">
                    {isLeft && (
                      <div className="card p-7 group hover:border-brand-primary/40 mr-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-secondary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 group-hover:from-brand-primary/25 group-hover:to-brand-secondary/15 transition-all duration-300">
                            {phase.icon}
                          </div>
                          <h3 className="text-white font-bold text-lg">{phase.title}</h3>
                        </div>
                        <p className="text-brand-muted text-sm leading-relaxed">{phase.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Spacer for center */}
                  <div className="w-16 shrink-0" />

                  {/* Right side */}
                  <div className="w-[calc(50%-2rem)]">
                    {!isLeft && (
                      <div className="card p-7 group hover:border-brand-primary/40 ml-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-secondary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 group-hover:from-brand-primary/25 group-hover:to-brand-secondary/15 transition-all duration-300">
                            {phase.icon}
                          </div>
                          <h3 className="text-white font-bold text-lg">{phase.title}</h3>
                        </div>
                        <p className="text-brand-muted text-sm leading-relaxed">{phase.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
