import InstructorSection from "@/components/InstructorSection";
import CTAButton from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Evonuera",
  description: "About Evonuera and founder Pradeep Subramanian.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-brand-primary/10 border border-brand-primary/30 text-brand-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            About Evonuera
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Building the Future of{" "}
            <span className="gradient-text">AI Systems</span>
          </h1>
          <p className="text-brand-muted text-lg leading-relaxed">
            Evonuera is an AI systems company focused on designing, building, and
            deploying intelligent AI systems for businesses — and training the
            next generation of AI systems architects.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-8">
            <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-brand-muted leading-relaxed">
              To make AI systems accessible to every business and empower
              professionals to build real AI solutions that create tangible
              impact.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-bold text-white mb-3">What We Do</h2>
            <p className="text-brand-muted leading-relaxed">
              We build AI systems, develop custom AI agents, provide AI
              consulting for businesses, and offer structured AI education
              programs.
            </p>
          </div>
        </div>
      </section>

      <InstructorSection />

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            Work with Evonuera
          </h2>
          <p className="text-brand-muted mb-8">
            Whether you need AI systems built for your business or want to learn
            how to build them yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Contact Us
            </CTAButton>
            <CTAButton href="/ai-architect" variant="outline" size="lg">
              Watch Masterclass
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
