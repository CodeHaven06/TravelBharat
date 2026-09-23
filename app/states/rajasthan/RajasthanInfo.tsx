import {
  CalendarDays,
  Clock3,
  IndianRupee,
  MapPin,
  Plane,
  Train,
} from "lucide-react";

const travelInfo = [
  {
    icon: CalendarDays,
    title: "Best Time to Visit",
    value: "October – March",
    description: "Pleasant weather for sightseeing and exploring.",
  },
  {
    icon: Clock3,
    title: "Ideal Duration",
    value: "7 – 10 Days",
    description: "Enough time to explore the major destinations.",
  },
  {
    icon: IndianRupee,
    title: "Budget",
    value: "₹1,500 – ₹5,000/day",
    description: "Approximate budget depending on your travel style.",
  },
];

const waysToReach = [
  {
    icon: Plane,
    title: "By Air",
    description:
      "Jaipur International Airport is the main airport and connects Rajasthan with major Indian cities.",
  },
  {
    icon: Train,
    title: "By Train",
    description:
      "Rajasthan has excellent railway connectivity with Delhi, Mumbai, Ahmedabad and other major cities.",
  },
  {
    icon: MapPin,
    title: "By Road",
    description:
      "Well-connected highways make road trips between Jaipur, Jodhpur, Udaipur and Jaisalmer convenient.",
  },
];

export default function RajasthanInfo() {
  return (
    <section className="bg-[#fffaf5] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            ✨ Plan Your Trip
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Rajasthan Travel Guide
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Everything you need to know before planning your Rajasthan
            adventure.
          </p>
        </div>

        {/* Travel Info */}
        <div className="grid gap-6 md:grid-cols-3">
          {travelInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Icon size={24} />
                </div>

                <p className="text-sm font-medium text-gray-500">
                  {item.title}
                </p>

                <h3 className="mt-1 text-xl font-bold text-gray-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How to Reach */}
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-bold text-gray-900">
            How to Reach Rajasthan
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {waysToReach.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}