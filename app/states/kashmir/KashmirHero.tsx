"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, ArrowUpRight } from "lucide-react";

export default function KashmirHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-slate-950/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/10" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-end">

        <div className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* Left */}
            <div className="max-w-4xl">

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6 flex items-center gap-2 text-sm font-medium text-white/70"
              >
                <MapPin size={15} className="text-sky-300" />
                Jammu & Kashmir, India
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
                Kashmir
              </motion.h1>

              {/* Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="mt-8 h-[2px] bg-sky-300"
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
                Where snow-covered mountains meet quiet lakes,
                green valleys and timeless traditions.
                Discover the landscapes, flavours and stories
                that make Kashmir unforgettable.
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
                {["Mountains", "Lakes", "Snow", "Culture"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

            </div>

            {/* Right Explore Button */}
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
                href="#kashmir-destinations"
                className="group flex items-center gap-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                <span>Explore Kashmir</span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-sky-300 group-hover:bg-sky-300 group-hover:text-slate-900">
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