import xLogo from "../../public/assets/socials/x-black.svg";
import linkedInLogo from "../../public/assets/socials/linkedIn-black.svg";
import instagramLogo from "../../public/assets/socials/instagram-black.svg";
import telegramLogo from "../../public/assets/socials/telegram-black.svg";
import xLogoLight from "../../public/assets/socials/x.svg";
import linkedInLogoLight from "../../public/assets/socials/linkedIn.svg";
import instagramLogoLight from "../../public/assets/socials/instagram.svg";
import telegramLogoLight from "../../public/assets/socials/telegram.svg";
import Image from "next/image";
import { useTheme } from "@/hooks/store/useTheme";
import Link from "next/link";

const SocialLink = ({ to, type }: { to: string; type: string }) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;

  return (
    <Link
      className={`flex justify-center border border-blockchain-green bg-blockchain-green/15 w-6 h-6 ${
        theme ? "" : ""
      }`}
      href={to}
    >
      {theme ? (
        <Image
          width={500}
          className="my-auto w-3 h-3"
          src={
            type === "x"
              ? xLogoLight
              : type === "linkedin"
              ? linkedInLogoLight
              : type === "telegram"
              ? telegramLogoLight
              : instagramLogoLight
          }
          alt={type + " logo"}
        />
      ) : (
        <Image
          width={500}
          className="my-auto w-3 h-3"
          src={
            type === "x"
              ? xLogo
              : type === "linkedin"
              ? linkedInLogo
              : type === "telegram"
              ? telegramLogo
              : instagramLogo
          }
          alt={type + " logo"}
        />
      )}
    </Link>
  );
};

export default SocialLink;
