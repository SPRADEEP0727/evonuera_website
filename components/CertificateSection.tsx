import Image from "next/image";

export default function CertificateSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-1 relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <div className="badge badge-dot mb-6">Certification</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Earn Your{" "}
              <span className="gradient-text">Generative AI Architect Certificate</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              Complete the program and receive an official certificate from Evonuera — proof that you can build, deploy, and scale production AI systems.
            </p>

            <ul className="space-y-4">
              {[
                "Recognized industry certification",
                "Showcase on LinkedIn & portfolio",
                "Validates hands-on AI building skills",
                "Awarded upon program completion",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white text-base">
                  <span className="w-6 h-6 rounded-full bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — certificate image */}
          <div className="rounded-3xl gradient-border p-[3px]">
            <div className="rounded-3xl overflow-hidden bg-white relative">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/certificate.png"
                  alt="Evonuera Generative AI Architect Certificate"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
