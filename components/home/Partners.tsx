"use client";

import Image from "next/image";
import { useTheme } from "@/hooks/store/useTheme";
import { homeContent } from "@/content/home";
import { Text } from "@/components/common/Text";
import { cn } from "@/lib/utils";

const partnerLogos = [
  "/images/partners/avalanche.png",
  "/images/partners/garage.svg",
  "/images/partners/alphablocks.png",
  "/images/partners/gida.png",
  "/images/partners/cartesi.png",
  "/images/partners/avalanche.png", // Duplicate for continuous scroll
];

export function Partners() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        "mb-12 border-t border-b border-gray-500 py-8 w-full",
        isDarkMode ? "bg-dark-mode" : "bg-white"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Text
          size="5xl"
          weight="medium"
          className="text-[30px] md:text-[50px]"
          color={isDarkMode ? "white" : "black"}
        >
          {homeContent.partners.title}
        </Text>
        <Text
          size="lg"
          className="text-[14px] md:text-[28px] w-[95%] text-center"
          color={isDarkMode ? "white" : "black"}
        >
          In{" "}
          <span className="text-blockchain-green font-raleway text-[14px] md:text-[28px]">
            BlockchainUNN
          </span>{" "}
          community, we believe in the power of partnership and collaboration.
        </Text>
      </div>

      {/* Scrolling Partners Logo Section */}
      <div className="my-8 w-full overflow-x-hidden">
        <div className="flex gap-4 animate-scroll-right">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className={cn(
                "h-[123px] w-[258px] rounded-2xl flex items-center justify-center flex-shrink-0",
                isDarkMode ? "bg-black" : "bg-black"
              )}
            >
              <Image
                src={logo}
                alt={`partner-${index}`}
                width={220}
                height={104}
                className="w-[85%] h-[85%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Partner Grid for Mobile */}
      <div className="md:hidden grid grid-cols-2 gap-4 px-4">
        {homeContent.partners.partners.slice(0, 4).map((partner, index) => (
          <div
            key={index}
            className="bg-black h-[80px] rounded-lg flex items-center justify-center"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="w-[85%] h-[85%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
