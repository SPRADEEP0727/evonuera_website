import CTAButton from "./CTAButton";

const stats = [
  { value: "80%", label: "AI adoption rate among top enterprises" },
  { value: "$10B+", label: "Investment in GenAI startups in 2024" },
  { value: "#1", label: "Most in-demand tech skill globally" },
];

const problems = [
  "Most professionals are learning random AI tools with no structure",
  "No real GenAI product experience to show employers or clients",
  "Businesses don't know how to adopt AI effectively",
];

export default function WhyAISection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              The Opportunity
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              The AI Revolution{" "}
              <span className="gradient-text">Is Here.</span>
              <br />
              Those who can build will lead it.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The world is moving fast. Businesses need AI systems built, not just talked about.
              The gap between those who can build AI and those who can&apos;t is growing every day.
            </p>

            <div className="space-y-4 mb-8">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center text-brand-secondary text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            <CTAButton href="/ai-architect" variant="primary" size="md">
              Learn to Build AI Systems →
            </CTAButton>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((s) => (
              <div key={s.value} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-center gap-6 transition-all duration-300 hover:shadow-lg hover:border-brand-primary/30">
                <div className="text-4xl font-extrabold gradient-text shrink-0 w-24 text-center">
                  {s.value}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
