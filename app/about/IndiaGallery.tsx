"use client";

// import Image from "next/image";

const gallery = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4qTLifuVqbQvgYF1IZJ_UWHLZNhmvwd4I0W_Rkn9cw&s=10",
    title: "Ladakh-",
    category: "Mountains",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSearoDW_jfx9l94i1jAIYYYsrbl-AA1vFjrvMd3v7OSg&s=10",
    title: "Uttarakhand",
    category: "Spiritual",
  },
  {
    image: "https://img.avianexperiences.com/trek/ac355e17-7628-4659-819d-266e615bded9",
    title: "Andaman & Nicobar Islands",
    category: "Adventure",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvcn5hIM3EVE2Fnpbg3BgJpTresQ7KuufGLMDdInQ7A&s=10",
    title: "Chennai",
    category: "Coast",
  },
  {
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/jagannath-temple-puri-odisha-tri-hero?qlt=82&ts=1727166354195",
    title: "Odisha",
    category: "Culture",
  },
];

export default function IndiaGallery() {
  return (
    <section className="bg-[#f5eee4] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              India Through Our Lens
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              A country full of
              <br />
              <span className="text-orange-600">
                unforgettable places.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            From the Himalayas to the coast, every region brings a different
            landscape, culture and story.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-12">

          <GalleryImage
            item={gallery[0]}
            className="col-span-2 h-[330px] lg:col-span-5 lg:h-[500px]"/>
          

          <GalleryImage
            item={gallery[1]}
            className="col-span-1 h-[250px] lg:col-span-3 lg:h-[330px]"/>
          

          <GalleryImage
            item={gallery[2]}
            className="col-span-1 h-[250px] lg:col-span-4 lg:h-[330px]"/>
          

          <GalleryImage
            item={gallery[3]}
            className="col-span-1 h-[250px] lg:col-span-4 lg:h-[330px]"/>
          

          <GalleryImage
            item={gallery[4]}
            className="col-span-1 h-[250px] lg:col-span-4 lg:h-[330px]"/>
          

        </div>
      </div>
    </section>
  );
}

function GalleryImage({
  item,
  className,
}: {
  item: (typeof gallery)[number];
  className: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] ${className}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition duration-700 hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute bottom-5 left-5 z-10 text-white">
        <p className="text-xs uppercase tracking-[0.15em] text-white/60">
          {item.category}
        </p>

        <h3 className="mt-1 text-xl font-semibold sm:text-2xl">
          {item.title}
        </h3>
      </div>
    </div>
  );
}