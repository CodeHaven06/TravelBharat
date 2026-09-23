import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RajasthanCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
          Your Journey Awaits
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl">
          Rajasthan has been
          <span className="text-orange-600"> waiting for you.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-500">
          From royal palaces to golden deserts, discover the places,
          stories and experiences that make Rajasthan unforgettable.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Explore Destinations
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/states"
            className="text-sm font-semibold text-neutral-700 transition hover:text-orange-600"
          >
            Explore More States →
          </Link>

        </div>

      </div>
    </section>
  );
}



// import Link from "next/link";
// import { ArrowUpRight, MapPin } from "lucide-react";

// export default function RajasthanCTA() {
//   return (
//     <section className="px-6 py-24">
//       <div className="mx-auto max-w-7xl">

//         <div className="grid overflow-hidden rounded-[2.5rem] bg-orange-50 lg:grid-cols-2">

//           {/* Left Content */}
//           <div className="flex flex-col justify-center px-8 py-14 sm:px-12 lg:px-16 lg:py-20">

//             <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-orange-600">
//               <span className="h-2 w-2 rounded-full bg-orange-500" />
//               PLAN YOUR JOURNEY
//             </div>

//             <h2 className="max-w-xl text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl">
//               Rajasthan is more than a destination.
//               <span className="block text-orange-600">
//                 It's an experience.
//               </span>
//             </h2>

//             <p className="mt-6 max-w-lg text-base leading-8 text-neutral-600">
//               Walk through royal palaces, explore ancient forts, wander
//               through colourful bazaars and experience the magic of the
//               Thar Desert.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm">
//                 🏰 Heritage
//               </span>

//               <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm">
//                 🏜️ Desert
//               </span>

//               <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm">
//                 🎨 Culture
//               </span>
//             </div>

//             <div className="mt-9">
//               <Link
//                 href="/destinations"
//                 className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
//               >
//                 Start Exploring
//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
//                   <ArrowUpRight
//                     size={16}
//                     className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                   />
//                 </span>
//               </Link>
//             </div>
//           </div>

//           {/* Right Visual */}
//           <div className="relative min-h-[420px] overflow-hidden lg:min-h-[560px]">

//             <img
//               src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80"
//               alt="Rajasthan"
//               className="absolute inset-0 h-full w-full object-cover"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//             {/* Location Tag */}
//             <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-sm font-semibold text-neutral-800 shadow-lg backdrop-blur-sm">
//               <MapPin size={16} className="text-orange-600" />
//               Rajasthan, India
//             </div>

//             {/* Bottom Info */}
//             <div className="absolute bottom-6 left-6 right-6">

//               <div className="rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-sm">

//                 <div className="flex items-end justify-between gap-4">

//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
//                       Discover
//                     </p>

//                     <h3 className="mt-1 text-xl font-bold text-neutral-900">
//                       The Land of Kings
//                     </h3>
//                   </div>

//                   <Link
//                     href="/destinations"
//                     className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-orange-600"
//                   >
//                     <ArrowUpRight size={20} />
//                   </Link>

//                 </div>

//               </div>

//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }



// import Link from "next/link";
// import { ArrowRight, MapPin } from "lucide-react";

// export default function RajasthanCTA() {
//   return (
//     <section className="px-6 py-24">
//       <div className="mx-auto max-w-7xl">
//         <div className="relative overflow-hidden rounded-[2.5rem] bg-[#171717] px-8 py-16 sm:px-14 lg:px-20">

//           {/* Decorative Elements */}
//           <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-2xl" />
//           <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500/10 blur-2xl" />

//           <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_auto]">

//             {/* Left Content */}
//             <div className="max-w-3xl">

//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
//                 <MapPin size={16} />
//                 Rajasthan is calling
//               </div>

//               <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
//                 Your Royal
//                 <span className="text-orange-400"> Rajasthan Adventure</span>
//                 {" "}Starts Here
//               </h2>

//               <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
//                 Explore majestic forts, colourful cities, golden deserts,
//                 peaceful lakes and the timeless culture of Rajasthan.
//                 Discover places that turn every journey into a memory.
//               </p>

//               {/* Buttons */}
//               <div className="mt-9 flex flex-col gap-4 sm:flex-row">

//                 <Link
//                   href="/destinations"
//                   className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
//                 >
//                   Explore Rajasthan
//                   <ArrowRight
//                     size={18}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <Link
//                   href="/states"
//                   className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-400"
//                 >
//                   Explore More States
//                 </Link>

//               </div>
//             </div>

//             {/* Right Side */}
//             <div className="hidden lg:flex lg:justify-center">
//               <div className="flex h-44 w-44 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/5">
//                 <div className="flex h-32 w-32 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10">
//                   <span className="text-6xl">🏰</span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }