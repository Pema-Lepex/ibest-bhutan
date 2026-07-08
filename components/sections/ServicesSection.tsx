import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Heading2 } from "@/components";
import Reveal from "@/components/common/Reveal";
import { SERVICES_SUMMARY } from "@/assets/content/common/SiteContent";
import Icon from "./Icon";

// Map the content's icon names onto our inline icon set.
const ICON_MAP: Record<string, string> = {
  Code: "code",
  PenLine: "pen",
  Clapperboard: "clapper",
  Sparkles: "sparkles",
  Palette: "palette",
  Film: "film",
  Megaphone: "megaphone",
};

// Services section — grid of what we offer.
export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-primary-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <Reveal className="mx-auto max-w-3xl 5xl:max-w-5xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-500">
            What We Do
          </span>
          <Heading2 className="mt-3 text-primary-500">Our Services</Heading2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            End-to-end creative and technology services, delivered from Bhutan
            to clients around the world.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_SUMMARY.map((service, i) => (
            <Reveal key={service.label} delay={(i % 3) * 120}>
              <Link
                href="/#contact"
                className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-accent-200"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-500">
                  <Icon
                    name={ICON_MAP[service.icon] ?? "sparkles"}
                    className="h-7 w-7"
                  />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-primary-500">
                  {service.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Get started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
