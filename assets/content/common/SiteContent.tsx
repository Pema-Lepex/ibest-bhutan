// Canonical company + contact details, shared across pages (ported from old_creativerse).

export const SiteInfo = {
  name: "Creativerse",
  parent: "iBEST Technologies",
  email: "hello@creativerse.biz",
  phone: "+975 77886666",
  phoneHref: "tel:+97577886666",
  address: "Zamdo Lam, Thimphu-Babesa Expressway, Changzamtog, Thimphu, Bhutan",
  shortAddress: "Changzamtog, Thimphu",
  hours: [
    { day: "Monday - Friday", time: "09:00 AM - 05:30 PM BST" },
    { day: "Saturday", time: "09:00 AM - 01:00 PM BST" },
    { day: "Sunday", time: "Closed" },
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.4811904439825!2d89.64393539191603!3d27.46200409817676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e195f48dab3811%3A0xb0f0687044bc78f9!2siBEST%20STUDIOS!5e0!3m2!1sen!2sbt!4v1699282328782!5m2!1sen!2sbt",
  socials: [
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

// The 7 services as summary cards for the home "Our Services" grid.
export const SERVICES_SUMMARY = [
  {
    label: "IT Services",
    href: "/services/it-services",
    description:
      "Managed IT, consulting, cloud, cybersecurity, and custom software built around your goals.",
    icon: "Code",
  },
  {
    label: "Creative Content Writing",
    href: "/services/creative-content-writing",
    description:
      "Scripts, web copy, blogs, and proposals that captivate your audience and drive success.",
    icon: "PenLine",
  },
  {
    label: "Video Production",
    href: "/services/video-production",
    description:
      "From concept to post-production — corporate, promotional, and event videos that inspire.",
    icon: "Clapperboard",
  },
  {
    label: "Animation Production",
    href: "/services/animation-production",
    description:
      "Cutting-edge 2D and 3D animation for ads, advocacy, promos, and feature films.",
    icon: "Sparkles",
  },
  {
    label: "Graphic Design and Branding",
    href: "/services/graphic-design-and-branding",
    description:
      "Logos, brand identity, collaterals, and packaging that leave a lasting impression.",
    icon: "Palette",
  },
  {
    label: "Video Editing",
    href: "/services/video-editing",
    description:
      "Polished editing, montages, motion graphics, colour grading, and subtitling.",
    icon: "Film",
  },
  {
    label: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "SEO, social media, content, email, and analytics that make your brand shine online.",
    icon: "Megaphone",
  },
];
