import React from "react";
import send from "../../public/assets/icons/send.svg";
import sendblack from "../../public/assets/icons/send-black.svg";
import Hacker from "../../public/assets/skill.jpeg";
import cryptoskill from "../../public/assets/crypto-skill.jpeg";
import webskill from "../../public/assets/webskill.jpeg";
import designskill from "../../public/assets/designskill.jpeg";
import ellipse from "../../public/assets/icons/ellipse.svg";
import { useTheme } from "@/hooks/store/useTheme";
import Image from "next/image";

const Skills = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;
  return (
    <div className="flex flex-col items-center gap-4 w-full md:gap-8 mb-12">
      <div className={`${theme ? "text-white" : "text-black"} relative `}>
        <Image
          width={500}
          src={ellipse}
          alt="ellipse"
          className="w-[80%] md:w-auto mx-auto"
        />
        <Image
          width={500}
          src={ellipse}
          alt="ellipse"
          className="absolute top-0 w-[76%] md:w-[395px] right-12 md:right-0"
        />
        <h2 className="absolute top-5 md:top-8 left-[30%] text-[30px] font-semibold ">
          What we do
        </h2>
      </div>
      <div
        className={` ${
          theme ? "text-white" : "text-black"
        } flex text-center w-[90%] md:w-[75%] text-[12px] md:text-[24px] mx-auto `}
      >
        <p>
          <span className="font-raleway-semibold">BlockchainUNN </span> is
          dedicated to helping students learn and grow in exciting fields of
          Blockchain, technology, and innovation. Start your journey
          understanding blockchain technology, it&apos;s most popular
          applications and the current landscape of innovation in the industry.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 md:gap-8 p-4 w-full items-center justify-center md:w-[89%] mx-auto">
        <div className="flex md:flex-row flex-col items-center justify-center w-[95%] mt-12 md:mt-0 md:w-full gap-2 md:gap-8">
          <div className="relative flex flex-col items-center md:items-start gap-4 w-[95%] md:w-[640px] h-[270px] md:h-[400px] bg-blockchain-green rounded-xl p-4 md:p-8">
            <p className="font-bold md:font-semibold text-white md:mt-2 text-[18px] md:text-[24px]">
              Blockchain Development
            </p>
            <p className="font-medium text-white text-center md:text-start w-[85%] md:w-[75%] text-[12px] md:text-[16px]">
              Our bootcamp has introduced 150+ developers to blockchain
              development, with many building stable, income-generating careers.
            </p>
            <div className=" absolute bottom-0 w-[95%] md:right-0 flex flex-col gap-2 md:gap-auto md:flex-row items-center justify-between">
              <p className="flex gap-2 md:gap-4 text-white font-semibold items-center text-[10px] md:text-[14px]">
                <Image
                  width={500}
                  src={send}
                  alt="send"
                  className="h-3 w-3 md:h-auto md:w-auto"
                />
                Web3/Smart Contracts
              </p>

              <div className="w-[186px] md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
                <Image
                  width={500}
                  src={Hacker}
                  alt="hacker"
                  className={`${
                    theme ? "" : "border-2 border-white"
                  } w-full h-full object-cover rounded-xl`}
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center md:items-end gap-4 w-[95%] md:w-[640px] h-[280px] md:h-[400px] bg-blockchain-white rounded-xl p-4 md:p-8">
            <div className="relative -mt-4 flex w-[186px] md:hidden md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
              <Image
                width={500}
                src={cryptoskill}
                alt="hacker"
                className={`${
                  theme ? "" : "border-2 border-white"
                } w-full h-full object-cover rounded-xl`}
              />
            </div>
            <p className="font-bold md:font-semibold text-black text-center md:text-end md:mt-2 text-[18px] md:text-[24px]">
              Crypto Education
            </p>
            <p className="font-medium text-black text-center md:text-end md:self-end  w-[85%] md:w-[75%] text-[12px] md:text-[16px]">
              At BlockchainUNN, we offer in-depth crypto training and access to
              trading lessons from partner communities.
            </p>
            <div className=" absolute bottom-5 md:bottom-0 w-[95%] left-0 flex flex-col md:flex-row items-center justify-between">
              <div className="hidden w-[186px] md:flex md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
                <Image
                  width={500}
                  src={cryptoskill}
                  alt="hacker"
                  className={`${
                    theme ? "" : "border-2 border-white"
                  } w-full h-full object-cover rounded-xl`}
                />
              </div>
              <p className="hidden md:flex gap-2 md:gap-4 text-black font-semibold items-center text-[8px] md:text-[14px]">
                Cryptocurrency Elites
                <Image
                  width={500}
                  src={sendblack}
                  alt="send"
                  className="w-2 h-2 md:h-auto md:w-auto"
                />
              </p>
              <p className="md:hidden flex gap-2 md:gap-4 text-black font-bold items-center text-[10px] md:text-[14px]">
                <Image
                  width={500}
                  src={sendblack}
                  alt="send"
                  className="w-2 h-2 md:h-auto md:w-auto rotate-180"
                />
                Cryptocurrency Elites
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center justify-center w-[95%] mt-12 md:mt-0 md:w-full gap-2 md:gap-8">
          <div className="relative flex flex-col items-center md:items-start gap-4 w-full md:w-[640px] h-[320px] md:h-[400px] bg-blockchain-white rounded-xl p-4 md:p-8">
            <div className="relative -mt-4 flex w-[186px] md:hidden md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
              <Image
                width={500}
                src={webskill}
                alt="hacker"
                className={`${
                  theme ? "" : "border-2 border-white"
                } w-full h-full object-cover rounded-xl`}
              />
            </div>
            <p className="font-bold md:font-semibold text-black text-center md:text-end md:mt-2 text-[18px] md:text-[24px]">
              Web Development & Content Writing
            </p>
            <p className="font-medium text-black text-center md:text-start md:self-start  w-[85%] md:w-[80%] text-[12px] md:text-[16px]">
              BlockchainUNN promotes careers in Web3, blockchain, web
              development, and content writing, providing opportunities to
              enhance your skills in our sub-community.
            </p>
            <div className=" absolute bottom-5 md:bottom-0 w-[95%] left-0 flex flex-col md:flex-row items-center justify-between">
              <div className="hidden w-[186px] md:flex md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
                <Image
                  width={500}
                  src={webskill}
                  alt="hacker"
                  className={`${
                    theme ? "" : "border-2 border-white"
                  } w-full h-full object-cover rounded-xl`}
                />
              </div>
              <p className="hidden md:flex gap-2 md:gap-4 text-black font-semibold items-center text-[8px] md:text-[14px]">
                Web 2.0 & Content Pro.
                <Image
                  width={500}
                  src={sendblack}
                  alt="send"
                  className="w-2 h-2 md:h-auto md:w-auto"
                />
              </p>
              <p className="md:hidden flex gap-2 md:gap-4 text-black font-bold items-center text-[10px] md:text-[14px]">
                <Image
                  width={500}
                  src={sendblack}
                  alt="send"
                  className="w-2 h-2 md:h-auto md:w-auto rotate-180"
                />
                Web 2.0 & Content Pro.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center md:items-end gap-4 w-full md:w-[640px] h-[280px] md:h-[400px] bg-blockchain-green rounded-xl p-4 md:p-8">
            <p className="font-bold md:font-semibold text-white md:mt-2 text-[18px] md:text-[24px]">
              Design Stack
            </p>
            <p className="font-medium text-white text-center md:text-end w-[85%] md:w-[75%] text-[12px] md:text-[16px]">
              Join our design sub-community to unleash your creativity, connect
              with experts, and share your work while learning UI/UX and graphic
              design.
            </p>
            <div className=" absolute bottom-0 w-[95%] md:right-0 flex flex-col gap-2 md:gap-auto md:flex-row items-center justify-between">
              <p className="flex gap-2 md:gap-4 text-white font-semibold items-center text-[10px] md:text-[14px]">
                <Image
                  width={500}
                  src={send}
                  alt="send"
                  className="h-3 w-3 md:h-auto md:w-auto"
                />
                UI/UX & Graphics Creatives
              </p>

              <div className="w-[186px] md:w-[65%] h-[100px] md:h-[210px] rounded-xl">
                <Image
                  width={500}
                  src={designskill}
                  alt="hacker"
                  className={`${
                    theme ? "" : "border-2 border-white"
                  } w-full h-full object-cover rounded-xl`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
