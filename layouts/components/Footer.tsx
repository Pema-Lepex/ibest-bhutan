import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, MapPin, Phone, Printer } from "lucide-react";
import { IbestLogo } from "@/assets";
import { ExternalLinks, SiteInfo } from "@/assets/content/ibest/site";
import { Services } from "@/assets/content/ibest/services";
import { Overview } from "@/assets/content/ibest/about";

// Brand icons were dropped from lucide v1, so socials carry their own marks.
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Facebook: (
    <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.25 0-1.64.78-1.64 1.57v1.9h2.79l-.45 2.9h-2.34V22C18.34 21.27 22 17.1 22 12.07Z" />
  ),
  Twitter: (
    <path d="M18.9 2H22l-7.1 8.1L23 22h-6.6l-5.2-6.8L5.3 22H2.2l7.6-8.7L1.7 2h6.7l4.7 6.2L18.9 2Zm-1.1 18h1.7L7.3 3.7H5.5L17.8 20Z" />
  ),
  LinkedIn: (
    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
  ),
};

// In-page anchors, matching the navbar. The footer stays on the one page too.
const SITE_LINKS = [
  { label: "About iBEST", href: "/#about" },
  { label: "Our Values", href: "/#values" },
  { label: "Our People", href: "/#people" },
  { label: "Our Experiences", href: "/#experiences" },
  { label: "Why Choose Us", href: "/#why" },
];

const COURSE_LINKS = [
  { label: "Upcoming Courses", href: "/#courses" },
  { label: "Announcements", href: "/#courses" },
  { label: "Register for a Course", href: "/#contact" },
  { label: "iBEST Blog", href: "/#blog" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-white">
      <div className="mx-auto 5xl:max-w-[3200px] max-w-7xl px-4 py-16 sm:px-6 lg:px-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-white px-3 py-2"
            >
              <Image
                src={IbestLogo}
                alt={SiteInfo.name}
                width={198}
                height={120}
                className="h-11 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {Overview.paragraphs[0]}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SiteInfo.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-500 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4.5 w-4.5"
                    aria-hidden="true"
                  >
                    {SOCIAL_ICONS[social.label]}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Site links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              About Us
            </h3>
            <ul className="mt-5 space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — these do leave the page, because each has its own page */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3">
              {Services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-accent-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">
              Courses
            </h3>
            <ul className="mt-5 space-y-3">
              {COURSE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>

            <ul className="mt-5 space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent-400" />
                <span className="leading-relaxed">{SiteInfo.address}</span>
              </li>
              <li>
                <a
                  href={SiteInfo.phoneHref}
                  className="flex gap-3 text-sm text-white/60 transition-colors hover:text-accent-300"
                >
                  <Phone className="h-4.5 w-4.5 shrink-0 text-accent-400" />
                  {SiteInfo.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Printer className="h-4.5 w-4.5 shrink-0 text-accent-400" />
                {SiteInfo.fax}
              </li>
              <li>
                <a
                  href={SiteInfo.emailHref}
                  className="flex gap-3 text-sm text-white/60 transition-colors hover:text-accent-300"
                >
                  <Mail className="h-4.5 w-4.5 shrink-0 text-accent-400" />
                  {SiteInfo.email}
                </a>
              </li>
            </ul>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">
              External links
            </h3>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {ExternalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <div className="max-w-7xl">
        <p className="text-sm tracking-wide text-slate-600 lg:text-base">
          © {year} Creativerse. All rights reserved. Developed by{" "}
          <Link
            href="https://ibeststudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-accent-500"
          >
            iBEST STUDIOS
          </Link>{" "}
          &{" "}
          <Link
            href="https://ibesttechnologies.bt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-accent-500"
          >
            TECHNOLOGIES
          </Link>
        </p>
      </div>
          <p className="text-xs text-white/50 sm:text-sm">{SiteInfo.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
