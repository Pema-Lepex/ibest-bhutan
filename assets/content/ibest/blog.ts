// Blog posts — full text from ibestbhutan.com/blog.

export interface Post {
  slug: string;
  title: string;
  author: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  image: string;
  excerpt: string;
  body: string[];
  disclaimer?: string;
}

const DISCLAIMER =
  "Disclaimer: iBEST Company does not endorse opinions and views shared here on this blog column of the website. The views and opinions expressed here are solely of the author.";

export const Posts: Post[] = [
  {
    slug: "emerging-film-industry-in-bhutan",
    title: "Emerging film industry in Bhutan",
    author: "Tharchen",
    date: "2017-03-16",
    dateLabel: "16 Mar 2017",
    readingTime: "4 min read",
    image: "/assets/ibest/blog/emerging-film-industry-in-bhutan.jpg",
    excerpt:
      "Our film and creative industry has received a milestone support and gesture from the Royal Government of Bhutan in the recent times.",
    body: [
      "Our film and creative industry has received a milestone support and gesture from the Royal Government of Bhutan in the recent times.",
      "The pivotal support from the government to build a film studio and more movie theatres is an enabling encouragement to many aspiring film makers and content developers alike.",
      "This year at the Bhutan National Film Award 2017, in an unprecedented move, three best films are awarded a cash prize of ngultrum one million each as a Prime Minister's award. The rationale behind the initiative is that our films will have more weightage in the international arena to showcase our works.",
      "However, the onerous task of its fruitful realization and implementation of the initiatives for sustainability and continuity rests with the Bhutan Film Association. The association has to continue to negotiate with the government and numerous relevant stakeholders to position our film industry as an economically sustainable and vibrant venture.",
      "The ultimate and ulterior objective our industry should be to create and develop content of the highest quality in the best professional manner so that we expand our audience horizon. To culminate all these efforts and resources towards creating values in our country and to the world, the continued support and love from our public will further inspire and motivate the fraternity to walk extra mile.",
      "Despite the continuous efforts and supportive gestures from many stakeholders, our film industry is still at a nascent development stage. Some of the concerns are inadequate infrastructures, lack of adequate technical talent pool, limited market share and marketability of our works at the regional and international levels. Our industry has not been able to take a risk to capitalize the potential of internet-based business transactions of our works.",
      "Yet the industry has made quite a commendable progress in terms of improvements in the quantity and quality of films produced every year. Especially in the last two decades, our industry has produced more than ten films annually, as high as 20 films, with the continuous improvements in the overall quality of the film making. It's a tremendous achievement to have reached at this stage with the only first feature film 'Gasa Lamai Singye' produced by the Ugetsu Communications in 1989!",
      "Our industry is also gradually adopting technologies abreast of the trends. Now in the market, we can see our films with some degree of continuously improving special effects works. And in the last few years with the support from the government our Bhutanese population have an opportunity to watch short animation works such as Kada and Nado, Meme Haley Haley, and so many others.",
      "Of all the animation works so far in Bhutan, no one has been able to create a character which is loved by all Bhutanese, old and young, as Ap Bokto. It's the first 3D animation movie ever produced in Bhutan by the Athang Animation Studio in 2014.",
      "To follow the trend, one of the best technically done animation work is Drukten — The Dragon's Treasure, the first 2D animation movie which was released in 2016. The animation was done by the Studio Awake-can in association with the Drukten Productions as a producer.",
      "In a nutshell, our Bhutanese film industry is growing every year embracing newer ways of making films and adopting technologies at our disposal. And a good sign is that our works are getting attention of our own Bhutanese people at home as few works continue to garner the global attention as well.",
      "To ascertain the case, the obvious indication is a desire of our literate populace looking forward to watching movies released in theatres unlike half-a-decade ago. At present, our own Bhutanese films are creating interest amongst the majority of our people and there is a differing shift in audience seeking for a quality time through our films and works.",
      "All these changes indicate a bright future and potential to our film makers, collaborators, artists, and various stakeholders.",
    ],
    disclaimer: DISCLAIMER,
  },
  {
    slug: "needs-and-duties-of-entrepreneur",
    title: "Needs and duties of entrepreneur",
    author: "iBEST Team",
    date: "2017-02-10",
    dateLabel: "10 Feb 2017",
    readingTime: "5 min read",
    image: "/assets/ibest/blog/needs-and-duties-of-entrepreneur.jpg",
    excerpt:
      "The overall socio-economic development policy of Bhutan, which is guided by the concept of Gross National Happiness, is conducive and instrumental to promote and enable balanced and sustainable development.",
    body: [
      "The overall socio-economic development policy of Bhutan, which is guided by the concept of Gross National Happiness, is conducive and instrumental to promote and enable balanced and sustainable development. However, on the ground, there are some challenges which maybe impeding the overall socio-economic development. I refer in particular to fostering a viable and conducive entrepreneurship culture.",
      "My greatest wish and hope is that aspiring entrepreneurs with the determination to succeed, good intentions, and a great business idea, get easy access to financial support. Unfortunately the current scenario is that aspiring entrepreneurs can access financial support from financial institutions only if one has an equivalent collateral.",
      "The government can certainly intervene to resolve this hurdle, and frame policies to expedite the process. There are many ways in which this can be done — the government could either act as a guarantor or provide a seed fund to financial institutions. They can frame a policy for financial institutions to support a certain number of entrepreneurs. Or they can provide the seed funds to reliable NGOs or organizations which our entrepreneurs could avail after fulfilling certain criteria. The best example of such a model is the DHI collaboration with Loden Foundation.",
      "The other proactive action that would be of great help is streamlining licensing and approval (such as various clearances) processes, so that entrepreneurs can save time and resources, and so that entrepreneurs with plans which are in congruence with our overall national goals and objectives, are not discouraged.",
      "Another essential service we look forward to from the government is an establishment facilitating mentoring and guidance for the existing as well as aspiring entrepreneurs. Along with that if research and development (R&D) units can be established so that all information is accessible in public domain. The government can invest to bring up more incubation facilities and tie-up aspiring entrepreneurs with relevant industries or organizations within the country and abroad.",
      "The government could look into providing support and incentives through certain tax exemptions such as giving tax breaks for a stipulated duration. This would really foster and give strength to developing the entrepreneurship culture in Bhutan.",
      "As much as we ask from the government and many other responsible organizations, the entrepreneurs on other end should equally take up roles and duties seriously. We must strive to gain more credibility and go beyond short-term goals, locally as well as globally.",
      "It is a cliché, but true nevertheless, that entrepreneurs' role should be serving the 'tsa-wa-sum' and try to save the world from falling apart, and that the ultimate goal must be enhancing the wellbeing of the people and communities around us. Is it too much to ask for? Is it not worth striving or working for? Entrepreneur or any other job-description, isn't this the greatest and overarching duty for us all?",
      "I believe that, as entrepreneurs, we have a greater role to fulfill to ourselves and the enterprise we are operating (or planning to establish). Our businesses must contribute in taking forward our national vision. It begins with improving the wellbeing of the people working for the business enterprise, and extends from there to bringing benefit to our community, to the country, and the world.",
      "Entrepreneurs and their enterprises need to consider, beyond the profit and monetary gain to the owners, employees, and the country, which while important, are by no means the sole measure of our contributions as a citizen. It will be worthwhile to create and promote values such as sense of belonging and ownership, and the timeless human values of commitment, respect, compassion, love, integrity, and generosity.",
      "The entrepreneur and enterprise must institute a dynamic system, provide mentoring for their employees and promote learning culture to keep abreast of times and change. Companies must ensure that employees have ample opportunities for personal as well as professional development. In such an environment we build a better company, and by extension a better world.",
    ],
    disclaimer: DISCLAIMER,
  },
  {
    slug: "being-an-entrepreneur-and-beyond",
    title: "Being an entrepreneur and beyond",
    author: "iBEST Team",
    date: "2017-02-11",
    dateLabel: "11 Feb 2017",
    readingTime: "3 min read",
    image: "/assets/ibest/blog/being-an-entrepreneur-and-beyond.jpg",
    excerpt:
      "There has never been a better moment for business in Bhutan — new ventures have been gradually building up to a crescendo.",
    body: [
      "There has never been a better moment for business in Bhutan — new ventures have been gradually building up to a crescendo, with the realization on every quarters of the importance and opportunities of developing entrepreneurship in Bhutan.",
      "We have moved on from the mindset that to achieve success, one needs to sit for the civil service exam. More and more graduates have taken the decision to instead build their own businesses, and with the advent of agencies that support new initiatives, such as Loden Foundation and other governmental support to ease access to financing, many have made this a reality.",
      "A look at what was possible in Bhutan 10 years ago, and comparing it to today illustrates the growth of numerous small and sometimes not so small businesses. We have locally designed jewelry, tissue paper, chips, juices, and the number of interesting restaurants to choose from in Thimphu has burgeoned.",
      "But still, this is the best time in Bhutan to begin something new — many businesses may have come up, but the opportunities for newer ventures are infinite. It will be an endless list if we were to explore what is still not being done in Bhutan.",
      "And the rewards of such ventures are manifold. At a personal level, to start a successful venture, you don't have to show anyone your academic reports. What is required is far more difficult, but also always possible to achieve — great passion. Your salary will be determined by your own hard work and nothing else, and you will be your own boss.",
      "But perhaps what you are really after is the satisfaction that your work is meaningful, that what you do brings you honour for service to this country of ours. Businesses can bring that too. Many businesses will directly contribute to the nation — those that provide quality education, healthcare, or other services that benefit the people. But whatever your business is, by achieving success, you contribute to the economy and therefore the country.",
      "Economic strength means consolidating our sovereignty, by being able to have the means to look after our own. It means providing opportunities of employment and thus an improved life for individuals and by extension their families. Individual prosperity means bringing down social problems, and enabling people of the entire country to enjoy the fine things of life — art, literature, beauty, friendships, family and community. It means moving from the status of 'developing country' to 'developed'. From Third World to First.",
      "The beginning of this journey has already come. With the dedication of thousands of young entrepreneurs working with this goal in mind, we will embark on the road that will begin a new chapter of our history.",
    ],
    disclaimer: DISCLAIMER,
  },
];

export const getPost = (slug: string) => Posts.find((p) => p.slug === slug);
