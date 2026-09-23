"use client";

import Link from "next/link";
import {
  Mountain,
  Waves,
  Landmark,
  Church,
  Trees,
  TentTree,
  Utensils,
  Palette,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    slug: "mountains",
    title: "Mountains",
    description:
      "Snow peaks, peaceful valleys, hill towns and unforgettable mountain views.",
    icon: Mountain,
    accent: "bg-[#e7f1f7]",
    iconColor: "text-cyan-700",
  },
  {
    slug: "beaches",
    title: "Beaches",
    description:
      "Golden sands, turquoise waters, coastal towns and beautiful sunsets.",
    icon: Waves,
    accent: "bg-[#dff5f3]",
    iconColor: "text-teal-700",
  },
  {
    slug: "heritage",
    title: "Heritage & History",
    description:
      "Forts, palaces, monuments and stories that shaped India's history.",
    icon: Landmark,
    accent: "bg-[#f8eadc]",
    iconColor: "text-orange-700",
  },
  {
    slug: "spiritual",
    title: "Spiritual",
    description:
      "Temples, ghats, sacred cities and journeys filled with meaning.",
    icon: Church,
    accent: "bg-[#eee8f8]",
    iconColor: "text-purple-700",
  },
  {
    slug: "nature",
    title: "Nature & Wildlife",
    description:
      "Forests, waterfalls, national parks and India's incredible wildlife.",
    icon: Trees,
    accent: "bg-[#e4f2e5]",
    iconColor: "text-emerald-700",
  },
  {
    slug: "adventure",
    title: "Adventure",
    description:
      "Trekking, rafting, camping, paragliding and experiences for thrill seekers.",
    icon: TentTree,
    accent: "bg-[#f4eee1]",
    iconColor: "text-amber-700",
  },
  {
    slug: "food",
    title: "Food & Cuisine",
    description:
      "Discover regional flavours, traditional dishes and India's food culture.",
    icon: Utensils,
    accent: "bg-[#fbe5e0]",
    iconColor: "text-rose-700",
  },
  {
    slug: "culture",
    title: "Culture & Festivals",
    description:
      "Colourful festivals, traditional art, music, dance and local lifestyles.",
    icon: Palette,
    accent: "bg-[#e9e8f5]",
    iconColor: "text-indigo-700",
  },
];

interface ExperienceCategoriesProps {
  searchQuery: string;
}

export default function ExperienceCategories({
  searchQuery,
}: ExperienceCategoriesProps) {
  const filteredCategories = categories.filter((category) =>
    `${category.title} ${category.description}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="experience-categories"
      className="bg-[#fffaf3] pb-24 sm:pb-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Explore By Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-slate-800 sm:text-5xl lg:text-6xl">
            Find what
            <br />
            <span className="text-orange-500">feels like you.</span>
          </h2>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="rounded-[2rem] bg-slate-100 p-12 text-center">
            <p className="text-lg font-semibold text-slate-700">
              No categories found.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Try searching for beaches, mountains, food or adventure.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="group"
                >
                  <div
                    className={`relative h-full min-h-[300px] overflow-hidden rounded-[2rem] ${category.accent} p-7 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-white ${category.iconColor}`}
                      >
                        <Icon size={22} />
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="text-slate-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-700"
                      />
                    </div>

                    <div className="absolute bottom-7 left-7 right-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        0{index + 1}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-slate-800">
                        {category.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}