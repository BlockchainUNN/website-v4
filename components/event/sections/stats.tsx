"use client";

import Image from "next/image";
import StackGridButton from "../stack-grid-button";

export const stats = {
  prizePool: 5000,
  attendees: 3000,
  sponsors: 10,
  speakers: 30,
  hackers: 500,
};

export function BuildathonStats() {
  return (
    <section className="w-full h-[calc(100vh-10rem)]">
      <div
        className="w-full h-full bg-cover bg-center items-end flex flex-col justify-end"
        style={{
          backgroundImage:
            "linear-gradient(0deg, white 25%, transparent 60%, transparent), url(/assets/events/stats_bg.jpg)",
        }}
      >
        <div className="bg-white w-full mt-auto py-8 relative">
          <div className="absolute -top-14 lg:-top-42 right-6 md:right-12 z-10">
            <Image
              src="/assets/events/wagmi_sticker.png"
              width={120}
              height={120}
              className="w-24 h-24 md:w-48 md:h-48"
              alt="Wagmi Badge"
            />
          </div>
          <div className="px-4 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="flex gap-2 items-center h-full p-2">
              <div className="flex items-center">
                <StackGridButton
                  clickable={false}
                  icon={
                    <Image
                      src="/assets/events/icons/attendee.svg"
                      height={50}
                      width={50}
                      alt="Attendees"
                      className="object-contain w-6 h-6"
                    />
                  }
                  variant="badge"
                  size="medium"
                  shape="circular"
                  bgColor="#EDEDED"
                  textColor="#4A4A4A"
                  borderColor="#024539"
                  shadowOffset={{ x: -4, y: 4 }}
                />
              </div>
              <div className="flex-col items-start">
                <h3 className="text-xl md:text-6xl text-[#7A7A7A] tracking-[0.36%]">
                  {stats.attendees}+
                </h3>
                <p className="text-base md:text-lg text-[#7A7A7A] uppercase tracking-[0.36%]">
                  TOTAL ATTENDEES
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center h-full p-2">
              <div className="flex items-center">
                <StackGridButton
                  clickable={false}
                  icon={
                    <Image
                      src="/assets/events/icons/sponsor.svg"
                      height={50}
                      width={50}
                      alt="Sponsors"
                      className="object-contain w-6 h-6"
                    />
                  }
                  variant="badge"
                  size="medium"
                  shape="circular"
                  bgColor="#EDEDED"
                  textColor="#4A4A4A"
                  borderColor="#024539"
                  shadowOffset={{ x: -4, y: 4 }}
                />
              </div>
              <div className="flex-col items-start">
                <h3 className="text-xl md:text-6xl text-[#7A7A7A] tracking-[0.36%]">
                  {stats.sponsors}+
                </h3>
                <p className="text-base md:text-lg text-[#7A7A7A] uppercase tracking-[0.36%]">
                  SPONSORS
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center h-full p-2">
              <div className="flex items-center">
                <StackGridButton
                  clickable={false}
                  icon={
                    <Image
                      src="/assets/events/icons/speaker.svg"
                      height={50}
                      width={50}
                      alt="Speakers"
                      className="object-contain w-6 h-6"
                    />
                  }
                  variant="badge"
                  size="medium"
                  shape="circular"
                  bgColor="#EDEDED"
                  textColor="#4A4A4A"
                  borderColor="#024539"
                  shadowOffset={{ x: -4, y: 4 }}
                />
              </div>
              <div className="flex-col items-start">
                <h3 className="text-xl md:text-6xl text-[#7A7A7A] tracking-[0.36%]">
                  {stats.speakers}
                </h3>
                <p className="text-base md:text-lg text-[#7A7A7A] uppercase tracking-[0.36%]">
                  SPEAKERS
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center h-full p-2">
              <div className="flex items-center">
                <StackGridButton
                  clickable={false}
                  icon={
                    <Image
                      src="/assets/events/icons/hacker.svg"
                      height={50}
                      width={50}
                      alt="Hackers"
                      className="object-contain w-6 h-6"
                    />
                  }
                  variant="badge"
                  size="medium"
                  shape="circular"
                  bgColor="#EDEDED"
                  textColor="#4A4A4A"
                  borderColor="#024539"
                  shadowOffset={{ x: -4, y: 4 }}
                />
              </div>

              <div className="flex-col items-start">
                <h3 className="text-xl md:text-6xl text-[#7A7A7A] tracking-[0.36%]">
                  {stats.hackers}+
                </h3>
                <p className="text-base md:text-lg text-[#7A7A7A] uppercase tracking-[0.36%]">
                  HACKERS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
