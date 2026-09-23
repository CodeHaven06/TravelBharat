"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function KeralaHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#10251d] text-white">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#10251d]/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#10251d]/85 via-[#10251d]/35 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#10251d] via-transparent to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end">

        <div className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* Main */}
            <div className="max-w-4xl">

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6 flex items-center gap-2 text-sm font-medium text-white/70"
              >
                <MapPin size={15} className="text-emerald-300" />
                Kerala, India
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className="text-7xl font-semibold tracking-[-0.05em] sm:text-8xl lg:text-[9rem] lg:leading-[0.85]"
              >
                Kerala
              </motion.h1>

              {/* Accent */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="mt-8 h-[2px] bg-emerald-300"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                }}
                className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
              >
                Where peaceful backwaters, misty hills, tropical
                forests and golden beaches come together.
                Discover Kerala through its landscapes, traditions
                and unforgettable experiences.
              </motion.p>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {["Backwaters", "Hills", "Beaches", "Culture"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

            </div>

            {/* Explore */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.9,
              }}
              className="lg:pb-2"
            >
              <a
                href="#kerala-destinations"
                className="group flex items-center gap-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                <span>Explore Kerala</span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-300 group-hover:bg-emerald-300 group-hover:text-[#10251d]">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </motion.div>

          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
            className="mt-14 flex items-center justify-between border-t border-white/15 pt-5 text-xs uppercase tracking-[0.2em] text-white/40"
          >
            <span>TravelBharat</span>

            <div className="flex items-center gap-2">
              Scroll to explore
              <ArrowDown size={14} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}