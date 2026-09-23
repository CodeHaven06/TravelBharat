import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ArrowButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function ArrowButton({
  children,
  href,
  className = "",
}: ArrowButtonProps) {
  const content = (
    <>
      <span>{children}</span>

      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current transition-all duration-300 group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </span>
    </>
  );

  const classes = `
    group inline-flex items-center gap-3
    text-sm font-semibold
    transition-colors duration-300
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {content}
    </button>
  );
}


// import { ArrowUpRight } from "lucide-react";

// interface ArrowButtonProps {
//   children: React.ReactNode;
//   className?: string;
// }

// export default function ArrowButton({
//   children,
//   className = "",
// }: ArrowButtonProps) {
//   return (
//     <button
//       className={`group flex items-center gap-3 text-sm font-medium ${className}`}
//     >
//       {children}

//       <span className="flex h-9 w-9 items-center justify-center rounded-full border transition duration-300 group-hover:rotate-45">
//         <ArrowUpRight size={16} />
//       </span>
//     </button>
//   );
// }