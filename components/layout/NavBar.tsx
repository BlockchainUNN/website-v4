"use client";
import React, { useState } from "react";
import LogoBlack from "../../public/assets/blockchainunn-green.png";
import LogoWhite from "../../public/assets/blockchainunn-white.png";

import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image.js";
import { useTheme } from "@/hooks/store/useTheme";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";
import SocialLink from "./SocialLink";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Community", "Hackathon", "Events"]; //"Blog"
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;
  const pathname = usePathname();

  // Get the current page from the URL to highlight the corresponding nav item
  const currentPage = pathname.split("/")[1] || "home";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to get the correct link for each nav item
  const getNavItemLink = (item: string) => {
    if (item.toLowerCase() === "team") {
      return "/about#team";
    }
    if (item.toLowerCase() === "hackathon") {
      return "/hackathon/login";
    }
    if (item.toLowerCase() === "home") {
      return "/";
    }
    if (item.toLowerCase() === "events") {
      return "/event";
    }
    return `/${item.toLowerCase()}`;
  };

  return (
    <div
      className={`${
        theme ? "bg-dark-mode shadow text-[#B2B2B2]" : "bg-white"
      } w-[95%] rounded-md px-4 md:px-10 py-4 flex justify-between items-center shadow-2xl relative`}
    >
      {/* Mobile Logo */}
      <div className="mt-2 h-8 w-36 md:hidden">
        {theme ? (
          <Image
            width={500}
            src={LogoWhite}
            alt="Blockchainunn"
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            width={500}
            src={LogoBlack}
            alt="Blockchainunn"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex gap-4 items-center md:hidden ">
        <ThemeSwitch />
        <div className="" onClick={toggleMobileMenu}>
          {!isMobileMenuOpen && <FaBars size={28} className="cursor-pointer" />}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex max-lg:gap-8 gap-16 items-center justify-between w-full">
        <div className="mt-2 h-8 w-36">
          {theme ? (
            <Image
              width={500}
              src={LogoWhite}
              alt="Blockchainunn"
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              width={500}
              src={LogoBlack}
              alt="Blockchainunn"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <ul className="flex gap-8 max-lg:gap-4">
          {navItems.map((item) => (
            <li key={item} className="relative cursor-pointer">
              <Link href={getNavItemLink(item)} className="block">
                <span>{item}</span>
                {/* Show the green bar if this is the active page */}
                {currentPage === item.toLowerCase() && (
                  <div className="absolute left-1/4 transform -translate-x-1/2 bottom-[-4px] w-1/2 border-b-2 border-green-600 rounded-sm"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <SocialLink
            to={"https://www.linkedin.com/company/blockchainunn/"}
            type={"linkedin"}
          />
          <SocialLink to={"https://t.me/BlockchainUNN"} type={"telegram"} />
          <SocialLink to={"https://x.com/BlockchainUNN"} type={"x"} />
          <SocialLink
            to={"https://www.instagram.com/blockchainunn"}
            type={"instagram"}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute flex flex-col top-2 left-0 w-full h-fit bg-white z-10 shadow-lg p-4 overflow-hidden ">
          <FaTimes
            size={25}
            onClick={toggleMobileMenu}
            className="self-end cursor-pointer"
          />
          <ul className="flex flex-col gap-4 p-2">
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href={getNavItemLink(item)} className="block">
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
