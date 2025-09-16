"use client";

import { BlockathonHero } from "@/components/event/BlockathonHero";
import { BlockathonSchedule } from "@/components/event/BlockathonSchedule";
import { BlockathonSpeakers } from "@/components/event/BlockathonSpeakers";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar";

export default function BlockathonEventPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Navigation */}
      <div className="flex w-full px-4 py-14 max-sm:py-8 max-sm-420:pb-4 justify-center">
        <Navbar />
      </div>

      {/* Hero Section */}
      <BlockathonHero />

      {/* Speakers Section */}
      <BlockathonSpeakers />

      {/* Schedule Section */}
      <BlockathonSchedule />

      {/* Categories Section */}
      {/* <BlockathonCategories /> */}

      {/* Prizes Section */}
      {/* <BlockathonPrizes /> */}

      {/* Past Wins Section */}
      {/* <BlockathonPastWins /> */}

      {/* Gallery Section */}
      {/* <BlockathonGallery /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
