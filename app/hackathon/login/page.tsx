"use client";

import EventHeader from "@/components/event/event-header";
import FixedHackathonLoginForm from "@/components/event/registration/HackathonLoginFixedForm";
import BuildathonCountdown from "@/components/event/sections/countdown";
import BuildathonCTA from "@/components/event/sections/cta";

export default function SplitRegistrationPage() {
  return (
    <section className="min-h-screen w-full">
      <EventHeader />
      <FixedHackathonLoginForm className="py-12" />
      <BuildathonCountdown />
      <BuildathonCTA />
    </section>
  );
}
