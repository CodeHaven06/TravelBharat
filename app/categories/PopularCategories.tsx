"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const popular = [
  {
    title: "Beaches",
    subtitle: "Sun • Sea • Sand",
    image: "https://blog.redbus.in/wp-content/uploads/2024/02/beaches-in-Goa.png",
    href: "/categories/beaches",
  },
  {
    title: "Mountains",
    subtitle: "Peaks • Valleys • Adventure",
    image: "https://m.media-amazon.com/images/I/71K4EWjvoPL.jpg",
    href: "/categories/mountains",
  },
  {
    title: "Spiritual",
    subtitle: "Faith • Peace • Journeys",
    image: "https://www.dadabhagwan.org/images/trimandir/trimandir/why-trimandir.jpg",
    href: "/categories/spiritual",
  },
];


export default function PopularCategories() {
  return (
    <section className="bg-[#f5eee4] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              Popular Categories
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-slate-800 sm:text-5xl lg:text-6xl">
              Start with
              <br />
              <span className="text-orange-600">these favourites.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            Not sure where to begin? These experiences are some of the easiest
            ways to start discovering India.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {popular.map((item, index) => (
            <Link
              href={item.href}
              key={item.title}
              className="group">
            
              <div className="relative h-[430px] overflow-hidden rounded-[2.5rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"/>
                

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7 text-white">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                        {item.subtitle}
                      </p>

                      <h3 className="mt-2 text-3xl font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-slate-800 transition group-hover:-translate-y-1">
                      <ArrowUpRight size={19} />
                    </div>
                  </div>
                </div>

                <div className="absolute left-6 top-6 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                  0{index + 1}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}