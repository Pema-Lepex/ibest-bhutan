export interface NavSubLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  sub_menu?: NavSubLink[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/#services",
    // sub_menu: [
    //   { label: "IT Services", href: "/services/it-services" },
    //   {
    //     label: "Creative Content Writing",
    //     href: "/services/creative-content-writing",
    //   },
    //   { label: "Video Production", href: "/services/video-production" },
    //   { label: "Animation Production", href: "/services/animation-production" },
    //   {
    //     label: "Graphic Design and Branding",
    //     href: "/services/graphic-design-and-branding",
    //   },
    //   { label: "Video Editing", href: "/services/video-editing" },
    //   { label: "Digital Marketing", href: "/services/digital-marketing" },
    // ],
  },
  { label: "Contact Us", href: "/contact" },
];