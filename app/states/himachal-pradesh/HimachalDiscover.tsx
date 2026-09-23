"use client";

import { ArrowUpRight, Mountain } from "lucide-react";

import ArrowButton from "@/app/components/ui/ArrowButton";
import Container from "@/app/components/ui/Container";
import FadeUp from "@/app/components/ui/FadeUp";
import GlassCard from "@/app/components/ui/GlassCard";
import RevealImage from "@/app/components/ui/RevealImage";
import SectionLabel from "@/app/components/ui/SectionLabel";

export default function HimachalDiscover() {
  return (
    <section className="overflow-hidden bg-[#f5f7f4] py-24 sm:py-32">
      <Container>
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <FadeUp>
            <SectionLabel>
              Discover Himachal
            </SectionLabel>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#14231e] sm:text-6xl lg:text-7xl">
              Come for the
              <br />
              <span className="font-serif font-normal italic text-emerald-700">
                mountains.
              </span>
              <br />
              Stay for the feeling.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="max-w-md text-sm leading-7 text-slate-500 lg:pb-2">
              Himachal is not just a destination to visit. It is a
              place to slow down, take the long road and discover
              something unexpected around every bend.
            </p>
          </FadeUp>
        </div>

        {/* Main visual */}
        <div className="relative mt-16 lg:mt-24">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">

            {/* Left image */}
            <FadeUp>
              <RevealImage
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=90"
                alt="Mountain landscape in Himachal Pradesh"
                className="h-[440px] rounded-[2rem] sm:h-[560px]"
              />
            </FadeUp>

            {/* Right image + content */}
            <div className="relative">
              <FadeUp delay={0.15}>
                <RevealImage
                  src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1800&q=90"
                  alt="Himalayan valley"
                  className="h-[330px] rounded-[2rem] sm:h-[450px]"
                />
              </FadeUp>

              {/* Floating image */}
              <FadeUp
                delay={0.35}
                className="absolute -bottom-16 left-6 hidden w-48 sm:block lg:-left-24 lg:w-56"
              >
                <RevealImage
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=90"
                  alt="Snow covered Himalayan mountains"
                  className="h-64 rounded-[1.5rem] border-[6px] border-[#f5f7f4] shadow-2xl"
                />
              </FadeUp>

              {/* Glass card */}
              <FadeUp
                delay={0.45}
                className="absolute -bottom-12 right-5 sm:right-8"
              >
                <GlassCard className="w-[210px] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                      <Mountain size={16} />
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-white/50"
                    />
                  </div>

                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/50">
                    The Himalayan State
                  </p>

                  <p className="mt-2 text-lg font-medium">
                    Where every view feels different.
                  </p>
                </GlassCard>
              </FadeUp>
            </div>
          </div>

          {/* Bottom information */}
          <FadeUp delay={0.25}>
            <div className="mt-20 grid gap-8 border-t border-[#14231e]/10 pt-8 sm:grid-cols-3 lg:mt-28">

              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-emerald-700">
                  01
                </span>

                <h3 className="mt-3 text-lg font-semibold text-[#14231e]">
                  Quiet Valleys
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  Escape into peaceful valleys surrounded by
                  forests and high mountain landscapes.
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-emerald-700">
                  02
                </span>

                <h3 className="mt-3 text-lg font-semibold text-[#14231e]">
                  Mountain Roads
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  Take the scenic route where the journey becomes
                  part of the experience.
                </p>
              </div>

              <div className="flex flex-col justify-between gap-6 sm:items-start">
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-emerald-700">
                    03
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-[#14231e]">
                    Wild Experiences
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    From snow trails to riverside escapes, there is
                    always another side of Himachal to discover.
                  </p>
                </div>

                <ArrowButton
                  href="/states/himachal-pradesh"
                  className="text-[#14231e]"
                >
                  Explore more
                </ArrowButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}