"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { WhyChooseUs } from "@/assets/content/ibest/about";

// "Why Choose Us" — the five pillars as an accordion. Each pillar's full text
// is only a few paragraphs, so it expands in place instead of getting its own
// page. One panel is open at a time; clicking the open one closes it.
export default function WhyChooseUsSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="why" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Five reasons clients"
          highlight="stay with us"
          subtitle="We are flexible, responsive, and we adapt according to your needs with speed and efficiency. We're happy to stake our reputation on it."
        />

        <div className="mx-auto mt-14 max-w-4xl 5xl:max-w-6xl">
          <ul className="flex flex-col gap-4">
            {WhyChooseUs.map((pillar, i) => {
              const expanded = open === i;

              return (
                <Reveal key={pillar.title} delay={i * 80}>
                  <li
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      expanded
                        ? "border-accent-200 bg-accent-50/40 shadow-md"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => setOpen(expanded ? null : i)}
                        className="flex w-full items-center gap-4 px-6 py-5 text-left md:px-8"
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                            expanded
                              ? "bg-accent-500 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {i + 1}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-base font-semibold text-primary-500 md:text-lg">
                            {pillar.title}
                          </span>
                          <span
                            className={`mt-0.5 block text-sm text-slate-500 transition-opacity duration-300 ${
                              expanded ? "opacity-0 md:hidden" : "opacity-100"
                            }`}
                          >
                            {pillar.short}
                          </span>
                        </span>

                        <Plus
                          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                            expanded ? "rotate-45 text-accent-600" : ""
                          }`}
                        />
                      </button>
                    </h3>

                    {/* grid-rows trick animates to the content's natural height */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        expanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 px-6 pb-6 pl-19 md:px-8 md:pb-8 md:pl-21">
                          {pillar.paragraphs.map((text, j) => (
                            <p
                              key={j}
                              className="text-sm leading-relaxed text-slate-600 md:text-base"
                            >
                              {text}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
