import { MouseEvent, ReactNode } from "react";

export interface Speaker {
  name: string;
  title: string;
  company?: string;
  topic: string;
  imageUrl: string;

  // Social links (optional)
  twitterUrl?: string;
  linkedinUrl?: string;

  // Styling
  bgColor?: string;
}


export interface SpeakersHeaderProps {
  currentIndex: number;
  offset: number;
  onPrevious: () => void;
  onNext: () => void;
}

export interface MobileNavigationProps {
  currentIndex: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
}

export interface MobileSpeakersCarouselProps {
  speakers: Speaker[];
  currentIndex: number;
  onTwitterClick: (url: string) => void;
  onLinkedinClick: (url: string) => void;
  onPrevious: () => void;
  onNext: () => void;
}
export interface MobileSpeakerCardProps {
  speaker: Speaker;
  onTwitterClick: (url: string) => void;
  onLinkedinClick: (url: string) => void;
}

export interface DesktopSpeakersCarouselProps {
  speakers: Speaker[];
  currentIndex: number;
}

export interface SpeakerCardProps {
  // Speaker info
  name: string;
  title: string;
  company?: string;
  topic: string;
  imageUrl: string;

  // Social links (optional)
  twitterUrl?: string;
  linkedinUrl?: string;

  // Styling
  bgColor?: string;

  // Callbacks
  onTwitterClick?: () => void;
  onLinkedinClick?: () => void;
  onCardClick?: () => void;
}

type Variant = "button" | "badge" | "social" | "icon" | "navigation";
type Shape = "rounded" | "circular" | "pill";
type Size = "small" | "medium" | "large";

export interface StackGridButtonProps {
  // Content
  text?: string;
  icon?: ReactNode;

  // Style properties
  variant?: Variant;
  shape?: Shape;
  size?: Size;

  // Colors
  bgColor?: string;
  textColor?: string;
  shadowColor?: string;
  borderColor?: string;

  // Arrow specific
  hasArrow?: boolean;
  arrowBgColor?: string;
  arrowTextColor?: string;
  arrowIcon?: ReactNode;

  // Shadow/offset
  shadowOffset?: { x: number; y: number };
  shadowBlur?: number;

  // Behavior
  clickable?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;

  // Custom styles
  customClass?: string;
  width?: string | number;
  height?: string | number;
}