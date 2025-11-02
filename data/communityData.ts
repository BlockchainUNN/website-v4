import { SocialPlatform, CommunityEvent } from "@/types/community.types";
import { Sponsor } from "@/types/sponsors.types";

// Community member images for the gallery
export const communityPics: string[] = [
  "/images/team/annaelechukwu.png",
  "/images/team/kevin.png",
  "/images/team/alvan.png",
  "/images/team/adaugo.png",
  "/images/team/cheta.png",
  "/images/team/chukwuebuka.png",
  "/images/team/devShezzy.png",
  "/images/team/dony.png",
  "/images/team/kamto.png",
  "/images/team/kreativeAma.png",
  "/images/team/odoi.png",
  "/images/team/soluchi.png",
];

// Social platforms data
export const communitySocials: SocialPlatform[] = [
  {
    id: "1",
    icon: "/images/socials/linkedIn.svg",
    name: "LinkedIn",
    to: "https://www.linkedin.com/company/blockchainunn/",
    content: "Follow for spaces, events and updates we host",
  },
  {
    id: "2",
    icon: "/images/socials/x.svg",
    name: "X-Space",
    to: "https://x.com/BlockchainUNN",
    content: "Follow for spaces, events and updates we host",
  },
  {
    id: "3",
    icon: "/images/socials/telegram.svg",
    name: "Telegram",
    content: "Join our channel to get updated",
  },
  {
    id: "4",
    icon: "/images/socials/newsletter.svg",
    name: "Newsletter",
    content: "Get weekly dose of news, opportunities and events",
  },
  {
    id: "5",
    icon: "/images/socials/blog.svg",
    name: "Blog",
    content: "Read cutting edge research from our students & core team.",
  },
  {
    id: "6",
    icon: "/images/socials/whatsapp.svg",
    name: "Whatsapp",
    content: "Join our whatsapp group to get updated.",
  },
  {
    id: "7",
    icon: "/images/socials/youtube.svg",
    name: "Youtube",
    content: "Watch our videos on Youtube",
  },
  {
    id: "8",
    icon: "/images/socials/tiktok.svg",
    name: "Tik-Tok",
    content: "Stay updated on tik-tok",
  },
  {
    id: "9",
    icon: "/images/socials/instagram.svg",
    name: "Instagram",
    to: "https://www.instagram.com/blockchainunn",
    content: "Let's connect on Instagram",
  },
];

// Recent events data
export const recentEventsData: CommunityEvent[] = [
  {
    id: "1",
    flyer: "/images/events/avax.png",
    imageLinks: "",
    title: "Avalanche Workshop",
  },
  {
    id: "2",
    flyer: "/images/events/cartesi.png",
    imageLinks: "",
    title: "Cartesi Event",
  },
  {
    id: "3",
    flyer: "/images/events/sportsFiesta.png",
    imageLinks: "",
    title: "Sports Fiesta",
  },
  {
    id: "4",
    flyer: "/images/events/avax.png",
    imageLinks: "",
    title: "Avalanche Workshop 2",
  },
  {
    id: "5",
    flyer: "/images/events/cartesi.png",
    imageLinks: "",
    title: "Cartesi Event 2",
  },
];

export const sponsorsData: Sponsor[] = [
  {
    name: "cKash",
    imageUrl: "/assets/events/sponsors/ckash.png",
    link: "https://ckash.app/",
    tier: "SILVER",
  },
  {
    name: "Celo",
    imageUrl: "/assets/events/sponsors/celo.png",
    link: "https://celo.org/",
    tier: "GOLD",
  },
];

interface Partner {
  name: string;
  imageUrl: string;
  link: string;
  type: "ecosystem" | "media";
}

export const partnersData: Partner[] = [
  {
    name: "Coin Gabbar",
    imageUrl: "/assets/events/partners/coin_gabbar.png",
    link: "https://coingabbar.com/",
    type: "media",
  },
  {
    name: "The Garage",
    imageUrl: "/assets/events/partners/garage.svg",
    link: "https://x.com/@thegarageng_",
    type: "ecosystem",
  },
  {
    name: "CredLend",
    imageUrl: "/assets/events/partners/credlend.jpg",
    link: "https://x.com/CredLend",
    type: "ecosystem",
  },
];
