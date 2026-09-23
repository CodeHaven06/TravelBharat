"use client";

import {
  Waves,
  Sun,
  Bike,
  Music2,
} from "lucide-react";

import FadeIn from "@/app/components/ui/FadeIn";
import RevealImage from "@/app/components/ui/RevealImage";

const experiences = [
  {
    number: "01",
    title: "Beach Days",
    text: "Sun, sand and endless horizons.",
    icon: Waves,
  },
  {
    number: "02",
    title: "Chase Sunsets",
    text: "Golden skies and unforgettable views.",
    icon: Sun,
  },
  {
    number: "03",
    title: "Road Trips",
    text: "Explore, wander and stop anywhere.",
    icon: Bike,
  },
  {
    number: "04",
    title: "After Dark",
    text: "Beach shacks, live music and starry nights.",
    icon: Music2,
  },
];

export default function GoaExperiences() {
  return (
    <section className="bg-[#fffaf3] pb-24 pt-8 sm:pb-32 sm:pt-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* Image */}
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <RevealImage
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=90"
                alt="Goa coastal experience"
                className="h-[460px] w-full sm:h-[560px]"
                imageClassName="rounded-[2.5rem]"
              />

              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Sun • Sea • Freedom
                </p>

                <p className="mt-2 text-2xl font-semibold">
                  Take the day slowly.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                Coastal Experiences
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
                Don't just visit Goa.
                <br />
                <span className="text-orange-500">Feel it.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Slow mornings, salty afternoons and golden evenings —
                experience Goa beyond the usual itinerary.
              </p>
            </FadeIn>

            <div className="mt-8">
              {experiences.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeIn key={item.number} delay={index * 0.08}>
                    <div className="group flex gap-4 border-b border-slate-200 py-5 first:border-t">

                      <span className="pt-1 text-xs font-semibold text-orange-500">
                        {item.number}
                      </span>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                        <Icon size={18} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {item.text}
                        </p>
                      </div>

                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}