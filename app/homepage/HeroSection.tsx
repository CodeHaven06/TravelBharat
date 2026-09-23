export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left */}
          <div>
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              🇮🇳 Incredible India
            </span>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight md:text-6xl">
              Explore India
              <br />

              <span className="text-orange-500">
                State
              </span>{" "}
              <span className="text-green-700">
                by State
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              Discover the beauty, culture, heritage and adventures
              across incredible India.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search destinations, states, cities..."
                className="flex-1 rounded-full border border-gray-300 bg-white px-5 py-3 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />

              <button className="rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600">
                Search
              </button>
            </div>

            {/* Filters */}
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 hover:border-orange-400">
                📍 All States
              </button>

              <button className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 hover:border-orange-400">
                🏷️ All Categories
              </button>

              <button className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 hover:border-orange-400">
                📌 All Cities
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85"
                alt="India"
                className="h-[400px] w-full object-cover lg:h-[500px]"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-2xl font-bold text-orange-500">
                1000+
              </p>

              <p className="text-sm text-gray-600">
                Destinations
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}