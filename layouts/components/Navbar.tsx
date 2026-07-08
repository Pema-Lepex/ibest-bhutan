"use client";

import { useState, useEffect } from "react";
import StickyBar from "./navbar/StickyBar";
import HeroCarousel from "./navbar/HeroCarousel";
import MobileMenu from "./navbar/MobileMenu";
import { SLIDES } from "./navbar/carouselSlides";
import { useCarousel, useNavLinks, useScrolled } from "./navbar/hooks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const scrolled = useScrolled(0.6);
  const { slide, setSlide } = useCarousel(SLIDES.length);
  const { isLinkActive, handleAnchorClick } = useNavLinks(closeMenu);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <StickyBar
        scrolled={scrolled}
        isLinkActive={isLinkActive}
        handleAnchorClick={handleAnchorClick}
        isOpen={isOpen}
        onToggle={toggleMenu}
        onLogoClick={closeMenu}
      />

      <HeroCarousel
        slide={slide}
        onSelect={setSlide}
        scrolled={scrolled}
        isLinkActive={isLinkActive}
        handleAnchorClick={handleAnchorClick}
        isOpen={isOpen}
        onToggle={toggleMenu}
        onLogoClick={closeMenu}
      />

      <MobileMenu
        isOpen={isOpen}
        onClose={closeMenu}
        isLinkActive={isLinkActive}
        handleAnchorClick={handleAnchorClick}
      />
    </>
  );
}
