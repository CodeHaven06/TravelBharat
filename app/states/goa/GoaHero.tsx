"use client";

import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";
import FadeIn from "@/app/components/ui/FadeIn";

export default function GoaHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#102b32] text-white">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      <div className="absolute inset-0 bg-[#102b32]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#102b32] via-transparent to-black/20" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">

        {/* Location */}
        <FadeIn y={-15}>
          <div className="flex items-center gap-2 text-sm text-white/75">
            <MapPin size={16} />
            Goa, India
          </div>
        </FadeIn>

        {/* Content */}
        <div className="max-w-5xl py-20">

          <FadeIn delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
              Sun • Sea • Soul
            </p>
          </FadeIn>

          <FadeIn delay={0.2} y={35}>
            <h1 className="mt-5 text-[clamp(5rem,14vw,11rem)] font-semibold leading-[0.8] tracking-[-0.06em]">
              Goa
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-8 h-1 w-20 bg-orange-400" />
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              A little coastal state with a big personality — where golden
              beaches meet Portuguese heritage, colourful streets, local
              flavours and unforgettable sunsets.
            </p>
          </FadeIn>

          {/* Tags */}
          <FadeIn delay={0.6}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Beaches", "Heritage", "Nightlife", "Cuisine"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.75}>
            <Link
              href="#goa-overview"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#17333a] transition hover:-translate-y-1 hover:bg-orange-100"
            >
              Discover Goa
              <ArrowDown
                size={17}
                className="transition-transform group-hover:translate-y-1"
              />
            </Link>
          </FadeIn>

        </div>

        {/* Bottom */}
        <FadeIn>
          <div className="flex items-center justify-between border-t border-white/15 pt-5 text-xs uppercase tracking-[0.2em] text-white/40">
            <span>TravelBharat</span>
            <span>Explore the coast →</span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}