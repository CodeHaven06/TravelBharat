"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Leaf } from "lucide-react";

const dishes = [
  {
    number: "01",
    name: "Rogan Josh",
    category: "Signature Dish",
    description:
      "Aromatic Kashmiri curry known for its rich colour, warm spices and deep flavour.",
  },
  {
    number: "02",
    name: "Kahwa",
    category: "Traditional Tea",
    description:
      "A fragrant green tea infused with saffron, cardamom, cinnamon and almonds.",
  },
  {
    number: "03",
    name: "Gushtaba",
    category: "Wazwan Classic",
    description:
      "Tender meatballs cooked in a creamy yoghurt-based gravy with delicate spices.",
  },
  {
    number: "04",
    name: "Dum Aloo",
    category: "Vegetarian",
    description:
      "Baby potatoes slow-cooked in a rich Kashmiri gravy with traditional spices.",
  },
];

export default function KashmirCuisine() {
  return (
    <section className="overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              Taste Kashmir
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              A journey through
              <br />
              <span className="text-slate-500">Kashmiri flavours.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end"
          >
            From elaborate Wazwan feasts to a warm cup of Kahwa,
            Kashmiri cuisine reflects the region's traditions,
            hospitality and love for bold, comforting flavours.
          </motion.p>

        </div>

        {/* Small feature line */}
        <div className="mt-12 flex flex-wrap gap-6 border-y border-white/10 py-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          <span className="flex items-center gap-2">
            <Flame size={15} className="text-sky-400" />
            Rich Flavours
          </span>

          <span className="flex items-center gap-2">
            <Leaf size={15} className="text-sky-400" />
            Traditional Recipes
          </span>
        </div>

        {/* Dishes */}
        <div className="mt-6">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group border-b border-white/10"
            >
              <div className="flex items-center gap-5 py-8 sm:gap-8 sm:py-10">

                {/* Number */}
                <span className="w-8 shrink-0 text-xs font-semibold tracking-widest text-slate-600">
                  {dish.number}
                </span>

                {/* Dish */}
                <div className="min-w-0 flex-1">

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                    <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-sky-400 sm:text-3xl lg:text-4xl">
                      {dish.name}
                    </h3>

                    <span className="text-xs uppercase tracking-[0.18em] text-slate-600">
                      {dish.category}
                    </span>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    className="mt-3 max-w-2xl text-sm leading-7 text-slate-400"
                  >
                    {dish.description}
                  </motion.p>

                </div>

                {/* Arrow */}
                <motion.div
                  whileHover={{
                    rotate: 45,
                    scale: 1.1,
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-colors duration-300 group-hover:border-sky-400 group-hover:text-sky-400"
                >
                  <ArrowUpRight size={18} />
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 max-w-2xl"
        >
          <p className="text-lg leading-8 text-slate-400">
            In Kashmir, food is not simply served.
            <span className="text-white">
              {" "}It is shared, celebrated and remembered.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}