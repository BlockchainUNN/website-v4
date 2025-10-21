import React from "react";
import StrokedText from "../stroked-text";
import { motion } from "motion/react";
import { sponsorsData } from "@/data/communityData";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function BuildathonSponsors() {
  return (
    <section
      className="w-full min-h-screen h-auto bg-cover bg-center bg-repeat-y py-12 lg:py-32 lg:px-12 px-4"
      style={{
        backgroundImage:
          "url('/assets/events/sponsor_bg.png'), linear-gradient(0deg, #02641C, #02641C)",
      }}
    >
      <motion.div
        className="w-full mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <StrokedText
          text="Silver Sponsors"
          className="lg:text-6xl mb-6 text-4xl uppercase text-white font-extrabold"
        />

        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-w-7xl gap-4">
          {sponsorsData
            .filter((sponsor) => sponsor.tier === "SILVER")
            .map((sponsor) => (
              <div
                key={sponsor.name}
                className="aspect-square border-2 border-white h-[262px] bg-white relative overflow-hidden group"
              >
                <Link
                  href={sponsor.link}
                  target="_blank"
                  className="absolute inset-0 bg-linear-to-t from-transparent to-black/70 backdrop-blur-xs flex items-center justify-center group-hover:translate-y-0 transform -translate-y-full overflow-hidden"
                  style={{
                    transition: "all 0.25s cubic-bezier(.74,1,.48,.78)",
                  }}
                >
                  <p className="flex items-center justify-center overflow-hidden font-semibold text-2xl text-white hover:text-blue-600 transition-colors duration-200">
                    <ExternalLink />
                  </p>
                </Link>
                <Image
                  src={sponsor.imageUrl}
                  alt={sponsor.name}
                  width={700}
                  height={700}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
        </div>
      </motion.div>

      <motion.div
        className="w-full mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <StrokedText
          text="Gold Sponsors"
          className="lg:text-6xl mb-6 text-4xl uppercase text-white font-extrabold"
        />

        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-w-7xl gap-4">
          {sponsorsData
            .filter((sponsor) => sponsor.tier === "GOLD")
            .map((sponsor) => (
              <div
                key={sponsor.name}
                className="aspect-square border-2 border-white h-[262px] bg-white relative overflow-hidden group"
              >
                <Link
                  href={sponsor.link}
                  target="_blank"
                  className="absolute inset-0 bg-linear-to-t from-transparent to-black/70 backdrop-blur-xs flex items-center justify-center group-hover:translate-y-0 transform -translate-y-full overflow-hidden"
                  style={{
                    transition: "all 0.25s cubic-bezier(.74,1,.48,.78)",
                  }}
                >
                  <p className="flex items-center justify-center overflow-hidden font-semibold text-2xl text-white hover:text-blue-600 transition-colors duration-200">
                    <ExternalLink />
                  </p>
                </Link>
                <Image
                  src={sponsor.imageUrl}
                  alt={sponsor.name}
                  width={700}
                  height={700}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
        </div>
      </motion.div>

      <motion.div
        className="w-full mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <StrokedText
          text="community partners"
          className="lg:text-6xl mb-6 text-4xl uppercase text-white font-extrabold"
        />

        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-w-7xl gap-4">
          <div className="w-full border border-white h-[262px] bg-white"></div>
          <div className="w-full border border-white h-[262px] bg-white"></div>
          <div className="w-full border border-white h-[262px] bg-white"></div>
          <div className="w-full border border-white h-[262px] bg-white"></div>
        </div>
      </motion.div>

      <motion.div
        className="w-full mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <StrokedText
          text="media partners"
          className="lg:text-6xl mb-6 text-4xl uppercase text-white font-extrabold"
        />

        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-w-7xl gap-4">
          <div className="w-full border border-white h-[262px] bg-white"></div>
          <div className="w-full border border-white h-[262px] bg-white"></div>
          <div className="w-full border border-white h-[262px] bg-white"></div>
        </div>
      </motion.div>
    </section>
  );
}
