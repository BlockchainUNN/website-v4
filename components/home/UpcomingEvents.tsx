"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/hooks/store/useTheme";
import { homeContent } from "@/content/home";
import { Text } from "@/components/common/Text";
import { Button } from "@/components/ui/button";
import { calculateTimeLeft } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function UpcomingEvents() {
  const { isDarkMode } = useTheme();
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(homeContent.upcomingEvents.eventDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(homeContent.upcomingEvents.eventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full flex flex-col gap-4 items-center justify-center my-12"
      id="events"
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-2 w-full">
        <Image
          src={
            isDarkMode
              ? "/images/icons/timer-white.svg"
              : "/images/icons/timer.svg"
          }
          alt="timer"
          width={95}
          height={95}
          className="w-[38px] h-[38px] md:w-[95px] md:h-[95px]"
        />
        <Text
          variant="h1"
          size="5xl"
          weight="bold"
          className="text-[22.5px] md:text-[55px]"
          color={isDarkMode ? "white" : "black"}
        >
          {homeContent.upcomingEvents.title}
        </Text>
      </div>

      {/* Event Card */}
      <div className="w-[95%] md:w-[85%] flex flex-col items-center gap-8">
        <div className="relative w-full border-gradient">
          <div className="w-full h-[200px] md:h-[650px] rounded-xl overflow-hidden">
            <Image
              src="/images/events/blockathon.png"
              alt="Blockathon 2024"
              width={800}
              height={650}
              className="w-full h-full object-cover rounded-t-xl"
            />
          </div>

          {/* Event Info */}
          <div className="font-wallpoet h-fit px-6 py-4 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-center bg-blockchain-white rounded-b-md">
            <div className="text-center">
              <Text
                size="lg"
                weight="medium"
                color="black"
                className="text-[16px] md:text-[20px]"
              >
                NOV. 1ST - 3RD || 2024
              </Text>
              <Text
                variant="h1"
                size="3xl"
                weight="semibold"
                color="black"
                className="text-[20px] md:text-[35px]"
              >
                BLOCKATHON 2024
              </Text>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="w-full max-w-2xl">
          <Text
            size="lg"
            weight="semibold"
            align="center"
            color="green"
            className="mb-4"
          >
            Event Starts In:
          </Text>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map(({ label, value }) => (
              <div
                key={label}
                className={cn(
                  "flex flex-col items-center p-4 rounded-lg",
                  isDarkMode ? "bg-dark-mode" : "bg-white shadow-md"
                )}
              >
                <Text
                  size="3xl"
                  weight="bold"
                  color="green"
                  className="text-2xl md:text-4xl"
                >
                  {value.toString().padStart(2, "0")}
                </Text>
                <Text size="sm" color="muted" className="text-xs md:text-sm">
                  {label}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button
            asChild
            size="lg"
            className="bg-blockchain-green hover:bg-blockchain-green/90"
          >
            <Link href="/event/registration">Register for Conference</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/hackathon/registration">Join Hackathon</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
