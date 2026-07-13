"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { SiteInfo } from "@/assets/content/ibest/site";
import { PHONE_HREF, REGISTER_HREF } from "./constants";

// The "Call" / "Register" buttons shown in both header bars.
export default function HeaderButtons() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Link
        href={PHONE_HREF}
        className="group inline-flex items-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-accent-300"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-accent-300">
          <Phone className="h-4 w-4" />
        </span>
        <span className="hidden xl:inline">{SiteInfo.phone}</span>
      </Link>

      <Link
        href={REGISTER_HREF}
        className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-600 hover:shadow-md"
      >
        Register
      </Link>
    </div>
  );
}
