// Contact Us page content, ported from old_creativerse contact-us.html.
import { SiteInfo } from "../common/SiteContent";

export const ContactContent = {
  banner: {
    title: "Contact Us",
    image: "/assets/contact/contact.jpg",
  },
  form: {
    eyebrow: "Get In Touch",
    heading: "Have A Question? Drop Us A Line!",
    fields: [
      { name: "name", label: "Your Name", type: "text", required: true, half: true },
      { name: "phone", label: "Your Phone", type: "tel", required: true, half: true },
      { name: "email", label: "Email Address", type: "email", required: true, half: true },
      { name: "subject", label: "Subject", type: "text", required: true, half: true },
    ] as const,
    submitLabel: "Send Now!",
  },
  details: [
    {
      title: "Bhutan",
      value: SiteInfo.shortAddress,
      icon: "MapPin",
    },
    {
      title: "Call us on",
      value: SiteInfo.phone,
      href: SiteInfo.phoneHref,
      icon: "Phone",
    },
    {
      title: "Email us on",
      value: SiteInfo.email,
      href: `mailto:${SiteInfo.email}`,
      icon: "Mail",
    },
  ],
  map: SiteInfo.mapEmbed,
};
