import Link from "next/link";

export default function StatesCTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-20">

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Explore India?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-orange-50">
          From majestic mountains to peaceful beaches, discover the
          incredible diversity of India and plan your next adventure.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/destinations"
            className="rounded-xl bg-white px-7 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
          >
            Explore Destinations
          </Link>

          <Link
            href="/categories"
            className="rounded-xl border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-orange-600"
          >
            Browse Categories
          </Link>

        </div>
      </div>
    </section>
  );
}