"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";

import Container from "@/app/components/ui/Container";
import FadeUp from "@/app/components/ui/FadeUp";
import RevealImage from "@/app/components/ui/RevealImage";
import SectionLabel from "@/app/components/ui/SectionLabel";

const routes = [
  {
    number: "01",
    title: "Leave the highway",
    text: "The journey begins when the road starts winding through forests, valleys and mountain villages.",
  },
  {
    number: "02",
    title: "Follow the valley",
    text: "Keep moving deeper into the landscape and let the mountains gradually become part of the journey.",
  },
  {
    number: "03",
    title: "Take the long way",
    text: "Some of the most memorable moments happen between one place and the next.",
  },
];

export default function HimachalRoads() {
  return (
    <section className="overflow-hidden bg-[#e9efeb] py-24 sm:py-32">
      <Container>
        {/* Intro */}
        <FadeUp>
          <SectionLabel>The Journey</SectionLabel>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-[#14231e] sm:text-6xl lg:text-7xl">
              In Himachal,
              <br />
              the road is
              <br />
              <span className="font-serif font-normal italic text-emerald-700">
                part of the destination.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Forget rushing from one place to another. Here, winding
              roads, changing landscapes and unexpected stops become
              part of the story.
            </p>
          </div>
        </FadeUp>

        {/* Main visual */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <FadeUp>
              <RevealImage
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1800&q=90"
                alt="Mountain road in Himachal Pradesh"
                className="h-[380px] rounded-[2rem] sm:h-[500px]"
              />
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="lg:pl-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Take your time
                </p>

                <p className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#14231e] sm:text-4xl">
                  Turn the journey into the experience.
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                  Stop for a mountain view. Take a different turn.
                  Spend a little longer in a place you did not plan
                  to visit.
                </p>

                <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#14231e]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#14231e]/15">
                    <MoveRight size={16} />
                  </span>

                  <span>Follow the road</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Route story */}
          <div className="relative mt-20 border-t border-[#14231e]/15">
            {/* Connecting line */}
            <div className="absolute left-5 top-0 hidden h-full w-px bg-[#14231e]/10 sm:block" />

            {routes.map((route, index) => (
              <FadeUp key={route.number} delay={index * 0.1}>
                <div className="group relative grid gap-5 border-b border-[#14231e]/15 py-8 sm:grid-cols-[80px_0.8fr_1fr] sm:items-center sm:py-10">
                  {/* Number */}
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9efeb] text-xs font-semibold text-emerald-700 ring-1 ring-[#14231e]/10 transition-all duration-300 group-hover:bg-[#14231e] group-hover:text-white">
                      {route.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold tracking-tight text-[#14231e] transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                    {route.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                    {route.text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Bottom statement */}
          <FadeUp delay={0.25}>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg font-serif text-xl italic text-[#14231e] sm:text-2xl">
                “Sometimes the best view is the one you weren't looking for.”
              </p>

              <motion.div
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#14231e]/15 text-[#14231e]"
              >
                <ArrowUpRight size={17} />
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}





// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// import Container from "@/app/components/ui/Container";
// import FadeUp from "@/app/components/ui/FadeUp";

// const seasons = [
//   {
//     number: "01",
//     season: "Spring",
//     months: "March — April",
//     title: "Green begins",
//     text: "Fresh mountain air, blooming landscapes and quieter trails.",
//     image:
//       "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90",
//   },
//   {
//     number: "02",
//     season: "Summer",
//     months: "May — June",
//     title: "Into the hills",
//     text: "Longer days made for mountain roads, valleys and outdoor escapes.",
//     image:
//       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=90",
//   },
//   {
//     number: "03",
//     season: "Monsoon",
//     months: "July — September",
//     title: "Misty mornings",
//     text: "Cloud-covered mountains, lush valleys and a slower rhythm.",
//     image:
//       "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=90",
//   },
//   {
//     number: "04",
//     season: "Winter",
//     months: "October — February",
//     title: "Into the snow",
//     text: "Crisp mountain days, snowy landscapes and cosy escapes.",
//     image:
//       "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1200&q=90",
//   },
// ];

// export default function HimachalSeasons() {
//   return (
//     <section className="overflow-hidden bg-[#14231e] py-24 text-white sm:py-32">
//       <Container>
//         {/* Intro */}
//         <FadeUp>
//           <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-300">
//                 Choose your moment
//               </p>

//               <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
//                 Himachal,
//                 <br />
//                 <span className="font-serif font-normal italic text-emerald-300">
//                   season by season.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-sm text-sm leading-7 text-white/55 sm:text-base">
//               The mountains keep changing. Choose a season and discover
//               a different mood of Himachal.
//             </p>
//           </div>
//         </FadeUp>

//         {/* Horizontal season panels */}
//         <div className="mt-16 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//           <div className="flex min-w-max gap-5">
//             {seasons.map((season, index) => (
//               <FadeUp
//                 key={season.number}
//                 delay={index * 0.08}
//               >
//                 <motion.article
//                   whileHover={{ y: -6 }}
//                   transition={{ duration: 0.35 }}
//                   className="group relative h-[430px] w-[280px] overflow-hidden rounded-[1.75rem] sm:h-[480px] sm:w-[320px]"
//                 >
//                   {/* Image */}
//                   <motion.img
//                     src={season.image}
//                     alt={season.season}
//                     className="absolute inset-0 h-full w-full object-cover"
//                     whileHover={{ scale: 1.06 }}
//                     transition={{ duration: 0.8 }}
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

//                   {/* Number */}
//                   <div className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/10 text-[10px] font-semibold backdrop-blur-sm">
//                     {season.number}
//                   </div>

//                   {/* Arrow */}
//                   <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#14231e] transition duration-500 group-hover:rotate-45">
//                     <ArrowUpRight size={16} />
//                   </div>

//                   {/* Content */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
//                     <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
//                       {season.months}
//                     </p>

//                     <h3 className="mt-2 text-3xl font-semibold tracking-tight">
//                       {season.season}
//                     </h3>

//                     <p className="mt-2 font-serif text-xl italic text-emerald-200">
//                       {season.title}
//                     </p>

//                     <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">
//                       {season.text}
//                     </p>
//                   </div>
//                 </motion.article>
//               </FadeUp>
//             ))}
//           </div>
//         </div>

//         {/* Bottom line */}
//         <FadeUp delay={0.25}>
//           <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
//             <p className="text-xs uppercase tracking-[0.2em] text-white/35">
//               Four seasons · One Himalayan journey
//             </p>

//             <span className="hidden text-xs text-white/35 sm:block">
//               Scroll to explore
//             </span>
//           </div>
//         </FadeUp>
//       </Container>
//     </section>
//   );
// }
