"use client";

import { Heart, Users, Waves, Sun, ArrowUpRight } from "lucide-react";
import FadeIn from "@/app/components/ui/FadeIn";
import AnimatedImage from "@/app/components/ui/AnimatedImage";

export default function GoaOverview() {
  return (
    <section id="goa-overview" className="bg-[#fffaf3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Goa in a Glimpse
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl lg:text-7xl">
            Come for the beach.
            <br />
            <span className="text-cyan-600">Stay for the memories.</span>
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
            Whether it's a spontaneous trip with friends or a romantic escape
            for two, Goa has a way of making ordinary days feel like holidays.
          </p>
        </FadeIn>

        {/* Images */}
        <div className="relative mt-16 min-h-[620px]">

          <FadeIn className="absolute left-0 top-0 w-[78%] sm:w-[65%] lg:w-[57%]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85"
                alt="Goa beach"/>
              

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Arabian Sea
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  Find your kind of escape.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.2}
            className="absolute right-0 top-24 w-[55%] sm:w-[43%] lg:w-[36%]">
          
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-[#fffaf3] shadow-xl">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85"
                alt="Goa coastline"
              />
            </div>
          </FadeIn>

          {/* Floating Card */}
          <FadeIn
            delay={0.3}
            className="absolute left-[8%] top-[48%] z-10 sm:left-[12%] lg:left-[17%]">
          
            <div className="flex items-center gap-3 rounded-3xl bg-white p-5 shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
                <Waves size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  The Goa feeling
                </p>
                <p className="mt-1 font-semibold text-slate-800">
                  Sun, sea & freedom
                </p>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Couples / Friends */}
        <div className="grid gap-5 md:grid-cols-2">

          <FadeIn>
            <InfoCard
              icon={<Heart size={21} />}
              label="For couples"
              title="Slow days for two."
              text="Sunset walks, candlelit dinners, quiet beaches and long conversations by the sea."
              className="bg-[#ffe4e6] text-rose-500"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <InfoCard
              icon={<Users size={21} />}
              label="With friends"
              title="More people, more stories."
              text="Beach days, road trips, cafés, music and spontaneous plans make every trip memorable."
              className="bg-[#cffafe] text-cyan-600"
            />
          </FadeIn>

        </div>

        {/* Bottom */}
        <FadeIn>
          <div className="mt-16 flex flex-col gap-4 border-t border-orange-100 pt-8 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <Sun size={19} className="text-orange-400" />
              <p className="text-lg font-medium text-slate-700">
                Your Goa story can look however you want it to.
              </p>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Beach • People • Memories
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

function InfoCard({icon, label, title, text, className,}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  text: string;
  className: string;
}) {
  return (
    <div
      className={`group rounded-[2rem] p-7 transition-transform hover:-translate-y-1 sm:p-9 ${className}`}>
    
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
          {icon}
        </div>

        <ArrowUpRight
          size={20}
          className="opacity-50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/>
        
      </div>

      <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em]">
        {label}
      </p>

      <h3 className="mt-3 text-3xl font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
        {text}
      </p>
    </div>
  );
}