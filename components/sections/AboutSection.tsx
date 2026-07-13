import Image from "next/image";
import { Compass, Target } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Intro, Mission, Purpose } from "@/assets/content/ibest/about";

// "Who We Are" — the company intro, purpose and mission.
export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow={Intro.eyebrow}
              title="iBEST Institute"
              highlight="and Consultancy"
              align="left"
            />

            <div className="mt-6 space-y-5">
              {Intro.paragraphs.map((text, i) => (
                <Reveal key={i} delay={i * 100}>
                  <p className="text-base leading-relaxed text-slate-600 md:text-lg 4xl:text-2xl">
                    {text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Image, with the purpose statement floating over its corner */}
          <Reveal delay={150}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={Intro.image}
                  alt="iBEST Institute & Consultancy"
                  width={1200}
                  height={596}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              <div className="mt-6 rounded-3xl bg-primary-500 p-7 shadow-lg lg:absolute lg:-bottom-10 lg:-left-10 lg:mt-0 lg:max-w-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-white">
                  <Compass className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {Purpose.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {Purpose.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mission */}
        <div className="mt-24 lg:mt-32">
          <SectionHeading
            eyebrow="What drives us"
            title={Mission.heading}
            subtitle="Five commitments that shape every programme we run and every client we take on."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Mission.items.map((item, i) => (
              <Reveal key={item} delay={(i % 3) * 120}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-slate-50/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-200 hover:bg-white hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-white transition-colors duration-300 group-hover:bg-accent-500">
                      <Target className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
