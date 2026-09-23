import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border border-white/20
        bg-white/10
        shadow-xl
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}