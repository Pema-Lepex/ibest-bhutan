// "What We Do" — the three service units, with the full detail-page copy.
// Text taken from ibestbhutan.com/what-we-do/our-services/*.

export interface Service {
  slug: string;
  title: string;
  icon: string;
  image: string;
  /** One-line teaser used on the home page card. */
  summary: string;
  /** Full body copy for the detail page. */
  paragraphs: string[];
  /** Heading above the list on the detail page. */
  listHeading: string;
  items: string[];
}

export const Services: Service[] = [
  {
    slug: "training-services",
    title: "Training Services",
    icon: "graduation",
    image: "/assets/ibest/training.jpg",
    summary:
      "iBEST Institute is a registered training service provider under the Department of Occupational Standards, Ministry of Labour and Human Resources, Royal Government of Bhutan.",
    paragraphs: [
      "iBEST Institute is a registered training service provider under the Department of Occupational Standards, Ministry of Labour and Human Resources, Royal Government of Bhutan.",
      "iBEST Institute of Media, Management and Technical Studies offers tailor-made courses designed for maximum impact, for a wide ranging spectrum of the population. These trainings, conducted by experts in the field, include along with information and new insights, the skills to apply the knowledge.",
      "Our trainings are provided by the industry experts that bring huge experiences and insights. We don't confine our trainings within four walls, but go beyond to maximize the benefits and impacts.",
    ],
    listHeading:
      "We offer the following courses according to the current pressing needs of the ever changing workforce developments:",
    items: [
      "iBEST Leadership Courses",
      "iBEST Entrepreneurship Courses",
      "iBEST Management Courses",
      "iBEST Financial Courses",
      "iBEST Multimedia Course",
      "iBEST Media Courses",
      "iBEST Pre-Employment Courses",
      "iBEST Technical and Engineering Courses",
      "iBEST Research Methodology Courses",
      "iBEST Coaching Classes",
    ],
  },
  {
    slug: "consultancy-services",
    title: "Consultancy Services",
    icon: "briefcase",
    image: "/assets/ibest/consultancy.jpg",
    summary:
      "iBEST Consultancy is powered by our strong interest in encouraging a successful private sector, with a proliferation of prosperous businesses. We offer advice on strategy and management, plans and proposals.",
    paragraphs: [
      "iBEST Consultancy is powered by our strong interest in encouraging a successful private sector, with a proliferation of prosperous businesses. We offer advice on strategy and management, plans and proposals, and provide our expertise on operationalization of business.",
      "We also offer follow up services for publicity and marketing. Our unique strength is that consulting works are driven by our competent members with strong research and analytical skills.",
    ],
    listHeading: "What we can help you with:",
    items: [
      "Business plan development",
      "Grant writing",
      "Market and feasibility studies",
      "Processing environment clearances (EIA / EMP)",
      "Designing",
      "Editing and proofreading",
      "Translation services",
      "Marketing and brand management",
      "Mentoring",
      "Accounting / tax filing",
    ],
  },
  {
    slug: "multimedia-solutions",
    title: "Multimedia Solutions",
    icon: "film",
    image: "/assets/ibest/multimedia.jpg",
    summary:
      "Our Multimedia unit complements our two other services with the production of high quality content, publications and multimedia solutions.",
    paragraphs: [
      "Our Multimedia unit complements our two other services with the production of high quality content, publications and multimedia solutions.",
      "Through this unit services, we dream and aspire to preserve and promote our traditional oral stories and folktales, visual online content creation, tell the epic stories and many more. This is to provide the best alternative entertainment avenues and knowledge/content creation to save them for the posterity.",
    ],
    listHeading: "Our multimedia work covers:",
    items: [
      "Animation",
      "Online content creation",
      "Preservation of folktales for posterity",
      "Publications",
    ],
  },
];

export const getService = (slug: string) =>
  Services.find((s) => s.slug === slug);

// "Our Experiences" page content.
export const Experiences = {
  eyebrow: "Our Experiences",
  heading: "Work we are proud of",
  paragraphs: [
    "Since the humble inception of our company, iBESTers as a team have delivered numerous successful project proposals to set up agriculture-based businesses. Our clients go as far as Trashigang in the far eastern region to Bumthang, Trongsa and Zhemgang in the center to Sarpang and Samtse in the south to the western dzongkhags. We have assisted our satisfied clients through the simple process of availing trade license and environmental clearances.",
    "Beyond the necessary consultancy work, we have mentored our clients with their initial business establishment through their operationalization of the startup. Our clients still consult us for our expertise and insights.",
    "We have done a couple of projects to establish FDI establishments and assisted few agencies to seek the funding opportunities from the relevant organizations. Beyond the satisfaction and scope of work, we have delivered numerous work related to designing and editing our clients' publications and other works.",
    "Through our iBEST Institute, we have trained people from diverse professional background and age groups in various courses ranging from Leadership to Management and Preparatory Coaching Classes.",
  ],
  gallery: Array.from({ length: 8 }, (_, i) => ({
    src: `/assets/ibest/experience/OE${i + 1}.jpg`,
    alt: `iBEST training and consultancy work, photo ${i + 1}`,
  })),
};
