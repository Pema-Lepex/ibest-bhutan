"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS } from "../NavMenuList";
import type { HandleAnchorClick, IsAnchorActive, IsLinkActive } from "./hooks";

interface NavLinksProps {
  isLinkActive: IsLinkActive;
  isAnchorActive: IsAnchorActive;
  handleAnchorClick: HandleAnchorClick;
}

// Desktop nav links. Every item — dropdown children included — is an in-page
// anchor, so the whole navbar stays on the home page.
export default function NavLinks({
  isLinkActive,
  isAnchorActive,
  handleAnchorClick,
}: NavLinksProps) {
  return (
    <ul className="hidden items-center gap-7 lg:flex">
      {NAV_LINKS.map((link) => {
        const active = isLinkActive(link);

        return (
          <li key={link.label} className="group relative">
            {link.sub_menu ? (
              <>
                <Link
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`flex items-center gap-1 py-2 text-sm font-medium tracking-wide transition-colors ${
                    active ? "text-accent-300" : "text-white hover:text-accent-300"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>

                {/* Dropdown — anchors, not routes */}
                <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 py-2 shadow-xl backdrop-blur">
                    {link.sub_menu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          onClick={(e) => handleAnchorClick(e, sub.href)}
                          className={`flex items-center gap-2 px-5 py-2.5 text-sm transition-colors ${
                            isAnchorActive(sub.href)
                              ? "bg-primary-50 font-semibold text-primary-600"
                              : "text-slate-600 hover:bg-slate-50 hover:text-primary-600"
                          }`}
                        >
                          <span className="h-1 w-1 rounded-full bg-accent-500" />
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
                className={`relative block py-2 text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-accent-300" : "text-white hover:text-accent-300"
                }`}
              >
                {link.label}
                {/* Underline: grows on hover, stays put for the active link */}
                <span
                  className={`pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-accent-300 transition-all duration-300 ease-out ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
