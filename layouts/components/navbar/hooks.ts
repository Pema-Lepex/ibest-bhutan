"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";
import type { NavLink } from "../NavMenuList";

export type IsLinkActive = (link: NavLink) => boolean;
export type HandleAnchorClick = (
  e: MouseEvent<HTMLAnchorElement>,
  href: string,
) => void;

// Auto-advancing carousel index.
export function useCarousel(length: number, intervalMs = 5000) {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [length, intervalMs]);
  return { slide, setSlide };
}

// True once the page is scrolled past `ratio` of the viewport height — used
// to hand off from the in-carousel menu to the detached sticky bar.
export function useScrolled(ratio = 0.6) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * ratio);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [ratio]);
  return scrolled;
}

// The in-page sections the navbar scroll-spy watches, top to bottom.
const SECTION_IDS = ["home", "about", "services", "contact"];

// Active-link detection (scroll-spy across all sections) plus a smooth-scroll
// click handler. `onNavigate` fires on every link click so callers can, e.g.,
// close the mobile menu.
export function useNavLinks(onNavigate?: () => void) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!els.length) return;
    // Mark a section active once it crosses the middle band of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isLinkActive: IsLinkActive = (link) => {
    if (link.sub_menu) {
      return link.sub_menu.some((sub) => pathname === sub.href);
    }
    if (link.href.startsWith("/#")) {
      return pathname === "/" && activeSection === link.href.slice(2);
    }
    return pathname === link.href;
  };

  const handleAnchorClick: HandleAnchorClick = (e, href) => {
    onNavigate?.();
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id); // instant highlight; observer keeps it in sync
      }
    }
  };

  return { isLinkActive, handleAnchorClick };
}
