"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { IbestLogo } from "@/assets";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import HeaderButtons from "./HeaderButtons";
import { SLIDES } from "./carouselSlides";
import { Stats } from "@/assets/content/ibest/site";
import type { HandleAnchorClick, IsAnchorActive, IsLinkActive } from "./hooks";

interface HeroCarouselProps {
  slide: number;
  onSelect: (index: number) => void;
  onHoverChange: (hovering: boolean) => void;
  scrolled: boolean;
  isLinkActive: IsLinkActive;
  isAnchorActive: IsAnchorActive;
  handleAnchorClick: HandleAnchorClick;
  isOpen: boolean;
  onToggle: () => void;
  onLogoClick: () => void;
}

// Full-screen hero: cross-fading slides with the menu overlaid inside, each
// slide carrying its own copy and calls-to-action, plus a stat strip pinned to
// the bottom edge.
export default function HeroCarousel({
  slide,
  onSelect,
  onHoverChange,
  scrolled,
  isLinkActive,
  isAnchorActive,
  handleAnchorClick,
  isOpen,
  onToggle,
  onLogoClick,
}: HeroCarouselProps) {
  const go = (dir: number) =>
    onSelect((slide + dir + SLIDES.length) % SLIDES.length);

  return (
    <section
      id="home"
      className="relative flex h-screen min-h-160 w-full flex-col overflow-hidden"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {/* Backgrounds — cross-fade + slow Ken Burns zoom on the active slide */}
      <div className="absolute inset-0 -z-10">
        {SLIDES.map((s, i) => (
          <Image
            key={i}
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            style={{
              transition: "opacity 1.2s ease-in-out, transform 8s ease-out",
            }}
            className={`object-cover ${
              i === slide ? "scale-110 opacity-100" : "scale-100 opacity-0"
            }`}
          />
        ))}
        {/* Brand-tinted scrim keeps the copy readable over any photo */}
        <div className="absolute inset-0 bg-linear-to-b from-primary-900/80 via-primary-900/60 to-primary-900/90" />
      </div>

      {/* Menu overlaid on the hero — fades out once the sticky bar takes over,
          so the two are never visible at the same time. */}
      <div
        inert={scrolled}
        className={`relative z-40 transition-opacity duration-300 ${
          scrolled ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="mx-auto flex 5xl:max-w-[3200px] items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-20">
          {/* The logo artwork is dark navy, so it needs a light plate to read
              against the hero photography. */}
          <Link
            href="/"
            onClick={onLogoClick}
            className="flex items-center rounded-xl bg-white/95 px-3 py-2 shadow-sm backdrop-blur transition-colors hover:bg-white"
          >
            <Image
              src={IbestLogo}
              alt="iBEST Institute & Consultancy"
              width={264}
              height={160}
              priority
              className="h-10 w-auto sm:h-11 lg:h-12 4xl:h-20"
            />
          </Link>

          <NavLinks
            isLinkActive={isLinkActive}
            isAnchorActive={isAnchorActive}
            handleAnchorClick={handleAnchorClick}
          />

          <div className="flex items-center gap-3">
            <HeaderButtons />
            <Hamburger isOpen={isOpen} onToggle={onToggle} />
          </div>
        </div>
      </div>

      {/* Slide copy — cross-fades in step with the background */}
      <div className="relative z-30 flex flex-1 items-center">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            aria-hidden={i !== slide}
            className={`absolute inset-x-0 px-6 transition-all duration-1000 ease-out ${
              i === slide
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-6 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-4xl 5xl:max-w-6xl text-center">
              <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur sm:text-sm">
                {s.eyebrow}
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl 4xl:text-8xl">
                {s.title} <span className="text-accent-400">{s.highlight}</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl 5xl:max-w-4xl text-base leading-relaxed text-white/85 sm:text-lg 4xl:text-2xl">
                {s.description}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href={s.cta.href}
                  onClick={(e) => handleAnchorClick(e, s.cta.href)}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-600 hover:shadow-xl sm:w-auto sm:text-base"
                >
                  {s.cta.label}
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {s.secondaryCta && (
                  <Link
                    href={s.secondaryCta.href}
                    onClick={(e) => handleAnchorClick(e, s.secondaryCta!.href)}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-primary-600 sm:w-auto sm:text-base"
                  >
                    {s.secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / next — desktop only, so they never crowd a phone screen */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 z-40 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white/80 backdrop-blur transition-all hover:border-white hover:bg-white/15 hover:text-white xl:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 z-40 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white/80 backdrop-blur transition-all hover:border-white hover:bg-white/15 hover:text-white xl:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Stat strip + slide dots along the bottom edge */}
      <div className="relative z-30 border-t border-white/10 bg-primary-900/40 backdrop-blur-sm">
        <div className="mx-auto 5xl:max-w-[3200px] px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-center gap-2.5 py-4">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === slide}
                onClick={() => onSelect(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === slide
                    ? "w-10 bg-accent-400"
                    : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <dl className="grid grid-cols-2 gap-4 border-t border-white/10 py-5 sm:grid-cols-4 sm:gap-6">
            {Stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-xl font-bold text-white sm:text-2xl 4xl:text-4xl">
                  {stat.value}
                  <span className="text-accent-400">{stat.suffix}</span>
                </dt>
                <dd className="mt-0.5 text-[11px] leading-snug text-white/65 sm:text-xs 4xl:text-lg">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Scroll hint — hides once the sticky bar appears */}
      <Link
        href="/#about"
        onClick={(e) => handleAnchorClick(e, "/#about")}
        aria-label="Scroll to content"
        className={`absolute bottom-44 left-1/2 z-40 hidden -translate-x-1/2 text-white/70 transition-opacity duration-300 hover:text-white lg:block ${
          scrolled ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <ChevronDown className="h-7 w-7 animate-float" />
      </Link>
    </section>
  );
}
