import CurriculumSection from "@/components/CurriculumSection";
import CurrentYear from "@/components/CurrentYear";
import InstructorSection from "@/components/InstructorSection";
import CalendlySection from "@/components/CalendlySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gen AI Systems Architect Program – Masterclass",
  description:
    "Watch the masterclass and discover how to build production AI systems.",
};

export default function MasterclassPage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      {/* Urgency banner */}
      <div className="bg-brand-primary text-white text-center py-2.5 px-4 text-sm font-semibold">
        Founders Cohort Closing Soon — Only 8 Seats Left
      </div>

      {/* Minimal header */}
      <header className="py-5 px-6 flex justify-center border-b border-white/5">
        <span className="text-white font-bold text-xl tracking-tight">
          evonuera
        </span>
      </header>

      {/* Masterclass video section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-brand-secondary/10 border border-brand-secondary/30 text-brand-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            You&apos;re In! Watch Your Masterclass
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Gen AI Systems Architect Program
          </h1>
          <p className="text-brand-muted text-lg mb-10">
            Watch the masterclass below, then explore the full program details.
          </p>

          {/* Video embed placeholder */}
          <div className="aspect-video bg-gradient-to-br from-brand-bg to-brand-primary/20 rounded-2xl border border-white/10 flex items-center justify-center mb-4">
            {/* Replace with actual video embed URL */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-brand-muted text-sm">Masterclass video</p>
              <p className="text-brand-muted text-xs mt-1">
                Set <code className="text-brand-secondary">NEXT_PUBLIC_VIDEO_EMBED_URL</code> to embed your video
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program overview */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            What You&apos;ll Build in 8 Weeks
          </h2>
          <p className="text-brand-muted text-lg">
            A structured path from AI fundamentals to production AI systems —
            ending with your own AI MicroSaaS product.
          </p>
        </div>
      </section>

      <CurriculumSection />
      <InstructorSection />

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="card p-10 text-center border-brand-primary/30">
            <p className="text-brand-secondary text-xs font-semibold uppercase tracking-wider mb-4">
              Founders Cohort — Limited Seats
            </p>

            <div className="mb-2">
              <span className="text-brand-muted line-through text-xl mr-2">
                Full Value ₹45,000
              </span>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-white">₹15,000</span>
            </div>

            <ul className="text-left space-y-3 mb-8">
              {[
                "8 weeks of structured training",
                "Live sessions + recordings",
                "AI agent projects",
                "Final AI MicroSaaS product",
                "Community & mentorship",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white">
                  <span className="w-5 h-5 rounded-full bg-brand-secondary/10 border border-brand-secondary/40 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#book-call"
              className="block w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all duration-300 text-lg"
            >
              Book Strategy Call
            </a>
            <p className="text-brand-secondary text-xs font-semibold mt-3">
              Price increases to {"\u20B9"}45,000 once cohort fills
            </p>
            <p className="text-brand-muted text-xs mt-1">
              Free strategy call. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <div id="book-call">
        <CalendlySection />
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-white/5">
        <p className="text-brand-muted text-xs">
          © <CurrentYear fallback={new Date().getFullYear()} /> Evonuera. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
