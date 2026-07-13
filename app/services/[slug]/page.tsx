import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/common/Reveal";
import { Services, getService } from "@/assets/content/ibest/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found — iBEST" };

  return {
    title: `${service.title} — iBEST Institute & Consultancy`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = Services.filter((s) => s.slug !== slug);

  return (
    <MainLayout withHero={false}>
      <PageHero
        eyebrow="What We Do"
        title={service.title}
        subtitle={service.summary}
        backHref="/#services"
        backLabel="Back to all services"
        crumbs={[{ label: "Our Services", href: "/#services" }]}
      />

      <article className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            {/* Body copy */}
            <div>
              <Reveal>
                <div className="overflow-hidden rounded-3xl shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={900}
                    height={317}
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>

              <div className="mt-10 space-y-5">
                {service.paragraphs.map((text, i) => (
                  <Reveal key={i} delay={i * 90}>
                    <p className="text-base leading-relaxed text-slate-600 md:text-lg 4xl:text-2xl">
                      {text}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* The list — courses offered, services covered, etc. */}
            <Reveal delay={140}>
              <aside className="sticky top-24 rounded-3xl border border-slate-200 bg-slate-50/70 p-8">
                <h2 className="text-lg font-semibold text-primary-500">
                  {service.listHeading}
                </h2>

                <ul className="mt-6 space-y-3.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-700 md:text-base"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-500"
                >
                  Enquire about this service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </aside>
            </Reveal>
          </div>

          {/* The other two units */}
          <div className="mt-24 border-t border-slate-200 pt-16">
            <h2 className="text-2xl font-bold text-primary-500 md:text-3xl">
              Our other services
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={i * 110}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-primary-500">
                      {other.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {other.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-600">
                      Read more
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
