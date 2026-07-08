export interface NavSubLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  sub_menu?: NavSubLink[];
}

// One-page site: every link is an in-page anchor ("/#id") that scrolls to
// its section. The id after "/#" must match a section's `id` in the page.
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", href: "/#contact" },
];
