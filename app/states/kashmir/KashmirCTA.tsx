"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function KashmirCTA() {
  return (
    <section className="bg-[#0f2537] px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl sm:px-10 lg:px-16">

        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="origin-left border-t border-slate-200"
        />

        <div className="grid gap-10 py-14 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:py-20">

          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
              Your Kashmir Story
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Mountains, valleys, lakes and memories waiting to be discovered.
            </p>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight text-slate-700 sm:text-5xl lg:text-6xl">
              Let Kashmir become
              <br />
              <span className="text-slate-400">
                your next story.
              </span>
            </h2>

            <div className="mt-9 flex flex-wrap items-center gap-6">

              <Link
                href="/states"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                Explore more of India

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>

              <Link
                href="/destinations"
                className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-sky-400"
              >
                Browse destinations
              </Link>

            </div>
          </motion.div>

        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="origin-left border-t border-slate-200"
        />

        {/* Footer-style text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col justify-between gap-3 pt-6 text-xs uppercase tracking-[0.15em] text-slate-300 sm:flex-row"
        >
          <span>TravelBharat</span>
          <span>Discover • Explore • Remember</span>
        </motion.div>

      </div>
    </section>
  );
}