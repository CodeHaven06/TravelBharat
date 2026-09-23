"use client";

import FadeIn from "@/app/components/ui/FadeIn";
import RevealImage from "@/app/components/ui/RevealImage";

const culture = [
  {
    title: "Portuguese Heritage",
    text: "Whitewashed churches, old villas and colourful streets carry stories of Goa's Portuguese past.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKNkApqWWuEZjZ25a0S8sw0PtNzxYdVWnE4I80hH9ZA&s=10",
  },
  {
    title: "Goan Festivals",
    text: "Music, dance and celebrations bring Goa's streets and communities to life throughout the year.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTz5hOUC0QU_636m2BWD_Ugq10PuWLS-LY1DAYfFx3Q&s=10",
  },
  {
    title: "Local Life",
    text: "Fishing villages, traditional homes and everyday coastal life reveal the quieter side of Goa.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP245kl-67drmnqYqqm9IWHlSVy_dABQFcD62Knl4OhQ&s=10",
  },
];

export default function GoaCulture() {
  return (
    <section className="bg-[#f5eee4] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              Culture & Heritage
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
              Goa has more stories
              <br />
              <span className="text-orange-600">than beaches.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
              Look beyond the coastline and you'll find a Goa shaped by
              centuries of history, traditions, music and everyday life.
            </p>
          </div>
        </FadeIn>

        {/* Editorial Culture Layout */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">

          {/* Main */}
          <FadeIn className="lg:col-span-7">
            <CultureItem
              item={culture[0]}
              height="h-[500px]"
              large
            />
          </FadeIn>

          {/* Side */}
          <div className="grid gap-6 lg:col-span-5">

            <FadeIn delay={0.1}>
              <CultureItem
                item={culture[1]}
                height="h-[235px]"
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <CultureItem
                item={culture[2]}
                height="h-[235px]"
              />
            </FadeIn>

          </div>
        </div>

        {/* Bottom statement */}
        <FadeIn delay={0.2}>
          <div className="mt-12 border-t border-orange-200 pt-7">
            <p className="max-w-3xl text-xl font-medium leading-8 text-slate-700 sm:text-2xl">
              From old neighbourhoods to local celebrations, Goa's culture is
              something you experience rather than simply see.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

function CultureItem({
  item,
  height,
  large = false,
}: {
  item: (typeof culture)[number];
  height: string;
  large?: boolean;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] ${height}`}>
      <RevealImage
        src={item.image}
        alt={item.title}
        className="h-full w-full"
        imageClassName="rounded-[2rem]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
          Goa
        </p>

        <h3
          className={`mt-2 font-semibold text-white ${
            large ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {item.title}
        </h3>

        <p
          className={`mt-3 max-w-xl leading-7 text-white/70 ${
            large ? "text-sm sm:text-base" : "text-sm"
          }`}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
}