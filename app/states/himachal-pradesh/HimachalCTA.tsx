"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

import ArrowButton from "@/app/components/ui/ArrowButton";
import Container from "@/app/components/ui/Container";
import FadeUp from "@/app/components/ui/FadeUp";
import RevealImage from "@/app/components/ui/RevealImage";
import SectionLabel from "@/app/components/ui/SectionLabel";

export default function HimachalCTA() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">

          {/* Content */}
          <FadeUp>
            <div className="max-w-xl">
              <SectionLabel>Plan Your Journey</SectionLabel>

              <h2 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#14231e] sm:text-6xl lg:text-7xl">
                Your next
                <br />
                mountain story
                <br />
                <span className="font-serif font-normal italic text-emerald-700">
                  starts here.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                Choose your route, find the places that speak to you
                and start planning a journey through Himachal Pradesh.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/destinations"
                  className="group inline-flex items-center gap-2 text- font-semibold transition hover:text-emerald-600"
                >
                  Explore Destinations

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/states"
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-700"
                >
                  Explore More States
                </Link>
              </div>

            </div>
          </FadeUp>

          {/* Image composition */}
          <FadeUp delay={0.15}>
            <div className="relative mx-auto w-full max-w-2xl">

              <RevealImage
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=90"
                alt="Himalayan mountains"
                className="h-[380px] rounded-[2rem] sm:h-[470px]"
              />

              {/* Floating circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="absolute -bottom-7 -left-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#14231e] text-white shadow-xl sm:-left-7 sm:h-24 sm:w-24"
              >
                <ArrowUpRight size={22} />
              </motion.div>

              {/* Small floating text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="absolute right-5 top-5 rounded-full border border-white/30 bg-white/85 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#14231e] shadow-lg backdrop-blur-md"
              >
                Into the Himalayas
              </motion.div>
            </div>
          </FadeUp>
        </div>

        {/* Bottom route line */}
        <FadeUp delay={0.25}>
          <div className="mt-20 border-t border-[#14231e]/10 pt-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-700" />

                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Travel Bharat
                </span>

                <span className="h-px w-12 bg-[#14231e]/15" />

                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Himachal Pradesh
                </span>
              </div>

              <p className="text-sm text-slate-400">
                Take the long way home.
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}