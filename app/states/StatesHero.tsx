export default function StatesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🇮🇳 Incredible India
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Explore India{" "}
            <span className="text-orange-500">State</span>{" "}
            <span className="text-green-600">by State</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Discover the unique culture, heritage, landscapes and experiences
            waiting for you in every corner of India.
          </p>

        </div>
      </div>
    </section>
  );
}