"use client";

import AboutCards from "@/components/about/AboutCard";
import AboutHero from "@/components/about/AboutHero";
import TeamSection from "@/components/about/TeamSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/NavBar";
import { useTheme } from "@/hooks/store/useTheme";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        isDarkMode
          ? "App bg-gradient-to-b from-black1 to-black text-ash"
          : "App bg-gradient-to-b from-grey to-white",
        "min-h-screen"
      )}
    >
      <div className="flex w-full px-4 py-14 max-sm:py-8 max-sm-420:pb-4 justify-center">
        <Navbar />
      </div>

      <div className="flex w-full flex-col py-12 max-sm-420:gap-8 max-sm:gap-16 max-lg:gap-28 gap-44">
        <AboutHero />
        <AboutCards />
        <div id="team">
          <TeamSection />
        </div>
      </div>

      <div className="flex w-full">
        <Footer />
      </div>
    </div>
  );
}
