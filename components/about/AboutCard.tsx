"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/hooks/store/useTheme";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Text } from "../common/Text";
import { aboutContent } from "@/content/about";

interface AboutCardProps {
  title: string;
  icon: string;
  content: string;
}

function AboutCard({ title, icon, content }: AboutCardProps) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        isDarkMode
          ? "p-px bg-gradient-to-b from-[#13B93F] to-[#6DBB82] max-sm-420:rounded-xl rounded-2xl"
          : "",
        "flex w-full max-lg:w-fit"
      )}
    >
      <Card
        className={cn(
          isDarkMode ? "bg-[#000C03]" : "bg-[#EDEDED]",
          "flex w-full max-lg:w-fit flex-col gap-8 max-lg:gap-6 max-sm:gap-4 max-sm-420:gap-1.5 max-sm-420:rounded-xl rounded-2xl py-12 max-lg:py-8 max-sm-420:py-4 max-sm-420:px-3 px-4 drop-shadow-xl shadow-xl border-none"
        )}
      >
        <CardContent className="p-0">
          <div className="flex w-full justify-start">
            <span className="flex justify-center max-sm:w-[3.5rem] max-sm:h-[3.5rem] max-sm-420:w-[3rem] max-sm-420:h-[3rem] w-[4.5rem] h-[4.5rem] bg-blockchain-green rounded-full">
              <Image
                src={icon}
                alt={`${title} Icon`}
                width={28}
                height={28}
                className="max-sm:w-5 max-sm-420:w-4 w-7 max-sm:h-5 max-sm-420:h-4 h-7 my-auto"
              />
            </span>
          </div>

          <div className="flex flex-col gap-4 max-lg:gap-2 max-sm-420:gap-1.5 w-full mt-8 max-lg:mt-6 max-sm:mt-4 max-sm-420:mt-1.5">
            <Text
              variant="h3"
              weight="semibold"
              className="max-sm-420:text-[0.875rem] max-sm:text-[1rem] max-lg:text-[1.2rem] text-[1.5rem]"
            >
              {title}
            </Text>

            <Text className="w-[17rem] max-sm-420:w-[7rem] max-sm:w-[10rem] max-lg:w-[15rem] text-pretty max-sm-420:text-[0.5rem] max-sm:text-[0.875rem] max-lg:text-base text-[1.2rem] max-sm-420:leading-3 max-sm:leading-5 leading-6">
              {content}
            </Text>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AboutCards() {
  return (
    <div className="flex gap-14 max-lg:gap-8 max-sm:gap-4 max-lg:flex-wrap max-sm:py-4 py-10 max-md:py-6 mx-auto justify-center">
      <AboutCard
        title={aboutContent.cards.mission.title}
        icon="/images/icons/flag.svg"
        content={aboutContent.cards.mission.description}
      />

      <AboutCard
        title={aboutContent.cards.vision.title}
        icon="/images/icons/ourVision.svg"
        content={aboutContent.cards.vision.description}
      />

      <AboutCard
        title={aboutContent.cards.values.title}
        icon="/images/icons/ourvalue.svg"
        content={aboutContent.cards.values.description}
      />
    </div>
  );
}
