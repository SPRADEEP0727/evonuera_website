import Image from "next/image";

const highlights = [
  {
    label: "7+ years",
    detail: "in software engineering",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
      </svg>
    ),
  },
  {
    label: "Production AI",
    detail: "systems built at scale",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M5 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m-14 4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    label: "AI agents",
    detail: "& automation expertise",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10 10 1.4 1.4M3 12h2m14 0h2M5.6 18.4 7 17m10-10 1.4-1.4M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
];

export default function InstructorSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-both relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="badge badge-dot mb-6">Meet the Mentor</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            The Mind Behind <span className="gradient-text">Evonuera</span>
          </h2>
        </div>

        <div className="rounded-3xl gradient-border p-[2px] shadow-premium">
          <div className="rounded-3xl overflow-hidden bg-brand-bg-light relative">
            {/* Ambient glow behind the card content */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-brand-primary/15 blur-[110px]" />
              <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-brand-secondary/10 blur-[110px]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              {/* Photo with gradient overlay + name overlay */}
              <div className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-[580px]">
                <Image
                  src="/pradeep.png"
                  alt="Pradeep Subramanian"
                  fill
                  className="object-cover object-[50%_38%]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Brand duotone wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/45 via-transparent to-brand-secondary/40 mix-blend-color opacity-80" />
                {/* Darkening scrim so the overlaid text stays readable */}
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-brand-bg via-brand-bg/70 to-transparent" />
                {/* Blend the photo into the card on wide screens */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-28 bg-gradient-to-r from-transparent to-brand-bg-light" />

                {/* Name overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-secondary mb-3">
                    <span className="w-6 h-px bg-gradient-to-r from-brand-primary to-brand-secondary" />
                    Founder — Evonuera
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
                    Pradeep
                    <br />
                    <span className="gradient-text">Subramanian</span>
                  </h3>
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-brand-muted text-base sm:text-lg leading-relaxed mb-8">
                  Seven years of shipping software, and production AI systems
                  built at real-world scale — the same systems, patterns, and
                  hard-won lessons are what you learn to build in the program.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((item, i) => (
                    <div
                      key={item.label}
                      className={`card p-5 group hover:border-brand-primary/40 ${
                        i === highlights.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <span className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center bg-gradient-to-br from-brand-primary/20 to-brand-secondary/15 border border-brand-primary/25 text-brand-secondary group-hover:from-brand-primary/30 group-hover:to-brand-secondary/25 transition-all duration-300">
                        {item.icon}
                      </span>
                      <p className="text-white font-bold text-base leading-tight">
                        {item.label}
                      </p>
                      <p className="text-brand-muted text-sm leading-snug mt-1">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
