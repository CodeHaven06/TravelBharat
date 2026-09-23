type StatsCardsProps = {
  totalDestinations: number;
  totalStates: number;
  totalCategories: number;
  totalImages: number;
};

export default function StatsCards({
  totalDestinations,
  totalStates,
  totalCategories,
  totalImages,
}: StatsCardsProps) {
  const stats = [
    {
      title: "Total Destinations",
      value: totalDestinations,
      icon: "📍",
    },
    {
      title: "Total States",
      value: totalStates,
      icon: "🗺️",
    },
    {
      title: "Total Categories",
      value: totalCategories,
      icon: "🏷️",
    },
    {
      title: "Total Images",
      value: totalImages,
      icon: "🖼️",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl bg-white p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                {stat.title}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                {stat.value}
              </h3>
            </div>

            <div className="text-3xl">
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}