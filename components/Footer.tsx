import Link from "next/link";
import Image from "next/image";
import CurrentYear from "@/components/CurrentYear";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-bg relative">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="relative w-48 h-12 mb-5">
              <Image
                src="/logo.png"
                alt="Evonuera"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-brand-muted text-base leading-relaxed max-w-xs">
              Evonuera designs AI systems, builds intelligent agents, and trains
              professionals to create real AI solutions.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">Company</h3>
            <ul className="space-y-1">
              {[
                { label: "Services", href: "/services" },
                { label: "Learning", href: "/learning" },
                { label: "Products", href: "/products" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-white text-base transition-colors duration-200 inline-block py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">Programs</h3>
            <ul className="space-y-1">
              {[
                { label: "AI Architect Program", href: "/ai-architect" },
                { label: "Masterclass", href: "/masterclass" },
                { label: "AI Fitness App", href: "/products/fitness-app" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-white text-base transition-colors duration-200 inline-block py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-dim text-sm sm:text-base text-center sm:text-left">
            © <CurrentYear fallback={new Date().getFullYear()} /> Evonuera. All rights reserved.
          </p>
          <p className="text-brand-dim text-sm sm:text-base text-center sm:text-right">
            Built by{" "}
            <span className="text-white font-medium">Pradeep Subramanian</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
