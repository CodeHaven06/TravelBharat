"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Crown,
  Sparkles,
  Utensils,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "History",
    description:
      "Walk through centuries of royal history, magnificent forts and grand palaces.",
    icon: Crown,
  },
  {
    number: "02",
    title: "Adventure",
    description:
      "Ride through the Thar Desert, explore hidden places and chase unforgettable sunsets.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Culture",
    description:
      "Experience folk music, colourful festivals, traditional crafts and local traditions.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Flavours",
    description:
      "Taste authentic Rajasthani cuisine, from dal baati churma to delicious local sweets.",
    icon: Utensils,
  },
];

export default function RajasthanReasons() {
  return (
    <section className="overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Discover Rajasthan
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
            What brings you
            <span className="text-orange-600"> to Rajasthan?</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-500">
            Every traveller comes looking for something different.
            Rajasthan has a story waiting for you.
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative min-h-[330px] overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >

                {/* Background Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-300 transition-colors duration-300 group-hover:text-orange-400">
                    {reason.number}
                  </span>

                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white"
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative mt-20">

                  <h3 className="text-2xl font-bold text-neutral-900">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    {reason.description}
                  </p>

                </div>

                {/* Bottom Action */}
                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between">

                  <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 transition-colors group-hover:text-orange-600">
                    Explore
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}