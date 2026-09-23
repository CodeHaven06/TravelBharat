export default function RajasthanHero() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=85"
        alt="Rajasthan"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-3xl text-white">

          <span className="inline-flex rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold">
            🏰 The Land of Kings
          </span>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Rajasthan
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-100">
            Discover magnificent forts, royal palaces, colorful markets,
            golden deserts and the rich cultural heritage of Rajasthan.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">
              🏰 Heritage
            </span>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">
              🏜️ Desert
            </span>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">
              🎨 Culture
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}