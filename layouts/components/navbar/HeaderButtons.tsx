import Link from "next/link";
import { CONTACT_HREF, PHONE_HREF } from "./constants";

// The "Call Us" / "Get a Quote" buttons shown in the header bars.
export default function HeaderButtons() {
  return (
    <div className="hidden items-center gap-3 sm:flex">
      <Link
        href={PHONE_HREF}
        className="rounded-full border border-white/70 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-primary-600"
      >
        Contact Us
      </Link>
      <Link
        href={CONTACT_HREF}
        className="rounded-full bg-accent-300 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-95"
      >
        Get a Quote
      </Link>
    </div>
  );
}
