"use client";

import { communityContent } from "@/content/community";
import { useTheme } from "@/hooks/store/useTheme";
import { cn } from "@/lib/utils";
import { Text } from "../common/Text";

export default function CommunityHeader() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        isDarkMode ? "bg-dark-mode-2" : "bg-white1",
        "flex py-4 max-md:px-10 px-14 drop-shadow-custom mx-auto"
      )}
    >
      <Text
        variant="h1"
        weight="black"
        className={cn(
          isDarkMode
            ? "font-outline-2 bg-gradient-to-b from-[#D9D9D966] to-[#7373731A]"
            : "bg-gradient-to-b from-[#10F04C] to-[#053010]",
          "text-transparent max-lg:text-[3.5rem] max-md:text-[3rem] max-sm:text-[2rem] max-sm-420:text-[1.5rem] text-[4rem] bg-clip-text"
        )}
      >
        {communityContent.hero.title}
      </Text>
    </div>
  );
}
