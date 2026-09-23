"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Compass } from "lucide-react";

export default function CategoriesHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[#17333a] text-white">
      <Image
        src="/images/goa.jpg"
        alt="Travel experiences in India"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#102f36]/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#102f36] via-black/10 to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-between px-6 py-10 sm:px-10 lg:px-16">

        <div className="flex items-center gap-2 text-sm text-white/70">
          <Compass size={16} />
          TravelBharat • Travel Categories
        </div>

        <div className="max-w-5xl pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Explore By Experience
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            What kind of India
            <br />
            <span className="text-orange-300">
              do you want to experience?
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Find destinations based on your interests, travel style, mood
            and the experiences you want to remember.
          </p>

          <Link
            href="#experience-categories"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#17333a] transition hover:-translate-y-1 hover:bg-orange-100"
          >
            Explore Categories

            <ArrowDown
              size={17}
              className="transition-transform group-hover:translate-y-1"
            />
          </Link>
        </div>

        <div className="flex items-center justify-between border-t border-white/15 pt-5 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>TravelBharat</span>
          <span>Choose your experience →</span>
        </div>

      </div>
    </section>
  );
}