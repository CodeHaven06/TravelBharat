"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Wallet,
  Backpack,
  Plane,
  TrainFront,
} from "lucide-react";

const tips = [
  {
    icon: CalendarDays,
    label: "Best Time",
    value: "Apr — Jun",
    detail: "Pleasant weather, green valleys and ideal sightseeing.",
  },
  {
    icon: Clock3,
    label: "Ideal Duration",
    value: "5 — 8 Days",
    detail: "Enough time for Srinagar, Gulmarg, Pahalgam and Sonamarg.",
  },
  {
    icon: Wallet,
    label: "Travel Budget",
    value: "₹2k — ₹6k",
    detail: "Approximate daily budget depending on your travel style.",
  },
  {
    icon: Backpack,
    label: "What to Carry",
    value: "Layers",
    detail: "Carry warm layers as temperatures can change quickly.",
  },
];

export default function KashmirTravelTips() {
  return (
    <section className="bg-[#eef6fa] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Plan Your Journey
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Everything you need
            <br />
            <span className="text-slate-400">
              before you go.
            </span>
          </h2>
        </motion.div>

        {/* Travel essentials */}
        <div className="mt-14 grid border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <motion.div
                key={tip.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group border-b border-slate-200 py-8 sm:border-r sm:px-6 lg:border-b-0 lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={21}
                    className="text-sky-600 transition-transform duration-300 group-hover:-translate-y-1"
                  />

                  <span className="text-xs font-semibold tracking-widest text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {tip.label}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  {tip.value}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {tip.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Getting there */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-y border-slate-200 py-10"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Getting There
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Start your Kashmir journey.
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                  <Plane size={19} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    By Air
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Fly to Srinagar and begin your journey from the valley.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                  <TrainFront size={19} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    By Train
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Reach Kashmir by rail and continue towards Srinagar.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}