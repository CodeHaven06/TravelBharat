import Link from "next/link";

const popularStates = [
  {
    name: "Rajasthan",
    description: "Royal palaces, forts and colorful culture",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kashmir",
    description: "Snow-capped mountains, serene lakes and lush valleys",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Himachal Pradesh",
    description: "Mountains, valleys and peaceful hill stations",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Goa",
    description: "Beautiful beaches and vibrant coastal life",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
  },
];

export default function PopularStates() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Heading */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Discover India
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Popular States
            </h2>

            <p className="mt-2 text-gray-600">
              Explore some of the most loved destinations across India.
            </p>
          </div>

          <Link
            href="/states"
            className="hidden text-sm font-semibold text-orange-500 hover:text-orange-600 sm:block"
          >
            View All →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularStates.map((state) => (
            <Link
              key={state.name}
              href={`/states/${state.name.toLowerCase().replaceAll(" ", "-")}`}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={state.image}
                  alt={state.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900">
                  {state.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {state.description}
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-orange-500">
                  Explore State →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
} 