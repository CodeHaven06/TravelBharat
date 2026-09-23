"use client";

import { motion } from "framer-motion";
import { Mountain, Waves, Snowflake } from "lucide-react";

const highlights = [
  {
    icon: Mountain,
    value: "8,000+ ft",
    label: "Mountain escapes",
  },
  {
    icon: Waves,
    value: "Dal Lake",
    label: "Iconic waterways",
  },
  {
    icon: Snowflake,
    value: "Winter Magic",
    label: "Snow-covered valleys",
  },
];

export default function KashmirAbout() {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] py-24 sm:py-28">
      
      {/* Decorative circle */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Discover Kashmir
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              A place where
              <span className="text-sky-600"> mountains breathe </span>
              and lakes mirror the sky.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Kashmir is a landscape of snow-covered peaks, quiet valleys,
              alpine meadows and shimmering lakes. Beyond its scenery, the
              region is known for its rich craftsmanship, warm hospitality
              and traditions passed through generations.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-500">
              From peaceful mornings on Dal Lake to adventures in the
              mountains, every journey here feels connected to nature.
            </p>
          </motion.div>

        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 h-px origin-left bg-slate-200"
        />

        {/* Highlights */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -5 }}
                className="group flex items-center gap-5 rounded-2xl border border-slate-200/80 bg-white/70 px-5 py-5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}