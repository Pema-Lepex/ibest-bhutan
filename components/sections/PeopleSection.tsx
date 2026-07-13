import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { People } from "@/assets/content/ibest/people";
import { Overview } from "@/assets/content/ibest/about";

// Accent ring colours, cycled so the four cards don't look identical.
const RINGS = [
  "from-accent-400 to-accent-600",
  "from-primary-300 to-primary-500",
  "from-accent-500 to-primary-400",
  "from-primary-400 to-accent-400",
];

// "Our People" — the team. Each bio runs several paragraphs, so the card shows
// a teaser and the full bio lives on its own page.
export default function PeopleSection() {
  return (
    <section id="people" className="scroll-mt-20 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <SectionHeading
          eyebrow="Our People"
          title="The team behind"
          highlight="iBEST"
          subtitle={Overview.paragraphs[0]}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {People.map((person, i) => (
            <Reveal key={person.slug} delay={(i % 4) * 110}>
              <article className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-accent-200">
                {/* Monogram avatar — the source site has no team photos */}
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${RINGS[i % RINGS.length]} text-2xl font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  {person.name.charAt(0)}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-primary-500">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent-600">
                  {person.role}
                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {person.summary}
                </p>

                <Link
                  href={`/team/${person.slug}`}
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
