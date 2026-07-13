"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import { Mail, MapPin, Phone, Printer, Send } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SiteInfo } from "@/assets/content/ibest/site";
import Image from "next/image";
import { ContactImage } from "@/assets";

// The site has no backend, so the form composes the enquiry into a mail draft
// addressed to the office. Everything the visitor typed is carried across.
function buildMailto(data: FormData) {
  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const phone = String(data.get("phone") ?? "");
  const course = String(data.get("course") ?? "");
  const message = String(data.get("message") ?? "");

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    course && `Interested in: ${course}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const subject = course
    ? `Course enquiry — ${course}`
    : `Website enquiry from ${name}`;

  return `${SiteInfo.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const DETAILS = [
  {
    icon: MapPin,
    label: "Visit our office",
    lines: [SiteInfo.address],
  },
  {
    icon: Phone,
    label: "Call us",
    lines: [SiteInfo.phone],
    href: SiteInfo.phoneHref,
  },
  {
    icon: Printer,
    label: "Fax",
    lines: [SiteInfo.fax],
  },
  {
    icon: Mail,
    label: "Email us",
    lines: [SiteInfo.email],
    href: SiteInfo.emailHref,
  },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    window.location.href = buildMailto(new FormData(form));
    setSent(true);
    form.reset();
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20";

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's build something"
          highlight="together"
          subtitle="Have a question about a course, or a project you'd like to talk through? Drop us a line."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
          {/* Details */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl bg-primary-500 p-8 md:p-10">
              <h3 className="text-xl font-semibold text-white">
                {SiteInfo.name}
              </h3>
              <p className="mt-2 text-sm text-white/60">{SiteInfo.tagline}</p>

              <ul className="mt-8 flex-1 space-y-6">
                {DETAILS.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <li key={detail.label} className="group flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-300 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                          {detail.label}
                        </p>
                        {detail.lines.map((line) =>
                          detail.href ? (
                            <a
                              key={line}
                              href={detail.href}
                              className="mt-1 block text-sm text-white transition-colors hover:text-accent-300 md:text-base"
                            >
                              {line}
                            </a>
                          ) : (
                            <p
                              key={line}
                              className="mt-1 text-sm leading-relaxed text-white/85 md:text-base"
                            >
                              {line}
                            </p>
                          ),
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl">
                <iframe
                  src={SiteInfo.mapEmbed}
                  title={`Map showing ${SiteInfo.name}`}
                  width="100%"
                  height="240"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full border-0 grayscale transition-all duration-500 hover:grayscale-0"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <Image src={ContactImage} alt="building"/>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
