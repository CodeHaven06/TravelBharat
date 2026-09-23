import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
}

export default function SectionLabel({
  children,
  light = false,
}: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-10 ${
          light ? "bg-white/50" : "bg-emerald-700"
        }`}
      />

      <span
        className={`
          text-xs font-semibold
          uppercase tracking-[0.25em]
          ${light ? "text-white/70" : "text-emerald-800"}
        `}
      >
        {children}
      </span>
    </div>
  );
}