"use client";

import { BuildathonStats } from "@/components/event/BuildathonStats";
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

      {/* Schedule Section */}
      <BuildathonStats />

      {/* Categories Section */}
      {/* <BlockathonCategories /> */}

      {/* Stats Section */}
      {/* <BlockathonSpeakers /> */}

      {/* Prizes Section */}
      {/* <BlockathonPrizes /> */}

      {/* Past Wins Section */}
      {/* <BlockathonPastWins /> */}

      {/* Gallery Section */}
      {/* <BlockathonGallery /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
