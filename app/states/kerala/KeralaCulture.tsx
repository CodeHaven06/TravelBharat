"use client";

import { motion } from "framer-motion";
import {Palette, Music2, Sparkles, Utensils, ArrowUpRight} from "lucide-react";

const cultureItems = [
  {
    number: "01",
    title: "Kathakali",
    subtitle: "Stories told through expression",
    description:
      "Kathakali is one of Kerala's most distinctive traditional art forms. Elaborate costumes, striking makeup, expressive eyes and carefully controlled movements come together to tell stories inspired by mythology and ancient traditions.",
    icon: Palette,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgSeEnrtTFr4XXyYazTB5hV91lFplOtak9GtT98aT3g&s=10",
  },
  {
    number: "02",
    title: "Theyyam",
    subtitle: "A powerful ritual tradition",
    description:
      "Theyyam is a spectacular ritual performance found mainly in northern Kerala. Vibrant costumes, dramatic face painting, music and movement create an immersive cultural experience deeply connected with local communities.",
    icon: Sparkles,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkDQ8Y-av3YGgKG6mPbwBkVdk83Vfbcp2O52xG3RKOg&s=10",
  },
  {
    number: "03",
    title: "Traditional Music",
    subtitle: "Rhythm at the heart of Kerala",
    description:
      "Kerala's cultural celebrations are closely connected with traditional music and percussion. Instruments such as chenda create powerful rhythms during temple festivals, performances and important community celebrations.",
    icon: Music2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVmiSjwMy4vA41tbG-DdAA3B-yd6Txyl3EWJRbMT6zg&s=10",
  },
  {
    number: "04",
    title: "Kerala Cuisine",
    subtitle: "Culture served on a banana leaf",
    description:
      "Food is an essential part of experiencing Kerala. From a traditional Sadya served on a banana leaf to fragrant curries, coconut-based dishes and coastal flavours, Kerala's cuisine reflects generations of tradition.",
    icon: Utensils,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzj-xWEoRzngVLWTHAaavZyCjAfbqjUSn3d_BNuGaYg&s=10",
  },
];

export default function KeralaCulture() {
  return (
    <section className="bg-[#18352a] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Culture
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Kerala is not only
              <br />
              <span className="text-emerald-200/50">
                a place to see.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl self-end text-base leading-8 text-white/60 sm:text-lg">
            Its identity lives in its performances, festivals, food, music
            and traditions. To understand Kerala, look beyond its landscapes
            and discover the culture that gives them meaning.
          </p>
        </motion.div>

        {/* Culture Items */}
        <div className="mt-20 border-t border-white/10">
          {cultureItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group grid gap-6 border-b border-white/10 py-9 lg:grid-cols-[65px_100px_0.8fr_1.2fr_35px] lg:items-center">
              
                {/* Number */}
                <span className="text-xs font-semibold tracking-[0.25em] text-emerald-300/60">
                  {item.number}
                </span>

                {/* Small Image */}
                <div className="h-20 w-20 overflow-hidden rounded-2xl sm:h-24 sm:w-24">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"/>
                  
                </div>

                {/* Title */}
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-emerald-300">
                    <Icon size={18} />
                  </div>

                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-emerald-200/70">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                  {item.description}
                </p>

                {/* Arrow */}
                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  className="hidden text-white/30 transition-colors group-hover:text-emerald-300 lg:block">
            
                  <ArrowUpRight size={20} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl">
        
          <p className="text-2xl font-medium leading-relaxed text-white/80 sm:text-3xl">
            The best way to experience Kerala is to slow down enough to
            notice the traditions happening around you.
          </p>
        </motion.div>

      </div>
    </section>
  );
}