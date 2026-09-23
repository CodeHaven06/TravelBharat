"use client";

import {
  Map,
  MapPin,
  Compass,
  Utensils,
} from "lucide-react";

const exploreItems = [
  {
    icon: Map,
    title: "States & UTs",
    description:
      "Explore India's diverse states and union territories, each with its own culture, history and landscapes.",
  },
  {
    icon: MapPin,
    title: "Beautiful Destinations",
    description:
      "Discover famous landmarks, hidden gems, peaceful escapes and unforgettable places across India.",
  },
  {
    icon: Utensils,
    title: "Culture & Cuisine",
    description:
      "Experience India's traditions, festivals, local lifestyles and flavours from every region.",
  },
  {
    icon: Compass,
    title: "Travel Experiences",
    description:
      "Find experiences that match your travel style — from mountains and beaches to heritage and adventure.",
  },
];

export default function WhatYouCanExplore() {
  return (
    <section className="bg-[#dff1ed] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            What You Can Explore
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Everything you need
            <br />
            <span className="text-emerald-700">
              to discover India.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
            From choosing where to go to discovering what to experience,
            TravelBharat brings your India travel inspiration together in one
            place.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {exploreItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[2rem] bg-white/75 p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  0{index + 1}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}