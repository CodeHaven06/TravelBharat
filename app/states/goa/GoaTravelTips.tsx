"use client";

import { Plane, CalendarDays, Wallet, Clock3 } from "lucide-react";
import FadeIn from "@/app/components/ui/FadeIn";

const tips = [
  {
    icon: CalendarDays,
    label: "Best Time",
    value: "Nov — Feb",
  },
  {
    icon: Clock3,
    label: "Ideal Duration",
    value: "4 — 7 Days",
  },
  {
    icon: Wallet,
    label: "Daily Budget",
    value: "₹2k — ₹6k",
  },
  {
    icon: Plane,
    label: "Getting There",
    value: "Flight • Train",
  },
];

export default function GoaTravelTips() {
  return (
    <section className="bg-[#dff1ed] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Plan Your Goa Trip
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
                A little planning.
                <br />
                <span className="text-emerald-700">
                  A lot more Goa.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-500 lg:justify-self-end">
              Keep the essentials sorted before you go, then leave enough
              room for the spontaneous plans that make Goa special.
            </p>
          </div>
        </FadeIn>

        {/* Quick Facts */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <FadeIn key={tip.label} delay={index * 0.08}>
                <div className="h-full rounded-[1.75rem] bg-white/70 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <Icon size={19} />
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {tip.label}
                  </p>

                  <p className="mt-2 text-xl font-semibold text-slate-800">
                    {tip.value}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Travel Advice */}
        <FadeIn delay={0.15}>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

            <div className="rounded-[2rem] bg-[#17333a] p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                Getting Around
              </p>

              <h3 className="mt-4 text-3xl font-semibold">
                Keep it flexible.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                Scooters are great for exploring beaches and nearby towns,
                while taxis and local transport work well when you want to
                keep things easy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Scooter", "Taxi", "Bus", "Rental Car"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#f6c7a8] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
                One little tip
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-slate-800">
                Don't over-plan Goa.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Keep a few must-see places on your list, but leave some
                afternoons completely free. That's often when the best Goa
                memories happen.
              </p>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}