"use client";

const stats = [
  {
    number: "1000+",
    label: "Destinations",
  },
  {
    number: "28+",
    label: "States & UTs",
  },
  {
    number: "10M+",
    label: "Happy Travellers",
  },
  {
    number: "50+",
    label: "Categories",
  },
];

export default function AboutStats() {
  return (
    <section className="bg-[#fffaf3] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.75rem] border border-orange-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <p className="text-3xl font-bold text-orange-500 sm:text-4xl">
                {stat.number}
              </p>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}