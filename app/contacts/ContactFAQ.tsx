"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I suggest a destination to TravelBharat?",
    answer:
      "Yes! We love discovering new places. You can send us your destination suggestion through the contact form.",
  },
  {
    question: "Can I report incorrect travel information?",
    answer:
      "Absolutely. If you notice information that needs to be corrected or updated, please let us know and we'll look into it.",
  },
  {
    question: "Can I collaborate with TravelBharat?",
    answer:
      "Yes. If you're interested in a travel, content or business collaboration, mention it in your message and our team can get in touch.",
  },
  {
    question: "Can TravelBharat help me plan my complete trip?",
    answer:
      "TravelBharat is designed to help you discover destinations, states, categories and travel inspiration. You can use the information to plan your own journey.",
  },
];

export default function ContactFAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-[#dff1ed] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Quick Help
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-slate-800 sm:text-5xl">
            Before you message us,
            <br />
            <span className="text-emerald-700">you might find this useful.</span>
          </h2>
        </div>

        <div className="mt-14 divide-y divide-emerald-200 border-y border-emerald-200">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-6 text-left">
                
                  <span className="text-base font-semibold text-slate-800 sm:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700">
                    {isOpen ? (
                      <Minus size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-14">
                    <p className="text-sm leading-7 text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}