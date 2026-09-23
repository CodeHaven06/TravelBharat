"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@travelbharat.com",
    description: "Send us an email anytime.",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 1234567890",
    description: "Mon - Sat, 9 AM - 6 PM.",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "New Delhi, India",
    description: "123, Incredible India Street.",
  },
  {
    icon: Clock3,
    label: "Working Hours",
    value: "9:00 AM — 6:00 PM",
    description: "Monday to Saturday.",
  },
];

export default function ContactInfo() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
        Contact Information
      </p>

      <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl">
        We're only a
        <br />
        <span className="text-orange-500">message away.</span>
      </h2>

      <p className="mt-6 max-w-md text-base leading-8 text-slate-500">
        Whether you have a question about a destination, want to share
        feedback or simply want to say hello, feel free to reach out.
      </p>

      <div className="mt-10 divide-y divide-orange-100 border-y border-orange-100">
        {contactDetails.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group flex gap-4 py-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <Icon size={19} />
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {item.value}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {item.description}
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="mt-1 text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}