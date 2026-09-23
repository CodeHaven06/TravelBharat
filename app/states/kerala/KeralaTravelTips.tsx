"use client";

import { motion } from "framer-motion";
import {CalendarDays, Clock3, Wallet, Shirt, Plane, TrainFront, Map, Lightbulb,} from "lucide-react";

const travelTips = [
  {
    icon: CalendarDays,
    label: "Best Time",
    value: "Oct — Mar",
    description:
      "Comfortable weather for exploring Kerala, sightseeing and enjoying the backwaters.",
  },
  {
    icon: Clock3,
    label: "Ideal Duration",
    value: "7 — 10 Days",
    description:
      "Enough time to combine backwaters, hill stations, beaches and cultural experiences.",
  },
  {
    icon: Wallet,
    label: "Travel Budget",
    value: "₹2k — ₹6k / day",
    description:
      "A flexible daily range depending on your stay, transport, food and experiences.",
  },
  {
    icon: Shirt,
    label: "What to Carry",
    value: "Light Layers",
    description:
      "Carry comfortable clothes, light rain protection and something warmer for hill stations.",
  },
];

const gettingThere = [
  {
    icon: Plane,
    title: "By Air",
    description:
      "Kerala has major airports at Kochi, Thiruvananthapuram and Kozhikode, making air travel convenient for different parts of the state.",
  },
  {
    icon: TrainFront,
    title: "By Train",
    description:
      "The railway network connects Kerala with major Indian cities and is a comfortable option for longer journeys.",
  },
  {
    icon: Map,
    title: "Getting Around",
    description:
      "Use a combination of trains, buses, taxis and local transport depending on whether you're exploring cities, hills or coastal areas.",
  },
];

export default function KeralaTravelTips() {
  return (
    <section className="bg-[#eef5f0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Travel Guide
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#18352a] sm:text-5xl lg:text-6xl">
            Plan less.
            <br />
            <span className="text-[#8ca097]">
              Experience more.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A little planning can make your Kerala journey much smoother.
            Keep these essentials in mind while deciding when to visit,
            how long to stay and how to move around.
          </p>
        </motion.div>

        {/* Quick Facts */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {travelTips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <motion.div
                key={tip.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="bg-white p-7 sm:p-8">
              
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Icon size={20} />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {tip.label}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#18352a]">
                  {tip.value}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {tip.description}
                </p>
              </motion.div>
            );})}
          
        </div>

        {/* Getting There */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}>
          
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#18352a] text-emerald-200">
              <Map size={21} />
            </div>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-[#18352a] sm:text-4xl">
              Getting around
              <br />
              <span className="text-slate-400">Kerala</span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Kerala is well connected, but your choice of transport can
              change the experience. Plan differently for cities, mountains,
              beaches and backwater destinations.
            </p>
          </motion.div>

          <div className="border-t border-slate-300">
            {gettingThere.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  className="grid gap-5 border-b border-slate-300 py-7 sm:grid-cols-[55px_180px_1fr] sm:items-start">
                
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-700">
                    <Icon size={18} />
                  </div>

                  <h4 className="text-lg font-semibold text-[#18352a]">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Small Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-16 flex gap-5 rounded-3xl bg-[#18352a] p-7 text-white sm:p-9"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-emerald-300">
            <Lightbulb size={20} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Travel Tip
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
              Kerala is best experienced at a relaxed pace. Instead of
              trying to cover every destination, choose a few regions and
              give yourself enough time to enjoy the journey between them.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}