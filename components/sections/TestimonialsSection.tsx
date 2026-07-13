"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Testimonials } from "@/assets/content/ibest/about";

// Client testimonials, one at a time, with manual paging.
export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonial = Testimonials[index];

  const step = (dir: number) =>
    setIndex((i) => (i + dir + Testimonials.length) % Testimonials.length);

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our"
          highlight="clients say"
        />

        <Reveal className="mx-auto mt-14 max-w-4xl 5xl:max-w-6xl">
          <figure className="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-slate-100" />

            {/* key remounts on change so the fade replays for each quote */}
            <div key={index} className="relative animate-fadeIn">
              <blockquote className="text-lg leading-relaxed text-slate-700 md:text-xl md:leading-relaxed 4xl:text-2xl">
                {testimonial.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-base font-bold text-white">
                  {testimonial.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-primary-500">
                    {testimonial.name}
                  </span>
                  <span className="block text-sm text-slate-500">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2">
                {Testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 bg-accent-500"
                        : "w-4 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:border-accent-500 hover:bg-accent-500 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:border-accent-500 hover:bg-accent-500 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
