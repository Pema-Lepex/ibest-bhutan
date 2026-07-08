"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { CreativerseLogo } from "@/assets";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import HeaderButtons from "./HeaderButtons";
import { SLIDES } from "./carouselSlides";
import type { HandleAnchorClick, IsLinkActive } from "./hooks";

interface HeroCarouselProps {
  slide: number;
  onSelect: (index: number) => void;
  scrolled: boolean;
  isLinkActive: IsLinkActive;
  handleAnchorClick: HandleAnchorClick;
  isOpen: boolean;
  onToggle: () => void;
  onLogoClick: () => void;
}

// Full-screen carousel with the menu overlaid inside it and each slide's
// own centered description + call-to-action button.
export default function HeroCarousel({
  slide,
  onSelect,
  scrolled,
  isLinkActive,
  handleAnchorClick,
  isOpen,
  onToggle,
  onLogoClick,
}: HeroCarouselProps) {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Carousel background — cross-fading images + dark overlay */}
      <div className="absolute inset-0 -z-10">
        {SLIDES.map((s, i) => (
          <Image
            key={i}
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            // Ken Burns: the active slide slowly zooms in while it's shown.
            style={{ transition: "opacity 1s ease-in-out, transform 6s ease-out" }}
            className={`object-cover ${
              i === slide ? "scale-110 opacity-100" : "scale-100 opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Menu overlaid on the carousel — fades out once the sticky bar
          takes over so the two never show at the same time. */}
      <div
        className={`absolute inset-x-0 top-0 z-40 transition-opacity duration-300 ${
          scrolled ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="mx-auto flex 5xl:max-w-[3200px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-20">
          <Link href="/" onClick={onLogoClick} className="flex items-center">
            <Image
              src={CreativerseLogo}
              alt="iBest Logo"
              width={240}
              height={80}
              priority
              style={{ width: "auto" }}
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 4xl:h-28 5xl:h-32"
            />
          </Link>

          <NavLinks
            isLinkActive={isLinkActive}
            handleAnchorClick={handleAnchorClick}
          />

          <div className="flex items-center gap-3">
            <HeaderButtons />
            <Hamburger isOpen={isOpen} onToggle={onToggle} />
          </div>
        </div>
      </div>

      {/* Centered per-slide content — description + button. Each slide's
          block cross-fades in together with its background image. */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-1000 ease-in-out ${
            i === slide ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <h1 className="max-w-3xl text-3xl font-bold text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
            {s.title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/90 drop-shadow sm:text-lg md:text-xl">
            {s.description}
          </p>
          <Link
            href={s.cta.href}
            onClick={(e) => handleAnchorClick(e, s.cta.href)}
            className="mt-8 rounded-full bg-accent-300 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-95 sm:text-base"
          >
            {s.cta.label}
          </Link>
        </div>
      ))}

      {/* Carousel indicator dots */}
      <div className="absolute inset-x-0 bottom-8 z-40 flex items-center justify-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => onSelect(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === slide ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Animated scroll-down hint — fades out once the sticky bar appears */}
      <Link
        href="/#about"
        onClick={(e) => handleAnchorClick(e, "/#about")}
        aria-label="Scroll to content"
        className={`absolute bottom-16 left-1/2 z-40 -translate-x-1/2 text-white/80 transition-opacity duration-300 hover:text-white ${
          scrolled ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <ChevronDown className="h-8 w-8 animate-float" />
      </Link>
    </section>
  );
}
