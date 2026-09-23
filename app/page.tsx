import Homepage from "./homepage/page";

export default function Travell() {
    return (
        <div className="h-full">
            <Homepage />
        </div>
    )
}






// "use client"
// import {ArrowDown, ArrowUpRight } from "lucide-react";


// import { motion } from "framer-motion";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   ChevronRight,
//   Compass,
//   MapPin,
//   Mountain,
//   Play,
//   Star,
// } from "lucide-react";

// const destinations = [
//   {
//     name: "Manali",
//     subtitle: "Valleys • Snow • Adventure",
//     image:
//       "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1400&q=85",
//     number: "01",
//   },
//   {
//     name: "Spiti Valley",
//     subtitle: "Monasteries • Roads • Silence",
//     image:
//       "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=85",
//     number: "02",
//   },
//   {
//     name: "Kasol",
//     subtitle: "Rivers • Cafés • Trails",
//     image:
//       "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1400&q=85",
//     number: "03",
//   },
// ];

// const experiences = [
//   {
//     title: "Mountain Trails",
//     text: "Walk through pine forests, hidden villages and dramatic Himalayan landscapes.",
//     image:
//       "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     title: "Local Life",
//     text: "Meet the people, discover traditional homes and experience mountain culture.",
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     title: "Slow Escapes",
//     text: "Wake up to misty valleys, warm cafés and mornings without an alarm.",
//     image:
//       "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
//   },
// ];

// const festivals = [
//   {
//     name: "Kullu Dussehra",
//     date: "October",
//     image:
//       "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=85",
//   },
//   {
//     name: "Losar Festival",
//     date: "February / March",
//     image:
//       "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1000&q=85",
//   },
//   {
//     name: "Minjar Fair",
//     date: "July / August",
//     image:
//       "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1000&q=85",
//   },
// ];

// export default function HimachalPage() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-[#f7f3ec] text-[#191919]">

//       {/* =========================================================
//           NAVBAR
//       ========================================================= */}
//       <nav className="absolute left-0 top-0 z-50 w-full px-6 py-6 md:px-12">
//         <div className="mx-auto flex max-w-[1500px] items-center justify-between">

//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e84c2f] text-white">
//               <Mountain size={19} />
//             </div>

//             <span className="text-xl font-bold tracking-[-0.04em]">
//               Himachal<span className="text-[#e84c2f]">.</span>
//             </span>
//           </div>

//           <div className="hidden items-center gap-10 text-sm font-medium md:flex">
//             <a href="#destinations" className="transition hover:text-[#e84c2f]">
//               Destinations
//             </a>
//             <a href="#experiences" className="transition hover:text-[#e84c2f]">
//               Experiences
//             </a>
//             <a href="#festivals" className="transition hover:text-[#e84c2f]">
//               Festivals
//             </a>
//             <a href="#plan" className="transition hover:text-[#e84c2f]">
//               Plan Trip
//             </a>
//           </div>

//           <button className="flex items-center gap-2 rounded-full bg-[#191919] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e84c2f]">
//             Explore
//             <ArrowRight size={15} />
//           </button>
//         </div>
//       </nav>


//       {/* =========================================================
//           HERO
//       ========================================================= */}
//       <section className="relative min-h-[760px] overflow-hidden">

//         {/* background image */}
//         <img
//           src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2200&q=90"
//           alt="Himachal mountains"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         {/* overlays */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

//         <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1500px] items-end px-6 pb-20 md:px-12 md:pb-28">

//           <div className="max-w-4xl text-white">

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em]"
//             >
//               <span className="h-px w-10 bg-white" />
//               Himachal Pradesh
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 35 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className="max-w-4xl text-[64px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[82px] md:text-[105px]"
//             >
//               Where the
//               <br />
//               mountains
//               <br />
//               <span className="text-[#ff694c]">feel alive.</span>
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="mt-8 flex max-w-2xl flex-col justify-between gap-7 sm:flex-row sm:items-end"
//             >
//               <p className="max-w-md text-base leading-7 text-white/80 md:text-lg">
//                 Discover quiet valleys, ancient monasteries, colourful
//                 festivals and roads that disappear into the Himalayas.
//               </p>

//               <button className="group flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#191919]">
//                 Start exploring
//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e84c2f] text-white transition group-hover:rotate-45">
//                   <ArrowDownRight size={15} />
//                 </span>
//               </button>
//             </motion.div>
//           </div>
//         </div>

//         {/* vertical label */}
//         <div className="absolute bottom-10 right-8 hidden rotate-90 text-xs uppercase tracking-[0.3em] text-white/70 lg:block">
//           Explore the Himalayas
//         </div>
//       </section>


//       {/* =========================================================
//           INTRO
//       ========================================================= */}
//       <section className="px-6 py-24 md:px-12 md:py-32">
//         <div className="mx-auto grid max-w-[1350px] gap-16 md:grid-cols-[1fr_1.6fr]">

//           <div>
//             <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e84c2f]">
//               01 — The Region
//             </p>

