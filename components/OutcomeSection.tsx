export default function OutcomeSection() {
  const before = [
    "Confused by the fast-changing AI landscape",
    "Using AI tools without understanding how they work",
    "Unsure how to build real AI systems",
    "Dependent on existing tools instead of creating solutions",
    "No structured learning path in AI",
    "Limited knowledge of automation and AI workflows",
    "Unable to connect AI with real business problems",
    "No experience building production-ready AI applications",
    "No understanding of AI agents or multi-agent systems",
    "Unsure how to turn AI skills into real products",
  ];

  const after = [
    "Think and reason about problems using AI systems",
    "Understand the architecture behind modern AI applications",
    "Design and build AI-powered automation systems",
    "Develop intelligent AI agents that perform real tasks",
    "Architect multi-agent systems that collaborate and solve complex problems",
    "Build AI applications that integrate with real tools and APIs",
    "Deploy production-ready AI solutions with confidence",
    "Create scalable AI systems for real-world use cases",
    "Build and launch a fully functional AI MicroSaaS product",
    "Use AI to create career opportunities or build new ventures",
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-1 relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="badge badge-dot mb-6">Transformation</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Before &amp; After{" "}
            <span className="gradient-text">This Program</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            See the real transformation our builders experience — from AI
            confusion to building production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <div className="card p-8 border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-red-400">
                Before This Program
              </h3>
            </div>
            <ul className="space-y-3">
              {before.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-brand-muted text-base leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="card p-8 border-emerald-500/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-emerald-400">
                After This Program
              </h3>
            </div>
            <ul className="space-y-3">
              {after.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-white text-base leading-relaxed"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mindset statements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              highlight: "You don't just know tools",
              rest: "you understand systems",
            },
            {
              highlight: "You don't wait for use cases",
              rest: "you design solutions",
            },
            {
              highlight: "You don't fear change",
              rest: "you adapt faster than it",
            },
          ].map((item) => (
            <div
              key={item.highlight}
              className="rounded-2xl p-[2px] bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary"
            >
              <div className="rounded-2xl p-8 text-center bg-white relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #9CA3AF 1px, transparent 1px), linear-gradient(to bottom, #9CA3AF 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative z-10">
                  <p className="font-extrabold text-xl sm:text-2xl leading-relaxed bg-gradient-to-r from-[#6d28d9] via-[#e11d48] to-[#4f46e5] bg-clip-text text-transparent">
                    {item.highlight}
                  </p>
                  <p className="text-black font-extrabold text-xl sm:text-2xl leading-relaxed mt-1">
                    {item.rest}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
