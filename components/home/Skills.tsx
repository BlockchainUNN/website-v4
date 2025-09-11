"use client";

import Image from "next/image";
import { useTheme } from "@/hooks/store/useTheme";
import { homeContent } from "@/content/home";
import { Text } from "@/components/common/Text";
import { cn } from "@/lib/utils";

const skillImages = {
  blockchain: "/images/skills/skill.png",
  crypto: "/images/skills/cryptoskill.png",
  web: "/images/skills/webskill.png",
  design: "/images/skills/designskill.png",
  send: "/images/icons/send.svg",
  sendBlack: "/images/icons/send-black.svg",
  ellipse: "/images/icons/ellipse.svg",
};

export function Skills() {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col items-center gap-4 w-full md:gap-8 mb-12">
      {/* Header with Ellipse Background */}
      <div className={cn("relative", isDarkMode ? "text-white" : "text-black")}>
        <Image
          src={skillImages.ellipse}
          alt="ellipse"
          width={400}
          height={80}
          className="w-[80%] md:w-auto mx-auto"
        />
        <Image
          src={skillImages.ellipse}
          alt="ellipse"
          width={395}
          height={80}
          className="absolute top-0 w-[76%] md:w-[395px] right-12 md:right-0"
        />
        <Text
          variant="h2"
          className="absolute top-5 md:top-8 left-[30%] text-[30px] font-semibold"
        >
          What we do
        </Text>
      </div>

      {/* Description */}
      <div
        className={cn(
          "flex text-center w-[90%] md:w-[75%] text-[12px] md:text-[24px] mx-auto",
          isDarkMode ? "text-white" : "text-black"
        )}
      >
        <Text>
          <span className="font-raleway font-semibold">BlockchainUNN </span>
          is dedicated to helping students learn and grow in exciting fields of
          Blockchain, technology, and innovation. Start your journey
          understanding blockchain technology, its most popular applications and
          the current landscape of innovation in the industry.
        </Text>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2 md:gap-8 p-4 w-full items-center justify-center md:w-[89%] mx-auto">
        {/* First Row */}
        <div className="flex md:flex-row flex-col items-center justify-center w-[95%] mt-12 md:mt-0 md:w-full gap-2 md:gap-8">
          {/* Blockchain Development */}
          <div className="relative flex flex-col items-center md:items-start gap-4 w-[95%] md:w-[640px] h-[250px] md:h-[400px] bg-blockchain-green rounded-xl p-4 md:p-8">
            <Text
              size="lg"
              weight="bold"
              color="white"
              className="md:mt-2 text-[18px] md:text-[24px]"
            >
              Blockchain Development
            </Text>
            <Text
              size="sm"
              color="white"
              className="text-center md:text-start w-[85%] md:w-[75%] text-[12px] md:text-[16px]"
            >
              BlockchainUNN community is the best place to learn blockchain
              development and build a career in this exciting field.
            </Text>
            <div className="absolute bottom-0 w-[95%] md:right-0 flex flex-col gap-2 md:gap-auto md:flex-row items-center justify-between">
              <div className="flex gap-2 md:gap-4 text-white font-semibold items-center text-[10px] md:text-[14px]">
                <Image
                  src={skillImages.send}
                  alt="send"
                  width={16}
                  height={16}
                  className="h-3 w-3 md:h-auto md:w-auto"
                />
                <Text size="sm" color="white">
                  Decentralization
                </Text>
              </div>
              <div className="w-[186px] md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
                <Image
                  src={skillImages.blockchain}
                  alt="hacker"
                  width={400}
                  height={210}
                  className={cn(
                    "w-full h-full object-cover rounded-xl",
                    !isDarkMode && "border-2 border-white"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Web 2.0 */}
          <div className="relative flex flex-col items-center md:items-start gap-4 w-full md:w-[640px] h-[250px] md:h-[400px] bg-blockchain-white rounded-xl p-4 md:p-8">
            <div className="relative -mt-4 flex w-[186px] md:hidden md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
              <Image
                src={skillImages.web}
                alt="hacker"
                width={186}
                height={100}
                className={cn(
                  "w-full h-full object-cover rounded-xl",
                  !isDarkMode && "border-2 border-white"
                )}
              />
            </div>
            <Text
              size="lg"
              weight="bold"
              color="black"
              className="text-center md:text-end md:mt-2 text-[18px] md:text-[24px]"
            >
              Web 2.0
            </Text>
            <Text
              color="black"
              className="text-center md:text-start md:self-start w-[85%] md:w-[75%] text-[12px] md:text-[16px]"
            >
              Unlock the power Web development. Be ready to take your skills to
              the next level. Join our web 2.0 community.
            </Text>
            <div className="absolute bottom-5 md:bottom-0 w-[95%] left-0 flex flex-col md:flex-row items-center justify-between">
              <div className="hidden w-[186px] md:flex md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
                <Image
                  src={skillImages.web}
                  alt="hacker"
                  width={400}
                  height={210}
                  className={cn(
                    "w-full h-full object-cover rounded-xl",
                    !isDarkMode && "border-2 border-white"
                  )}
                />
              </div>
              <div className="hidden md:flex gap-2 md:gap-4 text-black font-semibold items-center text-[8px] md:text-[14px]">
                <Text size="sm" color="black">
                  Development / 2.0
                </Text>
                <Image
                  src={skillImages.sendBlack}
                  alt="send"
                  width={16}
                  height={16}
                  className="w-2 h-2 md:h-auto md:w-auto"
                />
              </div>
              <div className="md:hidden flex gap-2 md:gap-4 text-black font-bold items-center text-[10px] md:text-[14px]">
                <Image
                  src={skillImages.sendBlack}
                  alt="send"
                  width={16}
                  height={16}
                  className="w-2 h-2 md:h-auto md:w-auto rotate-180"
                />
                <Text size="sm" color="black">
                  Development / 2.0
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex md:flex-row flex-col-reverse items-center justify-center w-[95%] mt-12 md:mt-0 md:w-full gap-2 md:gap-8">
          {/* Crypto Education */}
          <div className="relative flex flex-col items-center md:items-start gap-4 w-full md:w-[640px] h-[250px] md:h-[400px] bg-blockchain-white rounded-xl p-4 md:p-8">
            <div className="relative -mt-4 flex w-[186px] md:hidden md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
              <Image
                src={skillImages.crypto}
                alt="hacker"
                width={186}
                height={100}
                className={cn(
                  "w-full h-full object-cover rounded-xl",
                  !isDarkMode && "border-2 border-white"
                )}
              />
            </div>
            <Text
              size="lg"
              weight="bold"
              color="black"
              className="text-center md:text-end md:mt-2 text-[18px] md:text-[24px]"
            >
              Crypto Education
            </Text>
            <Text
              color="black"
              className="text-center md:text-end md:self-end w-[85%] md:w-[75%] text-[12px] md:text-[16px]"
            >
              The secret of market! Take your crypto skills to the next level by
              joining our community to learn from experienced traders.
            </Text>
            <div className="absolute bottom-5 md:bottom-0 w-[95%] left-0 flex flex-col md:flex-row items-center justify-between">
              <div className="hidden w-[186px] md:flex md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
                <Image
                  src={skillImages.crypto}
                  alt="hacker"
                  width={400}
                  height={210}
                  className={cn(
                    "w-full h-full object-cover rounded-xl",
                    !isDarkMode && "border-2 border-white"
                  )}
                />
              </div>
              <div className="hidden md:flex gap-2 md:gap-4 text-black font-semibold items-center text-[8px] md:text-[14px]">
                <Text size="sm" color="black">
                  Cryptocurrency
                </Text>
                <Image
                  src={skillImages.sendBlack}
                  alt="send"
                  width={16}
                  height={16}
                  className="w-2 h-2 md:h-auto md:w-auto"
                />
              </div>
              <div className="md:hidden flex gap-2 md:gap-4 text-black font-bold items-center text-[10px] md:text-[14px]">
                <Image
                  src={skillImages.sendBlack}
                  alt="send"
                  width={16}
                  height={16}
                  className="w-2 h-2 md:h-auto md:w-auto rotate-180"
                />
                <Text size="sm" color="black">
                  Cryptocurrency
                </Text>
              </div>
            </div>
          </div>

          {/* Design Stack */}
          <div className="relative flex flex-col items-center md:items-end gap-4 w-full md:w-[640px] h-[250px] md:h-[400px] bg-blockchain-green rounded-xl p-4 md:p-8">
            <Text
              size="lg"
              weight="bold"
              color="white"
              className="md:mt-2 text-[18px] md:text-[24px]"
            >
              Design Stack
            </Text>
            <Text
              color="white"
              className="text-center md:text-end w-[85%] md:w-[75%] text-[12px] md:text-[16px]"
            >
              Unleash your creativity, join our design community learn from
              industry experts, and likeminded individuals.
            </Text>
            <div className="absolute bottom-0 w-[95%] md:right-0 flex flex-col gap-2 md:gap-auto md:flex-row items-center justify-between">
              <div className="flex gap-2 md:gap-4 text-white font-semibold items-center text-[10px] md:text-[14px]">
                <Image
                  src={skillImages.send}
                  alt="send"
                  width={16}
                  height={16}
                  className="h-3 w-3 md:h-auto md:w-auto"
                />
                <Text size="sm" color="white">
                  Creativity / Figma
                </Text>
              </div>
              <div className="w-[186px] md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
                <Image
                  src={skillImages.design}
                  alt="hacker"
                  width={400}
                  height={210}
                  className={cn(
                    "w-full h-full object-cover rounded-xl",
                    !isDarkMode && "border-2 border-white"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
