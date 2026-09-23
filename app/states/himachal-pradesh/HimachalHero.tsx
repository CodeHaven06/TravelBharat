"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Mountain } from "lucide-react";

import ArrowButton from "@/app/components/ui/ArrowButton";
import Badge from "@/app/components/ui/Badge";
import GlassCard from "@/app/components/ui/GlassCard";

export default function HimachalHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#10231d] text-white">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2200&q=90"
          alt="Himachal Pradesh mountains"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-7 lg:px-12">

        <div className="flex items-center gap-2">
          <Mountain size={19} />
          <span className="text-xs font-semibold tracking-[0.18em]">
            TRAVEL BHARAT
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
          <span className="transition hover:text-white">Explore</span>
          <span className="transition hover:text-white">Destinations</span>
          <span className="transition hover:text-white">Experiences</span>
        </nav>

        <div className="h-10 w-10 rounded-full border border-white/25 bg-white/10 backdrop-blur-md" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(92vh-85px)] flex-col justify-between px-6 pb-8 pt-20 lg:px-12 lg:pb-10">

        <div>
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
              <MapPin size={14} />
            </span>

            <span className="text-[11px] uppercase tracking-[0.22em] text-white/70">
              Himachal Pradesh · India
            </span>
          </motion.div>

          {/* Heading */}
          <div className="mt-8 max-w-5xl overflow-hidden">

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl font-semibold leading-[0.88] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
            >
              HIMACHAL
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="mt-5 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-white/50" />

              <h2 className="font-serif text-3xl italic sm:text-4xl lg:text-5xl">
                Into the wild.
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_auto_300px] lg:items-end">

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="max-w-md"
          >
            <p className="text-sm leading-7 text-white/70 sm:text-base">
              Winding mountain roads, quiet valleys, cedar forests
              and landscapes that make you slow down.
            </p>

            <ArrowButton
              href="/states/himachal-pradesh"
              className="mt-6 text-white"
            >
              Explore Himachal
            </ArrowButton>
          </motion.div>

          {/* Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden flex-col items-center gap-3 lg:flex"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
              Scroll
            </span>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md"
            >
              <ArrowDown size={15} />
            </motion.div>
          </motion.div>

          {/* Glass card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <GlassCard className="p-5">
              <Badge className="bg-white/10 text-white/60">
                Discover
              </Badge>

              <p className="mt-3 text-lg font-medium">
                The Himalayas
              </p>

              <div className="mt-4 flex gap-5 text-xs text-white/50">
                <span>Mountains</span>
                <span>Valleys</span>
                <span>Trails</span>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
