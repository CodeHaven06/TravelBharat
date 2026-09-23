export default function RajasthanAbout() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              About Rajasthan
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Experience the Royal Land of India
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Rajasthan is known for its magnificent forts, grand palaces,
              colorful traditions and fascinating history. From the golden
              sands of the Thar Desert to the beautiful lakes of Udaipur,
              every part of the state offers something unique.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Explore ancient architecture, traditional handicrafts,
              delicious Rajasthani cuisine and vibrant festivals while
              experiencing the warm hospitality of Rajasthan.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://assets.architecturaldigest.in/photos/63da0f7a2d4955ac20754d9e/16:9/w_1616,h_909,c_limit/The%20Fort%20Pokaran%202%20(1).png"
              alt="Rajasthan Palace"
              className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}