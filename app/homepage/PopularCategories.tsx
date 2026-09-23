import Link from "next/link";

const categories = [
  {
    name: "Heritage",
    icon: "🏛️",
    description: "Explore historical monuments",
  },
  {
    name: "Nature",
    icon: "🌿",
    description: "Mountains, lakes & beautiful landscapes",
  },
  {
    name: "Religious",
    icon: "🛕",
    description: "Sacred places & spiritual journeys",
  },
  {
    name: "Adventure",
    icon: "🧗",
    description: "Thrilling activities and experiences",
  },
  {
    name: "Beaches",
    icon: "🏝️",
    description: "Relaxing beaches and water sports",
  },
  {
    name: "Mountains",
    icon: "🏔️",
    description: "Explore breathtaking mountain ranges",
  },
];

export default function PopularCategories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            Popular Categories
          </h2>

          <p className="mt-2 text-gray-500">
            Find experiences according to your interest
          </p>
        </div>

        <Link
          href="/categories"
          className="font-semibold text-orange-500 hover:text-orange-600"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/categories/${category.name.toLowerCase()}`}
            className="rounded-2xl border bg-white p-5 text-center transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
          >
            <div className="text-4xl">
              {category.icon}
            </div>

            <h3 className="mt-3 font-bold">
              {category.name}
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              {category.description}
            </p>
          </Link>
        ))}

      </div>
    </section>
  );
}