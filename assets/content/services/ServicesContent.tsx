

export interface ServiceOffering {
  title: string;
  description: string;
}

export interface ServiceContent {
  slug: string;
  /** Short label used in the sidebar service list */
  label: string;
  /** Page-title banner heading */
  title: string;
  /** Hero image shown at the top of the content column (path under /public) */
  image: string;
  /** Intro paragraph(s) */
  intro: string[];
  /** Heading above the offerings list */
  offeringsTitle: string;
  /** The individual services / "what we offer" items */
  offerings: ServiceOffering[];
  /** Closing note */
  closing?: string;
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "it-services",
    label: "IT Services",
    title: "IT Services",
    image: "/assets/services/it-services.jpg",
    intro: [
      "At Creativerse, we offer a comprehensive range of IT services designed to streamline your business operations, enhance efficiency, and ensure your technology infrastructure aligns with your strategic goals. Our team of highly skilled IT professionals in Bhutan is dedicated to delivering top-notch services tailored to your specific needs.",
    ],
    offeringsTitle: "Our IT Services",
    offerings: [
      {
        title: "Managed IT Services",
        description:
          "Leave the management of your IT infrastructure to us. Our experts will ensure your systems are secure, up-to-date, and running smoothly. Focus on your core business while we handle the technical details.",
      },
      {
        title: "IT Consulting",
        description:
          "Gain a competitive edge with our IT consulting services. We'll assess your current IT environment, provide recommendations, and create a roadmap to optimize your technology investment.",
      },
      {
        title: "Network Setup and Maintenance",
        description:
          "Efficient and reliable network infrastructure is crucial. We offer network design, installation, and ongoing maintenance services to keep your operations connected and secure.",
      },
      {
        title: "Cloud Solutions",
        description:
          "Harness the power of the cloud with our tailored solutions. We provide cloud migration, hosting, and management to improve accessibility and scalability while reducing costs.",
      },
      {
        title: "Cybersecurity Services",
        description:
          "Protect your data and operations from cyber threats. Our cybersecurity services include risk assessments, data protection, threat monitoring, and employee training.",
      },
      {
        title: "Software Development",
        description:
          "Custom software solutions built to your specifications. We develop web and mobile applications, ensuring they are user-friendly, scalable, and capable of meeting your business requirements.",
      },
      {
        title: "Data Backup and Recovery",
        description:
          "Don't leave your data vulnerable. We implement robust backup and disaster recovery solutions to safeguard your critical information.",
      },
      {
        title: "IT Support and Helpdesk",
        description:
          "Our responsive IT support and helpdesk teams are available to assist with technical issues, ensuring minimal disruption to your business.",
      },
      {
        title: "IT Infrastructure Upgrades",
        description:
          "Keep your IT infrastructure current with our upgrade services. We'll help you adapt to new technologies and scale your operations.",
      },
    ],
    closing:
      "Creativerse is a premiere Business Process Outsourcing (BPO) company based in the tranquil and culturally rich nation of Bhutan.",
  },
  {
    slug: "creative-content-writing",
    label: "Creative Content Writing",
    title: "Content Writing",
    image: "/assets/services/content-writing.jpg",
    intro: [
      "At Creativerse, we are dedicated to helping your business communicate its message effectively through the power of words. Our team of skilled content writers in Bhutan understands the nuances of language, culture, and business, and we're here to create compelling content that captivates your audience and drives your success.",
    ],
    offeringsTitle: "Our Content Writing Services",
    offerings: [
      {
        title: "Script Writing",
        description:
          "Lights, camera, action! We understand the power of compelling narratives and the impact they can have on your brand and message. Our team of skilled scriptwriters specializes in crafting scripts and concepts for advertisements, advocacy campaigns, promotional videos, films, documentaries, and more.",
      },
      {
        title: "Web Content Writing",
        description:
          "Your website is often the first point of contact with your audience. Our expert web content writers create engaging, SEO-optimized content that communicates your brand's message and attracts visitors.",
      },
      {
        title: "Blog Writing",
        description:
          "Consistent and informative blog posts can establish your authority in your industry. We provide well-researched, relevant, and engaging blog content that keeps your audience coming back for more.",
      },
      {
        title: "Social Media Content",
        description:
          "Engage your social media audience with fresh and engaging content. We create posts, tweets, and updates that reflect your brand's personality and create a buzz.",
      },
      {
        title: "E-commerce Product Descriptions",
        description:
          "Improve product sales with persuasive and accurate product descriptions. Our writers make your products stand out in a crowded marketplace.",
      },
      {
        title: "Email Marketing Content",
        description:
          "Our email marketing content drives engagement and conversions. We create attention-grabbing subject lines and persuasive email copy that converts readers into customers.",
      },
      {
        title: "Content Editing and Proofreading",
        description:
          "We offer meticulous content editing and proofreading services to ensure your existing content is error-free, clear, and well-polished.",
      },
      {
        title: "Business Proposals",
        description:
          "Make a compelling case for your business with our expertly crafted business proposals. We blend creativity and professionalism to win over clients and investors.",
      },
      {
        title: "Standard Operating Procedures (SOPs)",
        description:
          "Ensure smooth operations and adherence to industry standards with our meticulously written SOPs. We make complex processes easy to understand and follow.",
      },
    ],
    closing:
      "Creativerse is a premiere Business Process Outsourcing (BPO) company based in the tranquil and culturally rich nation of Bhutan.",
  },
  {
    slug: "video-production",
    label: "Video Production",
    title: "Video Production",
    image: "/assets/services/video-production.jpg",
    intro: [
      "We have an expert team of videographers, editors, and creative minds in Bhutan to bring your vision to life. From conceptualization to post-production, we provide top-notch video production services that engage, inspire, and captivate your audience.",
    ],
    offeringsTitle: "Our Video Production Services",
    offerings: [
      {
        title: "Corporate Videos",
        description:
          "Showcase your brand's story, products, and services with professional corporate videos. We create compelling visuals that build trust and credibility.",
      },
      {
        title: "Marketing and Promotional Videos",
        description:
          "Elevate your marketing campaigns with attention-grabbing promotional videos. We tailor content to target your audience and boost conversions.",
      },
      {
        title: "Explainer Videos",
        description:
          "Simplify complex ideas and concepts with animated or live-action explainer videos. We help your audience understand your products and services effortlessly.",
      },
      {
        title: "Event Videos",
        description:
          "Capture the essence of your events with our event videography services. Whether it's a conference, seminar, or special occasion, we ensure no moment is missed.",
      },
      {
        title: "Training and Educational Videos",
        description:
          "Simplify training and education with engaging video content. We create instructional videos that are easy to follow and understand.",
      },
      {
        title: "Drone Videography",
        description:
          "Experience a unique perspective with our drone videography services. We provide stunning aerial shots to add depth and uniqueness to your videos.",
      },
      {
        title: "Video Editing and Post-Production",
        description:
          "Our skilled video editors refine and perfect your footage, ensuring a polished final product that tells your story effectively.",
      },
    ],
    closing:
      "Creativerse is a premiere Business Process Outsourcing (BPO) company based in the tranquil and culturally rich nation of Bhutan.",
  },
  {
    slug: "animation-production",
    label: "Animation Production",
    title: "Animation Production",
    image: "/assets/services/animation-production.jpg",
    intro: [
      "At Creativerse, we turn imagination into reality through our cutting-edge 2D and 3D animation services. We understand that in today's visually driven world, animation is a powerful tool that can be harnessed for a wide range of purposes, from captivating advertisements and advocacy videos to dynamic promotional content and even feature films. With a team of talented animators and state-of-the-art technology, we're here to bring your vision to life.",
    ],
    offeringsTitle: "Our Animation Services",
    offerings: [
      {
        title: "Character Animation",
        description:
          "Create memorable characters that convey your brand message effectively. Design lifelike characters for games, films, and advertisements.",
      },
      {
        title: "Animated Ads",
        description:
          "Make your brand unforgettable with animated advertisements that stand out from the competition. From TV commercials to online promotions, our animations leave a lasting impact.",
      },
      {
        title: "Advocacy Videos",
        description:
          "Share your mission, cause, or campaign with the world through compelling advocacy videos that drive change.",
      },
      {
        title: "Promotional Content",
        description:
          "Fuel your marketing campaigns with engaging promotional animations that grab your audience's attention.",
      },
      {
        title: "Feature Films",
        description:
          "From pre-production storyboarding to post-production editing, we offer end-to-end 2D and 3D animation services for feature films.",
      },
    ],
    closing:
      "Creativerse is a premiere Business Process Outsourcing (BPO) company based in the tranquil and culturally rich nation of Bhutan.",
  },
  {
    slug: "graphic-design-and-branding",
    label: "Graphic Design and Branding",
    title: "Graphic Design and Branding",
    image: "/assets/services/graphic-design.jpg",
    intro: [
      "At Creativerse, we believe in the power of visual storytelling. Our team of talented graphic designers and branding experts in Bhutan are committed to bringing your brand to life through innovative design solutions. We transform your ideas into captivating visuals that leave a lasting impression on your audience.",
    ],
    offeringsTitle: "Our Graphic Design and Branding Services",
    offerings: [
      {
        title: "Logo Design",
        description:
          "Your logo is the face of your brand. Our logo designers create unique, memorable, and visually appealing logos that represent your brand's identity.",
      },
      {
        title: "Brand Identity Development",
        description:
          "We work with you to define and refine your brand identity, including colour schemes, typography, and visual elements that resonate with your target audience.",
      },
      {
        title: "Marketing Collaterals",
        description:
          "Elevate your marketing efforts with professionally designed collaterals. We create brochures, flyers, banners, and other promotional materials that engage and inform your audience.",
      },
      {
        title: "Packaging Design",
        description:
          "Stand out on the shelves with eye-catching packaging. Our designers create packaging that not only protects your products but also tells a compelling story.",
      },
      {
        title: "Website Design",
        description:
          "Your website is often the first point of contact with customers. We design user-friendly, visually appealing websites that reflect your brand and convert visitors into customers.",
      },
      {
        title: "Social Media Graphics",
        description:
          "Make a strong online presence with visually appealing social media graphics. We create customized graphics for your social media profiles that engage and captivate your audience.",
      },
      {
        title: "Infographics",
        description:
          "Simplify complex information with compelling infographics. We design visuals that convey data and insights in an easy-to-understand format.",
      },
      {
        title: "Branding Consultation",
        description:
          "Our branding experts work with you to define your brand's core values and messaging, ensuring a consistent and impactful brand presence.",
      },
      {
        title: "Print and Digital Advertisements",
        description:
          "Whether it's print or digital advertising, our designers craft compelling advertisements that make your brand shine and drive results.",
      },
    ],
    closing:
      "Creativerse is a premiere Business Process Outsourcing (BPO) company based in the tranquil and culturally rich nation of Bhutan.",
  },
  {
    slug: "video-editing",
    label: "Video Editing",
    title: "Video Editing",
    image: "/assets/services/video-editing.jpg",
    intro: [
      "At Creativerse, we specialize in transforming raw video footage into captivating, professional, and engaging content. Our team of skilled video editors in Bhutan is here to take your videos to the next level, ensuring they leave a lasting impression on your audience.",
    ],
    offeringsTitle: "Our Video Editing Services",
    offerings: [
      {
        title: "Video Editing and Post-Production",
        description:
          "Our expert video editors have a keen eye for detail. We'll refine your raw footage, add effects, transitions, and sound enhancements to create a polished and seamless final product.",
      },
      {
        title: "Video Montages",
        description:
          "Whether it's a memorable family event or a corporate presentation, we'll create compelling video montages that tell a cohesive and impactful story.",
      },
      {
        title: "Social Media Videos",
        description:
          "Enhance your social media presence with attention-grabbing videos. We'll edit your content to be shareable and engaging on platforms like Facebook, Instagram, and TikTok.",
      },
      {
        title: "Corporate Videos",
        description:
          "Make your corporate videos stand out with professional editing. We'll create videos that effectively communicate your company's message, brand, and goals.",
      },
      {
        title: "YouTube Video Editing",
        description:
          "For YouTubers and content creators, we offer editing that optimizes your videos for YouTube's algorithm and viewer retention.",
      },
      {
        title: "Video Effects and Animation",
        description:
          "We can add visual effects, animations, and motion graphics to make your videos more dynamic and visually appealing.",
      },
      {
        title: "Colour Correction and Grading",
        description:
          "Ensure your videos have the right colour balance and mood with our colour correction and grading services.",
      },
      {
        title: "Transcription and Subtitling",
        description:
          "We provide accurate transcriptions and subtitling services to make your videos accessible to a wider audience.",
      },
    ],
    closing:
      "Creativerse is a premiere Business Process Outsourcing (BPO) company based in the tranquil and culturally rich nation of Bhutan.",
  },
  {
    slug: "digital-marketing",
    label: "Digital Marketing",
    title: "Digital Marketing",
    image: "/assets/services/digital-marketing.jpg",
    intro: [
      "Our digital marketing services are designed to help businesses thrive in an ever-evolving online environment. With a team of experienced professionals, we tailor strategies to ensure your brand shines brightly in the digital sphere.",
    ],
    offeringsTitle: "Our Digital Marketing Services",
    offerings: [
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "Boost your online visibility with our SEO expertise. We employ white-hat strategies to improve your website's ranking on search engines, driving organic traffic and increasing conversions.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Engage and expand your audience with our social media marketing. We craft compelling content, manage campaigns, and foster authentic connections with your followers.",
      },
      {
        title: "Content Marketing",
        description:
          "Fuel your online presence with valuable content. Our content marketing strategies include blog posts, articles, videos, and more to inform, educate, and engage your audience.",
      },
      {
        title: "Email Marketing",
        description:
          "Keep your audience engaged with personalized and well-timed email marketing campaigns. We design and execute email strategies that drive conversions and customer loyalty.",
      },
      {
        title: "Online Reputation Management",
        description:
          "Safeguard your brand's online reputation. We monitor mentions, reviews, and comments to maintain a positive digital image for your business.",
      },
      {
        title: "Website Design and Development",
        description:
          "A user-friendly and responsive website is the cornerstone of your online presence. We offer web design and development services to create an attractive and functional digital space for your brand.",
      },
      {
        title: "Analytics and Reporting",
        description:
          "We provide detailed analytics and reporting to help you understand the effectiveness of your digital marketing campaigns. Data-driven insights enable us to make strategic adjustments for better results.",
      },
    ],
    closing:
      "Creativerse is a premiere Business Process Outsourcing (BPO) company based in the tranquil and culturally rich nation of Bhutan.",
  },
];

export const getServiceBySlug = (slug: string): ServiceContent | undefined =>
  SERVICES.find((s) => s.slug === slug);
