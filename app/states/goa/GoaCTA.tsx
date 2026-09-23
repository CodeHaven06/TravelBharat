"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import FadeIn from "@/app/components/ui/FadeIn";

export default function GoaCTA() {
  return (
    <section className="bg-[#fffaf3] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">

        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Your Goa Story
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
            Maybe it's time to
            <span className="text-cyan-600"> slow down.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
            Pack light, follow the coast and let Goa surprise you. Your next
            favourite memory might be just a beach away.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/destinations"
              className="group inline-flex items-center gap-2 rounded-full bg-[#17333a] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-cyan-700"
            >
              Explore Destinations
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/states"
              className="text-sm font-semibold text-slate-600 transition hover:text-orange-500"
            >
              Explore More States →
            </Link>

          </div>
        </FadeIn>

        {/* Footer line */}
        <FadeIn delay={0.2}>
          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-orange-100 pt-6 text-xs uppercase tracking-[0.2em] text-slate-400 sm:flex-row">

            <span>TravelBharat</span>

            <span className="flex items-center gap-2">
              <MapPin size={13} />
              Goa, India
            </span>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}