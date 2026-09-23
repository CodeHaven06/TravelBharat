"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";
import { statesData } from "./statesData";

export default function StateSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filteredStates = statesData.filter((state) =>
    state.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="bg-[#fffaf3] px-6 pb-8">
      <div className="mx-auto max-w-3xl">

        <div className="relative">

          <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition focus-within:border-orange-400 focus-within:shadow-md">
            <Search className="mr-3 text-gray-400" size={20} />

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a state..."
              className="w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Search Results */}
          {query && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">

              {filteredStates.length > 0 ? (
                <div className="max-h-72 overflow-y-auto p-2">

                  {filteredStates.map((state) => (
                    <button
                      key={state.code}
                      onClick={() => {
                        router.push(`/states/${state.slug}`);
                        setQuery("");
                      }}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-orange-50"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
                        <MapPin
                          size={16}
                          className="text-orange-500"
                        />
                      </span>

                      <div>
                        <p className="font-medium text-gray-900">
                          {state.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          Explore state
                        </p>
                      </div>
                    </button>
                  ))}

                </div>
              ) : (
                <div className="px-5 py-6 text-center text-sm text-gray-500">
                  No state found
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </section>
  );
}