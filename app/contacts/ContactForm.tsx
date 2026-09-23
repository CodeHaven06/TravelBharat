"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      id="contact-form"
      className="rounded-[2.5rem] bg-white p-7 shadow-xl sm:p-10 lg:p-12">
    
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
          Send a Message
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-slate-800 sm:text-4xl">
          How can we help?
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          Fill in the details below and tell us what's on your mind.
        </p>
      </div>

      {submitted ? (
        <div className="mt-10 rounded-3xl bg-emerald-50 p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 size={28} />
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-slate-800">
            Message received!
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
            Thank you for reaching out to TravelBharat. We'll get back to you
            as soon as possible.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm font-semibold text-emerald-700 hover:text-emerald-600">
          
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5">
        
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Your Name
            </label>

            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"/>
            
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"/>
            
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Subject
            </label>

            <input
              type="text"
              required
              placeholder="What is this about?"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"/>
            
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Your Message
            </label>

            <textarea
              required
              rows={6}
              placeholder="Write your message here..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"/>
            
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#17333a] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-700">
          
            Send Message

            <Send
              size={17}
              className="transition-transform group-hover:translate-x-1"/>
            
          </button>
        </form>
      )}
    </div>
  );
}