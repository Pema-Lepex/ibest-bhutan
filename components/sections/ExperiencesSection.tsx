"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/ui/Lightbox";
import { Experiences } from "@/assets/content/ibest/services";

// "Our Experiences" — the story of the work, plus a photo gallery that opens
// into a full-screen viewer.
export default function ExperiencesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experiences" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <SectionHeading
          eyebrow={Experiences.eyebrow}
          title="Work we are"
          highlight="proud of"
        />

        <div className="mx-auto mt-12 max-w-4xl 5xl:max-w-6xl space-y-5">
          {Experiences.paragraphs.map((text, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg 4xl:text-2xl">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {Experiences.gallery.map((image, i) => (
            <Reveal key={image.src} delay={(i % 4) * 90}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open image ${i + 1} of ${Experiences.gallery.length}`}
                className="group relative block aspect-4/3 w-full cursor-zoom-in overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-xl hover:ring-accent-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Hover scrim + zoom affordance */}
                <span className="absolute inset-0 flex items-center justify-center bg-primary-900/0 transition-colors duration-300 group-hover:bg-primary-900/45">
                  <span className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/95 text-primary-600 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Maximize2 className="h-5 w-5" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={Experiences.gallery}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
