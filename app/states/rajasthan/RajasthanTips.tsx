"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Sun,
  WalletCards,
} from "lucide-react";

const tips = [
  {
    icon: CalendarDays,
    title: "Best Time",
    value: "Oct — Mar",
    text: "Pleasant weather",
  },
  {
    icon: Clock3,
    title: "Ideal Duration",
    value: "7 — 10 Days",
    text: "For a complete trip",
  },
  {
    icon: Sun,
    title: "What to Carry",
    value: "Light Layers",
    text: "Sun protection too",
  },
  {
    icon: WalletCards,
    title: "Travel Style",
    value: "₹1.5k — ₹5k",
    text: "Approx. per day",
  },
];

export default function RajasthanTips() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
              Before You Go
            </p>

            <h2 className="mt-3 text-3xl font-bold text-neutral-900 sm:text-4xl">
              Plan it right.
              <span className="text-orange-600"> Enjoy it more.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-neutral-500 sm:text-right">
            A few essentials to help you make the most of your Rajasthan trip.
          </p>
        </motion.div>

        {/* Essentials */}
        <div className="grid overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white sm:grid-cols-2 lg:grid-cols-4">

          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="group relative p-7 transition duration-300 hover:bg-orange-50/60"
              >
                {/* Divider */}
                {index !== 0 && (
                  <span className="absolute left-0 top-7 hidden h-[calc(100%-56px)] w-px bg-neutral-200 lg:block" />
                )}

                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition duration-300 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-medium text-neutral-300">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-wider text-neutral-400">
                  {tip.title}
                </p>

                <h3 className="mt-2 text-xl font-bold text-neutral-900">
                  {tip.value}
                </h3>

                <p className="mt-1 text-sm text-neutral-500">
                  {tip.text}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}