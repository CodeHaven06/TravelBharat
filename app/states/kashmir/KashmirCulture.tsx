"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Gem,
  Flower2,
  Utensils,
} from "lucide-react";

const traditions = [
  {
    icon: Palette,
    title: "Pashmina",
    text: "Known for its exceptionally soft and warm wool, crafted into elegant shawls and garments.",
  },
  {
    icon: Flower2,
    title: "Kashmiri Embroidery",
    text: "Intricate floral patterns bring traditional Kashmiri craftsmanship to life.",
  },
  {
    icon: Gem,
    title: "Paper Mâché",
    text: "Delicate handcrafted objects decorated with colourful traditional motifs.",
  },
  {
    icon: Utensils,
    title: "Wazwan",
    text: "A celebrated culinary tradition built around rich flavours, hospitality and communal dining.",
  },
];

export default function KashmirCulture() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Culture & Craft
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Kashmir is more
              <br />
              <span className="text-slate-400">
                than its landscapes.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl text-base leading-8 text-slate-500 lg:justify-self-end"
          >
            Its identity lives in centuries-old craftsmanship, warm
            hospitality, traditional food and artistic details passed
            through generations. Every experience carries a story of
            Kashmiri life.
          </motion.p>

        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 origin-left border-t border-slate-200"
        />

        {/* Traditions */}
        <div className="mt-4">
          {traditions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group border-b border-slate-200"
              >
                <div className="grid gap-5 py-8 md:grid-cols-[80px_70px_1fr_2fr] md:items-center md:py-10">

                  {/* Number */}
                  <span className="text-xs font-semibold tracking-[0.2em] text-slate-300">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sky-600 transition-colors duration-300 group-hover:border-sky-200 group-hover:bg-sky-50"
                  >
                    <Icon size={20} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600 sm:text-3xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                    {item.text}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 max-w-3xl"
        >
          <p className="text-2xl font-medium leading-relaxed text-slate-800 sm:text-3xl">
            “The beauty of Kashmir isn't only in what you see,
            <span className="text-sky-600">
              {" "}but in what you experience.
            </span>
            ”
          </p>
        </motion.div>

      </div>
    </section>
  );
}