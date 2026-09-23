"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-[#fffaf3] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
          Your Journey Starts Here
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
          Ready to explore
          <span className="text-orange-500"> India?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
          Choose a state, discover a destination and start planning your next
          unforgettable journey.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/states"
            className="group inline-flex items-center gap-2 rounded-full bg-[#17333a] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-cyan-700"
          >
            Explore States

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/categories"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-500"
          >
            Browse Categories →
          </Link>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-orange-100 pt-6 text-xs uppercase tracking-[0.2em] text-slate-400 sm:flex-row">
          <span>TravelBharat</span>

          <span className="flex items-center gap-2">
            <MapPin size={13} />
            Incredible India
          </span>
        </div>

      </div>
    </section>
  );
}