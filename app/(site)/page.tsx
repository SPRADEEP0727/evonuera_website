import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyAISection from "@/components/WhyAISection";
import OfferingsSection from "@/components/OfferingsSection";
import InstructorSection from "@/components/InstructorSection";
import CTAButton from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evonuera – AI Systems Company",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Company intro */}
      <Hero
        badge="AI Systems Company"
        backgroundImage="/hero.jpg"
        headline={
          <>
            Building Intelligent AI Systems{" "}
            <span className="gradient-text">
              for Businesses and Professionals
            </span>
          </>
        }
        subheadline="Evonuera designs AI systems, builds intelligent agents, consults businesses on AI adoption, and trains professionals to create real AI solutions."
        primaryCTA={{ label: "Explore AI Services", href: "/services" }}
        secondaryCTA={{ label: "Learn AI Systems", href: "/learning" }}
      />

      {/* 2. What We Do */}
      <ServicesGrid />

      {/* 3. Why AI */}
      <WhyAISection />

      {/* 4. What we offer — 4 pillars */}
      <OfferingsSection />

      {/* 5. Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-100" />
        <div className="divider-gradient absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="badge badge-dot mb-6">Products</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Products Built by{" "}
              <span className="gradient-text">Evonuera</span>
            </h2>
            <p className="text-brand-muted text-lg">Real AI products. Not demos.</p>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="card-premium p-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 border border-brand-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="inline-block bg-brand-secondary/10 text-brand-secondary text-xs font-bold px-3 py-1 rounded-full mb-4">
                Coming Soon
              </span>
              <h3 className="text-xl font-bold text-white mb-3">AI Fitness App</h3>
              <p className="text-brand-muted text-sm mb-8 leading-relaxed">
                An AI-powered fitness assistant that creates personalized workout and health plans.
              </p>
              <CTAButton href="/products/fitness-app" variant="outline" size="md">
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Founder */}
      <InstructorSection />

      {/* 7. Final CTA */}
      <section className="py-26 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="divider-gradient absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Ready to Work with{" "}
            <span className="gradient-text">Evonuera?</span>
          </h2>
          <p className="text-brand-muted text-lg mb-10">
            Whether you need AI systems built for your business, want to train your team, or learn to build AI yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Get in Touch
            </CTAButton>
            <CTAButton href="/learning" variant="outline" size="lg">
              Explore AI Programs
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
