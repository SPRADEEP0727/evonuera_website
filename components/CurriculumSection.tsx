const weeks = [
  { week: "Week 1", topics: ["AI Foundations", "Python for AI"] },
  { week: "Week 2", topics: ["Prompt Engineering", "Build AI Apps"] },
  { week: "Week 3", topics: ["LLM Orchestration", "RAG Systems"] },
  { week: "Week 4", topics: ["AI Automation"] },
  { week: "Week 5", topics: ["AI Agents"] },
  { week: "Week 6", topics: ["Multi-Agent Systems"] },
  { week: "Week 7", topics: ["Voice AI Systems"] },
  { week: "Week 8", topics: ["Production AI Deployment"] },
];

export default function CurriculumSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-2 relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="badge badge-dot mb-6">8-Week Program</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            What You&apos;ll Learn{" "}
            <span className="gradient-text">Week by Week</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            A structured path from AI fundamentals to production-ready AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {weeks.map((item, idx) => (
            <div key={item.week} className="card p-6 flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 border border-brand-primary/20 flex items-center justify-center text-white text-sm font-extrabold shrink-0 group-hover:from-brand-primary group-hover:to-brand-secondary transition-all duration-300">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="text-brand-secondary text-xs font-semibold uppercase tracking-wider mb-1.5">
                  {item.week}
                </p>
                <ul className="space-y-0.5">
                  {item.topics.map((t) => (
                    <li key={t} className="text-white text-sm font-medium">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Final project */}
        <div className="mt-6 card-premium p-8 text-center">
          <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-2">
            Capstone Project
          </p>
          <p className="text-white font-bold text-xl">
            Build and Launch an AI MicroSaaS Product
          </p>
          <p className="text-brand-muted text-sm mt-2">
            Convert your project into a revenue-ready product with real users.
          </p>
        </div>
      </div>
    </section>
  );
}
