"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Flame,
  Utensils,
  Coffee,
  ArrowUpRight,
} from "lucide-react";

const dishes = [
  {
    number: "01",
    name: "Kerala Sadya",
    category: "A traditional feast",
    description:
      "Sadya is one of Kerala's most celebrated food experiences. Traditionally served on a banana leaf, it brings together rice, vegetables, curries, pickles, chutneys and desserts in a meal that is as much about tradition and hospitality as it is about flavour.",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=85",
  },
  {
    number: "02",
    name: "Appam & Stew",
    category: "A Kerala classic",
    description:
      "Soft, delicate appams with crisp edges are often enjoyed with a fragrant vegetable or meat stew. Coconut milk gives the dish its characteristic richness while keeping the flavours gentle, comforting and distinctly Kerala.",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=85",
  },
  {
    number: "03",
    name: "Karimeen Pollichathu",
    category: "Backwater flavours",
    description:
      "Pearl spot fish, locally known as karimeen, is a much-loved Kerala delicacy. The fish is wrapped with aromatic spices and banana leaves before being cooked, creating a rich dish closely connected with Kerala's backwater and coastal food culture.",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=85",
  },
  {
    number: "04",
    name: "Kerala Tea & Coffee",
    category: "Slow moments",
    description:
      "A journey through Kerala is incomplete without taking time for a warm cup of tea or coffee. From plantations in the hills to small local cafés, these simple moments offer a chance to pause and enjoy the atmosphere around you.",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=85",
  },
];

export default function KeralaCuisine() {
  return (
    <section className="bg-[#f3eee5] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">
              Cuisine
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#352b20] sm:text-5xl lg:text-6xl">
              A taste of
              <br />
              <span className="text-[#a89b88]">
                Kerala.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl self-end">
            <p className="text-base leading-8 text-[#665b4e] sm:text-lg">
              Kerala's food is deeply connected to its landscape. Coconut,
              spices, rice, seafood and fresh local ingredients come together
              in dishes that reflect the state's coastal communities,
              plantations and generations of culinary traditions.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#85796b]">
              Don't just look for famous dishes. Give yourself time to eat
              slowly, try something local and discover the flavours that make
              each region a little different.
            </p>
          </div>
        </motion.div>

        {/* Cuisine Items */}
        <div className="mt-20 border-t border-[#d9d0c2]">
          {dishes.map((dish, index) => {
            const Icon = dish.icon;

            return (
              <motion.div
                key={dish.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group grid gap-6 border-b border-[#d9d0c2] py-9 lg:grid-cols-[65px_105px_0.8fr_1.2fr_35px] lg:items-center"
              >

                {/* Number */}
                <span className="text-xs font-semibold tracking-[0.25em] text-orange-700/60">
                  {dish.number}
                </span>

                {/* Small Image */}
                <div className="h-20 w-24 overflow-hidden rounded-2xl sm:h-24 sm:w-28">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Dish Name */}
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-700">
                    <Icon size={18} />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#352b20] sm:text-3xl">
                    {dish.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-orange-700">
                    {dish.category}
                  </p>
                </div>

                {/* Description */}
                <p className="max-w-xl text-sm leading-7 text-[#766b5d] sm:text-base">
                  {dish.description}
                </p>

                {/* Arrow */}
                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  className="hidden text-[#b4a895] transition-colors group-hover:text-orange-700 lg:block"
                >
                  <ArrowUpRight size={20} />
                </motion.div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col gap-5 border-t border-[#d9d0c2] pt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-700">
              Travel Tip
            </p>

            <p className="mt-3 max-w-2xl text-xl font-medium leading-8 text-[#4b4034] sm:text-2xl">
              Leave room in your itinerary for a long meal, a local café and
              something you've never tried before.
            </p>
          </div>

          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#a49684]">
            Taste • Pause • Discover
          </span>
        </motion.div>

      </div>
    </section>
  );
}