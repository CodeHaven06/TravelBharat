"use client";

import { Mountain } from "lucide-react";

export default function OurMission() {
  return (
    <section className="bg-[#d9edf5] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">

        <Mountain
          size={34}
          className="mx-auto text-cyan-700"
        />

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
          Our Mission
        </p>

        <h2 className="mt-5 text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
          Making India easier to discover,
          <br />
          <span className="text-cyan-700">
            one journey at a time.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
          Our mission is to make exploring India simpler, more inspiring and
          accessible for every traveller. We want to help people discover new
          places, understand different cultures and create journeys they'll
          remember.
        </p>

      </div>
    </section>
  );
}