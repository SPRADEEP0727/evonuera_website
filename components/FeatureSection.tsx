import CTAButton from "./CTAButton";

interface FeatureSectionProps {
  badge?: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  children?: React.ReactNode;
  reverse?: boolean;
}

export default function FeatureSection({
  badge,
  title,
  description,
  cta,
  children,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-16 relative z-10`}
      >
        <div className="flex-1">
          {badge && <div className="badge badge-dot mb-6">{badge}</div>}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            {title}
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed mb-8">
            {description}
          </p>
          {cta && (
            <CTAButton href={cta.href} variant="primary" size="lg">
              {cta.label}
            </CTAButton>
          )}
        </div>

        {children && <div className="flex-1 w-full">{children}</div>}
      </div>
    </section>
  );
}