//             <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
//               More than
//               <br />
//               a destination.
//             </h2>
//           </div>

//           <div>
//             <p className="max-w-3xl text-2xl leading-[1.35] tracking-[-0.03em] text-[#444] md:text-4xl">
//               Himachal is a collection of experiences — from the first light
//               over the mountains to a cup of chai beside a quiet river.
//             </p>

//             <div className="mt-10 flex flex-wrap gap-3">
//               {[
//                 "Snow peaks",
//                 "Ancient temples",
//                 "Mountain cafés",
//                 "Local food",
//                 "Adventure",
//                 "Slow travel",
//               ].map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-black/10 px-4 py-2 text-sm"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           DESTINATIONS
//       ========================================================= */}
//       <section id="destinations" className="px-6 pb-28 md:px-12">

//         <div className="mx-auto mb-12 flex max-w-[1350px] items-end justify-between">
//           <div>
//             <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e84c2f]">
//               02 — Places
//             </p>

//             <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
//               Pick your valley.
//             </h2>
//           </div>

//           <button className="hidden items-center gap-2 text-sm font-semibold md:flex">
//             View all destinations
//             <ArrowRight size={17} />
//           </button>
//         </div>

//         <div className="mx-auto grid max-w-[1350px] gap-5 md:grid-cols-3">

//           {destinations.map((place, index) => (
//             <motion.article
//               key={place.name}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.12 }}
//               className={`group relative overflow-hidden rounded-[28px] ${
//                 index === 1 ? "md:translate-y-12" : ""
//               }`}
//             >
//               <div className="aspect-[0.78] overflow-hidden">
//                 <img
//                   src={place.image}
//                   alt={place.name}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                 />
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

//               <div className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xs text-white backdrop-blur-md">
//                 {place.number}
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 text-white">
//                 <div className="mb-2 text-sm text-white/60">
//                   {place.subtitle}
//                 </div>

//                 <div className="flex items-end justify-between">
//                   <h3 className="text-3xl font-semibold tracking-[-0.04em]">
//                     {place.name}
//                   </h3>

//                   <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e84c2f] transition group-hover:rotate-45">
//                     <ArrowUpRight />
//                   </span>
//                 </div>
//               </div>
//             </motion.article>
//           ))}

//         </div>
//       </section>


//       {/* =========================================================
//           BIG STATEMENT
//       ========================================================= */}
//       <section className="bg-[#e84c2f] px-6 py-24 text-white md:px-12 md:py-32">

//         <div className="mx-auto max-w-[1350px]">

//           <div className="grid gap-14 md:grid-cols-[1fr_2fr]">

//             <div className="flex items-start gap-3 text-sm uppercase tracking-[0.2em]">
//               <span className="mt-2 h-2 w-2 rounded-full bg-white" />
//               Why Himachal?
//             </div>

//             <div>
//               <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-8xl">
//                 Come for the
//                 <br />
//                 mountains.
//                 <br />
//                 Stay for the
//                 <br />
//                 feeling.
//               </h2>

//               <p className="mt-10 max-w-2xl text-lg leading-8 text-white/75">
//                 There is something about Himachal that makes you slow down.
//                 Roads become journeys, strangers become stories and every
//                 viewpoint becomes a memory.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           EXPERIENCES
//       ========================================================= */}
//       <section id="experiences" className="px-6 py-28 md:px-12">

//         <div className="mx-auto max-w-[1350px]">

//           <div className="mb-14">
//             <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e84c2f]">
//               03 — Experiences
//             </p>

//             <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//               <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
//                 Travel differently.
//               </h2>

//               <p className="max-w-md text-sm leading-6 text-black/55">
//                 Don't just visit places. Experience the rhythm, people and
//                 landscapes that make Himachal unique.
//               </p>
//             </div>
//           </div>

//           <div className="space-y-6">

//             {experiences.map((experience, index) => (
//               <motion.div
//                 key={experience.title}
//                 initial={{ opacity: 0, x: index % 2 ? 40 : -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="group grid overflow-hidden rounded-[28px] bg-[#ebe6dd] md:grid-cols-2"
//               >

//                 <div
//                   className={`aspect-[1.2] overflow-hidden ${
//                     index % 2 ? "md:order-2" : ""
//                   }`}
//                 >
//                   <img
//                     src={experience.image}
//                     alt={experience.title}
//                     className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="flex flex-col justify-between p-8 md:p-12">
//                   <div>
//                     <span className="text-sm text-black/40">
//                       0{index + 1}
//                     </span>

//                     <h3 className="mt-8 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
//                       {experience.title}
//                     </h3>

//                     <p className="mt-5 max-w-md text-base leading-7 text-black/55">
//                       {experience.text}
//                     </p>
//                   </div>

//                   <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-5">
//                     <span className="text-sm font-medium">
//                       Discover experience
//                     </span>

//                     <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#191919] text-white transition group-hover:bg-[#e84c2f]">
//                       <ArrowRight size={17} />
//                     </span>
//                   </div>
//                 </div>

