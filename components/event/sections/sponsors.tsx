import React from "react";
import StrokedText from "../stroked-text";
import { motion } from "motion/react";

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
          text="Platinum Sponsors"
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
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <StrokedText
          text="Gold Sponsors"
          className="lg:text-6xl mb-6 text-4xl uppercase text-white font-extrabold"
        />

        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-w-7xl gap-4">
          <div className="w-full border border-white h-[262px] bg-white"></div>
          <div className="w-full border border-white h-[262px] bg-white"></div>
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
