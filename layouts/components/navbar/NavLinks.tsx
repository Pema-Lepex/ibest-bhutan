"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DownArrowIcon } from "@/assets";
import { CommonParagraph4 } from "@/components";
import { NAV_LINKS } from "../NavMenuList";
import type { HandleAnchorClick, IsLinkActive } from "./hooks";

interface NavLinksProps {
  isLinkActive: IsLinkActive;
  handleAnchorClick: HandleAnchorClick;
}

// Desktop nav links (with dropdowns) — shared by the in-carousel menu and
// the detached sticky bar.
export default function NavLinks({
  isLinkActive,
  handleAnchorClick,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-8 md:flex">
      {NAV_LINKS.map((link) => (
        <li key={link.label} className="relative group">
          {link.sub_menu ? (
            <>
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isLinkActive(link)
                    ? "text-accent-300 font-semibold"
                    : "text-white hover:text-accent-300"
                }`}
              >
                <CommonParagraph4>{link.label}</CommonParagraph4>
                <DownArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown */}
              <div className="invisible absolute right-0 top-full z-50 mt-2 w-72 rounded-xl border border-slate-200 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <ul className="py-2">
                  {link.sub_menu.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className={`block px-5 py-3 text-sm transition-colors ${
                          pathname === sub.href
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
              className={`relative text-sm font-medium transition-colors ${
                isLinkActive(link)
                  ? "text-accent-300 font-semibold"
                  : "text-white hover:text-accent-300"
              }`}
            >
              <CommonParagraph4> {link.label}</CommonParagraph4>
              {/* Animated underline: grows on hover, stays for active link */}
              <span
                className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 rounded-full bg-accent-300 transition-all duration-300 ease-out ${
                  isLinkActive(link) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
