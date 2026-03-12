import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services – Evonuera",
  description:
    "AI System Development, Custom AI Agents, and AI Consulting for businesses.",
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI System Development",
    description:
      "Custom AI solutions tailored to business workflows. We build end-to-end AI systems that integrate with your existing infrastructure to automate operations and drive efficiency.",
    features: [
      "Custom LLM integrations",
      "Workflow automation pipelines",
      "Data processing systems",
      "AI-powered APIs",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Custom AI Agents",
    description:
      "Agents capable of automating complex tasks and integrating with tools, APIs, and real-world systems. From research agents to autonomous task runners.",
    features: [
      "Tool-using AI agents",
      "Multi-step reasoning systems",
      "API & web integration",
      "Memory & context management",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "AI Consulting",
    description:
      "Helping organizations adopt and deploy AI effectively. We assess your business, identify AI opportunities, and create a practical roadmap for implementation.",
    features: [
      "AI readiness assessment",
      "Strategy & roadmap planning",
      "Team enablement",
      "Implementation oversight",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        badge="What We Build"
        headline={
          <>
            AI Services for{" "}
            <span className="gradient-text">Modern Businesses</span>
          </>
        }
        subheadline="From strategy to deployment — we design, build, and integrate AI systems that deliver real business value."
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service) => (
            <div key={service.title} className="card p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-brand-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white">
                        <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to explore what AI can do for your business?
          </h2>
          <CTAButton href="/contact" variant="primary" size="lg">
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </>
  );
}
