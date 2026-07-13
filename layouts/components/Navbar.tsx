"use client";

import { useEffect, useState } from "react";
import StickyBar from "./navbar/StickyBar";
import HeroCarousel from "./navbar/HeroCarousel";
import MobileMenu from "./navbar/MobileMenu";
import { SLIDES } from "./navbar/carouselSlides";
import { useCarousel, useNavLinks, useScrolled } from "./navbar/hooks";

interface NavbarProps {
  /** Home page only: render the full-screen hero behind the menu. */
  withHero?: boolean;
}

export default function Navbar({ withHero = true }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [heroHovered, setHeroHovered] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Detail pages have no hero, so the sticky bar is always shown there.
  const scrolledPastHero = useScrolled(0.6);
  const scrolled = withHero ? scrolledPastHero : true;

  // Pause the auto-advance while someone is interacting with the hero.
  const { slide, setSlide } = useCarousel(SLIDES.length, 6000, heroHovered);
  const { isLinkActive, isAnchorActive, handleAnchorClick } =
    useNavLinks(closeMenu);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <StickyBar
        scrolled={scrolled}
        isLinkActive={isLinkActive}
        isAnchorActive={isAnchorActive}
        handleAnchorClick={handleAnchorClick}
        isOpen={isOpen}
        onToggle={toggleMenu}
        onLogoClick={closeMenu}
      />

      {withHero && (
        <HeroCarousel
          slide={slide}
          onSelect={setSlide}
          onHoverChange={setHeroHovered}
          scrolled={scrolled}
          isLinkActive={isLinkActive}
          isAnchorActive={isAnchorActive}
          handleAnchorClick={handleAnchorClick}
          isOpen={isOpen}
          onToggle={toggleMenu}
          onLogoClick={closeMenu}
        />
      )}

      <MobileMenu
        isOpen={isOpen}
        onClose={closeMenu}
        isLinkActive={isLinkActive}
        isAnchorActive={isAnchorActive}
        handleAnchorClick={handleAnchorClick}
      />
    </>
  );
}
