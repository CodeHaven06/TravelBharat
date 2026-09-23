"use client";

import { Utensils, ArrowUpRight } from "lucide-react";
import FadeIn from "@/app/components/ui/FadeIn";
import RevealImage from "@/app/components/ui/RevealImage";

const dishes = [
  {
    number: "01",
    name: "Goan Fish Curry",
    detail: "Coconut • Spice • Kokum",
    description:
      "A comforting coastal curry where coconut, kokum and local spices come together beautifully.",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "02",
    name: "Prawn Balchão",
    detail: "Tangy • Spicy • Bold",
    description:
      "A fiery Goan favourite with prawns cooked in a rich, tangy masala.",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "03",
    name: "Bebinca",
    detail: "Layered • Sweet • Traditional",
    description:
      "A delicate layered dessert and one of Goa's most loved traditional sweet treats.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=90",
  },
];

export default function GoaCuisine() {
  return (
    <section className="bg-[#fff8ef] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <FadeIn>
          <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Goan Flavours
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
                Come hungry.
                <br />
                <span className="text-orange-500">Leave curious.</span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-500 lg:justify-self-end">
              Goa's food is a delicious mix of coastal ingredients, bold
              spices, Portuguese influence and generations of local recipes.
            </p>
          </div>
        </FadeIn>

        {/* Food List */}
        <div className="mt-14 divide-y divide-orange-200 border-y border-orange-200">

          {dishes.map((dish, index) => (
            <FadeIn key={dish.number} delay={index * 0.1}>
              <div className="group grid gap-6 py-7 sm:grid-cols-[70px_180px_1fr_auto] sm:items-center">

                {/* Number */}
                <span className="text-xs font-semibold tracking-[0.2em] text-orange-400">
                  {dish.number}
                </span>

                {/* Image */}
                <div className="h-28 overflow-hidden rounded-2xl">
                  <RevealImage
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full"
                    imageClassName="rounded-2xl"
                  />
                </div>

                {/* Content */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                    {dish.detail}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-slate-800 sm:text-3xl">
                    {dish.name}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
                    {dish.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 text-orange-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-500 group-hover:text-white">
                  <ArrowUpRight size={18} />
                </div>

              </div>
            </FadeIn>
          ))}

        </div>

        {/* Bottom */}
        <FadeIn delay={0.2}>
          <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
            <Utensils size={18} className="text-orange-500" />
            <span>
              Seafood, spices, sweets and stories — that's a little taste of
              Goa.
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}