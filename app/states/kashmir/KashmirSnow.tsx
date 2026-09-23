"use client";

import { motion } from "framer-motion";

export default function KashmirSnow() {
  const snowflakes = Array.from({ length: 100 });

  return (
    <div className="pointer-events-none fixed inset-0 z-[50] overflow-hidden">
      {snowflakes.map((_, index) => {
        const left = (index * 37.7) % 100;
        const size = 2 + (index % 5);
        const duration = 9 + (index % 10);
        const delay = (index % 20) * 0.6;

        return (
          <motion.span
            key={index}
            className="absolute top-[-15px] rounded-full bg-white/80 shadow-[0_0_4px_rgba(255,255,255,0.8)]"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              x: [
                "0px",
                index % 2 === 0 ? "35px" : "-35px",
                index % 3 === 0 ? "-20px" : "20px",
                "0px",
              ],
              opacity: [0, 0.8, 0.9, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}