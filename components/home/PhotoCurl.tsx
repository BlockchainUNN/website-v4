"use client";

import Image from "next/image";
import { useTheme } from "@/hooks/store/useTheme";
import { commonContent } from "@/content/common";
import { cn } from "@/lib/utils";

const photoImages = {
  hacker: "/images/photos/hacker.png",
  hackerx1: "/images/photos/avax-2.jpg",
  hackerx2: "/images/photos/avax-3.jpg",
  hackerx3: "/images/photos/hacker-x-2.jpg",
  avax: "/images/photos/hacker-x.jpg",
  arbitrum: "/images/photos/arbitrum1.png",
};

export function PhotoCurl() {
  const { isDarkMode } = useTheme();

  return (
    <div className="my-24 max-w-8xl w-full flex flex-col gap-8 items-center justify-center h-fit overflow-hidden">
      {/* Top Section */}
      <div className="relative flex flex-wrap w-full max-w-[100vw] items-center justify-evenly z-40">
        {/* Left Card - HackerX 1 */}
        <div className="bg-[#02641C] justify-self-start w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] absolute -left-[18%] md:left-[8%] top-4 md:top-8 rounded-sm p-2 md:p-4 -rotate-12 z-20">
          <div
            className={cn(
              "font-wallpoet flex items-center justify-between",
              isDarkMode ? "text-black" : "text-white"
            )}
          >
            <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
            <h2>O</h2>
            <h1 className="text-[6px] md:text-[12px]">HACKER X</h1>
          </div>
          <div
            className={cn(
              "border-t-4 border-l-4 border-r-4 h-[85%] md:h-[96%]",
              isDarkMode ? "border-black" : "border-white"
            )}
          >
            <Image
              src={photoImages.hackerx1}
              alt="hacker"
              width={336}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Card - Main */}
        <div className="bg-[#02641C] w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] rounded-sm p-2 md:p-4 absolute top-0">
          <div
            className={cn(
              "font-wallpoet flex items-center justify-between",
              isDarkMode ? "text-black" : "text-white"
            )}
          >
            <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
            <h2>O</h2>
            <h1 className="text-[6px] md:text-[12px]">HACKER X</h1>
          </div>
          <div
            className={cn(
              "border-t-4 border-l-4 border-r-4 h-[85%] md:h-[96%]",
              isDarkMode ? "border-black" : "border-white"
            )}
          >
            <Image
              src={photoImages.hacker}
              alt="hacker"
              width={336}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Card - Avalanche */}
        <div className="bg-[#02641C] w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] rounded-sm p-2 md:p-4 rotate-12 absolute -right-[18%] md:right-[8%] top-4 md:top-8">
          <div
            className={cn(
              "font-wallpoet flex items-center justify-between",
              isDarkMode ? "text-black" : "text-white"
            )}
          >
            <h1 className="text-[6px] md:text-[12px]">AVALANCHE</h1>
            <h2>O</h2>
            <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
          </div>
          <div
            className={cn(
              "border-t-4 border-l-4 border-r-4 h-[85%] md:h-[96%]",
              isDarkMode ? "border-black" : "border-white"
            )}
          >
            <Image
              src={photoImages.hackerx2}
              alt="hacker"
              width={336}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Top Right Card - HackerX 3 */}
        <div className="bg-[#02641C] w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] rounded-sm px-2 md:p-4 -rotate-12 absolute -top-4 md:-top-8 -right-[18%] md:right-[8%]">
          <div
            className={cn(
              "border-b-4 border-l-4 border-r-4 h-[85%] md:h-[96%]",
              isDarkMode ? "border-black" : "border-white"
            )}
          >
            <Image
              src={photoImages.hackerx3}
              alt="hacker"
              width={336}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={cn(
              "font-wallpoet flex items-center justify-between rotate-180",
              isDarkMode ? "text-black" : "text-white"
            )}
          >
            <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
            <h2>O</h2>
            <h1 className="text-[6px] md:text-[12px]">HACKER X</h1>
          </div>
        </div>
      </div>

      {/* Logo in Center */}
      <div className="mt-[32%] md:mt-[22%] h-8 w-36">
        <Image
          src={
            isDarkMode
              ? commonContent.navigation.logo.dark
              : commonContent.navigation.logo.light
          }
          alt={commonContent.navigation.logo.alt}
          width={144}
          height={32}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom Section */}
      <div className="relative flex flex-wrap items-center w-full justify-evenly -mt-2 md:mt-8">
        {/* Bottom Left Card - Avalanche */}
        <div className="bg-[#02641C] w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] rounded-sm px-2 md:p-4 rotate-12 absolute -top-4 md:-top-8 -left-[18%] md:left-[8%]">
          <div
            className={cn(
              "border-b-4 border-l-4 border-r-4 h-[85%] md:h-[96%]",
              isDarkMode ? "border-black" : "border-white"
            )}
          >
            <Image
              src={photoImages.avax}
              alt="hacker"
              width={336}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={cn(
              "font-wallpoet flex items-center justify-between",
              isDarkMode ? "text-black" : "text-white"
            )}
          >
            <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
            <h2>O</h2>
            <h1 className="text-[6px] md:text-[12px]">AVALANCHE</h1>
          </div>
        </div>

        {/* Bottom Center Card - Arbitrum */}
        <div className="bg-[#02641C] w-[162.34px] md:w-[335.96px] h-[130.98px] md:h-[267.21px] rounded-sm px-2 md:p-4">
          <div
            className={cn(
              "border-b-4 border-l-4 border-r-4 h-[85%] md:h-[96%]",
              isDarkMode ? "border-black" : "border-white"
            )}
          >
            <Image
              src={photoImages.arbitrum}
              alt="hacker"
              width={336}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={cn(
              "font-wallpoet flex items-center justify-between",
              isDarkMode ? "text-black" : "text-white"
            )}
          >
            <h1 className="text-[6px] md:text-[12px]">BLOCKCHAINUNN</h1>
            <h2>O</h2>
            <h1 className="text-[6px] md:text-[12px]">ARBITRUM</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
