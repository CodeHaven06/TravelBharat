"use client";

import { useRouter } from "next/navigation";
import IndiaMap from "react-svgmap-india";
import { statesData } from "./statesData";

const stateRoutes: Record<string, string> = Object.fromEntries(
  statesData.map((state) => [state.code, state.slug])
);

export default function StatesMap() {
  const router = useRouter();

  const handleStateClick = (stateCode: string) => {
    const slug = stateRoutes[stateCode];

    if (!slug) return;

    router.push(`/states/${slug}`);
  };

  return (
    <section className="relative overflow-hidden bg-[#fffaf3] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            🗺️ Explore India
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Explore States of India
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Choose a state to discover its destinations, culture,
            cuisine and unique travel experiences.
          </p>
        </div>

        {/* Map Area */}
        <div className="relative mx-auto flex min-h-[600px] max-w-6xl items-center justify-center overflow-hidden rounded-[2rem] bg-white px-4 py-10 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">

          {/* Decorative background */}
          <div className="pointer-events-none absolute left-10 top-10 h-40 w-40 rounded-full bg-orange-100/40 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-10 h-52 w-52 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02]">
            <IndiaMap
              onClick={handleStateClick}
              size="800px"
              mapColor="#e5e7eb"
              strokeColor="#ffffff"
              strokeWidth="1.2"
              hoverColor="#f97316"
            />
          </div>
        </div>

        {/* Hint */}
        <div className="mt-7 flex items-center justify-center gap-2 text-sm text-gray-500">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          Hover over a state and click to explore
        </div>

      </div>
    </section>
  );
}