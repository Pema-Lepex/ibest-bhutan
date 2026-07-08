"use client";

import Link from "next/link";
import Image from "next/image";
import { CreativerseLogo } from "@/assets";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import type { HandleAnchorClick, IsLinkActive } from "./hooks";
import HeaderButtons from "./HeaderButtons";

interface StickyBarProps {
  scrolled: boolean;
  isLinkActive: IsLinkActive;
  handleAnchorClick: HandleAnchorClick;
  isOpen: boolean;
  onToggle: () => void;
  onLogoClick: () => void;
}

export default function StickyBar({
  scrolled,
  isLinkActive,
  handleAnchorClick,
  isOpen,
  onToggle,
  onLogoClick,
}: StickyBarProps) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full bg-primary-800 shadow-md transition-transform duration-300 ease-in-out ${
        scrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex 5xl:max-w-[3200px] items-center justify-between px-4 py-3 sm:px-6 lg:px-20">
        <Link href="/" onClick={onLogoClick} className="flex items-center bg-white rounded-md">
          <Image
            src={CreativerseLogo}
            alt="iBest Logo"
            width={160}
            height={54}
            style={{ width: "auto" }}
            className="h-9 w-auto sm:h-10 md:h-11"
          />
        </Link>

        <NavLinks
          isLinkActive={isLinkActive}
          handleAnchorClick={handleAnchorClick}
        />
        <HeaderButtons />
        <Hamburger isOpen={isOpen} onToggle={onToggle} />
      </nav>
    </header>
  );
}
