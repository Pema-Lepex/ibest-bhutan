"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CreativerseLogo, DownArrowIcon } from "@/assets";
import { NAV_LINKS } from "./NavMenuList";
import { usePathname } from "next/navigation";
import { CommonParagraph4 } from "@/components";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [servicesInView, setServicesInView] = useState(false);
  const pathname = usePathname();

  // Scroll-spy: mark the Services anchor link active only while the
  // #services section is within the viewport.
  useEffect(() => {
    const el = document.getElementById("services");
    if (!el) {
      setServicesInView(false);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setServicesInView(entry.isIntersecting),
      { rootMargin: "-40% 0px -40% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  const isLinkActive = (link: (typeof NAV_LINKS)[number]) => {
    if (link.sub_menu) {
      return link.sub_menu.some((sub) => pathname === sub.href);
    }

    // In-page anchor links (e.g. "/#services") — active only while the
    // target section is scrolled into view.
    if (link.href.startsWith("/#")) {
      return pathname === "/" && servicesInView;
    }

    return pathname === link.href;
  };

  // Smooth-scroll to an in-page anchor when we're already on that page,
  // otherwise let <Link> navigate there (the hash scroll happens on load).
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const el = document.getElementById(href.slice(2));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-primary-500/60 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-primary-500 border-b border-transparent"
      }`}
    >
       <div
    className={`overflow-hidden transition-all duration-300 ${
      scrolled ? "max-h-0 opacity-5" : "max-h-20 opacity-100"
    }`}
  >
  </div>
      
      <nav className="mx-auto flex 5xl:max-w-[3200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={CreativerseLogo}
            alt="Creativerse Logo"
            width={240}
            height={80}
            priority
            className="h-10 w-auto xs:h-11 sm:h-12 md:h-14 lg:h-16 4xl:h-28 5xl:h-32 6xl:h-36 tv-wide:h-40 8k:h-48"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative group">
              {link.sub_menu ? (
                <>
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isLinkActive(link)
                        ? "text-accent-300 font-semibold"
                        : "text-white hover:text-accent-300"
                    }`}
                  >
                    {" "}
                    <CommonParagraph4>{link.label}</CommonParagraph4>
                     <DownArrowIcon
                      className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

                  {/* Dropdown */}
                  <div className="invisible absolute right-0 top-full z-50 mt-2 w-72 rounded-xl border border-slate-200 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <ul className="py-2">
                      {link.sub_menu.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className={`block px-5 py-3 text-sm transition-colors ${
                              pathname === sub.href
                                ? "bg-primary-50 text-accent-300 font-semibold"
                                : "text-white hover:bg-slate-50 hover:text-accent-300"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isLinkActive(link)
                      ? "text-accent-300 font-semibold"
                      : "text-white hover:text-accent-300"
                  }`}
                >
                  <CommonParagraph4> {link.label}</CommonParagraph4>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="relative flex h-9 w-9 items-center justify-center rounded-md text-slate-700 md:hidden"
        >
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[calc(100vh-80px)]" : "max-h-0"
        } overflow-y-auto overflow-x-hidden`}
      >
        <ul className="flex flex-col gap-1 border-t border-slate-200 bg-white px-4 pb-4 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.sub_menu ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSubMenu(
                        openSubMenu === link.label ? null : link.label,
                      )
                    }
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-accent-300"
                  >
                    <CommonParagraph4>{link.label}</CommonParagraph4>
                    <DownArrowIcon
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openSubMenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSubMenu === link.label
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="ml-4 mt-1 border-l border-slate-200">
                      {link.sub_menu.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-5 py-3 text-sm transition-colors ${
                              pathname === sub.href
                                ? "bg-primary-50 text-accent-300 font-semibold"
                                : "text-white hover:bg-slate-50 hover:text-accent-300"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium  ${
                    isLinkActive(link)
                      ? "text-accent-300 font-semibold"
                      : "text-white hover:text-accent-300"
                  }`}
                >
                  <CommonParagraph4>{link.label}</CommonParagraph4>
                </Link>
              )}
            </li>
          ))}

          <li className="mt-2 border-t border-slate-100 pt-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-primary-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
