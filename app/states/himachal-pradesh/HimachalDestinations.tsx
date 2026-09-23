"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

import ArrowButton from "@/app/components/ui/ArrowButton";
import Container from "@/app/components/ui/Container";
import FadeUp from "@/app/components/ui/FadeUp";
import GlassCard from "@/app/components/ui/GlassCard";
import RevealImage from "@/app/components/ui/RevealImage";
import SectionLabel from "@/app/components/ui/SectionLabel";

const destinations = [
  {
    number: "01",
    name: "Manali",
    place: "Kullu Valley",
    description:
      "Pine forests, flowing rivers and mountain adventures come together in one of Himachal's most loved escapes.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=90",
    slug: "manali",
  },
  {
    number: "02",
    name: "Spiti Valley",
    place: "Himachal Pradesh",
    description:
      "A rugged Himalayan valley where dramatic landscapes, quiet villages and winding mountain roads meet.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=90",
    slug: "spiti-valley",
  },
  {
    number: "03",
    name: "Dharamshala",
    place: "Kangra Valley",
    description:
      "Cedar forests, peaceful mountain views and Tibetan influences create a slower side of Himachal.",
    image:
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1400&q=90",
    slug: "dharamshala",
  },
  {
    number: "04",
    name: "Shimla",
    place: "Himalayan Hills",
    description:
      "A timeless hill destination surrounded by forested slopes, old streets and mountain air.",
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=90",
    slug: "shimla",
  },
  {
    number: "05",
    name: "Dalhousie",
    place: "Himalayan Hills",
    description:
      "A colonial hill station with a vibrant cultural scene and stunning natural landscapes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGr8MCel1R79tJ2j8P57QmOUxk62KEHNYhCDNYGViCOA&s=10",
    slug: "dalhousie",
  }
];

export default function HimachalDestinations() {
  return (
    <section className="overflow-hidden bg-[#f5f7f4] py-24 sm:py-32">
      <Container>

        {/* Heading */}
        <FadeUp>
          <SectionLabel>
            Places To Explore
          </SectionLabel>

          <div className="mt-7 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#14231e] sm:text-6xl lg:text-7xl">
              Four places.
              <br />
              <span className="font-serif font-normal italic text-emerald-700">
                Endless ways
              </span>{" "}
              to wander.
            </h2>

            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              From familiar hill stations to remote valleys, discover
              a different side of the Himalayas with every journey.
            </p>
          </div>
        </FadeUp>

        {/* Featured destination */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:mt-20">

          {/* Image */}
          <FadeUp>
            <Link
              href={`/destinations/${destinations[0].slug}`}
              className="group relative block overflow-hidden rounded-[2rem]"
            >
              <RevealImage
                src={destinations[0].image}
                alt={destinations[0].name}
                className="h-[400px] sm:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  {destinations[0].number}
                </span>

                <h3 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">
                  {destinations[0].name}
                </h3>
              </div>

              <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#14231e] transition duration-500 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </div>
            </Link>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.15}>
            <div className="lg:pl-8">

              <div className="flex items-center gap-2 text-emerald-700">
                <MapPin size={15} />

                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  {destinations[0].place}
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-[#14231e] sm:text-4xl">
                Where the mountains
                <br />
                meet adventure.
              </h3>

              <p className="mt-5 max-w-md text-base leading-8 text-slate-500">
                {destinations[0].description}
              </p>

              <ArrowButton
                href={`/destinations/${destinations[0].slug}`}
                className="mt-8 text-[#14231e]"
              >
                Explore Manali
              </ArrowButton>

              {/* Mini information */}
              <div className="mt-12 border-t border-[#14231e]/10 pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                      Experience
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#14231e]">
                      Mountains & Trails
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                      Landscape
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#14231e]">
                      Valleys & Forests
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Other destinations */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">

          {destinations.slice(1).map((destination, index) => (
            <FadeUp
              key={destination.name}
              delay={index * 0.1}
            >
              <Link
                href={`/destinations/${destination.slug}`}
                className="group grid grid-cols-[140px_1fr] gap-5 rounded-[1.5rem] border border-[#14231e]/10 bg-white p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[180px_1fr] sm:p-5"
              >

                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <motion.img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full min-h-[150px] w-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between py-1">

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.2em] text-emerald-700">
                        {destination.number}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="text-slate-400 transition duration-300 group-hover:rotate-45 group-hover:text-emerald-700"
                      />
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <MapPin
                        size={12}
                        className="text-emerald-700"
                      />

                      <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400">
                        {destination.place}
                      </span>
                    </div>

                    <h3 className="mt-2 text-2xl font-semibold text-[#14231e]">
                      {destination.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {destination.description}
                    </p>
                  </div>

                  <span className="mt-5 text-xs font-semibold text-emerald-700">
                    Explore destination →
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.2}>
          <div className="mt-14 flex flex-col gap-5 border-t border-[#14231e]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#14231e]">
                Your Himalayan journey starts here.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Explore more places across Himachal Pradesh.
              </p>
            </div>

            <ArrowButton
              href="/states/himachal-pradesh"
              className="text-[#14231e]"
            >
              Explore all
            </ArrowButton>
          </div>
        </FadeUp>

      </Container>
    </section>
  );
}