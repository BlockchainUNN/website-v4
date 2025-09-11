"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/hooks/store/useTheme";
import { commonContent } from "@/content/common";
import { Text } from "@/components/common/Text";
import { cn } from "@/lib/utils";
import { SocialLink } from "./SocialLink";

export function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={cn(
        "flex flex-col items-center justify-center gap-4 w-full mt-12",
        isDarkMode ? "bg-dark-mode" : "bg-white"
      )}
    >
      {/* Main Footer Content */}
      <div
        className={cn(
          "flex items-center justify-between w-full border-t border-b",
          isDarkMode ? "border-gray-600" : "border-gray-400"
        )}
      >
        {/* Left Section - Logo & Navigation */}
        <div
          className={cn(
            "md:px-[4rem] px-0 py-[2rem] flex items-center gap-2 w-[50%] md:gap-12 border-r md:w-[45%]",
            isDarkMode ? "border-gray-600" : "border-gray-400"
          )}
        >
          <div className="w-28 md:w-[244px] h-28 md:h-[262.21px] self-start">
            <Image
              src={
                isDarkMode
                  ? commonContent.navigation.logo.dark
                  : commonContent.navigation.logo.light
              }
              alt={commonContent.navigation.logo.alt}
              width={244}
              height={262}
              className="w-full h-full object-contain"
            />
          </div>

          <nav className="flex flex-col items-start gap-4 pr-4">
            {commonContent.footer.quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-[10px] md:text-[16px] transition-colors duration-200 hover:text-blockchain-green",
                  isDarkMode ? "text-white" : "text-black"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section - Contact Info */}
        <div className="text-start flex flex-col items-start px-4 md:px-2 py-[2rem] w-[45%]">
          <Text
            variant="h3"
            size="lg"
            weight="semibold"
            className="text-[18px] md:text-[24px]"
            color={isDarkMode ? "white" : "black"}
          >
            Contact
          </Text>

          <Link
            href="mailto:blockchainunn@gmail.com"
            className="text-blockchain-green text-[10px] md:text-[18px] font-medium hover:underline"
          >
            blockchainunn@gmail.com
          </Link>

          <Text
            size="sm"
            weight="semibold"
            className="text-[10px] md:text-[24px] mt-4"
            color={isDarkMode ? "white" : "black"}
          >
            University of Nigeria, Nsukka
          </Text>

          <Text
            size="sm"
            weight="semibold"
            className="text-[10px] md:text-[18px]"
            color={isDarkMode ? "white" : "black"}
          >
            Enugu state.
          </Text>

          {/* Social Links */}
          <div className="flex gap-3 mt-4">
            {commonContent.footer.socialLinks.map((social) => (
              <SocialLink
                key={social.platform}
                href={social.href}
                icon={social.icon}
                platform={social.platform}
                size={16}
                className="w-8 h-8"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div
        className={cn(
          "flex flex-col items-start justify-center w-full p-4 md:px-16",
          isDarkMode ? "text-white" : "text-black"
        )}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
          <Text size="sm" className="text-[10px] md:text-[16px]">
            {commonContent.footer.copyright}
          </Text>

          {/* Additional Footer Links */}
          <div className="flex gap-4 text-[10px] md:text-[14px]">
            <Link
              href="/privacy"
              className={cn(
                "transition-colors duration-200 hover:text-blockchain-green",
                isDarkMode ? "text-white" : "text-black"
              )}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className={cn(
                "transition-colors duration-200 hover:text-blockchain-green",
                isDarkMode ? "text-white" : "text-black"
              )}
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Footer Description */}
        <Text
          size="sm"
          className="text-[10px] md:text-[14px] mt-4 opacity-80 max-w-2xl"
          color="muted"
        >
          {commonContent.footer.description}
        </Text>
      </div>
    </footer>
  );
}
