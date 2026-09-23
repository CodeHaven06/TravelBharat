"use client";

import { motion } from "framer-motion";
import {
  Waves,
  Sprout,
  Palmtree,
} from "lucide-react";

const highlights = [
  {
    icon: Waves,
    value: "Backwaters",
    label: "Slow journeys",
  },
  {
    icon: Sprout,
    value: "Misty Hills",
    label: "Green escapes",
  },
  {
    icon: Palmtree,
    value: "Tropical Coast",
    label: "Beach life",
  },
];

export default function KeralaAbout() {
  return (
    <section className="overflow-hidden bg-[#f4f8f4] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Discover Kerala
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#18352a] sm:text-5xl">
              A slower way
              <br />
              <span className="text-[#8aa096]">
                to discover India.
              </span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl"
          >
            <p className="text-lg leading-8 text-[#50665c]">
              Kerala invites you to slow down. Cruise through quiet
              backwaters, wake up among mist-covered hills and follow
              the coastline towards peaceful beaches.
            </p>

            <p className="mt-5 text-base leading-8 text-[#71847b]">
              Beyond its landscapes, Kerala is shaped by ancient
              traditions, warm hospitality, distinctive architecture
              and a deep connection with nature.
            </p>
          </motion.div>

        </div>

        {/* Highlights */}
        <div className="mt-20 border-y border-[#d7e2db]">

          <div className="grid md:grid-cols-3">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group border-b border-[#d7e2db] py-8 md:border-b-0 md:border-r md:px-8 md:py-10 first:md:pl-0 last:border-r-0 last:border-b-0"
                >
                  <div className="flex items-center justify-between">

                    <motion.div
                      whileHover={{
                        y: -4,
                        rotate: 5,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-emerald-700 shadow-sm"
                    >
                      <Icon size={19} />
                    </motion.div>

                    <span className="text-xs font-semibold tracking-[0.2em] text-[#b1beb8]">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-[#18352a] transition-colors duration-300 group-hover:text-emerald-700">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-[#819189]">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <p className="max-w-4xl text-2xl font-medium leading-relaxed text-[#304b3e] sm:text-3xl">
            Here, the journey isn't about rushing from one place to
            another.
            <span className="text-emerald-700">
              {" "}It's about enjoying the way there.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}