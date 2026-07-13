import { Slder1, Slder2 } from "@/assets";
import type { StaticImageData } from "next/image";

export interface CarouselSlide {
  image: StaticImageData | string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

// Each hero slide carries its own background plus the centered heading,
// description and calls-to-action shown over it. Every CTA is an in-page
// anchor — the hero, like the navbar, never leaves the home page.
export const SLIDES: CarouselSlide[] = [
  {
    image: Slder1,
    eyebrow: "iBEST Institute & Consultancy",
    title: "Be the best",
    highlight: "you can be",
    description:
      "An excellence training institution and consulting firm in Thimphu. Since 2014 we have trained over 400 professionals and served about 150 consulting clients.",
    cta: { label: "Explore Our Services", href: "/#services" },
    secondaryCta: { label: "Upcoming Courses", href: "/#courses" },
  },
  {
    image: Slder2,
    eyebrow: "Training • Consultancy • Multimedia",
    title: "Empowering Bhutan's",
    highlight: "economy",
    description:
      "We enable individuals, organizations and businesses through relevant skills development programs abreast of time and workforce requirement in Bhutan and beyond.",
    cta: { label: "Why Choose Us", href: "/#why" },
    secondaryCta: { label: "Talk To Us", href: "/#contact" },
  },
  {
    image: "/assets/ibest/mission.jpg",
    eyebrow: "Registered with the Department of Occupational Standards",
    title: "Skills that build",
    highlight: "a nation",
    description:
      "Our trainings are delivered by industry experts, and we don't confine them within four walls — we go beyond, to maximize the benefit and the impact.",
    cta: { label: "Our Experiences", href: "/#experiences" },
    secondaryCta: { label: "Meet Our People", href: "/#people" },
  },
];
