"use client";
import React from "react";
import odoi from "../../public/assets/team-pics/odoi.png";
import cheta from "../../public/assets/team-pics/cheta.png";
import adaugo from "../../public/assets/team-pics/adaugo.png";
import dony from "../../public/assets/team-pics/dony.png";
import chukwuebuka from "../../public/assets/team-pics/chukwuebuka.png";
import {
  FaArrowRight,
  FaCode,
  FaGift,
  FaPencilAlt,
  FaPenNib,
  FaPeopleCarry,
} from "react-icons/fa";
import Image from "next/image";
import BlockathonHeader from "../layout/BlockathonHeader";
import { useTheme } from "@/hooks/store/useTheme";
import Navbar from "../layout/NavBar";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <BlockathonHeader />
      <div
        className={`${
          theme ? "bg-dark-mode " : "bg-transparent"
        } flex flex-col md:py-4 items-center w-full font-raleway relative overflow-x-hidden `}
      >
        <Navbar />
        <div className="text-center flex flex-col items-center w-[92%] md:w-[80%] mx-auto mt-16 mb-6">
          <h1 className="text-[#02641c] font-[900] text-[50px] md:text-[120px] font-raleway-black leading-none">
            BLOCKCHAIN
          </h1>
          <div className="flex items-center gap-4 ">
            <h1 className="text-[#02641c] font-extrabold text-[50px] md:text-[120px] font-raleway-black leading-none">
              UNN
            </h1>
            <div className="flex items-center justify-center bg-gradient-to-r from-[#02641c] to-[#04CA39] p-2 md:p-4 w-[80%] md:[50%]">
              <p className="text-[12px] md:text-[30px] text-center w-full text-white border-t border-b border-white p-2 md:p-4 font-wallpoet">
                Learn . Build . Innovate
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          theme
            ? "bg-blockchain-green bg-opacity-40 border border-blockchain-green"
            : "bg-blockchain-white  border border-blockchain-green"
        } absolute -left-4 top-[46%] rotate-12 w-[175px] rounded-r-full p-2 hidden md:flex`}
      >
        <div className="relative">
          <Image
            width={500}
            src={odoi}
            alt="i"
            className="rounded-full  w-[60px] h-[60px] object-cover"
          />
          <Image
            width={500}
            src={cheta}
            alt="i"
            className="rounded-full  w-[60px] h-[60px] absolute left-8 top-0 object-cover"
          />
          <Image
            width={500}
            src={chukwuebuka}
            alt="i"
            className="rounded-full w-[60px] h-[60px] absolute left-16 top-0 object-cover"
          />
          <Image
            width={500}
            src={adaugo}
            alt="i"
            className="rounded-full w-[60px] h-[60px] absolute left-24 top-0 object-cover"
          />
        </div>
      </div>

      <div className="absolute right-0 top-[44%] overflow-hidden w-[175px] h-[120px] hidden md:block">
        <div
          className={`${
            theme
              ? "bg-blockchain-green bg-opacity-40 border border-blockchain-green border-r-0"
              : "bg-blockchain-white border border-blockchain-green border-r-0"
          } absolute top-4 -right-4 -rotate-12 w-[175px] rounded-l-full p-2 flex`}
        >
          <div className="relative">
            <Image
              width={500}
              src={adaugo}
              alt="i"
              className="rounded-full w-[60px] h-[60px] object-cover"
            />
            <Image
              width={500}
              src={chukwuebuka}
              alt="i"
              className="rounded-full w-[60px] h-[60px] absolute left-8 top-0 object-cover"
            />
            <Image
              width={500}
              src={cheta}
              alt="i"
              className="rounded-full w-[60px] h-[60px] absolute left-16 top-0 object-cover"
            />
            <Image
              width={500}
              src={odoi}
              alt="i"
              className="rounded-full w-[60px] h-[60px] absolute left-24 top-0 object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className={` ${
          theme ? "text-white" : "text-black"
        } w-[80%] md:w-[50%] text-center mt-2 md:mt-0 mb-8`}
      >
        <h2 className="text-[10px] md:text-[20px]">
          We&apos;re a student community connected to providing members with
          educational and professional opportunities in the blockchain industry.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-12 md:mb-20">
        <button
          onClick={() => router.push("/event")}
          className="bg-gradient-to-r from-[#02641c] to-[#04CA39] flex items-center justify-center gap-2 w-[200px] md:w-[180px] h-[55px] md:h-[65px]  rounded-full text-white"
        >
          Get Started <FaArrowRight size={14} />
        </button>
        <div className="flex items-center bg-gradient-to-r from-[#02641c] to-[#04CA39] w-[150px] md:w-[180px] h-[55px] md:h-[65px]  rounded-full">
          <button
            onClick={() =>
              window.open(
                "https://blockchainunn.substack.com/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="bg-white w-[95%] h-[90%] rounded-full text-green-800"
          >
            Newsletter
          </button>
        </div>
      </div>

      <div
        className={`${
          theme
            ? "bg-dark-mode border-t border-b border-gray-600"
            : "bg-white border-t border-b border-gray-500"
        } flex gap-1 md:gap-2 items-center justify-center w-full p-4 md:px-16  md:py-8 text-[14px] md:text-[60px] mb-2 md:mb-4 `}
      >
        <h2 className={`${theme ? "text-white" : "text-black"} font-semibold `}>
          Accelerate Your Career With
        </h2>
        <h2 className="text-green-800 font-semibold">BlockchainUNN</h2>
      </div>

      <div
        className={`${
          theme
            ? "bg-dark-mode text-white border-t border-b border-gray-600"
            : "bg-white border-t border-b border-gray-500 text-black "
        } flex md:flex-row flex-col items-center justify-center gap-8 w-full h-[fit-content] px-6 md:px-24 py-4`}
      >
        <div className="flex flex-col gap-4 items-start p-4 border border-green-500 rounded-md w-full md:w-[40%] mt-6">
          <h3 className="font-semibold">Community STATS</h3>
          <div className="relative flex ">
            <Image
              width={500}
              src={dony}
              alt="i"
              className="rounded-full border border-black w-[70px] h-[70px] object-cover"
            />
            <Image
              width={500}
              src={adaugo}
              alt="i"
              className="rounded-full border border-black w-[70px] h-[70px] absolute left-14 object-cover"
            />
            <Image
              width={500}
              src={chukwuebuka}
              alt="i"
              className="rounded-full border border-black w-[70px] h-[70px] absolute left-28 object-cover"
            />
            <div className="flex items-center justify-center rounded-full p-4  w-[70px] h-[70px] absolute left-[10.5rem] text-[12px] font-wallpoet bg-[#02641C] text-[#2CE85E]">
              +5000
            </div>
          </div>
          <h2 className="text-[80px] md:text-[100px] font-bold mb-0">5000+</h2>
          <p className="-mt-8 font-semibold">Active members</p>
        </div>

        <div className="relative w-full md:w-[40%]">
          <div className="bg-[#02641C] rounded-md w-full h-[160px] mb-8"></div>
          <div className="bg-[#02641C] rounded-md w-full h-[160px]"></div>
          <div className="absolute flex flex-col items-center rounded-md py-4 w-full top-0 h-full">
            <div className="relative flex flex-col gap-4 bg-black rounded-md py-4 px-2 w-[95%] h-full">
              <div className="-ml-6 flex flex-row gap-4">
                <div className="flex flex-col items-center bg-[#02641C] text-[#2CE85E] p-4 w-[30%] h-[130px] rounded-md">
                  <h2 className="font-semibold text-[2rem] lg:text-[40px]">
                    20
                  </h2>
                  <p className="text-[0.8rem] text-center lg:text-[1rem]">
                    Hackathon Wins
                  </p>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-b from-[#000] to-[#0E0E0E] px-8 py-4 w-[30%] h-[130px] text-[#2CE85E] rounded-md">
                  <h2 className="font-semibold text-[2rem] lg:text-[40px]">
                    $40k
                  </h2>
                  <p className="text-[0.8rem] text-center lg:text-[1rem]">
                    Prize Money
                  </p>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-b from-[#000] to-[#0E0E0E] px-8 py-4 w-[32%] h-[130px] text-[#2CE85E] rounded-md">
                  <h2 className="font-semibold text-[2rem] lg:text-[40px]">
                    50+
                  </h2>
                  <p className="text-[0.8rem] text-center lg:text-[1rem]">
                    Community Events
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center justify-evenly">
                <div className="flex flex-col items-center px-2 md:px-8 py-4  text-[#2CE85E] rounded-md">
                  <h2 className="flex items-center gap-2 font-semibold text-[2rem] lg:text-[40px]">
                    <span className="text-[2rem]">🌍</span> 20+
                  </h2>
                  <p className="text-[0.8rem] text-center lg:text-[1rem]">
                    Partners Worldwide
                  </p>
                </div>
                <div className="flex flex-col items-start bg-[#02641C] text-[#2CE85E] px-4 md:px-8 md:py-4 py-2  rounded-md w-[70%] md:w-[50%] h-[140px]">
                  <h3 className="font-semibold flex text-[0.6rem] gap-1 md:text[1.rem] items-center md:gap-2">
                    <span className="text-[1rem] md:text-[30px]">4</span>Active
                    Sub-Communities <FaPeopleCarry className="hidden md:flex" />
                  </h3>
                  <div className="flex flex-col gap-4 items-start w-full">
                    <div className="flex flex-col sm-420:flex-row justify-between w-full text-[0.8rem]">
                      <span className="flex gap-2 items-center  ">
                        <FaPenNib size={10} /> Designers
                      </span>
                      <span className="flex gap-2 items-center ">
                        <FaCode size={10} /> Developers
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between w-full text-[0.8rem]">
                      <span className="flex gap-2 items-center ">
                        <FaPencilAlt size={10} /> Writers
                      </span>
                      <span className="flex gap-2 items-center ">
                        <FaGift size={10} />
                        AirdropEdu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
