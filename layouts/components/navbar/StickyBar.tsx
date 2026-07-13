"use client";

import Link from "next/link";
import Image from "next/image";
import { IbestLogo } from "@/assets";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import HeaderButtons from "./HeaderButtons";
import type { HandleAnchorClick, IsAnchorActive, IsLinkActive } from "./hooks";

interface StickyBarProps {
  scrolled: boolean;
  isLinkActive: IsLinkActive;
  isAnchorActive: IsAnchorActive;
  handleAnchorClick: HandleAnchorClick;
  isOpen: boolean;
  onToggle: () => void;
  onLogoClick: () => void;
}

// Detached header that slides down once the hero scrolls away.
export default function StickyBar({
  scrolled,
  isLinkActive,
  isAnchorActive,
  handleAnchorClick,
  isOpen,
  onToggle,
  onLogoClick,
}: StickyBarProps) {
  return (
    // The bar is hidden by sliding it off-screen, which leaves its links in the
    // tab order and the accessibility tree. `inert` takes them out of both while
    // it's up there, so the hero menu is the only reachable nav.
    <header
      inert={!scrolled}
      className={`fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-primary-800/95 shadow-lg backdrop-blur transition-transform duration-300 ease-out ${
        scrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex 5xl:max-w-[3200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-20">
        <Link
          href="/"
          onClick={onLogoClick}
          className="flex items-center rounded-md bg-white px-2 py-1"
        >
          <Image
            src={IbestLogo}
            alt="iBEST Institute & Consultancy"
            width={165}
            height={100}
            className="h-8 w-auto sm:h-9"
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
      </nav>
    </header>
  );
}
