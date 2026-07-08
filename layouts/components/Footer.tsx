import Link from "next/link";
import Image from "next/image";
import { CreativerseLogo } from "@/assets";

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/#/home", target: ""  },
      { label: "Services", href: "/#/services", target: ""  },
      // { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/#/contact" },
    ],
  },
  {
    heading: "EducareSkill",
    links: [
      { label: "About US", href: "https://www.educareskill.com/aboutus", target: "_blank" },
      { label: "Impact", href: "https://www.educareskill.com/impact", target: "_blank"  },
      { label: "Why Choose Us", href: "https://www.educareskill.com/why-choose-us", target: "_blank"  },
      { label: "Team", href: "https://www.educareskill.com/team", target: "_blank"  },
      { label: "Career", href: "https://www.educareskill.com/career", target: "_blank"  },
    ],
  },
  {
    heading: "Other Sites",
    links: [
      { label: "EducareSkill", href: "https://www.educareskill.com", target: "_blank" },
      { label: "iBEST STUDIOS", href: "https://www.ibeststudios.com/", target: "_blank" },
      { label: "iBEST TECHNOLOGIES", href: "https://ibesttechnologies.bt/", target: "_blank" },
      { label: "iBEST Bhutan", href: "https://ibestbhutan.com/", target: "_blank" },
    ],
  },
  {
    heading: "Blog",
    links: [
      { label: "Tharchen Blog", href: "/docs" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
  label: "Facebook",
  href: "https://facebook.com",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.25 0-1.64.78-1.64 1.57v1.9h2.79l-.45 2.9h-2.34V22C18.34 21.27 22 17.1 22 12.07Z" />
    </svg>
  ),
},
  {
  label: "Instagram",
  href: "https://instagram.com",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5Zm5.75-3.25a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25Z" />
    </svg>
  ),
},
 {
  label: "TikTok",
  href: "https://tiktok.com",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-1.92V15.1a5.11 5.11 0 1 1-5.11-5.11c.4 0 .79.05 1.16.14v2.6a2.53 2.53 0 1 0 1.39 2.26V2h2.56a4.84 4.84 0 0 0 3.77 4.69v2Z" />
    </svg>
  ),
},
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-prim">
      <div className="mx-auto 5xl:max-w-[3200px] px-4 py-12  sm:px-6 lg:px-20 lg:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
               <Image src={CreativerseLogo} alt="Creativerse" height={150} width={50} className="h-10 w-auto xs:h-11 sm:h-12 md:h-14 lg:h-16 4xl:h-28 5xl:h-32 6xl:h-36 tv-wide:h-40 8k:h-48" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              iBEST is dedicated towards improving the lives of our customers and communities around us and beyond through our excellence learning experience driven by research.
            </p>
            <p className=" text-sm tracking-wide text-slate-600 pt-2">
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
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-accent-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.heading} className="col-span-1 md:col-span-1">
              <h3 className="text-sm font-semibold text-slate-900">{section.heading}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.target && link.target === "_blank" ? "_blank": "_self"}
                      className="text-sm text-slate-500 transition-colors hover:text-accent-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center justify-start gap-6">
            <p className="text-white text-[8px] lg:text-[11px] 2xl:text-base 3xl:text-xl 4xl:text-2xl 5xl:text-4xl tracking-wider lg:text-center md:text-left">
              © {new Date().getFullYear()} Educare Skill Pvt. Ltd. | All rights
              reserved | Developed By iBEST
              <a
                target="_blank"
                className="hover:text-customOriange-100"
              >
                {" "}
                STUDIOS
              </a>{" "}
              &
              <a
                target="_blank"
                className="hover:text-customOriange-100"
              >
                {" "}
                TECHNOLOGIES
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="https://www.educareskill.com/privacypolicy" target="_blank" className="text-sm text-slate-500 transition-colors hover:text-accent-500">
              Privacy Policy
            </Link>
            <Link href="https://www.educareskill.com/termsofuse" target="_blank" className="text-sm text-slate-500 transition-colors hover:text-accent-500">
              Terms of Use
            </Link>
            <Link href="https://www.educareskill.com/faq" target="_blank" className="text-sm text-slate-500 transition-colors hover:text-accent-500">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}