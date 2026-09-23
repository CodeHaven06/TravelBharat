"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export default function KeralaCTA() {
  return (
    <section className="bg-[#10291f] px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Top Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px origin-left bg-white/15"
        />

        <div className="grid gap-12 py-14 lg:grid-cols-[1fr_auto] lg:items-end">

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-emerald-300">
              <Compass size={18} />

              <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                Your Kerala Story
              </span>
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Maybe it's time to
              <br />
              <span className="text-emerald-300">
                slow down.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Wander through quiet backwaters, wake up among misty hills,
              discover flavours you have never tried and let the coast guide
              your evenings. Kerala is waiting to be experienced at your own
              pace.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4 lg:min-w-[220px]"
          >
            <Link
              href="/destinations"
              className="group inline-flex items-center justify-between border-b border-emerald-300/40 pb-4 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300"
            >
              Explore Destinations

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/states"
              className="group inline-flex items-center justify-between border-b border-white/15 pb-4 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
            >
              Explore More States

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/30 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>TravelBharat</span>

          <span>Kerala • India</span>
        </motion.div>

      </div>
    </section>
  );
}