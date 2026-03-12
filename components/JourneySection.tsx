const phases = [
  {
    number: "01",
    title: "Program Kickoff",
    description:
      "Immersive onboarding with cohort introductions, goal-setting, and environment setup. You'll map your AI learning path and meet your accountability group.",
  },
  {
    number: "02",
    title: "Build Sprint",
    description:
      "48-hour build sprint where you prototype and ship your first real AI app — a working RAG chatbot or automation agent with real data.",
  },
  {
    number: "03",
    title: "Agent Showdown",
    description:
      "Design and demo autonomous AI agents. Multi-tool orchestration, memory systems, live benchmarking, and peer feedback sessions.",
  },
  {
    number: "04",
    title: "AI MicroSaaS Launch",
    description:
      "Convert your best project into a revenue-ready AI MicroSaaS product. Product thinking, rapid deployment, and go-to-market strategy included.",
  },
];

export default function JourneySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-1 relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="badge badge-dot mb-6">Program Journey</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Your Journey to{" "}
            <span className="gradient-text">Production AI</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            A structured 4-phase path that takes you from setup to shipping your own AI product.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-0.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.number} className="card p-6 relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-extrabold text-sm mb-4">
                  {phase.number}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{phase.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
