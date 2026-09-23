"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mountain, Utensils, Users } from "lucide-react";

import ArrowButton from "@/app/components/ui/ArrowButton";
import Container from "@/app/components/ui/Container";
import FadeUp from "@/app/components/ui/FadeUp";
import RevealImage from "@/app/components/ui/RevealImage";
import SectionLabel from "@/app/components/ui/SectionLabel";

const culturePoints = [
  {
    icon: Mountain,
    title: "Mountain Life",
    text: "Life in the hills follows a quieter rhythm, shaped by forests, valleys and changing seasons.",
  },
  {
    icon: Utensils,
    title: "Local Flavours",
    text: "Discover comforting regional food and simple flavours that belong to the mountain way of life.",
  },
  {
    icon: Users,
    title: "Local Stories",
    text: "Village traditions, crafts and everyday moments reveal a side of Himachal beyond its landscapes.",
  },
];

export default function HimachalCulture() {
  return (
    <section className="overflow-hidden bg-[#f5f7f4] py-24 sm:py-32">
      <Container>
        {/* Heading */}
        <FadeUp>
          <SectionLabel>Beyond The Mountains</SectionLabel>

          <div className="mt-7 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#14231e] sm:text-6xl lg:text-7xl">
              Discover the
              <br />
              <span className="font-serif font-normal italic text-emerald-700">
                soul
              </span>{" "}
              of Himachal.
            </h2>

            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              The mountains are only part of the story. Look closer and
              you will find a culture shaped by community, tradition and
              everyday life in the hills.
            </p>
          </div>
        </FadeUp>

        {/* Main composition */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            
            {/* Left information */}
            <FadeUp>
              <div className="max-w-sm lg:pr-6">
                <span className="text-xs font-semibold tracking-[0.25em] text-emerald-700">
                  THE HIMALAYAN WAY
                </span>

                <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-[#14231e] sm:text-3xl">
                  Not everything worth discovering is marked on a map.
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                  Take a slower route through Himachal and notice the
                  details — wooden homes, local food, village paths and
                  the warmth of mountain communities.
                </p>

                <ArrowButton
                  href="/states/himachal-pradesh"
                  className="mt-7 text-[#14231e]"
                >
                  Discover more
                </ArrowButton>
              </div>
            </FadeUp>

            {/* Image */}
            <FadeUp delay={0.15}>
              <div className="relative">
                <RevealImage
                  src="https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1600&q=90"
                  alt="Himachal Pradesh mountain village"
                  className="h-[380px] rounded-[2rem] sm:h-[480px]"
                />

                {/* Floating label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="absolute bottom-5 left-5 max-w-[230px] rounded-2xl border border-white/30 bg-white/85 p-5 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Local perspective
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="text-slate-400"
                    />
                  </div>

                  <p className="mt-3 text-sm font-medium leading-6 text-[#14231e]">
                    Sometimes the best part of a journey is simply
                    slowing down.
                  </p>
                </motion.div>
              </div>
            </FadeUp>
          </div>

          {/* Culture points */}
          <div className="mt-16 border-t border-[#14231e]/10">
            {culturePoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeUp key={item.title} delay={index * 0.08}>
                  <div className="group grid gap-5 border-b border-[#14231e]/10 py-7 sm:grid-cols-[80px_0.8fr_1fr] sm:items-center sm:py-8">
                    
                    <span className="text-xs font-semibold tracking-[0.2em] text-slate-400">
                      0{index + 1}
                    </span>

                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#14231e]/10 bg-white text-emerald-700 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={17} />
                      </span>

                      <h3 className="text-xl font-semibold text-[#14231e] sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}