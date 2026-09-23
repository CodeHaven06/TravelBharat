"use client";

import { useState } from "react";
import {Waves, Mountain, Leaf, Sun} from "lucide-react";
import ExperienceSwitcher from "@/app/components/ui/ExperienceSwitcher";


const experiences = [
  {
    id: "01",
    title: "Backwater Life",
    short: "Slow down on the water.",
    description:
      "Spend a peaceful day drifting through Kerala's backwaters, passing coconut palms, villages and quiet waterways.",
    icon: Waves,
  },
  {
    id: "02",
    title: "Tea Country",
    short: "Walk through misty hills.",
    description:
      "Explore Munnar's rolling tea plantations, cool mountain air and landscapes wrapped in morning mist.",
    icon: Mountain,
  },
  {
    id: "03",
    title: "Wild Kerala",
    short: "Get closer to nature.",
    description:
      "Discover forests, waterfalls and wildlife while exploring Kerala's greener and quieter side.",
    icon: Leaf,
  },
  {
    id: "04",
    title: "Coastal Escape",
    short: "Follow the Arabian Sea.",
    description:
      "Spend slow afternoons beside golden beaches and dramatic cliffs, with sunsets stretching across the coast.",
    icon: Sun,
  },
];

export default function KeralaExperiences() {
  const [active, setActive] = useState(0);

  return (
    <section className="overflow-hidden bg-[#f8fbf8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Experiences
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#18352a] sm:text-5xl lg:text-6xl">
            Don't just visit Kerala.
            <br />
            <span className="text-[#8ca097]">
              Experience it.
            </span>
          </h2>
        </div>

        <ExperienceSwitcher
          items={experiences}
          active={active}
          onChange={setActive}
          accentClassName="text-emerald-600"
        />

      </div>
    </section>
  );
}