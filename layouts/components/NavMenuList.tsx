export interface NavSubLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  sub_menu?: NavSubLink[];
}

// One-page site: every navbar link — including the dropdown items — is an
// in-page anchor ("/#id") that scrolls to its section. The id after "/#" must
// match a section's `id` on the home page (see SECTION_IDS in navbar/hooks.ts).
// Long-form content (a service, a bio, an announcement, a blog post) lives on
// its own route and is reached from a "Read more" link inside the section,
// never from the navbar.
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/#home" },
  {
    label: "Who We Are",
    href: "/#about",
    // sub_menu: [
    //   { label: "About iBEST", href: "/#about" },
    //   { label: "Our Values", href: "/#values" },
    //   { label: "Our People", href: "/#people" },
    // ],
  },
  {
    label: "What We Do",
    href: "/#services",
    // sub_menu: [
    //   { label: "Our Services", href: "/#services" },
    //   { label: "Why Choose Us", href: "/#why" },
    //   { label: "Our Experiences", href: "/#experiences" },
    // ],
  },
  { label: "Courses", href: "/#courses" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact Us", href: "/#contact" },
];
