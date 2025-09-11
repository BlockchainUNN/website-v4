"use client";

import Image from "next/image";
import { useTheme } from "@/hooks/store/useTheme";
import { homeContent } from "@/content/home";
import { Text } from "@/components/common/Text";
import { cn } from "@/lib/utils";

export function Feedback() {
  const { isDarkMode } = useTheme();

  return (
    <div className="mt-8 mb-8 flex flex-col gap-8 items-center justify-center w-full">
      <Text
        variant="h2"
        size="4xl"
        weight="semibold"
        className="text-[24px] md:text-[48px]"
        color={isDarkMode ? "white" : "black"}
      >
        {homeContent.feedback.title}
      </Text>

      <div className="flex flex-row md:flex-wrap w-[99%] overflow-x-hidden md:w-full gap-[2.5rem] items-center justify-center">
        {homeContent.feedback.testimonials.map((feedback, index) => (
          <div
            key={index}
            className={cn(
              "w-[230px] h-[149px] flex-shrink-0 md:w-[400px] md:h-[260px] border-gradient animate animate-scroll-right md:animate-none",
              isDarkMode ? "bg-dark-mode" : "bg-transparent"
            )}
          >
            <div
              className={cn(
                "flex flex-col gap-4 p-4",
                isDarkMode ? "text-white" : "text-black"
              )}
            >
              <div className="flex justify-between">
                <div className="flex justify-evenly items-center gap-2">
                  <div className="w-[39px] md:w-[57px] h-[39px] md:h-[57px] rounded-full overflow-hidden">
                    <Image
                      src={feedback.image}
                      alt="profile"
                      width={57}
                      height={57}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Text
                      size="sm"
                      weight="medium"
                      className="text-[13px] md:text-[18px]"
                    >
                      {feedback.name}
                    </Text>
                    <Text size="xs" className="text-[10px] md:text-[12px]">
                      {feedback.username}
                    </Text>
                  </div>
                </div>
                <div className="bg-blockchain-green w-[31px] h-[31px] items-center justify-center rounded-md hidden md:flex">
                  <Image
                    src="/images/icons/x.svg"
                    alt="x"
                    width={20}
                    height={20}
                    className="w-[70%] h-[70%]"
                  />
                </div>
              </div>
              <Text size="xs" className="text-[9px] md:text-[18px]">
                {feedback.message}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
