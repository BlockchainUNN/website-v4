"use client";

import Image from "next/image";
import StackGridButton from "./stack-grid-button";

const stats = {
  prizePool: 5000,
  attendees: 3000,
  sponsors: 10,
  speakers: 30,
  hackers: 500,
};

export function BuildathonStats() {
  return (
    <section className="w-full h-screen grid grid-rows-[88px_1fr] lg:grid-rows-[176px_1fr]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="bg-[#C89A04] h-full flex items-center p-8 justify-center">
          <div className="text-white text-center">
            <h3 className="font-semibold flex gap-2 text-5xl">
              <Image
                src="/assets/events/cup.svg"
                width={50}
                height={50}
                alt="Championship Cup"
              />
              ${stats.prizePool}+
            </h3>
            <p className="text-2xl">prize pool to be won</p>
          </div>
        </div>

        <div className="bg-[#51604D] h-full flex items-center p-8 justify-center">
          <div className="text-white text-center">
            <h3 className="font-semibold text-xl md:text-4xl tracking-[0.36%]">
              LEARN. BUILD. INNOVATE
            </h3>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{
          backgroundImage:
            "linear-gradient(0deg, white 25%, transparent 60%, transparent), url(/assets/events/stats_bg.jpg)",
        }}
      >
        <div className="absolute bottom-42 right-16">
          <Image
            src="/assets/events/wagmi_sticker.png"
            width={120}
            height={120}
            className="w-48 h-48"
            alt="Wagmi Badge"
          />
        </div>

        <div className="bg-white w-full mt-auto py-8 px-16">
          <div className="lg:px-12 h-32 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="flex gap-4 items-center h-full p-2">
              <div className="flex items-center">
                <StackGridButton
                  clickable={false}
                  icon={
                    <Image
                      src="/assets/events/icons/attendee.svg"
                      height={50}
                      width={50}
                      alt="Attendees"
                      className="object-contain w-8 h-8"
                    />
                  }
                  variant="badge"
                  size="large"
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

            <div className="flex gap-4 items-center h-full p-2">
              <div className="flex items-center">
                <StackGridButton
                  clickable={false}
                  icon={
                    <Image
                      src="/assets/events/icons/sponsor.svg"
                      height={50}
                      width={50}
                      alt="Sponsors"
                      className="object-contain w-8 h-8"
                    />
                  }
                  variant="badge"
                  size="large"
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

            <div className="flex gap-4 items-center h-full p-2">
              <div className="flex items-center">
                <StackGridButton
                  clickable={false}
                  icon={
                    <Image
                      src="/assets/events/icons/speaker.svg"
                      height={50}
                      width={50}
                      alt="Speakers"
                      className="object-contain w-8 h-8"
                    />
                  }
                  variant="badge"
                  size="large"
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

            <div className="flex gap-4 items-center h-full p-2">
              <div className="flex items-center">
                <StackGridButton
                  clickable={false}
                  icon={
                    <Image
                      src="/assets/events/icons/hacker.svg"
                      height={50}
                      width={50}
                      alt="Hackers"
                      className="object-contain w-8 h-8"
                    />
                  }
                  variant="badge"
                  size="large"
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
