"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

export default function WhoWeAre() {
  const points = [
    "Authentic Information",
    "Beautiful Destinations",
    "Easy to Explore",
    "Travel Inspiration",
  ];

  return (
    <section className="bg-[#fffaf3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          <div className="relative">
            <div className="relative h-[480px] overflow-hidden rounded-[2.5rem] sm:h-[560px]">
              <Image
                src="/images/backgroundimg.jpeg"
                alt="Exploring India"
                fill
                className="object-fit transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-7 -right-3 rounded-3xl bg-white p-5 shadow-xl sm:-right-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                  <Camera size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                    Explore India
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    One country. Endless stories.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              India is not just a destination.
              <br />
              <span className="text-orange-500">
                It's a collection of stories.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-500">
              TravelBharat is your guide to exploring the diverse and vibrant
              culture of India. We bring together information about states,
              destinations, experiences, culture and cuisine to make discovering
              India simpler.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Whether you're looking for historical landmarks, natural wonders,
              peaceful escapes or cultural experiences, TravelBharat helps you
              discover places that make your journey memorable.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {points.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
                >
                  ✓ {point}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}