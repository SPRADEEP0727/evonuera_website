"use client";

import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export default function CTAButton({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-bg btn-premium";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 text-white focus:ring-brand-primary",
    secondary:
      "bg-gradient-to-r from-brand-secondary to-brand-primary hover:opacity-90 text-white font-bold focus:ring-brand-secondary",
    outline:
      "border border-white/20 text-white hover:bg-white/5 hover:border-brand-primary/50 focus:ring-brand-primary",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
