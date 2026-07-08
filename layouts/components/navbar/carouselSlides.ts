import { Slder1, Slder2 } from "@/assets";
import type { StaticImageData } from "next/image";

export interface CarouselSlide {
  image: StaticImageData;
  title: string;
  description: string;
  cta: { label: string; href: string };
}

// Each carousel slide carries its own background image plus the centered
// heading, description and call-to-action button shown over it.
export const SLIDES: CarouselSlide[] = [
  {
    image: Slder1,
    title: "Digital Solutions That Grow Your Business",
    description:
      "From web development to creative content, we build the tools that put your brand ahead.",
    cta: { label: "Explore Services", href: "/#services" },
  },
  {
    image: Slder2,
    title: "Creative Content, Crafted in Bhutan",
    description:
      "Video production, design and storytelling that connects with your audience.",
    cta: { label: "Get a Quote", href: "/#contact" },
  },
];
