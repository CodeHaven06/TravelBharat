"use client";

import {
  ShieldCheck,
  Search,
  Heart,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Authentic Information",
    description:
      "Useful travel information presented in a simple and easy-to-understand way.",
  },
  {
    icon: Search,
    title: "Easy to Explore",
    description:
      "Find states, destinations and travel categories without getting lost in endless information.",
  },
  {
    icon: Heart,
    title: "Curated Destinations",
    description:
      "Discover places selected to help you find the right experience for your journey.",
  },
  {
    icon: Sparkles,
    title: "Travel Inspiration",
    description:
      "Get inspired to explore new places, try new experiences and create memorable journeys.",
  },
];

export default function WhyTravelBharat() {
  return (
    <section className="bg-[#17333a] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Why TravelBharat
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Travel planning
              <br />
              made <span className="text-orange-300">simpler.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              We believe discovering a place should feel exciting, not
              overwhelming. That's why TravelBharat keeps exploration simple,
              visual and easy to navigate.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex gap-5 py-7"
                >
                  <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-orange-300">
                    0{index + 1}
                  </span>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-300 transition group-hover:bg-orange-300 group-hover:text-[#17333a]">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}