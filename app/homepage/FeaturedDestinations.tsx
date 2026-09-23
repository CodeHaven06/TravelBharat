import Link from "next/link";

const featuredDestinations = [
  {
    name: "Taj Mahal",
    location: "Uttar Pradesh",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Goa Beaches",
    location: "Goa",
    category: "Beaches",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kerala Backwaters",
    location: "Kerala",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Leh Ladakh",
    location: "Ladakh",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Varanasi Ghats",
    location: "Uttar Pradesh",
    category: "Religious",
    image:
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Featured Destinations
            </h2>

            <p className="mt-2 text-gray-500">
              Discover India's most beautiful places
            </p>
          </div>

          <Link
            href="/destinations"
            className="font-semibold text-orange-500 hover:text-orange-600"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {featuredDestinations.map((destination) => (
            <Link
              key={destination.name}
              href={`/destinations/${destination.name
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-orange-600">
                  {destination.category}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold">
                  {destination.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  📍 {destination.location}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}