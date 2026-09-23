import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600">

      <div className="mx-auto max-w-5xl px-6 py-16 text-center text-white">

        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to Explore India?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-orange-50">
          Discover amazing destinations, rich culture, beautiful
          landscapes and unforgettable experiences across India.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/states"
            className="rounded-lg bg-white px-7 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
          >
            Explore States
          </Link>

          <Link
            href="/destinations"
            className="rounded-lg border border-white px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Browse Destinations
          </Link>

        </div>

      </div>
    </section>
  );
}