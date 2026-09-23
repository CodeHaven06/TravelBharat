const galleryImages = [
  "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
];

export default function TravelGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Travel Gallery
        </h2>

        <p className="mt-2 text-gray-500">
          Beautiful moments from incredible India
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">

        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl ${
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : ""
            }`}
          >
            <img
              src={image}
              alt={`India travel ${index + 1}`}
              className={`w-full object-cover transition duration-500 hover:scale-105 ${
                index === 0
                  ? "h-full min-h-[300px]"
                  : "h-40"
              }`}
            />
          </div>
        ))}

      </div>
    </section>
  );
}