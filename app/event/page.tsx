"use client";

import { BlockathonSchedule } from "@/components/event/BlockathonSchedule";
import { BlockathonSpeakers } from "@/components/event/BlockathonSpeakers";
import BuildathonHero from "@/components/event/BuildathonHero";
import EventHeader from "@/components/event/event-header";
import Footer from "@/components/layout/Footer";

export default function BlockathonEventPage() {
  return (
    <div className="w-full" style={{ fontFamily: "var(--font-hanken)" }}>
      <EventHeader />

      {/* Hero Section */}
      <BuildathonHero />

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
