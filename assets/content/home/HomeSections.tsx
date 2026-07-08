// Home page section content, ported from old_creativerse index.html.

export const HeroSlides = [
  {
    line1: "Building your dream",
    line2: "with",
    highlight: "PASSION",
    tags: ["Honest", "Reliable", "Trustworthy"],
    ctaLabel: "Our Services",
    ctaHref: "/services/it-services",
    img: "/assets/services/banner.jpg",
  },
  {
    line1: "Services tailored to",
    line2: "meet your",
    highlight: "NEEDS",
    tags: [],
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    img: "/assets/contact/contact.jpg",
  },
];

export const TopIntro = {
  heading: "Empowering Innovation, Embracing Excellence:",
  headingSpan: "Your Gateway to Outsourcing Success from Bhutan",
  image: "/assets/home/single-img1.jpg",
  features: [
    {
      title: "Bhutanese Expertise, Global Perspective",
      description:
        "Hailing from the enchanting landscapes of Bhutan, we bring a unique perspective to every project.",
    },
    {
      title: "Tailored to Your Vision",
      description:
        "We don't believe in one-size-fits-all solutions. Creativerse works closely with you to understand your business objectives.",
    },
  ],
};

export const AboutCompany = {
  eyebrow: "About Company",
  heading: "Empowering Innovation, Embracing Excellence",
  body: "Creativerse is a premiere Business Process Outsourcing (BPO) company based in the tranquil and culturally rich nation of Bhutan. We are a team of innovators and creative artists committed to delivering exceptional services across the globe, with a primary focus on Australia.",
  image: "/assets/home/single-img2.jpg",
  ctaLabel: "Learn More",
  ctaHref: "/about-us",
};

// 26 client logos live in /public/assets/clients/1.png .. 26.png
export const ClientLogos = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  src: `/assets/clients/${i + 1}.png`,
}));

export const RecentBlog = {
  eyebrow: "Our Blog",
  heading: "Our Recent News & Blog",
  posts: [
    {
      id: 1,
      title: "Four Friends – 3D",
      date: "28 Mar",
      image: "/assets/blog/four-friends.jpg",
      excerpt:
        "Chunku is shy and must decide between being timid or brave. Tong Tong has a no-nonsense attitude that keeps the group grounded.",
      href: "#",
    },
    {
      id: 2,
      title: "Interactive Gamified Content",
      date: "28 Mar",
      image: "/assets/blog/interactive.jpg",
      excerpt:
        'Introducing "Cheychey," an engaging and educational experience designed to make learning a delightful adventure for kids.',
      href: "#",
    },
    {
      id: 3,
      title: "Dragon Tales – Stories for Children",
      date: "05 Feb",
      image: "/assets/blog/dragon-tales.jpg",
      excerpt:
        "A series of stories gifted to all our children in Bhutan and beyond, celebrating the rich tradition of Bhutanese storytelling.",
      href: "#",
    },
  ],
};
