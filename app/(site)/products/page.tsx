import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products – Evonuera",
  description: "AI-powered products built by Evonuera.",
};

export default function ProductsPage() {
  return (
    <>
      <Hero
        badge="Products"
        headline={
          <>
            AI-Powered Products{" "}
            <span className="gradient-text">Built by Evonuera</span>
          </>
        }
        subheadline="We are building AI products that solve real problems for real people."
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card p-10 flex flex-col sm:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                <h2 className="text-2xl font-bold text-white">AI Fitness App</h2>
                <span className="bg-brand-secondary/10 text-brand-secondary text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
              <p className="text-brand-muted leading-relaxed mb-6">
                An AI-powered fitness assistant that creates personalized workout
                and health plans. Built on cutting-edge AI to understand your
                goals, fitness level, and preferences.
              </p>
              <CTAButton href="/products/fitness-app" variant="outline" size="md">
                Learn More & Join Waitlist
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
