import Link from "next/link";

const trendingStates = [
  {
    name: "Himachal Pradesh",
    destinations: "80+ Destinations",
    bestTime: "Mar - Jun",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Uttarakhand",
    destinations: "100+ Destinations",
    bestTime: "Apr - Jun",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kerala",
    destinations: "90+ Destinations",
    bestTime: "Sep - Mar",
    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rajasthan",
    destinations: "120+ Destinations",
    bestTime: "Oct - Mar",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Karnataka",
    destinations: "110+ Destinations",
    bestTime: "Oct - Feb",
    image:
      "https://images.unsplash.com/photo-1600084880850-8c1f0e2f1f0c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ExploreIndia() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            Explore India
          </h2>

          <p className="mt-2 text-gray-500">
            Choose a state and start exploring
          </p>
        </div>

        <Link
          href="/states"
          className="font-semibold text-orange-500 hover:text-orange-600"
        >
          View All →
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {trendingStates.slice(0, 4).map((state) => (
          <Link
            key={state.name}
            href={`/states/${state.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={state.image}
                alt={state.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold">
                {state.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                📍 {state.destinations}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                🕐 Best Time: {state.bestTime}
              </p>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}