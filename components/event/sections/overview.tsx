import Image from "next/image";
import React from "react";

export default function BuildathonOverview() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex items-center justify-center bg-gradient-to-b from-[#000000] to-[#1B1A1A] ">
          <div className="px-6 md:px-24 w-full py-24">
            <h1 className="text-[#02641C] text-xl md:text-4xl uppercase font-semibold tracking-[0.36rem] mb-4">
              Overview
            </h1>
            <p className="text-white text-lg md:text-2xl leading-relaxed">
              <span className="font-bold">BLOCKATHON </span>is a 1-week event
              uniting both top and newbies focused on technology and community.
              This 1-week event comprises workshops, learning programs, builders
              and hackathon, panel session, e.t.c.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center relative w-full">
          <div className="absolute top-6 md:top-32 left-4 md:left-10">
            <address className="text-sm md:text-2xl font-semibold">
              Lion Science Park
            </address>
          </div>
          <Image
            src="/assets/events/map.png"
            alt="Map Overview"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
