import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Clapperboard, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Services } from "@/assets/content/ibest/services";

const ICONS: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  film: Clapperboard,
};

// "What We Do" — the three service units. Each card teases the unit and links
// to its own page, where the full copy and course/service list live.
export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Our"
          highlight="Services"
          subtitle="Three units that work together — training that builds skills, consultancy that builds businesses, and multimedia that tells the story."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {Services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? GraduationCap;

            return (
              <Reveal key={service.slug} delay={i * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-accent-200">
                  {/* Cover */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary-900/75 to-primary-900/10" />

                    <span className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl font-semibold text-primary-500">
                      {service.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                      {service.summary}
                    </p>

                    {/* A couple of list items as a taste of what's on the page */}
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.items.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {item}
                        </li>
                      ))}
                      {service.items.length > 3 && (
                        <li className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                          +{service.items.length - 3} more
                        </li>
                      )}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
