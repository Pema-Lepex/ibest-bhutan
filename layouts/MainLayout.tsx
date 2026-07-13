"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
  /**
   * Home page renders the full-screen hero behind the menu. Detail pages don't,
   * so they need top padding to clear the always-on sticky bar.
   */
  withHero?: boolean;
}

export default function MainLayout({
  children,
  withHero = true,
}: MainLayoutProps) {
  return (
    <>
      <Navbar withHero={withHero} />
      {/* `w-full` is load-bearing: body is a column flex container, and `mx-auto`
          alone would override the default stretch and shrink main to its content
          width — which would inset every full-bleed section background. */}
      <main
        className={`w-full mx-auto 5xl:max-w-[3200px] ${withHero ? "" : "pt-16"}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
