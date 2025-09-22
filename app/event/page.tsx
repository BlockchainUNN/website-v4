"use client";

import { BuildathonStats } from "@/components/event/sections/stats";
import { BlockathonSpeakers } from "@/components/event/sections/speakers";
import BuildathonHero from "@/components/event/sections/hero";
import EventHeader from "@/components/event/event-header";
import BuildathonOverview from "@/components/event/sections/overview";
import OurJourneySoFar from "@/components/event/sections/OurJourneySoFar";
import BuildathonSponsors from "@/components/event/sections/sponsors";

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
      <BuildathonSponsors />

      {/* Gallery Section */}
      {/* <BlockathonGallery /> */}
    </div>
  );
}
