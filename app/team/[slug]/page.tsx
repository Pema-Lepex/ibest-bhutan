import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Quote } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/common/Reveal";
import { People, getPerson } from "@/assets/content/ibest/people";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return People.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return { title: "Team member not found — iBEST" };

  return {
    title: `${person.name}, ${person.role} — iBEST Institute & Consultancy`,
    description: person.summary,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  const others = People.filter((p) => p.slug !== slug);

  return (
    <MainLayout withHero={false}>
      <PageHero
        eyebrow={person.role}
        title={person.name}
        subtitle={person.summary}
        backHref="/#people"
        backLabel="Back to the team"
        crumbs={[{ label: "Our People", href: "/#people" }]}
      />

      <article className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl 5xl:max-w-6xl px-4 sm:px-6 lg:px-20">
          {/* Pull-quote */}
          <Reveal>
            <figure className="relative rounded-3xl bg-primary-50 p-8 md:p-10">
              <Quote className="absolute right-8 top-8 h-12 w-12 text-primary-100" />
              <blockquote className="relative text-lg font-medium leading-relaxed text-primary-600 md:text-xl md:leading-relaxed">
                {person.highlight}
              </blockquote>
            </figure>
          </Reveal>

          {/* Bio */}
          <div className="mt-12 space-y-6">
            {person.paragraphs.map((text, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base leading-relaxed text-slate-600 md:text-lg 4xl:text-2xl">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>

          {/* The rest of the team */}
          <div className="mt-20 border-t border-slate-200 pt-14">
            <h2 className="text-2xl font-bold text-primary-500 md:text-3xl">
              Meet the rest of the team
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={i * 100}>
                  <Link
                    href={`/team/${other.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-lg"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500 text-lg font-bold text-white transition-colors duration-300 group-hover:bg-accent-500">
                      {other.name.charAt(0)}
                    </span>
                    <h3 className="mt-4 font-semibold text-primary-500">
                      {other.name}
                    </h3>
                    <p className="mt-0.5 flex-1 text-sm text-accent-600">
                      {other.role}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors group-hover:text-accent-600">
                      Read bio
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
