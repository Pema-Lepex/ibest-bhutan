import { Heading2, Heading3 } from "@/components";
import Reveal from "@/components/common/Reveal";
import { AboutContent } from "@/assets/content/about/AboutContent";
import Icon from "./Icon";

const { about, values } = AboutContent;

// About Us section — company intro, mission and core values.
export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        {/* Intro */}
        <Reveal className="mx-auto max-w-3xl 5xl:max-w-5xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-500">
            {about.eyebrow}
          </span>
          <Heading2 className="mt-3 text-primary-500">
            {about.heading}{" "}
            <span className="text-accent-500">{about.headingSpan}</span>
          </Heading2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            {about.body}
          </p>
        </Reveal>

        {/* Mission */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {about.mission.map((point, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-primary-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                  <Icon name="target" className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-semibold text-primary-500">
                    {about.missionTitle}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 md:text-base">
                    {point}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Core values */}
        <Reveal className="mt-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-500">
            {values.eyebrow}
          </span>
          <Heading3 className="mt-3 text-primary-500">{values.heading}</Heading3>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 120}>
              <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <Icon name="check" className="h-6 w-6" />
                </span>
                <h4 className="mt-4 text-lg font-semibold text-primary-500">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
