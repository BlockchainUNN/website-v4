"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/hooks/store/useTheme";
import { homeContent } from "@/content/home";
import { Text } from "@/components/common/Text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PastEvents() {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const events = homeContent.pastEvents.events;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : events.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < events.length - 1 ? prevIndex + 1 : 0
    );
  };

  const { imageSrc, date, title } = events[currentIndex];

  return (
    <div className="w-[88%] flex flex-col gap-4 items-center justify-center my-12">
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
          {homeContent.pastEvents.title}
        </Text>
      </div>

      {/* Event Carousel */}
      <div className="flex items-center justify-between w-[95%] md:w-[85%]">
        <div className="relative w-full border-gradient">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute -left-4 z-10 top-[40%] cursor-pointer w-12 h-12 md:w-auto md:h-auto"
          >
            <Image
              src="/images/icons/previous-icon.svg"
              alt="previous"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </button>

          {/* Event Image */}
          <div className="w-full h-[200px] md:h-[650px] rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
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
                {date}
              </Text>
              <Text
                variant="h1"
                size="3xl"
                weight="semibold"
                color="black"
                className="text-[20px] md:text-[35px]"
              >
                {title}
              </Text>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute -right-4 z-10 top-[40%] cursor-pointer w-12 h-12 md:w-auto md:h-auto"
          >
            <Image
              src="/images/icons/next-icon.svg"
              alt="next"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>

      {/* Explore Button */}
      <Button
        variant="outline"
        size="lg"
        className={cn(
          "my-12 border-blockchain-green bg-transparent px-6 py-4 text-[24px] font-mono",
          isDarkMode
            ? "text-white hover:bg-blockchain-green hover:text-white"
            : "text-black hover:bg-blockchain-green hover:text-white"
        )}
      >
        Explore Events
      </Button>

      {/* Event Indicators */}
      <div className="flex gap-2 mt-4">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-200",
              index === currentIndex
                ? "bg-blockchain-green"
                : isDarkMode
                ? "bg-gray-600"
                : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
