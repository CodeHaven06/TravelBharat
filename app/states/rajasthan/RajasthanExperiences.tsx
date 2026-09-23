import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Royal Heritage",
    description:
      "Walk through magnificent forts, palaces and historic cities that showcase Rajasthan's royal legacy.",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Desert Adventures",
    description:
      "Experience golden dunes, camel rides, desert sunsets and peaceful evenings under the stars.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Culture & Traditions",
    description:
      "Discover vibrant markets, traditional crafts, local flavours, music and colourful celebrations.",
    image:
      "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function RajasthanExperiences() {
  return (
    <section className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Experience Rajasthan
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Stories you'll take
              <span className="block text-orange-600">
                home with you.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-neutral-500 md:text-right">
            From royal architecture to desert adventures, discover the
            experiences that make Rajasthan truly unforgettable.
          </p>

        </div>

        {/* Image Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Equal Image Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Number */}
                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-neutral-900 backdrop-blur-sm">
                  {String(experiences.indexOf(experience) + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

              </div>

              {/* Content */}
              <div className="flex min-h-[220px] flex-col p-6">

                <h3 className="text-2xl font-bold text-neutral-900">
                  {experience.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {experience.description}
                </p>

                <Link
                  href="/destinations"
                  className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-neutral-900 transition group-hover:text-orange-600"
                >
                  Explore experience

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 transition group-hover:border-orange-500">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}