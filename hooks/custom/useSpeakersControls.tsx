import { Speaker } from "@/types/speaker.types";
import { useState } from "react";

export const speakers: Speaker[] = [
  {
    name: "Ugochukwu Aronu",
    title: "CEO",
    company: "Xend Finance, Blockchain expert",
    topic: "Blockchain and Real World Assets",
    imageUrl: "/assets/events/aronu.png",
    twitterUrl: "https://x.com/ugo_aronu",
    linkedinUrl: "https://www.linkedin.com/in/ugo-aronu/",
    bgColor: "#FFCCCD",
  },
  {
    name: "Favour Umoren",
    title: "CEO",
    company: "Xend Finance, Blockchain expert",
    topic: "Blockchain and Real World Assets",
    imageUrl: "/assets/events/favour.png",
    twitterUrl: "https://x.com/favour_umoren",
    linkedinUrl: "https://www.linkedin.com/in/favour-umoren/",
    bgColor: "#CCFFD1",
  },
  {
    name: "John Smith",
    title: "CTO",
    company: "Tech Innovations, AI Expert",
    topic: "Artificial Intelligence in Finance",
    imageUrl: "/assets/events/aronu.png",
    twitterUrl: "https://x.com/john_smith",
    linkedinUrl: "https://www.linkedin.com/in/john-smith/",
    bgColor: "#CCD9FF",
  },
  {
    name: "Sarah Johnson",
    title: "Founder",
    company: "DeFi Solutions, Blockchain Pioneer",
    topic: "Decentralized Finance Revolution",
    imageUrl: "/assets/events/favour.png",
    twitterUrl: "https://x.com/sarah_johnson",
    linkedinUrl: "https://www.linkedin.com/in/sarah-johnson/",
    bgColor: "#E1BEE7",
  },
  {
    name: "Michael Chen",
    title: "Lead Developer",
    company: "Smart Contracts Inc, Web3 Expert",
    topic: "Smart Contract Security",
    imageUrl: "/assets/events/aronu.png",
    twitterUrl: "https://x.com/michael_chen",
    linkedinUrl: "https://www.linkedin.com/in/michael-chen/",
    bgColor: "#B3E5FC",
  },
  {
    name: "Emily Davis",
    title: "Product Manager",
    company: "Crypto Ventures, Innovation Lead",
    topic: "Product Strategy in Web3",
    imageUrl: "/assets/events/favour.png",
    twitterUrl: "https://x.com/emily_davis",
    linkedinUrl: "https://www.linkedin.com/in/emily-davis/",
    bgColor: "#DCEDC8",
  },
  {
    name: "Ugochukwu Aronu",
    title: "CEO",
    company: "Xend Finance, Blockchain expert",
    topic: "Blockchain and Real World Assets",
    imageUrl: "/assets/events/aronu.png",
    twitterUrl: "https://x.com/ugo_aronu",
    linkedinUrl: "https://www.linkedin.com/in/ugo-aronu/",
    bgColor: "#FFCCCD",
  },
  {
    name: "Favour Umoren",
    title: "CEO",
    company: "Xend Finance, Blockchain expert",
    topic: "Blockchain and Real World Assets",
    imageUrl: "/assets/events/favour.png",
    twitterUrl: "https://x.com/favour_umoren",
    linkedinUrl: "https://www.linkedin.com/in/favour-umoren/",
    bgColor: "#CCFFD1",
  },
  {
    name: "John Smith",
    title: "CTO",
    company: "Tech Innovations, AI Expert",
    topic: "Artificial Intelligence in Finance",
    imageUrl: "/assets/events/aronu.png",
    twitterUrl: "https://x.com/john_smith",
    linkedinUrl: "https://www.linkedin.com/in/john-smith/",
    bgColor: "#CCD9FF",
  },
];

export default function useSpeakersControls() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);
  const offset = Math.ceil(speakers.length / 2);

  const handlePrevious = () => {
    if (currentIndex === 1) {
      setCurrentIndex(offset);
    } else {
      setCurrentIndex((prevIndex: number) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === offset) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex((prevIndex: number) => prevIndex + 1);
    }
  };

  const handleMobilePrevious = () => {
    setMobileCurrentIndex((prev: number) =>
      prev === 0 ? speakers.length - 1 : prev - 1
    );
  };

  const handleMobileNext = () => {
    setMobileCurrentIndex((prev: number) =>
      prev === speakers.length - 1 ? 0 : prev + 1
    );
  };

  const handleTwitterClick = (twitterUrl: string) => {
    window.open(twitterUrl, "_blank");
  };

  const handleLinkedinClick = (linkedinUrl: string) => {
    window.open(linkedinUrl, "_blank");
  };

  return {
    currentIndex,
    mobileCurrentIndex,
    handlePrevious,
    handleNext,
    handleMobilePrevious,
    handleMobileNext,
    handleTwitterClick,
    handleLinkedinClick,
    offset,
  };
}
