"use client";

import { motion } from "framer-motion";
import {
  ShipWheel,
  MountainSnow,
  TreePine,
  Coffee,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "Shikara Ride",
    description:
      "Drift quietly across Dal Lake while the Himalayan landscape reflects on the water around you.",
    icon: ShipWheel,
  },
  {
    number: "02",
    title: "Mountain Adventures",
    description:
      "Explore snowy slopes, alpine trails and breathtaking mountain landscapes across Kashmir.",
    icon: MountainSnow,
  },
  {
    number: "03",
    title: "Valley Escapes",
    description:
      "Slow down among pine forests, green meadows and peaceful valleys far from the rush of city life.",
    icon: TreePine,
  },
  {
    number: "04",
    title: "Kashmiri Hospitality",
    description:
      "Experience warm local traditions through authentic food, beautiful craftsmanship and everyday Kashmiri life.",
    icon: Coffee,
  },
];

export default function KashmirExperiences() {
  return (
    <section className="bg-[#f7fafc] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Experience Kashmir
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Come for the views.
            <br />
            <span className="text-slate-400">
              Stay for the experience.
            </span>
          </h2>
        </motion.div>

        {/* Experiences */}
        <div className="border-t border-slate-200">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.div
                key={experience.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group border-b border-slate-200"
              >
                <div className="flex items-center gap-5 py-7 sm:gap-8 sm:py-9">

                  {/* Number + Icon */}
                  <div className="flex w-[75px] shrink-0 items-center gap-3 sm:w-[90px]">
                    <span className="text-xs font-semibold tracking-widest text-slate-300">
                      {experience.number}
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-50"
                    >
                      <Icon size={19} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600 sm:text-2xl lg:text-3xl">
                      {experience.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                      {experience.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5 }}
                    className="hidden text-xl text-slate-300 transition-colors group-hover:text-sky-500 sm:block"
                  >
                    →
                  </motion.div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}