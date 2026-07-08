"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CreativerseLogo, DownArrowIcon } from "@/assets";
import { CommonParagraph4 } from "@/components";
import { NAV_LINKS } from "../NavMenuList";
import { CONTACT_HREF, PHONE_HREF } from "./constants";
import type { HandleAnchorClick, IsLinkActive } from "./hooks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isLinkActive: IsLinkActive;
  handleAnchorClick: HandleAnchorClick;
}

// Slide-down mobile menu overlay shared by both header bars.
export default function MobileMenu({
  isOpen,
  onClose,
  isLinkActive,
  handleAnchorClick,
}: MobileMenuProps) {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  return (
    <div className={`fixed inset-0 z-60 md:hidden ${isOpen ? "visible" : "invisible"}`}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Sliding panel */}
      <div
        className={`absolute inset-x-0 top-0 max-h-screen overflow-y-auto bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
          <Image
            src={CreativerseLogo}
            alt="iBest Logo"
            width={160}
            height={54}
            style={{ width: "auto" }}
            className="h-10 w-auto"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="relative flex h-9 w-9 items-center justify-center rounded-md text-slate-700"
          >
            <span className="absolute h-0.5 w-5 rotate-45 rounded-full bg-current" />
            <span className="absolute h-0.5 w-5 -rotate-45 rounded-full bg-current" />
          </button>
        </div>

        <ul className="flex flex-col gap-1 px-4 pb-4 pt-2">
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
                            onClick={onClose}
                            className={`block px-5 py-3 text-sm transition-colors ${
                              isLinkActive({ label: sub.label, href: sub.href })
                                ? "bg-primary-50 text-accent-300 font-semibold"
                                : "text-slate-700 hover:bg-slate-50 hover:text-accent-300"
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
                  className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                    isLinkActive(link)
                      ? "text-accent-300 font-semibold"
                      : "text-slate-700 hover:text-accent-300"
                  }`}
                >
                  <CommonParagraph4>{link.label}</CommonParagraph4>
                </Link>
              )}
            </li>
          ))}

          <li className="mt-2 flex gap-3 border-t border-slate-100 pt-3">
            <Link
              href={PHONE_HREF}
              onClick={onClose}
              className="flex-1 rounded-full border border-primary-500 px-5 py-2.5 text-center text-sm font-semibold text-primary-600"
            >
              Call Us
            </Link>
            <Link
              href={CONTACT_HREF}
              onClick={onClose}
              className="flex-1 rounded-full bg-primary-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-700"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
