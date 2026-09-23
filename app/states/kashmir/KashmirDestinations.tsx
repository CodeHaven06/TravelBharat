"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    number: "01",
    name: "Gulmarg",
    subtitle: "The Meadow of Flowers",
    description:
      "A breathtaking mountain escape surrounded by green meadows, pine forests and snow-covered peaks. Gulmarg is especially magical in winter and is one of Kashmir's most loved adventure destinations.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    name: "Dal Lake",
    subtitle: "The Heart of Srinagar",
    description:
      "Watch the mountains reflect across calm waters as colourful shikaras drift through Dal Lake. A peaceful shikara ride is one of the experiences that defines a Kashmir journey.",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    name: "Sonamarg",
    subtitle: "The Golden Meadow",
    description:
      "Surrounded by dramatic Himalayan peaks and alpine landscapes, Sonamarg is a gateway to some of Kashmir's most spectacular mountain scenery and trekking routes.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    name: "Pahalgam",
    subtitle: "Valleys & Wilderness",
    description:
      "A serene valley destination where rivers, forests and mountains come together. Pahalgam is perfect for slow travel, scenic walks and escaping into nature.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function KashmirDestinations() {
  return (
    <section className="bg-slate-950 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Places to Experience
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Four places.
            <br />
            <span className="text-white/50">One unforgettable Kashmir.</span>
          </h2>
        </motion.div>

        {/* Destinations */}
        <div className="space-y-28">
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: 0.05,
              }}
              className="group"
            >
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* Image */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.9 }}
                  className="relative overflow-hidden rounded-[2rem]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={destination.image}
                      alt={destination.name}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Number */}
                  <span className="absolute bottom-6 left-6 text-sm font-medium tracking-[0.2em] text-white/80">
                    {destination.number}
                  </span>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                >
                  <span className="text-sm font-medium text-sky-400">
                    {destination.number}
                  </span>

                  <h3 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    {destination.name}
                  </h3>

                  <p className="mt-2 text-lg text-white/50">
                    {destination.subtitle}
                  </p>

                  <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
                    {destination.description}
                  </p>

                  <button className="group/btn mt-8 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm font-semibold transition hover:border-sky-400 hover:text-sky-400">
                    Explore {destination.name}

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
                    />
                  </button>
                </motion.div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}