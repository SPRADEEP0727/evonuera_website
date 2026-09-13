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

      {/* Brochure download */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v11m0 0 3.75-3.75M12 15.5l-3.75-3.75M4.5 18.5v.75a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Get the Course Brochure</h3>
                <p className="text-brand-muted text-sm">Curriculum, timelines, and outcomes — in one PDF.</p>
              </div>
            </div>
            <CTAButton
              href="/pdf/course-brochure.pdf"
              download="Evonuera-Gen-AI-Systems-Architect-Brochure.pdf"
              variant="outline"
              size="md"
              className="shrink-0"
            >
              Download Brochure
            </CTAButton>
          </div>
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

      {/* Course queries contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge badge-dot mb-6 mx-auto">Have Questions?</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Course <span className="gradient-text">Queries?</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto mb-10">
            Reach out to us directly on WhatsApp for any questions about the
            program, curriculum, or enrollment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {[
              { number: "8098420386" },
              { number: "7010495654" },
            ].map((contact) => {
              const digits = `91${contact.number}`;
              const message = encodeURIComponent(
                "Hi, I have a query about the Gen AI Systems Architect Program."
              );
              return (
                <a
                  key={contact.number}
                  href={`https://wa.me/${digits}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 flex items-center justify-center gap-3 hover:border-[#25D366]/50 transition-colors duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-[#25D366] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-white font-semibold group-hover:text-[#25D366] transition-colors duration-300">
                    +91 {contact.number}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
