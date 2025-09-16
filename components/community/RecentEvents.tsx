import { useState } from "react";
import previousIcon from "../../public/assets/icons/previous-icon.svg";
import nextIcon from "../../public/assets/icons/next-icon.svg";
import { useTheme } from "@/hooks/store/useTheme";
import { recentEventsData } from "@/content/community";
import Link from "next/link";
import Image from "next/image";

export default function RecentEvents() {
  const [currentMid, setCurrentMid] = useState(1); // The index of the image currently in the middle
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;

  return (
    <div className="flex w-full flex-col max-md:gap-6 gap-8">
      <div className="flex flex-col mx-auto">
        <h1 className="font-raleway-semibold max-lg:text-[2rem] max-md:text-[1.7rem] max-sm:text-[1.5rem] text-[2.5rem] mx-auto">
          Recent Community Events
        </h1>
        <span className="text-[1.5rem] max-md:text-base max-lg:text-[1.2rem] text-center max-lg:max-w-[35rem] max-w-[50rem]">
          We are motivated by the community and we drive the future of learning
          with these values.
        </span>
      </div>

      <div className="flex px-20 gap-2 w-full justify-center max-sm-420:-my-10 max-sm:scale-75 max-lg:scale-75 max-md:scale-100 max-sm-420:scale-50">
        <button
          onClick={() => {
            if (currentMid > 1) {
              setCurrentMid(currentMid - 1);
            }
          }}
          className="-mx-8 my-auto pb-14 z-10"
        >
          <Image
            width={500}
            src={previousIcon}
            className="min-w-12 min-h-12 max-w-12 max-h-12"
            alt="previous icon"
          />
        </button>

        <div className="flex gap-6">
          {recentEventsData.map((event, index) => {
            if (index < currentMid - 1 || index > currentMid + 1) return <></>;
            return (
              <div
                key={index}
                className={
                  (theme
                    ? "bg-gradient-to-b from-[#02270C] to-[#011607] "
                    : "bg-gradient-to-b from-gray-300 via-green-400 to-gray-300 ") +
                  " flex max-md:w-[12.925rem] w-[18.925rem] py-0.5 justify-center py-0.5 rounded-lg"
                }
              >
                <div
                  className={
                    (theme ? " bg-[#0e5220] " : " bg-slate-100 ") +
                    " flex flex-col justify-center max-md:w-[12.8rem] w-[18.8rem] py-[0.35rem] rounded-lg"
                  }
                >
                  <div
                    className={
                      (theme
                        ? "bg-gradient-to-b from-[#02270C] to-[#011607] "
                        : "bg-gradient-to-b from-gray-300 via-green-400 to-gray-300 ") +
                      " flex justify-center mx-auto max-md:w-[12.125rem] w-[18.125rem] py-0.5 rounded-t-lg"
                    }
                  >
                    <div
                      style={{ backgroundImage: `url(${event.flyer})` }}
                      className="flex max-md:w-[12rem] w-[18rem] max-md:h-[11rem] h-[17rem] bg-cover bg-no-repeat rounded-t-lg bg-black"
                    ></div>
                  </div>

                  <span className="flex w-full justify-center py-3">
                    <Link href={event.imageLinks}>View Content</Link>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            if (currentMid < recentEventsData.length - 2) {
              setCurrentMid(currentMid + 1);
            }
          }}
          className="-mx-8 my-auto pb-14"
        >
          <Image
            width={500}
            src={nextIcon}
            className="min-w-12 min-h-12 max-w-12 max-h-12"
            alt="next icon"
          />
        </button>
      </div>
    </div>
  );
}
