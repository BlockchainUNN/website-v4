"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaPeopleCarry,
  FaPenNib,
  FaCode,
  FaPencilAlt,
  FaGift,
} from "react-icons/fa";
import { useTheme } from "@/hooks/store/useTheme";
import { useAttendeeCount } from "@/hooks/crud/useEvents";
import { useHackathonState } from "@/hooks/store/useHackathonState";
import { homeContent } from "@/content/home";
import { calculateTimeLeft } from "@/lib/utils";
import { Text } from "@/components/common/Text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useHackerCount } from "@/hooks/crud/useHacker";

const iconMap = {
  FaPenNib,
  FaCode,
  FaPencilAlt,
  FaGift,
};

export function HeroSection() {
  const { isDarkMode } = useTheme();
  const { blockathonId, hackathonId, setEventIds } = useHackathonState();
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(homeContent.upcomingEvents.eventDate)
  );

  // Set default event IDs (these would normally come from API/config)
  useEffect(() => {
    if (!blockathonId || !hackathonId) {
      setEventIds("blockathon-2024", "hackathon-2024");
    }
  }, [blockathonId, hackathonId, setEventIds]);

  // Get attendee and hacker counts
  const { data: attendeeCount } = useAttendeeCount(blockathonId);
  const { data: hackerCount } = useHackerCount(hackathonId);

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(homeContent.upcomingEvents.eventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={cn(
        "w-full min-h-screen flex flex-col items-center justify-center px-4 py-20",
        isDarkMode ? "text-white" : "text-black"
      )}
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - Content */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="text-center lg:text-left">
            <Text
              variant="h1"
              size="6xl"
              weight="black"
              font="raleway"
              className="mb-4 text-4xl md:text-6xl"
              color={isDarkMode ? "white" : "black"}
            >
              {homeContent.hero.title}
            </Text>
            <Text
              variant="p"
              size="xl"
              className="mb-6 text-lg md:text-xl"
              color={isDarkMode ? "muted" : "black"}
            >
              {homeContent.hero.subtitle}
            </Text>
            <Text
              variant="p"
              size="lg"
              className="mb-8"
              color={isDarkMode ? "muted" : "black"}
            >
              {homeContent.hero.description}
            </Text>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-blockchain-green hover:bg-blockchain-green/90"
            >
              <Link href="/event/registration">Join Community</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/event">View Events</Link>
            </Button>
          </div>

          {/* Countdown Timer */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Text size="lg" weight="semibold" color="green">
              Next Event In:
            </Text>
            <div className="flex gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className={cn(
                    "flex flex-col items-center p-3 rounded-lg min-w-16",
                    isDarkMode ? "bg-dark-mode" : "bg-gray-100"
                  )}
                >
                  <Text size="2xl" weight="bold" color="green">
                    {value.toString().padStart(2, "0")}
                  </Text>
                  <Text size="sm" color="muted">
                    {label}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Stats */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Member Count */}
          <div
            className={cn(
              "flex flex-col items-center p-6 rounded-lg",
              "bg-gradient-to-br from-blockchain-green/20 to-blockchain-green/10",
              "border border-blockchain-green/20"
            )}
          >
            <Text size="4xl" weight="bold" color="green" className="mb-2">
              {homeContent.hero.stats.members}
            </Text>
            <Text size="lg" weight="medium" align="center">
              Community Members
            </Text>
          </div>

          {/* Events & Partners */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className={cn(
                "flex flex-col items-center p-4 rounded-lg",
                isDarkMode ? "bg-dark-mode" : "bg-white shadow-md"
              )}
            >
              <Text size="2xl" weight="bold" color="green">
                {homeContent.hero.stats.events}
              </Text>
              <Text size="sm" align="center" color="muted">
                Events Hosted
              </Text>
            </div>
            <div
              className={cn(
                "flex flex-col items-center p-4 rounded-lg",
                isDarkMode ? "bg-dark-mode" : "bg-white shadow-md"
              )}
            >
              <Text size="2xl" weight="bold" color="green">
                {homeContent.hero.stats.partners}
              </Text>
              <Text size="sm" align="center" color="muted">
                Partners Worldwide
              </Text>
            </div>
          </div>

          {/* Active Communities */}
          <div
            className={cn(
              "flex flex-col p-6 rounded-lg",
              "bg-gradient-to-br from-[#02641C] to-[#02641C]/80",
              "text-[#2CE85E]"
            )}
          >
            <div className="flex items-center gap-2 mb-4">
              <Text size="3xl" weight="bold">
                {homeContent.hero.stats.communities}
              </Text>
              <Text size="sm" weight="medium">
                Active Sub-Communities
              </Text>
              <FaPeopleCarry className="hidden md:flex" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {homeContent.hero.communities.map((community) => {
                const IconComponent =
                  iconMap[community.icon as keyof typeof iconMap];
                return (
                  <div
                    key={community.name}
                    className="flex gap-2 items-center text-sm"
                  >
                    {IconComponent && <IconComponent size={12} />}
                    <Text size="sm">{community.name}</Text>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Counts */}
          {(attendeeCount || hackerCount) && (
            <div className="grid grid-cols-2 gap-4">
              {attendeeCount && (
                <div
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg",
                    isDarkMode ? "bg-dark-mode" : "bg-white shadow-md"
                  )}
                >
                  <Text size="xl" weight="bold" color="green">
                    {attendeeCount.attendeeCount || 0}
                  </Text>
                  <Text size="xs" align="center" color="muted">
                    Event Attendees
                  </Text>
                </div>
              )}
              {hackerCount && (
                <div
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg",
                    isDarkMode ? "bg-dark-mode" : "bg-white shadow-md"
                  )}
                >
                  <Text size="xl" weight="bold" color="green">
                    {hackerCount.hackerCount || 0}
                  </Text>
                  <Text size="xs" align="center" color="muted">
                    Registered Hackers
                  </Text>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
