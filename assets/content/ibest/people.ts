// "Our People" — team bios from ibestbhutan.com/who-we-are/our-people.

export interface Person {
  slug: string;
  name: string;
  role: string;
  /** Short teaser shown on the home page card. */
  summary: string;
  /** Full bio for the detail page. */
  paragraphs: string[];
  /** Pull-quote surfaced on the detail page. */
  highlight: string;
}

export const People: Person[] = [
  {
    slug: "tharchen",
    name: "Tharchen",
    role: "CEO and Founder",
    summary:
      "A passionate trainer and trained public speaker specializing in project management and business development.",
    paragraphs: [
      "Since founding the company in August 2014, Tharchen leads iBEST as the Chief Executive Officer spearheading the company's product development and strategies. He is a passionate trainer and trained public speaker with the specialization in project management and business development.",
      "He has a Bachelor's Degree in life science from Sherubtse College (affiliated with Delhi University, India). He underwent professional trainings in International Project Administration and Agribusiness SME Development from Denmark, and Business Process Outsourcing in Infosys, Bangalore, India. Having availed numerous courses in Bhutan in the field of entrepreneurship, research, project management, mentoring and curriculum design, Tharchen has a broad overview of diverse professions.",
      "He is enterprising at heart, but aims to create social values! He believes team work and leadership, and has high regard for trust.",
      "He likes to be called a failed dairy farmer! He believes that investment in skills development and improving rural economy will do wonders in Bhutan. Even today, he finds it difficult to believe that he had run 600 kilometers across the country in 35 days (2007-2008) for the \"Run for the Kids — Tarathon\" campaign.",
    ],
    highlight:
      "He believes that investment in skills development and improving rural economy will do wonders in Bhutan.",
  },
  {
    slug: "sonam-rinchen",
    name: "Sonam Rinchen",
    role: "Chief Operations Officer",
    summary:
      "Responsible for day-to-day operations, with an entrepreneurial instinct that has grown iBEST into a one-stop training institution.",
    paragraphs: [
      "Sonam Rinchen joined iBEST as the Chief Operations Officer in November 2014. Since then he is responsible for the company's day-to-day operations and developing strategies to bring new products. He possesses an entrepreneurial instinct and his clarity of the vision has helped the company grow from a humble consulting firm to a one-stop training institution.",
      "He graduated from Sherubtse College with a Bachelor's Degree in applied Physical Science. With a strong desire for professional growth and learning, Sonam studied MBA in India, specializing in management and finance studies. He finds his greatest motivation in training and coaching others to perform beyond expectations.",
      "Prior to joining iBEST, he worked as a Manager at STCBL from 2010-2012 and also taught math and ICT in 2009.",
    ],
    highlight:
      "He finds his greatest motivation in training and coaching others to perform beyond expectations.",
  },
  {
    slug: "tenzin",
    name: "Tenzin",
    role: "Business Development Officer",
    summary:
      "Leads business plan development, market and feasibility studies — and takes pride only when a client's project succeeds.",
    paragraphs: [
      "Tenzin leads iBEST in the capacity of Business Development Officer and Asst. Financial Analyst. He sees that the development of business plans and its market and feasibility studies are comprehensive. He is satisfied and only takes pride when our clients' projects are successful.",
      "As a young boy, he was mesmerized by a guitar and fortunately playing it came naturally to him. Since then Tenzin kept his passion alive and composing his own songs, he sang for his friends in schools through graduation. He majored in Accounting from Gaeddu College of Business Studies, Bhutan.",
      "At the college, he was intrigued why some business fail while others succeed. Dealing with clients from diverse background, he is humbled with his simple finding and observation. Successful business is all about sustainability driven by profitability of idea and guided by accountability. These three are inseparably interdependent!",
      "Tenzin is content, and he thinks it's more of a design that he chose to work at the iBEST which challenges his inquisitive interest and love for numbers. He wonders if there is a mystical connection in being able to play a guitar naturally and his love for the numbers. He is still figuring it out, and when he does he loves to publish a book on it!",
    ],
    highlight:
      "Successful business is all about sustainability driven by profitability of idea and guided by accountability.",
  },
  {
    slug: "yeshey-tharchen",
    name: "Yeshey Tharchen",
    role: "Marketing Officer",
    summary:
      "A trained curriculum designer who consults with clients on business plans, market research and feasibility studies.",
    paragraphs: [
      "Yeshey Tharchen is a graduate from Gaeddu College of Business Studies, Bhutan with a major in Marketing. Currently he works at iBEST as a Marketing Officer. Alongside his primary function, he consults with clients to develop business plans, conduct market research and carry out feasibility studies.",
      "He loves dealing with people from all walks of life and his humility eases him to build genuine relationship with the people around him. He trains people in areas of marketing and management as an assistant instructor.",
      "Yeshey is a trained curriculum designer and he thinks it's a plus point to be working at the iBEST Institute which aspires to become an acclaimed one-stop learning center.",
      "In his leisure time, he plays football as a forward. This is what — he believes — most often a factor for winning matters because one is imbued with responsibility to lead the team. And he loves and enjoys it!",
    ],
    highlight:
      "He loves dealing with people from all walks of life, and his humility eases him to build genuine relationships.",
  },
];

export const getPerson = (slug: string) => People.find((p) => p.slug === slug);
