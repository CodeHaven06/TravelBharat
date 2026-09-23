import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full px-4 py-2
        text-xs font-semibold
        tracking-wide
        ${className}
      `}
    >
      {children}
    </span>
  );
}