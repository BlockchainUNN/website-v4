"use client";

import { useTheme } from "@/hooks/store/useTheme";
import { cn } from "@/lib/utils";
import { HeroSection } from "@/components/home/HeroSection";
import { PhotoCurl } from "@/components/home/PhotoCurl";
import { Skills } from "@/components/home/Skills";
import { Feedback } from "@/components/home/Feedback";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { PastEvents } from "@/components/home/PastEvents";
import { Partners } from "@/components/home/Partners";
import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/NavBar";

export default function HomePage() {
  const { isDarkMode } = useTheme();

  return (
    <main className={cn("App w-full", isDarkMode ? "App-dark" : "App-light")}>
      <div className="flex w-full px-4 py-14 max-sm:py-8 max-sm-420:pb-4 justify-center">
        <Navbar />
      </div>

      <HeroSection />
      <PhotoCurl />
      <Skills />
      <Feedback />
      <UpcomingEvents />
      <PastEvents />
      <Partners />
      <Newsletter />
      <Footer />
    </main>
  );
}
