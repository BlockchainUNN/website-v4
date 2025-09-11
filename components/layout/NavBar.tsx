"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "@/hooks/store/useTheme";
import { commonContent } from "@/content/common";
import { cn } from "@/lib/utils";
import { SocialLink } from "./SocialLink";
import { ThemeSwitch } from "./ThemeSwitch";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const pathname = usePathname();

  const currentPage = pathname.split("/")[1] || "home";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={cn(
        "w-[95%] rounded-md px-4 md:px-10 py-4 flex justify-between items-center shadow-2xl relative",
        isDarkMode ? "bg-dark-mode shadow text-ash" : "bg-white"
      )}
    >
      {/* Mobile Logo */}
      <div className="mt-2 h-8 w-36 md:hidden">
        <Image
          src={
            isDarkMode
              ? commonContent.navigation.logo.dark
              : commonContent.navigation.logo.light
          }
          alt={commonContent.navigation.logo.alt}
          width={144}
          height={32}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex gap-4 items-center md:hidden">
        <ThemeSwitch />
        <div onClick={toggleMobileMenu}>
          {!isMobileMenuOpen && <FaBars size={28} className="cursor-pointer" />}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex max-lg:gap-8 gap-16 items-center justify-between w-full">
        <div className="mt-2 h-8 w-36">
          <Image
            src={
              isDarkMode
                ? commonContent.navigation.logo.dark
                : commonContent.navigation.logo.light
            }
            alt={commonContent.navigation.logo.alt}
            width={144}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-8 items-center">
          {commonContent.navigation.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-medium transition-colors duration-200",
                currentPage === link.label.toLowerCase()
                  ? "text-blockchain-green"
                  : isDarkMode
                  ? "text-ash hover:text-blockchain-green"
                  : "text-black hover:text-blockchain-green"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <ThemeSwitch />
          <div className="flex gap-3">
            {commonContent.footer.socialLinks.slice(0, 3).map((social) => (
              <SocialLink
                key={social.platform}
                href={social.href}
                icon={social.icon}
                platform={social.platform}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-screen flex flex-col gap-8 px-8 py-6 z-50 md:hidden",
            isDarkMode ? "bg-dark-mode" : "bg-white"
          )}
        >
          <div className="flex justify-between items-center">
            <div className="h-8 w-36">
              <Image
                src={
                  isDarkMode
                    ? commonContent.navigation.logo.dark
                    : commonContent.navigation.logo.light
                }
                alt={commonContent.navigation.logo.alt}
                width={144}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <FaTimes
              size={28}
              className="cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>

          <div className="flex flex-col gap-6 mt-8">
            {commonContent.navigation.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={toggleMobileMenu}
                className={cn(
                  "text-lg font-medium transition-colors duration-200",
                  currentPage === link.label.toLowerCase()
                    ? "text-blockchain-green"
                    : isDarkMode
                    ? "text-ash hover:text-blockchain-green"
                    : "text-black hover:text-blockchain-green"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            {commonContent.footer.socialLinks.map((social) => (
              <SocialLink
                key={social.platform}
                href={social.href}
                icon={social.icon}
                platform={social.platform}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
