import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import favicon from "../public/favicon.png";
import ScrollToTop from "@/components/common/ScrollToTop";
import { SiteInfo } from "@/assets/content/ibest/site";

// Body font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Heading font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ibestbhutan.com"),
  title: {
    default: "iBEST Institute & Consultancy — Be the best you can be",
    template: "%s",
  },
  description:
    "iBEST is an excellence training institution and consulting firm based in Thimphu, Bhutan. Since 2014 we have trained over 400 professionals and served about 150 consulting clients.",
  keywords: [
    "iBEST Bhutan",
    "training institute Thimphu",
    "consultancy Bhutan",
    "business plan development Bhutan",
    "2D animation course Bhutan",
    "skills development Bhutan",
  ],
  icons: { icon: favicon.src },
  openGraph: {
    title: "iBEST Institute & Consultancy",
    description:
      "Empowering the Bhutanese economy by enabling individuals, organizations and businesses to be the best they can be.",
    locale: "en_BT",
    type: "website",
    siteName: SiteInfo.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `scroll-smooth` powers the in-page anchor navigation. Next 16 no longer
    // overrides scroll-behavior during route changes on its own, so without
    // `data-scroll-behavior="smooth"` a "Read more" click would slowly glide up
    // the page instead of landing at the top of the new route.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
