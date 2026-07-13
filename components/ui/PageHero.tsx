import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Where the "Back" link points — normally the section this page came from. */
  backHref: string;
  backLabel: string;
  crumbs?: Crumb[];
  /** Extra content under the subtitle (dates, author, tags). */
  meta?: React.ReactNode;
}

// The banner every "Read more" detail page opens with. Its back link returns to
// the home-page section the reader came from, so the one-page flow is preserved.
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  backHref,
  backLabel,
  crumbs = [],
  meta,
}: PageHeroProps) {
  return (
    <header className="relative overflow-hidden bg-primary-500">
      {/* Soft radial wash so the flat brand blue doesn't read as a solid block */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.22),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 py-16 sm:px-6 md:py-20 lg:px-20">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/60 sm:text-sm">
            <li>
              <Link href="/" className="transition-colors hover:text-accent-300">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-accent-300"
                >
                  {crumb.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/90">{title}</span>
            </li>
          </ol>
        </nav>

        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-accent-400/40 bg-accent-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-300">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl 4xl:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg 4xl:text-2xl">
            {subtitle}
          </p>
        )}

        {meta && <div className="mt-6">{meta}</div>}

        <Link
          href={backHref}
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-accent-300"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          {backLabel}
        </Link>
      </div>
    </header>
  );
}
