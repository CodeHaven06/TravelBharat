import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-emerald-700 text-white hover:bg-emerald-800 shadow-lg shadow-emerald-900/10",
    secondary:
      "border border-slate-200 bg-white text-slate-800 hover:border-emerald-600 hover:text-emerald-700",
    light:
      "bg-white text-slate-900 hover:bg-emerald-50",
  };

  const classes = `
    inline-flex items-center justify-center
    rounded-full px-6 py-3
    text-sm font-semibold
    transition-all duration-300
    hover:-translate-y-0.5
    ${styles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}