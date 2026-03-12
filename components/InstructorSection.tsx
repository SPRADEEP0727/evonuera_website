import Image from "next/image";

const highlights = [
  "7+ years in software engineering",
  "Built production AI systems at scale",
  "Expert in AI automation and AI agents",
  "Tech Lead at Bosch Global Software Technologies",
];

export default function InstructorSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-both relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="badge badge-dot mb-6">Meet the Mentor</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            The Mind Behind{" "}
            <span className="gradient-text">Evonuera</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl gradient-border overflow-hidden relative">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Photo side */}
            <div className="relative min-h-[320px] lg:min-h-[480px] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
              {/* Replace src with your actual photo path e.g. /pradeep.jpg */}
              <Image
                src="/mentor.jpg"
                alt="Pradeep Subramanian"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Content side */}
            <div className="p-10 sm:p-14 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                Pradeep Subramanian
              </h3>
              <p className="text-brand-secondary text-base font-semibold mb-1">
                Tech Lead – Bosch Global Software Technologies
              </p>
              <p className="text-gray-500 text-base mb-8">
                Founder – Evonuera
              </p>

              <ul className="space-y-4">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-gray-700 text-base">
                    <span className="w-6 h-6 rounded-full bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
