export default function StatsSection() {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 py-10 md:grid-cols-4 lg:px-8">

        <div className="rounded-xl bg-orange-50 p-5 text-center">
          <p className="text-3xl font-bold text-orange-500">
            28
          </p>

          <p className="mt-1 text-sm text-gray-600">
            States & UTs
          </p>
        </div>

        <div className="rounded-xl bg-green-50 p-5 text-center">
          <p className="text-3xl font-bold text-green-600">
            1000+
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Destinations
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-5 text-center">
          <p className="text-3xl font-bold text-blue-600">
            50+
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Categories
          </p>
        </div>

        <div className="rounded-xl bg-red-50 p-5 text-center">
          <p className="text-3xl font-bold text-red-500">
            10M+
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Happy Travellers
          </p>
        </div>

      </div>
    </section>
  );
}