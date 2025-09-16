"use client";

import AboutUs from "@/components/about/AboutUs";
import TheTeam from "@/components/about/TheTeam";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar";
import { useTheme } from "@/hooks/store/useTheme";

export default function About() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;

  return (
    <div
      className={
        (theme
          ? `App bg-gradient-to-b from-black1 to-black text-ash`
          : `App bg-gradient-to-b from-grey to-white`) + ""
      }
    >
      <div className="flex w-full px-4 py-14 max-sm:py-8 max-sm-420:pb-4 justify-center">
        <Navbar />
      </div>
      <div className="flex w-full flex-col py-12 max-sm-420:gap-8 max-sm:gap-16 max-lg:gap-28 gap-44">
        <AboutUs />
        <TheTeam />
      </div>
      <div className="flex w-full">
        <Footer />
      </div>
    </div>
  );
}
