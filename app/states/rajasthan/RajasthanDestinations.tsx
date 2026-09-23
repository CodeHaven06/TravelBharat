import Link from "next/link";

const destinations = [
  {
    number: "01",
    name: "Jaipur",
    subtitle: "The Pink City",
    description:
      "Explore magnificent forts, royal palaces, colorful bazaars and the rich heritage of Rajasthan's capital.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMvXPXblQwMDqpM-301AnVSkdIPaV7lFfyEhJl_FBkRg&s=10",
    places: "Amber Fort • City Palace • Hawa Mahal",
  },
  {
    number: "02",
    name: "Jodhpur",
    subtitle: "The Blue City",
    description:
      "Discover the majestic Mehrangarh Fort, blue-painted houses and the vibrant culture of Marwar.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wy2FzWwxMgcrcZrGrSJbbgpf60wrrV28TkljahSFMw&s=10",
    places: "Mehrangarh Fort • Blue City • Jaswant Thada",
  },
  {
    number: "03",
    name: "Udaipur",
    subtitle: "The City of Lakes",
    description:
      "Experience beautiful lakes, elegant palaces and romantic landscapes surrounded by the Aravalli hills.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwYstLIaCfHUKm2qqxT9e0S3Rze1ywrHH5uFaFBA4GA&s=10",
    places: "Lake Pichola • City Palace • Jag Mandir",
  },
  {
    number: "04",
    name: "Jaisalmer",
    subtitle: "The Golden City",
    description:
      "Step into the Thar Desert and experience golden architecture, sand dunes and unforgettable desert adventures.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU08_zQeHVy7XHxw1hDjTJvH0kMgk676Lxe8fEVNOBmg&s=10",
    places: "Jaisalmer Fort • Sam Sand Dunes • Patwon Ki Haveli",
  },
];

export default function RajasthanDestinations() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Places to Explore
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Your Rajasthan Journey
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            From royal cities to golden deserts, discover the experiences
            that make Rajasthan unforgettable.
          </p>
        </div>

        {/* Journey */}
        <div className="relative mt-16">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-orange-200 md:block" />

          <div className="space-y-20">
            {destinations.map((destination, index) => (
              <div
                key={destination.name}
                className="relative grid items-center gap-8 md:grid-cols-[80px_1fr_1fr]"
              >

                {/* Number */}
                <div className="relative z-10 hidden md:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-gray-50 bg-orange-500 text-sm font-bold text-white">
                    {destination.number}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`overflow-hidden rounded-3xl ${
                    index % 2 === 1 ? "md:order-3" : ""
                  }`}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-[330px] w-full object-fit transition duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <p className="text-sm font-bold text-orange-500">
                    {destination.number}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                    {destination.name}
                  </h3>

                  <p className="mt-1 text-lg font-medium text-green-600">
                    {destination.subtitle}
                  </p>

                  <p className="mt-5 leading-7 text-gray-600">
                    {destination.description}
                  </p>

                  <p className="mt-5 text-sm font-medium text-gray-500">
                    {destination.places}
                  </p>

                  <Link
                    href={`/destinations/${destination.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-500 transition hover:gap-3 hover:text-orange-600"
                  >
                    Explore {destination.name}
                    <span>→</span>
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}