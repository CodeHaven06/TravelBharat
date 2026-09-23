"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ExperienceItem {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
}

interface ExperienceSwitcherProps {
  items: ExperienceItem[];
  active: number;
  onChange: (index: number) => void;
  accentClassName?: string;
}

export default function ExperienceSwitcher({
  items,
  active,
  onChange,
  accentClassName = "text-emerald-700",
}: ExperienceSwitcherProps) {
  const current = items[active];
  const Icon = current.icon;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

      {/* Navigation */}
      <div className="border-t border-slate-200">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onChange(index)}
            className="group flex w-full items-center gap-5 border-b border-slate-200 py-6 text-left"
          >
            <span
              className={`text-xs font-semibold tracking-widest transition-colors ${
                active === index
                  ? accentClassName
                  : "text-slate-300"
              }`}
            >
              {item.id}
            </span>

            <span
              className={`flex-1 text-lg font-semibold transition-colors sm:text-xl ${
                active === index
                  ? "text-slate-900"
                  : "text-slate-400 group-hover:text-slate-900"
              }`}
            >
              {item.title}
            </span>

            <ArrowRight
              size={17}
              className={`transition-all duration-300 ${
                active === index
                  ? `translate-x-0 ${accentClassName} opacity-100`
                  : "-translate-x-2 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Active Content */}
      <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-white sm:p-10 lg:p-14">

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{
              opacity: 0,
              x: 30,
              rotateY: -8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            exit={{
              opacity: 0,
              x: -30,
              rotateY: 8,
            }}
            transition={{ duration: 0.45 }}
            className="relative z-10 flex min-h-[330px] flex-col justify-between"
          >
            <div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900"
              >
                <Icon size={23} />
              </motion.div>

              <p className={`mt-8 text-xs font-semibold uppercase tracking-[0.2em] ${accentClassName}`}>
                {current.short}
              </p>

              <h3 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                {current.title}
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                {current.description}
              </p>

            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                Experience
              </span>

              <span className={`text-sm font-medium ${accentClassName}`}>
                {current.id} / {String(items.length).padStart(2, "0")}
              </span>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}