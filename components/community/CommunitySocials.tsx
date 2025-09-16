import { communitySocials } from "@/content/community";
import { useTheme } from "@/hooks/store/useTheme";
import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex flex-col gap-10 justify-center max-lg:px-20 max-md:px-10 max-sm:px-6 px-36">
      <h1 className="font-raleway-semibold text-[2.5rem] max-lg:[2rem] max-md:text-[1.75rem] max-md:text-[1.5rem] max-sm-420:text-[1.2rem] text-wrap text-center mx-auto">
        Stay Connected Across Our Socials
      </h1>
      <div className="grid grid-cols-3 max-sm:grid-cols-2 max-md:gap-4 max-sm-420:gap-2 gap-8">
        {communitySocials.map((item, index) => (
          <SocialsCard
            key={index}
            icon={
              <Image
                width={500}
                className="max-sm:w-4 w-6 max-sm:h-4 h-6 my-auto"
                src={item.icon}
                alt={item.name}
              />
            }
            to={item?.to || ""}
            social={item.name}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

type SocialsCardProps = {
  social: string;
  icon: React.ReactNode;
  content: string;
  to: string;
};

export function SocialsCard({ social, icon, content, to }: SocialsCardProps) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;

  return (
    <Link
      href={to}
      className={
        " flex p-px bg-gradient-to-b from-gray-300 via-green-400 to-gray-300 rounded-2xl cursor-pointer"
      }
    >
      <div
        className={
          (theme ? " bg-dark-mode-2 " : " bg-slate-100 ") +
          " flex flex-col w-full max-lg:p-6 max-sm:p-4 p-8 rounded-2xl font-raleway-semibold max-lg:gap-4 gap-6 shadow-xl"
        }
      >
        <span className="flex justify-center max-sm:w-10 max-sm:h-10 w-12 h-12 bg-blockchain-green rounded-md">
          {icon}
        </span>
        <span className=" max-lg:text-[1.2rem] max-sm-420:text-[1rem] text-[1.5rem] max-sm-420:leading-3 leading-4">
          {social}
        </span>
        <span className="text-[1rem] max-lg:text-[0.875rem] max-sm-420:text-[0.75rem] leading-4">
          {content}
        </span>
      </div>
    </Link>
  );
}
