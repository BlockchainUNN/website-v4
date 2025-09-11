"use client";

import { aboutContent } from "@/content/about";
import { cn } from "@/lib/utils";
import { Text } from "../common/Text";

export default function AboutHero() {
  //   const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col w-full gap-24 max-lg:gap-16 max-sm:gap-6 max-md:gap-12">
      <div className="flex flex-col w-full text-center font-raleway gap-6 max-md:gap-4">
        <Text
          variant="h1"
          className={cn(
            "text-blockchain-green font-black max-md:text-[1.2rem] max-lg:text-[1.5rem] text-[1.75rem] leading-none uppercase"
          )}
        >
          {aboutContent.hero.title}
        </Text>

        <Text
          variant="h2"
          className={cn(
            "font-black max-sm:text-[1.5rem] max-sm-420:text-[1.2rem] max-md:text-[2rem] max-lg:text-[3rem] text-[3.5rem] text-balance max-sm-420:leading-[1.5rem] max-sm:leading-[2rem] max-md:leading-[3rem] max-lg:leading-[3.5rem] leading-[4rem]"
          )}
        >
          {aboutContent.hero.subtitle}
        </Text>

        <Text
          className={cn(
            "max-sm:text-[0.875rem] max-md:text-[1rem] max-lg:text-[1.2rem] text-[1.5rem] text-balance mx-auto max-sm-420:w-[20rem] max-sm:w-[26rem] max-md:w-[32rem] max-lg:w-[40rem] w-[51rem]"
          )}
        >
          {aboutContent.hero.description}
        </Text>
      </div>
    </div>
  );
}