//               </motion.div>
//             ))}

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           FESTIVALS
//       ========================================================= */}
//       <section id="festivals" className="bg-[#191919] px-6 py-28 text-white md:px-12">

//         <div className="mx-auto max-w-[1350px]">

//           <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

//             <div>
//               <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff694c]">
//                 04 — Festivals
//               </p>

//               <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
//                 Celebrate
//                 <br />
//                 locally.
//               </h2>

//               <p className="mt-6 max-w-sm text-sm leading-6 text-white/45">
//                 Music, colour, rituals and stories come alive across the
//                 valleys throughout the year.
//               </p>
//             </div>

//             <div className="grid gap-5 md:grid-cols-3">

//               {festivals.map((festival, index) => (
//                 <motion.div
//                   key={festival.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="group"
//                 >
//                   <div className="relative aspect-[0.8] overflow-hidden rounded-[24px]">
//                     <img
//                       src={festival.image}
//                       alt={festival.name}
//                       className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

//                     <div className="absolute bottom-5 left-5">
//                       <p className="mb-1 text-xs uppercase tracking-widest text-white/50">
//                         {festival.date}
//                       </p>
//                       <h3 className="text-xl font-semibold">
//                         {festival.name}
//                       </h3>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}

//             </div>
//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           TRAVEL PLANNER
//       ========================================================= */}
//       <section id="plan" className="px-6 py-28 md:px-12">

//         <div className="mx-auto max-w-[1350px]">

//           <div className="relative overflow-hidden rounded-[36px] bg-[#dcd5c8] p-8 md:p-16">

//             <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#e84c2f]/10 blur-3xl" />

//             <div className="relative grid gap-12 md:grid-cols-[1.2fr_1fr]">

//               <div>
//                 <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#e84c2f] text-white">
//                   <Compass size={21} />
//                 </div>

//                 <h2 className="max-w-2xl text-5xl font-semibold leading-[1] tracking-[-0.06em] md:text-7xl">
//                   Your next
//                   <br />
//                   mountain story
//                   <br />
//                   starts here.
//                 </h2>

//                 <p className="mt-7 max-w-lg text-base leading-7 text-black/55">
//                   Build a journey around the places, experiences and pace
//                   that feels right for you.
//                 </p>

//                 <button className="mt-9 flex items-center gap-3 rounded-full bg-[#191919] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#e84c2f]">
//                   Plan my journey
//                   <ArrowRight size={17} />
//                 </button>
//               </div>

//               <div className="flex flex-col justify-end">

//                 {[
//                   ["01", "Choose your season"],
//                   ["02", "Pick your destinations"],
//                   ["03", "Add experiences"],
//                   ["04", "Start your journey"],
//                 ].map(([num, title]) => (
//                   <div
//                     key={num}
//                     className="flex items-center justify-between border-b border-black/10 py-5"
//                   >
//                     <div className="flex items-center gap-5">
//                       <span className="text-xs text-black/35">{num}</span>
//                       <span className="font-medium">{title}</span>
//                     </div>

//                     <ChevronRight size={17} className="text-black/40" />
//                   </div>
//                 ))}

//               </div>

//             </div>
//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           FINAL CTA
//       ========================================================= */}
//       <section className="relative min-h-[620px] overflow-hidden">

//         <img
//           src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2200&q=90"
//           alt="Himalayan landscape"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/45" />

//         <div className="relative z-10 flex min-h-[620px] items-center justify-center px-6 text-center text-white">

//           <div>

//             <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/60">
//               Himachal Pradesh
//             </p>

//             <h2 className="text-6xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-[110px]">
//               See you
//               <br />
//               <span className="text-[#ff694c]">in the mountains.</span>
//             </h2>

//             <button className="mx-auto mt-10 flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#191919]">
//               Explore Himachal
//               <ArrowRight size={17} />
//             </button>

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           FOOTER
//       ========================================================= */}
//       <footer className="bg-[#191919] px-6 py-10 text-white md:px-12">

//         <div className="mx-auto flex max-w-[1350px] flex-col justify-between gap-8 md:flex-row md:items-center">

//           <div className="flex items-center gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e84c2f]">
//               <Mountain size={17} />
//             </div>

//             <span className="font-semibold">
//               Himachal<span className="text-[#e84c2f]">.</span>
//             </span>
//           </div>

//           <div className="flex flex-wrap gap-6 text-sm text-white/45">
//             <a href="#destinations" className="hover:text-white">
//               Destinations
//             </a>
//             <a href="#experiences" className="hover:text-white">
//               Experiences
//             </a>
//             <a href="#festivals" className="hover:text-white">
//               Festivals
//             </a>
//             <a href="#plan" className="hover:text-white">
//               Plan Trip
//             </a>
//           </div>

//           <p className="text-xs text-white/30">
//             © 2026 Himachal
//           </p>

//         </div>
//       </footer>

//     </main>
//   );
// }