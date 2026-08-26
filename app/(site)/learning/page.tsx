import Hero from "@/components/Hero";
import CurriculumSection from "@/components/CurriculumSection";
import InstructorSection from "@/components/InstructorSection";
import JourneySection from "@/components/JourneySection";
import ToolsSection from "@/components/ToolsSection";
import FAQSection from "@/components/FAQSection";
import CertificateSection from "@/components/CertificateSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OutcomeSection from "@/components/OutcomeSection";
import CTAButton from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gen AI Systems Architect Program – Evonuera",
  description:
    "8-week mentor-led program to build production AI systems, agents, and launch an AI MicroSaaS.",
};

export default function LearningPage() {
  return (
    <>
      <Hero
        badge="AI Education"
        backgroundVideo="/video/learning_video.mp4"
        headline={
          <>
            Gen AI Systems{" "}
            <span className="gradient-text">Architect Program</span>
          </>
        }
        subheadline="A complete path from AI fundamentals to building and deploying production AI systems. Mentor-led. Project-based. Results-driven."
        primaryCTA={{ label: "Start Your AI Journey", href: "/ai-architect" }}
      />

      {/* Divider between hero and content */}
      <div className="relative">
        <div className="divider-gradient" />
        <div className="h-px bg-white/10" />
      </div>

      {/* Program stats */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "8", label: "Weeks" },
            { value: "30+", label: "AI Tools" },
            { value: "50+", label: "Builders" },
            { value: "1", label: "MicroSaaS Launch" },
          ].map((item) => (
            <div key={item.label} className="card p-5 text-center">
              <p className="text-3xl font-extrabold gradient-text mb-1">{item.value}</p>
              <p className="text-brand-muted text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              Designed for <span className="gradient-text">Every Background</span>
            </h2>
            <p className="text-brand-muted">This program is designed for you — even if you&apos;ve never written AI code.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Software Professionals",
                desc: "Add production AI skills to your existing engineering background.",
              },
              {
                title: "Entrepreneurs & Founders",
                desc: "Build AI-powered products and automate your business operations.",
              },
              {
                title: "Career Switchers",
                desc: "Break into AI with a portfolio of real, deployed projects.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JourneySection />
      <CurriculumSection />
      <OutcomeSection />
      <ToolsSection />
      <InstructorSection />

      {/* Webinars & Workshops */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              Webinars &amp; <span className="gradient-text">Workshops</span>
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              Live sessions, hands-on workshops, and expert-led webinars to
              keep you at the cutting edge of AI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* VIT Workshop — completed */}
            <div className="card overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/1775625273696.jfif"
                  alt="Workshop at VIT"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-brand-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Workshop
                </span>
              </div>
              <div className="p-5">
                <p className="text-brand-muted text-xs mb-2">VIT University</p>
                <h3 className="text-white font-semibold text-lg leading-snug">
                  Building AI Agents &ndash; Live Workshop
                </h3>
              </div>
            </div>

            {/* Upcoming cards */}
            {[
              {
                title: "Prompt Engineering Masterclass",
                tag: "Webinar",
              },
              {
                title: "AI MicroSaaS Launch Blueprint",
                tag: "Workshop",
              },
            ].map((item) => (
              <div key={item.title} className="card overflow-hidden group relative">
                <div className="relative h-48 overflow-hidden bg-white/[0.03] flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="mx-auto mb-2 h-10 w-10 text-brand-muted/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <p className="text-brand-muted/60 text-sm font-medium">Coming Soon</p>
                  </div>
                  <span className="absolute top-3 left-3 bg-white/10 text-brand-muted text-xs font-semibold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-brand-secondary text-xs font-medium mb-2">Upcoming</p>
                  <h3 className="text-white font-semibold text-lg leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificateSection />

      <TestimonialsSection />

      <FAQSection />
    </>
  );
}
