"use client";

import Link from "next/link";
import {
  Heart,
  Users,
  Backpack,
  Clock3,
  ArrowRight,
} from "lucide-react";

const moods = [
  {
    title: "Romantic Getaways",
    description:
      "Slow mornings, beautiful sunsets and memorable moments for two.",
    icon: Heart,
    href: "/categories/romantic",
  },
  {
    title: "Family Trips",
    description:
      "Comfortable destinations and experiences everyone can enjoy together.",
    icon: Users,
    href: "/categories/family",
  },
  {
    title: "Solo Adventures",
    description:
      "Take your own route, meet new people and discover places at your pace.",
    icon: Backpack,
    href: "/categories/solo",
  },
  {
    title: "Weekend Escapes",
    description:
      "Short trips, nearby getaways and refreshing breaks from everyday life.",
    icon: Clock3,
    href: "/categories/weekend",
  },
];

export default function TravelMoods() {
  return (
    <section className="bg-[#17333a] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Travel Moods
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Travel for
              <br />
              <span className="text-orange-300">how you feel.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              Sometimes you know the feeling you want before you know the
              destination. Start there.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {moods.map((mood, index) => {
              const Icon = mood.icon;

              return (
                <Link
                  href={mood.href}
                  key={mood.title}
                  className="group flex items-center gap-5 py-6"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-orange-300">
                    0{index + 1}
                  </span>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-300 transition group-hover:bg-orange-300 group-hover:text-[#17333a]">
                    <Icon size={19} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold sm:text-xl">
                      {mood.title}
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-6 text-white/45">
                      {mood.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-orange-300"
                  />
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}