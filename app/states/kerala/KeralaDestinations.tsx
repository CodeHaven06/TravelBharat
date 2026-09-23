"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Clock3,
  Waves,
  Mountain,
  Trees,
  Sun,
} from "lucide-react";

const destinations = [
  
  {
    id: "01",
    name: "Munnar",
    tagline: "Where tea gardens meet the clouds",
    description:
      "Set among the Western Ghats, Munnar is known for its endless tea plantations, mist-covered mountains and cool mountain air. The landscape changes with every turn, creating some of Kerala's most beautiful scenic drives.",
    extra:
      "Spend your mornings exploring tea estates, visit viewpoints surrounded by clouds and take time to discover waterfalls, forests and peaceful mountain trails.",
    location: "Idukki, Kerala",
    duration: "3–4 Days",
    bestFor: "Hills & Tea Gardens",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "02",
    name: "Alleppey",
    tagline: "The heart of Kerala's backwaters",
    description:
      "Alleppey, also known as Alappuzha, is where Kerala's famous backwater experience truly comes alive. Cruise through peaceful canals lined with coconut palms, small villages and traditional homes while watching everyday life unfold along the water.",
    extra:
      "A houseboat journey here is more than sightseeing. It is a chance to slow down, enjoy Kerala's natural beauty and experience a quieter rhythm of travel.",
    location: "Alappuzha, Kerala",
    duration: "2–3 Days",
    bestFor: "Backwaters & Houseboats",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1602306033572-7c9a0e7b8b0d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "03",
    name: "Wayanad",
    tagline: "Kerala's wild and peaceful side",
    description:
      "Wayanad offers a completely different side of Kerala, filled with dense forests, waterfalls, plantations and dramatic mountain landscapes. It is a destination for travellers who want to spend more time surrounded by nature.",
    extra:
      "Explore ancient caves, discover hidden waterfalls, visit wildlife areas and take scenic drives through the Western Ghats while experiencing the slower side of rural Kerala.",
    location: "Wayanad, Kerala",
    duration: "3–4 Days",
    bestFor: "Nature & Adventure",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "04",
    name: "Varkala",
    tagline: "Cliffs, beaches and slow coastal days",
    description:
      "Varkala brings together dramatic coastal cliffs, golden beaches and the endless view of the Arabian Sea. Its relaxed atmosphere makes it perfect for travellers who want a slower beach escape without giving up beautiful scenery.",
    extra:
      "Walk along the famous cliff, watch the sunset over the sea, spend an afternoon at the beach and explore the cafés and small local shops that give Varkala its laid-back character.",
    location: "Thiruvananthapuram, Kerala",
    duration: "2–3 Days",
    bestFor: "Beaches & Sunsets",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function KeralaDestinations() {
  const [active, setActive] = useState(0);

  const destination = destinations[active];
  const Icon = destination.icon;

  return (
    <section
      id="kerala-destinations"
      className="overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Destinations
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#18352a] sm:text-5xl lg:text-6xl">
            Places that make
            <br />
            <span className="text-[#9aa9a1]">Kerala unforgettable.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            From quiet backwaters and misty tea plantations to wild forests
            and dramatic coastal cliffs, every part of Kerala offers a
            different way to experience the state.
          </p>
        </motion.div>

        {/* Destination Navigation */}
        <div className="mb-8 flex gap-2 overflow-x-auto border-b border-slate-200 pb-0">
          {destinations.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              className={`relative shrink-0 px-5 py-4 text-sm font-semibold transition-colors ${
                active === index
                  ? "text-emerald-700"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <span className="mr-2 text-xs tracking-widest">
                {item.id}
              </span>
              {item.name}
            </button>
          ))}
        </div>

        {/* Main Destination Showcase */}
        <div className="grid overflow-hidden rounded-[2rem] bg-[#f4f8f4] lg:grid-cols-[1.05fr_0.95fr]">

          {/* Image */}
          <div className="relative min-h-[430px] overflow-hidden lg:min-h-[620px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={destination.id}
                src={destination.image}
                alt={destination.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Image Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-7 sm:p-9">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <MapPin size={16} />
                {destination.location}
              </div>
            </div>

            {/* Number */}
            <div className="absolute left-7 top-7 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-slate-800 backdrop-blur sm:left-9 sm:top-9">
              {destination.id}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  {destination.tagline}
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-tight text-[#18352a] sm:text-5xl">
                  {destination.name}
                </h3>

                {/* Description */}
                <p className="mt-7 text-base leading-8 text-slate-600">
                  {destination.description}
                </p>

                <p className="mt-5 text-base leading-8 text-slate-500">
                  {destination.extra}
                </p>

                {/* Details */}
                <div className="mt-9 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <MapPin size={14} />
                      Location
                    </div>

                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      {destination.location}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <Clock3 size={14} />
                      Duration
                    </div>

                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      {destination.duration}
                    </p>
                  </div>

                  <div className="col-span-2 rounded-2xl bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Best For
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      {destination.bestFor}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation */}
            <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">

              <div className="flex gap-2">
                {destinations.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActive(index)}
                    aria-label={`View ${item.name}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === index
                        ? "w-10 bg-emerald-600"
                        : "w-2 bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setActive((active + 1) % destinations.length)
                }
                className="group flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-emerald-700"
              >
                Next destination
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col justify-between gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-7 text-slate-500">
            Kerala is not a destination you have to rush through. Choose a
            few places, leave room for unexpected stops and let the landscape
            become part of the journey.
          </p>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Explore • Wander • Experience
          </span>
        </motion.div>

      </div>
    </section>
  );
}