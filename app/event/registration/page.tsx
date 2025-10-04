"use client";

import EventHeader from "@/components/event/event-header";
import FixedRegistrationForm from "@/components/event/registration/FixedForm";
import BuildathonCountdown from "@/components/event/sections/countdown";
import BuildathonCTA from "@/components/event/sections/cta";

export default function SplitRegistrationPage() {
  return (
    <section className="min-h-screen w-full">
      <EventHeader />
      <FixedRegistrationForm className="py-12" />
      <BuildathonCountdown />
      <BuildathonCTA />
    </section>
  );
}
