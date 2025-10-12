import React, { useState } from "react";
import timer from "../../public/assets/icons/timer.svg";
import timerwhite from "../../public/assets/icons/timer-white.svg";
import sportsfiesta from "../../public/assets/events/sportsFiesta.png";
import previousicon from "../../public/assets/icons/previous-icon.svg";
import nexticon from "../../public/assets/icons/next-icon.svg";
import space1 from "../../public/assets/events/spaces/1.jpg";
import cartesievent from "../../public/assets/events/cartesievent.png";
import avax_pizza from "../../public/assets/events/avax-pizza.png";
import blockchainunn_ai from "../../public/assets/events/blockchainunn-ai.png";
import blockathon from "../../public/assets/blockathon.png";
import { useTheme } from "@/hooks/store/useTheme";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    imageSrc: blockathon,
    date: "1ST NOV, 2024",
    title: "BLOCKATHON",
    link: "https://x.com/BlockchainUNN/status/1853796820063023452",
  },
  {
    imageSrc: space1,
    date: "16TH OCT, 2024",
    title: "ROAD TO BLOCKATHON",
    link: "https://x.com/BlockchainUNN/status/1846497258289983868",
  },
  {
    imageSrc: cartesievent,
    date: " 20TH AUG, 2024",
    title: "CARTESI DEV BOUNTY EVENT",
    link: "https://x.com/BlockchainUNN/status/1825805134158352665?t=UV32f_HOphg8xJMyr5_9Jw&s=08",
  },
  {
    imageSrc: sportsfiesta,
    date: "SAT. 29TH JUN, 2024",
    title: "SPORTS FIESTA",
    link: "https://x.com/BlockchainUNN/status/1805166684707107171?t=0W8TpwKPtPB9bXJSrqSCwg&s=08",
  },
  {
    imageSrc: avax_pizza,
    date: " 22ND MAY, 2024",
    title: "AVAX BITCOIN PIZZA PARTY",
    link: "https://x.com/BlockchainUNN/status/1792505649957310517?t=WLal0ApwntMkd17g95Zo_A&s=08",
  },
  {
    imageSrc: blockchainunn_ai,
    date: " 2ND FEB, 2024",
    title: "BLOCKCHAINUNN AI WORKSHOP",
    link: "https://x.com/BlockchainUNN/status/1752642347999867177?t=C_ttVwE8HBqWB34_ELkueA&s=08",
  },
];

const PastEvents = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : events.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < events.length - 1 ? prevIndex + 1 : 0
    );
  };

  const { imageSrc, date, title, link } = events[currentIndex];

  return (
    <div className="w-[88%] flex flex-col gap-4 items-center justify-center my-12 mx-auto">
      <div className="flex items-center justify-center gap-2 w-full">
        <Image
          width={500}
          src={theme ? timerwhite : timer}
          alt="timer"
          className="w-[38px] h-[38px] md:w-[95px] md:h-[95px]"
        />
        <h1
          className={`${
            theme ? "text-white" : "text-black"
          } text-[22.5px] md:text-[55px]`}
        >
          Past Events
        </h1>
      </div>

      <div className="flex items-center justify-between w-[95%] md:[85%]">
        <div className="relative w-full border-gradient">
          <Image
            width={500}
            src={previousicon}
            alt="previous"
            onClick={handlePrevious}
            className="absolute -left-4 z-10 top-[40%] cursor-pointer w-12 h-12 md:w-auto md:h-auto"
          />

          <div className="w-full h-[400px] md:h-[950px] rounded-xl">
            <Image
              width={500}
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover rounded-t-xl"
            />
          </div>

          <div
            className={`font-wallpoet h-[fit-content] px-6 py-4 flex flex-col gap-4 md:gap-0 items-center justify-center rounded-b-xl ${
              theme ? "bg-transparent text-white" : "bg-white"
            }`}
          >
            <div className="text-center">
              <p className="text-[16px] md:text-[20px]">{date}</p>
              <h1 className="text-[20px] md:text-[35px] text-semibold">
                {title}
              </h1>
            </div>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="z-50"
            >
              <button
                className={`${
                  theme ? "text-white" : "text-white"
                } my-4 border  rounded-full bg-gradient-to-r from-[#02641c] to-[#04CA39] px-6 py-4 text-[16px] md:text-[24px] font-mono cursor-pointer z-50`}
              >
                Explore Event
              </button>
            </Link>
          </div>

          <Image
            width={500}
            src={nexticon}
            alt="previous"
            onClick={handleNext}
            className="absolute -right-4 z-10 top-[40%] cursor-pointer w-12 h-12 md:w-auto md:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
