"use client";

import Link from "next/link";
import FadeIn from "@/app/components/ui/FadeIn";
import RevealImage from "@/app/components/ui/RevealImage";

const destinations = [
  {
    name: "Baga",
    subtitle: "Beach • Nightlife",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=90",
    slug: "baga",
  },
  {
    name: "Vagator",
    subtitle: "Cliffs • Sunsets",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=90",
    slug: "vagator",
  },
  {
    name: "Palolem",
    subtitle: "Slow • Peaceful",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4N_Kizds-umADZP2yOsmcplOPNxTk-050KgpF3zDrfw&s=10",
    slug: "palolem",
  },
];

export default function GoaDestinations() {
  return (
    <section className="relative overflow-hidden bg-[#cfe8f8] pt-24 sm:pt-32">

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Destinations
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
              Find your kind of{" "}
              <span className="text-cyan-600">Goa.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Beaches, sunsets and colourful streets — every place has a
              different story.
            </p>
          </div>
        </FadeIn>

        {/* Floating destinations */}
        <div className="mx-auto mt-16 flex max-w-6xl items-center justify-center gap-4 sm:gap-7 lg:mt-20">

          <Destination
            item={destinations[0]}
            className="w-[30%] translate-y-8"
            height="h-[270px] sm:h-[330px]"
            delay={0.1}
          />

          <Destination
            item={destinations[1]}
            className="z-10 w-[38%]"
            height="h-[350px] sm:h-[440px]"
            delay={0.2}
          />

          <Destination
            item={destinations[2]}
            className="w-[30%] translate-y-8"
            height="h-[270px] sm:h-[330px]"
            delay={0.3}
          />

        </div>

        <FadeIn>
          <p className="pb-44 pt-12 text-center text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/50">
            Different places • One beautiful Goa
          </p>
        </FadeIn>
      </div>

      {/* Smooth wave into Experiences */}
      <div className="absolute -bottom-[1px] left-0 right-0 h-[190px] overflow-hidden">
        <div className="absolute -bottom-[145px] left-1/2 h-[260px] w-[125%] -translate-x-1/2 rounded-[50%] bg-[#fffaf3] sm:-bottom-[175px] sm:h-[320px]" />
      </div>
    </section>
  );
}

function Destination({
  item,
  className,
  height,
  delay,
}: {
  item: (typeof destinations)[number];
  className: string;
  height: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay} className={className}>
      <Link href={`/states/goa/${item.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-2.5 shadow-xl transition-transform duration-300 group-hover:-translate-y-2">

          <RevealImage
            src={item.image}
            alt={item.name}
            className={`${height} w-full rounded-[1.5rem]`}
            imageClassName="rounded-[1.5rem] object-cover"
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-full bg-white px-4 py-3 text-center shadow-md">
            <p className="text-sm font-semibold text-slate-800 sm:text-base">
              {item.name}
              <span className="ml-1 text-slate-400">↗</span>
            </p>

            <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
              {item.subtitle}
            </p>
          </div>

        </div>
      </Link>
    </FadeIn>
  );
}