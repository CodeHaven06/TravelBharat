"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function CategoriesCTA() {
  return (
    <section className="bg-[#fffaf3] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">

        <Compass
          size={32}
          className="mx-auto text-cyan-600"
        />

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
          Your Kind of India
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
          There is an India
          <br />
          <span className="text-cyan-600">
            waiting for you.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
          Whether you're chasing mountains, beaches, food, culture or
          adventure, your perfect experience is somewhere in India.
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
            href="/homepage"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-500"
          >
            Back to Home →
          </Link>

        </div>

        <div className="mt-20 border-t border-orange-100 pt-6 text-xs uppercase tracking-[0.2em] text-slate-400">
          TravelBharat • Explore India Your Way
        </div>

      </div>
    </section>
  );
}