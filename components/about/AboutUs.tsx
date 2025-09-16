import visionIcon from "../../public/assets/icons/ourVision.svg";
import valuesIcon from "../../public/assets/icons/ourvalue.svg";
import missionIcon from "../../public/assets/icons/flag.svg";
import { useTheme } from "@/hooks/store/useTheme";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full gap-24 max-lg:gap-16 max-sm:gap-6 max-md:gap-12">
      <div className="flex flex-col w-full text-center font-raleway gap-6 max-md:gap-4">
        <h1 className="text-blockchain-green font-raleway-black max-md:text-[1.2rem] max-lg:text-[1.5rem] text-[1.75rem] leading-none uppercase">
          about us
        </h1>
        <h2 className="font-raleway-black max-sm:text-[1.5rem] max-sm-420:text-[1.2rem] max-md:text-[2rem] max-lg:text-[3rem] text-[3.5rem] text-balance max-sm-420:leading-[1.5rem] max-sm:leading-[2rem] max-md:leading-[3rem] max-lg:leading-[3.5rem] leading-[4rem]">
          Expanding the blockchainunn community and introducing web3.
        </h2>
        <span className="flex max-sm:text-[0.875rem] max-md:text-[1rem] max-lg:text-[1.2rem] text-[1.5rem] font-raleway text-balance mx-auto  max-sm-420:w-[20rem] max-sm:w-[26rem] max-md:w-[32rem] max-lg:w-[40rem] w-[51rem]">
          BlockchainUNN is a Tech community established with the aim of
          educating members of the University Community with both basic and
          advanced practical knowledge of cryptocurrency, Blockchain technology,
          its development, and its opportunities. Though we are focused on the
          University of Nigeria, we have a diverse community made up of people
          from diverse fields, institutions and campuses who are blockchain
          enthusiasts.
        </span>
      </div>

      <div className="flex gap-14 max-lg:gap-8 max-sm:gap-4 max-lg:flex-wrap max-sm:py-4 py-10 max-md:py-6 mx-auto justify-center">
        <AboutUsCard
          title={"Our Mission"}
          icon={
            <Image
              width={500}
              className="max-sm:w-5 max-sm-420:w-4 w-7 max-sm:h-5 max-sm-420:h-4 h-7 my-auto"
              src={missionIcon}
              alt="Our Mission Icon"
            />
          }
          content={
            "To educate and develop community members ( students and lecturers) of the University of Nigeria, on different facets and applications of Blockchain technology."
          }
        />
        <AboutUsCard
          title={"Our Vision"}
          icon={
            <Image
              width={500}
              className="max-sm:w-5 max-sm-420:w-4 w-7 max-sm:h-5 max-sm-420:h-4 h-7 my-auto"
              src={visionIcon}
              alt="Our Vision Icon"
            />
          }
          content={
            "Our vision is to build tomorrow’s technology today. We educate and empower the next generation of blockchain users and developers"
          }
        />
        <AboutUsCard
          title={"Our Values"}
          icon={
            <Image
              width={500}
              className="max-sm:w-5 max-sm-420:w-4 w-7 max-sm:h-5 max-sm-420:h-4 h-7 my-auto"
              src={valuesIcon}
              alt="Our Values Icon"
            />
          }
          content={
            "To educate and develop community members ( students and lecturers) of the University of Nigeria, on different facets and applications of Blockchain technology."
          }
        />
      </div>
    </div>
  );
}

interface AboutUsCardProps {
  title: string;
  icon: React.ReactNode;
  content: string;
}

export function AboutUsCard({ title, icon, content }: AboutUsCardProps) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;

  return (
    <div
      className={
        (theme
          ? "p-px bg-gradient-to-b from-[#13B93F] to-[#6DBB82] max-sm-420:rounded-xl rounded-2xl "
          : "") + "flex w-full max-lg:w-fit "
      }
    >
      <div
        className={
          (theme ? " bg-[#000C03] " : " bg-[#EDEDED] ") +
          "flex w-full max-lg:w-fit flex-col gap-8 max-lg:gap-6 max-sm:gap-4 max-sm-420:gap-1.5 max-sm-420:rounded-xl rounded-2xl py-12 max-lg:py-8 max-sm-420:py-4 max-sm-420:px-3 px-4 drop-shadow-xl shadow-xl"
        }
      >
        <div className="flex w-full justify-start">
          <span className="flex justify-center max-sm:w-[3.5rem] max-sm:h-[3.5rem] max-sm-420:w-[3rem] max-sm-420:h-[3rem] w-[4.5rem] h-[4.5rem] bg-blockchain-green rounded-full">
            {icon}
          </span>
        </div>
        <div className="flex flex-col gap-4 max-lg:gap-2 max-sm-420:gap-1.5 w-full">
          <span className="font-semibold max-sm-420:text-[0.875rem] max-sm:text-[1rem] max-lg:text-[1.2rem] text-[1.5rem]">
            {title}
          </span>
          <span className="w-[17rem] max-sm-420:w-[7rem] max-sm:w-[10rem] max-lg:w-[15rem] text-pretty max-sm-420:text-[0.5rem] max-sm:text-[0.875rem] max-lg:text-base text-[1.2rem] max-sm-420:leading-3 max-sm:leading-5 leading-6">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}
