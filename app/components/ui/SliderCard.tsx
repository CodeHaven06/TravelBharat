"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SliderCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  number: string;
}

export default function SliderCard({
  image,
  title,
  subtitle,
  description,
  number,
}: SliderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -8, x: 40 }}
      animate={{ opacity: 1, rotateY: 0, x: 0 }}
      exit={{ opacity: 0, rotateY: 8, x: -40 }}
      transition={{ duration: 0.55 }}
      className="overflow-hidden rounded-[30px] bg-white text-slate-900 shadow-2xl"
    >
      <div className="grid lg:grid-cols-2">

        {/* Image */}
        <div className="relative h-[340px] lg:h-[520px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />

          <div className="absolute left-6 top-6 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold backdrop-blur">
            {number}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-8 lg:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">
              {subtitle}
            </p>

            <h3 className="mt-4 text-4xl font-bold">{title}</h3>

            <p className="mt-6 text-slate-600 leading-8">{description}</p>
          </div>

          <button className="mt-10 flex items-center gap-3 font-semibold text-emerald-700 hover:text-emerald-500">
            Explore Place
            <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </motion.div>
  );
}