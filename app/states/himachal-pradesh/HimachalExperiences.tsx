"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import ArrowButton from "@/app/components/ui/ArrowButton";
import Container from "@/app/components/ui/Container";
import FadeUp from "@/app/components/ui/FadeUp";
import RevealImage from "@/app/components/ui/RevealImage";
import SectionLabel from "@/app/components/ui/SectionLabel";

const experiences = [
  {
    number: "01",
    title: "Chase the Snow",
    text: "Follow mountain roads towards snowy landscapes, quiet slopes and unforgettable winter views.",
    image:
      "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1400&q=90",
    href: "/destinations/manali",
  },
  {
    number: "02",
    title: "Walk the Wild",
    text: "Step into cedar forests and mountain trails where the landscape becomes the adventure.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=90",
    href: "/destinations/dharamshala",
  },
  {
    number: "03",
    title: "Take the Long Road",
    text: "Drive deeper into the Himalayas and discover remote valleys, villages and dramatic viewpoints.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=90",
    href: "/destinations/spiti-valley",
  },
];

export default function HimachalExperiences() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <Container>

        {/* Header */}
        <FadeUp>
          <SectionLabel>
            Experience Himachal
          </SectionLabel>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#14231e] sm:text-6xl lg:text-7xl">
              Don't just
              <br />
              <span className="font-serif font-normal italic text-emerald-700">
                see
              </span>{" "}
              the mountains.
              <br />
              Feel them.
            </h2>

            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Some journeys are remembered for the places you visit.
              Others stay with you because of how they made you feel.
            </p>
          </div>
        </FadeUp>

        {/* Experiences */}
        <div className="mt-16 sm:mt-20">
          {experiences.map((experience, index) => (
            <FadeUp
              key={experience.number}
              delay={index * 0.1}
            >
              <Link
                href={experience.href}
                className="group relative grid min-h-[260px] gap-8 border-t border-[#14231e]/10 py-8 sm:min-h-[300px] sm:grid-cols-[70px_0.8fr_1fr] sm:items-center sm:py-10"
              >
                {/* Number */}
                <span className="text-xs font-semibold tracking-[0.2em] text-emerald-700">
                  {experience.number}
                </span>

                {/* Title */}
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight text-[#14231e] transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                    {experience.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                    {experience.text}
                  </p>
                </div>

                {/* Image */}
                <div className="relative h-[210px] overflow-hidden rounded-[1.5rem] sm:h-[240px]">
                  <motion.img
                    src={experience.image}
                    alt={experience.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/0" />

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#14231e] transition duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}

          <div className="border-t border-[#14231e]/10" />
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.2}>
          <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm leading-6 text-slate-500">
              From snow-covered mornings to long Himalayan drives,
              choose your own way into the mountains.
            </p>

            <ArrowButton
              href="/states/himachal-pradesh"
              className="text-[#14231e]"
            >
              Discover experiences
            </ArrowButton>
          </div>
        </FadeUp>

      </Container>
    </section>
  );
}