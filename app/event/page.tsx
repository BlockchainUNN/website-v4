"use client";

import { BuildathonStats } from "@/components/event/sections/BuildathonStats";
import { BlockathonSpeakers } from "@/components/event/sections/BlockathonSpeakers";
import BuildathonHero from "@/components/event/sections/BuildathonHero";
import EventHeader from "@/components/event/event-header";
import BuildathonOverview from "@/components/event/sections/BuildathonOverview";
import OurJourneySoFar from "@/components/event/sections/OurJourneySoFar";

export default function BlockathonEventPage() {
  return (
    <div className="w-full" style={{ fontFamily: "var(--font-hanken)" }}>
      <EventHeader />

      {/* Hero Section */}
      <BuildathonHero />

      {/* Stats Section */}
      <BuildathonStats />

      {/* Categories Section */}
      <BuildathonOverview />

      {/* Speakers Section */}
      <BlockathonSpeakers />

      {/* Past Wins Section */}
      <OurJourneySoFar />

      {/* Prizes Section */}
      {/* <BlockathonPrizes /> */}

      {/* Gallery Section */}
      {/* <BlockathonGallery /> */}
    </div>
  );
}
