import Hero from "@/components/Hero";
import CurriculumSection from "@/components/CurriculumSection";
import InstructorSection from "@/components/InstructorSection";
import JourneySection from "@/components/JourneySection";
import ToolsSection from "@/components/ToolsSection";
import FAQSection from "@/components/FAQSection";
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
        headline={
          <>
            Gen AI Systems{" "}
            <span className="gradient-text">Architect Program</span>
          </>
        }
        subheadline="A complete path from AI fundamentals to building and deploying production AI systems. Mentor-led. Project-based. Results-driven."
        primaryCTA={{ label: "Start Your AI Journey", href: "/ai-architect" }}
      />

      {/* Program stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Designed for Every Background
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
      <ToolsSection />
      <InstructorSection />

      <FAQSection />
    </>
  );
}
