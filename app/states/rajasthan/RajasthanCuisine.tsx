"use client";

import { ArrowUpRight, Utensils } from "lucide-react";
import FadeIn from "@/app/components/ui/FadeIn";
import RevealImage from "@/app/components/ui/RevealImage";

const dishes = [
  {
    number: "01",
    name: "Dal Baati Churma",
    detail: "Traditional • Rajasthani • Iconic",
    description:
      "Rajasthan's signature combination of baked baati, flavourful dal and sweet churma — a must-try experience.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oDYZgKz5P59JT4iX8VQ-HOHbE95332Ci42Mj4Gy9HA&s=10",
  },
  {
    number: "02",
    name: "Bajra Roti with Laal Maas",
    detail: "Spicy • Rich • Royal",
    description:
      "A bold traditional curry known for its deep flavours, aromatic spices and fiery character.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75GpmrwgsUBr09DHvPJtnH33iIoWVQUxwi-XSOH9Q9A&s=10",
  },
  {
    number: "03",
    name: "Ghevar",
    detail: "Sweet • Festive • Traditional",
    description:
      "A delicate Rajasthani sweet with a distinctive honeycomb texture, especially popular during festivals.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOh4PPGorbgrlr_IpfyAOSRe_aBRzNNg8ikpYnb0MFPQ&s=10",
  },
];

export default function RajasthanCuisine() {
  return (
    <section className="bg-[#f7eee2] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <FadeIn>
          <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">
                Flavours of Rajasthan
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
                Come for the palaces.
                <br />
                <span className="text-orange-600">
                  Stay for the flavours.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-500 lg:justify-self-end">
              Rajasthan's cuisine is shaped by its royal kitchens, desert
              landscape and generations of traditional recipes.
            </p>
          </div>
        </FadeIn>

        {/* Dishes */}
        <div className="mt-14 divide-y divide-orange-200 border-y border-orange-200">
          {dishes.map((dish, index) => (
            <FadeIn
              key={dish.number}
              delay={index * 0.1}>
            
              <div className="group grid gap-6 py-7 sm:grid-cols-[70px_180px_1fr_auto] sm:items-center">

                <span className="text-xs font-semibold tracking-[0.2em] text-orange-500">
                  {dish.number}
                </span>

                <div className="h-28 overflow-hidden rounded-2xl">
                  <RevealImage
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover"
                    imageClassName="rounded-5xl "/>
                  
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                    {dish.detail}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-slate-800 sm:text-3xl">
                    {dish.name}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
                    {dish.description}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 text-orange-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-500 group-hover:text-white">
                  <ArrowUpRight size={18} />
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
            <Utensils
              size={18}
              className="text-orange-600"/>
            

            <span>
              Rich spices, traditional recipes and royal flavours — a true
              taste of Rajasthan.
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}