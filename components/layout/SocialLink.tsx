"use client";

import {
  FaTwitter,
  FaDiscord,
  FaTelegram,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  FaTwitter,
  FaDiscord,
  FaTelegram,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
};

interface SocialLinkProps {
  href: string;
  icon: string;
  platform: string;
  size?: number;
  className?: string;
}

export function SocialLink({
  href,
  icon,
  platform,
  size = 20,
  className,
}: SocialLinkProps) {
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    console.warn(`Icon ${icon} not found in iconMap`);
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "p-2 rounded-full transition-all duration-200",
        "bg-blockchain-green/10 hover:bg-blockchain-green hover:text-white",
        "text-blockchain-green",
        className
      )}
      aria-label={`Visit our ${platform}`}
    >
      <IconComponent size={size} />
    </a>
  );
}
