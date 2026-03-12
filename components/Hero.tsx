import CTAButton from "./CTAButton";

interface HeroProps {
  headline: React.ReactNode;
  subheadline: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  badge?: string;
  backgroundImage?: string;
}

export default function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  badge,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-brand-bg/75" />
        </div>
      )}

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-primary/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] animate-float delay-200" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-bg to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="badge badge-dot mb-8 animate-fade-in-up">
            {badge}
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white mb-8 animate-fade-in-up delay-100">
          {headline}
        </h1>

        <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
          {subheadline}
        </p>

        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            {primaryCTA && (
              <CTAButton href={primaryCTA.href} variant="primary" size="lg">
                {primaryCTA.label}
              </CTAButton>
            )}
            {secondaryCTA && (
              <CTAButton href={secondaryCTA.href} variant="outline" size="lg">
                {secondaryCTA.label}
              </CTAButton>
            )}
          </div>
        )}

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-in delay-500">
          <div className="w-6 h-10 border border-white/20 rounded-full mx-auto flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-brand-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
