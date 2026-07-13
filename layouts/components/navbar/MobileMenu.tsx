"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Mail, Phone, X } from "lucide-react";
import { IbestLogo } from "@/assets";
import { NAV_LINKS } from "../NavMenuList";
import { SiteInfo } from "@/assets/content/ibest/site";
import { REGISTER_HREF } from "./constants";
import type { HandleAnchorClick, IsAnchorActive, IsLinkActive } from "./hooks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isLinkActive: IsLinkActive;
  isAnchorActive: IsAnchorActive;
  handleAnchorClick: HandleAnchorClick;
}

// Slide-in mobile menu. Like the desktop nav, every entry is an in-page anchor.
export default function MobileMenu({
  isOpen,
  onClose,
  isLinkActive,
  isAnchorActive,
  handleAnchorClick,
}: MobileMenuProps) {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  return (
    <div
      inert={!isOpen}
      className={`fixed inset-0 z-60 lg:hidden ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 h-full w-full bg-primary-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        className={`absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <Image
            src={IbestLogo}
            alt="iBEST Institute & Consultancy"
            width={165}
            height={100}
            className="h-10 w-auto"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const expanded = openSubMenu === link.label;

              return (
                <li key={link.label}>
                  {link.sub_menu ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() =>
                          setOpenSubMenu(expanded ? null : link.label)
                        }
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isLinkActive(link)
                            ? "bg-primary-50 text-primary-600"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          expanded
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <ul className="ml-4 overflow-hidden border-l border-slate-200">
                          {link.sub_menu.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={(e) => handleAnchorClick(e, sub.href)}
                                className={`block py-2.5 pl-5 text-sm transition-colors ${
                                  isAnchorActive(sub.href)
                                    ? "font-semibold text-primary-600"
                                    : "text-slate-600 hover:text-primary-600"
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
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isLinkActive(link)
                          ? "bg-primary-50 text-primary-600"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact footer */}
        <div className="border-t border-slate-200 px-5 py-5">
          <Link
            href={REGISTER_HREF}
            onClick={(e) => handleAnchorClick(e, REGISTER_HREF)}
            className="block rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            Register for a course
          </Link>

          <div className="mt-4 space-y-2.5">
            <a
              href={SiteInfo.phoneHref}
              className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-primary-600"
            >
              <Phone className="h-4 w-4 text-accent-500" />
              {SiteInfo.phone}
            </a>
            <a
              href={SiteInfo.emailHref}
              className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-primary-600"
            >
              <Mail className="h-4 w-4 text-accent-500" />
              {SiteInfo.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
