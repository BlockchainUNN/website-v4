"use client";

import { recentEventsData } from "@/data/communityData";
import { communityContent } from "@/content/community";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useTheme } from "@/hooks/store/useTheme";
import { Text } from "../common/Text";
import { useCommunityStore } from "@/hooks/store/useCommunityStore";

interface EventCardProps {
  event: {
    id: string;
    flyer: string;
    imageLinks?: string;
    title?: string;
  };
}

function EventCard({ event }: EventCardProps) {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex justify-center">
      <Card
        className={cn(
          isDarkMode ? "bg-[#0e5220]" : "bg-slate-100",
          "flex flex-col justify-center max-md:w-[12.8rem] w-[18.8rem] py-[0.35rem] rounded-lg border-none"
        )}
      >
        <div
          className={cn(
            isDarkMode
              ? "bg-gradient-to-b from-[#02270C] to-[#011607]"
              : "bg-gradient-to-b from-gray-300 via-green-400 to-gray-300",
            "flex justify-center mx-auto max-md:w-[12.125rem] w-[18.125rem] py-0.5 rounded-t-lg"
          )}
        >
          <div className="flex max-md:w-[12rem] w-[18rem] max-md:h-[11rem] h-[17rem] relative rounded-t-lg bg-black overflow-hidden">
            <Image
              src={event.flyer}
              alt={event.title || "Event flyer"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <CardContent className="flex w-full justify-center py-3">
          {event.imageLinks ? (
            <Link
              href={event.imageLinks}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="link" className="p-0">
                View Images
              </Button>
            </Link>
          ) : (
            <Text size="sm" color="muted">
              Coming Soon
            </Text>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function RecentEvents() {
  const { currentEventIndex, nextEvent, prevEvent } = useCommunityStore();

  // Get 3 events starting from currentEventIndex
  const visibleEvents = recentEventsData.slice(
    currentEventIndex,
    currentEventIndex + 3
  );

  return (
    <div className="flex flex-col gap-10 justify-center max-lg:px-20 max-md:px-10 max-sm:px-6 px-36">
      <Text
        variant="h2"
        weight="semibold"
        className="text-[2.5rem] max-lg:text-[2rem] max-md:text-[1.75rem] max-sm:text-[1.5rem] max-sm-420:text-[1.2rem] text-center mx-auto"
      >
        {communityContent.events.title}
      </Text>

      <div className="flex items-center justify-center gap-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevEvent}
          disabled={currentEventIndex === 0}
          className="min-w-12 min-h-12 -mx-8 my-auto pb-14"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>

        <div className="flex gap-6 max-md:gap-4 justify-center">
          {visibleEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextEvent}
          disabled={currentEventIndex >= recentEventsData.length - 3}
          className="min-w-12 min-h-12 -mx-8 my-auto pb-14"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
