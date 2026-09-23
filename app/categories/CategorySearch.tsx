"use client";

import { Search } from "lucide-react";
import { useState } from "react";

interface CategorySearchProps {
  onSearch: (value: string) => void;
}

export default function CategorySearch({
  onSearch,
}: CategorySearchProps) {
  const [query, setQuery] = useState("");

  function handleChange(value: string) {
    setQuery(value);
    onSearch(value);
  }

  return (
    <section className="bg-[#fffaf3] px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-4xl">

        <div className="relative">
          <Search
            size={21}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search beaches, mountains, heritage..."
            className="w-full rounded-full border border-slate-200 bg-white py-4 pl-14 pr-6 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 sm:py-5 sm:text-base"
          />
        </div>

        <p className="mt-3 text-center text-xs text-slate-400">
          Try searching for beaches, adventure, food, heritage or spirituality
        </p>

      </div>
    </section>
  );
}