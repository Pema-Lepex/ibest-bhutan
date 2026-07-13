import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/common/Reveal";
import {
  Announcements,
  getAnnouncement,
} from "@/assets/content/ibest/announcements";
import { SiteInfo } from "@/assets/content/ibest/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Announcements.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getAnnouncement(slug);
  if (!item) return { title: "Announcement not found — iBEST" };

  return {
    title: `${item.title} — iBEST Institute & Consultancy`,
    description: item.excerpt,
  };
}

export default async function AnnouncementPage({ params }: Props) {
  const { slug } = await params;
  const item = getAnnouncement(slug);
  if (!item) notFound();

  const others = Announcements.filter((a) => a.slug !== slug);

  return (
    <MainLayout withHero={false}>
      <PageHero
        eyebrow={item.tag}
        title={item.title}
        backHref="/#courses"
        backLabel="Back to announcements"
        crumbs={[{ label: "Announcements", href: "/#courses" }]}
        meta={
          <span className="inline-flex items-center gap-2 text-sm text-white/70">
            <Calendar className="h-4 w-4 text-accent-400" />
            <time dateTime={item.date}>{item.dateLabel}</time>
          </span>
        }
      />

      <article className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl 5xl:max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="space-y-5">
            {item.intro.map((text, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base leading-relaxed text-slate-700 md:text-lg md:leading-[1.9]">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Criteria / documents / schedule blocks */}
          <div className="mt-12 space-y-10">
            {item.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 90}>
                <section className="rounded-3xl border border-slate-200 bg-slate-50/70 p-7 md:p-8">
                  <h2 className="text-lg font-semibold text-primary-500 md:text-xl">
                    {section.heading}
                  </h2>

                  {section.items && (
                    <ul className="mt-5 space-y-3.5">
                      {section.items.map((entry) => (
                        <li
                          key={entry}
                          className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 md:text-base"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                          {entry}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.paragraphs && (
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((text, j) => (
                        <p
                          key={j}
                          className="text-sm leading-relaxed text-slate-600 md:text-base"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          {item.outro && (
            <div className="mt-10 space-y-3">
              {item.outro.map((text, i) => (
                <p
                  key={i}
                  className="rounded-2xl bg-accent-50 px-6 py-4 text-sm leading-relaxed text-accent-900"
                >
                  {text}
                </p>
              ))}
            </div>
          )}

          {/* CTA */}
          <Reveal>
            <div className="mt-12 rounded-3xl bg-primary-500 p-8 text-center md:p-10">
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                Interested in this programme?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                Call the office on{" "}
                <a
                  href={SiteInfo.phoneHref}
                  className="font-semibold text-accent-300 hover:underline"
                >
                  {SiteInfo.phone}
                </a>{" "}
                or send us your details and we&apos;ll get back to you.
              </p>

              <Link
                href="/#contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-600"
              >
                Contact the Institute
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Other notices */}
        {others.length > 0 && (
          <div className="mx-auto mt-20 max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
            <div className="border-t border-slate-200 pt-14">
              <h2 className="text-2xl font-bold text-primary-500 md:text-3xl">
                Other announcements
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {others.map((other, i) => (
                  <Reveal key={other.slug} delay={i * 110}>
                    <Link
                      href={`/announcements/${other.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-lg"
                    >
                      <span className="text-xs text-slate-400">
                        {other.dateLabel}
                      </span>
                      <h3 className="mt-1.5 font-semibold leading-snug text-primary-500 transition-colors group-hover:text-accent-600">
                        {other.title}
                      </h3>
                      <p className="mt-2 flex-1 line-clamp-2 text-sm leading-relaxed text-slate-600">
                        {other.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-600">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </MainLayout>
  );
}
