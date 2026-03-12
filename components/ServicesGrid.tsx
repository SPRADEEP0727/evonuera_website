interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Systems Development",
    description:
      "Design and build AI-powered systems that automate workflows and solve business problems.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Custom AI Agents",
    description:
      "Develop intelligent agents capable of interacting with tools, APIs, and real-world systems.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "AI Consulting",
    description:
      "Help businesses adopt and implement AI effectively across their operations.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-1 relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="badge badge-dot mb-6">What We Build</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            AI Services for{" "}
            <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            End-to-end AI services for businesses ready to build and deploy real AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card p-8 lg:p-10 animate-fade-in-up delay-${(i + 1) * 100}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-brand-muted leading-relaxed text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
