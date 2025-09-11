"use client";

import Image from "next/image";
import { Text } from "@/components/common/Text";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { blockathonContent } from "@/content/event";

const typeColors = {
  online: "bg-blue-500",
  hybrid: "bg-yellow-500",
  physical: "bg-green-500",
};

const typeLabels = {
  online: "Online",
  hybrid: "Hybrid",
  physical: "Physical",
};

export function BlockathonSchedule() {
  return (
    <div className="w-full bg-black text-white px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Text
            variant="h2"
            size="5xl"
            weight="bold"
            className="mb-4 text-3xl md:text-5xl"
          >
            {blockathonContent.schedule.title}
          </Text>
          <Text size="lg" color="muted" className="text-gray-400">
            {blockathonContent.schedule.subtitle}
          </Text>
        </div>

        {/* Schedule Flow */}
        <div className="space-y-8">
          {blockathonContent.schedule.days.map((day, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              {/* Day Card */}
              <div className="relative bg-blockchain-white text-black rounded-lg p-6 w-full md:w-[400px] h-32 flex flex-col justify-center">
                {/* Day Badge */}
                <div className="absolute -top-4 left-6">
                  <Badge className="bg-blockchain-green text-black border-2 border-black px-4 py-1 font-bold">
                    {day.day}
                  </Badge>
                </div>

                {/* Content */}
                <div className="mt-2">
                  <Text size="xs" className="text-gray-600 mb-1">
                    {day.date}
                  </Text>
                  <Text size="lg" weight="semibold" className="mb-2">
                    {day.title}
                  </Text>
                  <Text size="sm" className="text-gray-700">
                    {day.description}
                  </Text>
                </div>

                {/* Type Indicator */}
                <div className="absolute top-2 right-2">
                  <Badge
                    className={cn(
                      "text-white text-xs",
                      typeColors[day.type as keyof typeof typeColors]
                    )}
                  >
                    {typeLabels[day.type as keyof typeof typeLabels]}
                  </Badge>
                </div>
              </div>

              {/* Arrow (except for last item) */}
              {index < blockathonContent.schedule.days.length - 1 && (
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/icons/rightarrow.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                    className="rotate-90 md:rotate-0 w-6 h-6"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {Object.entries(typeLabels).map(([type, label]) => (
            <div key={type} className="flex items-center gap-2">
              <div
                className={cn(
                  "w-3 h-3 rounded-full",
                  typeColors[type as keyof typeof typeColors]
                )}
              />
              <Text size="sm" color="muted">
                {label} Event
              </Text>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-900 rounded-lg p-6 mt-12">
          <Text size="lg" weight="semibold" className="mb-4 text-center">
            Important Notes
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blockchain-green rounded-full mt-2 flex-shrink-0" />
              <Text size="sm">All times are in West Africa Time (WAT)</Text>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blockchain-green rounded-full mt-2 flex-shrink-0" />
              <Text size="sm">
                Physical events will be held at University of Nigeria, Nsukka
              </Text>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blockchain-green rounded-full mt-2 flex-shrink-0" />
              <Text size="sm">
                Online participants can join via provided links
              </Text>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blockchain-green rounded-full mt-2 flex-shrink-0" />
              <Text size="sm">Schedule subject to minor adjustments</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
