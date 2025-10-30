import Image from "next/image";
import React from "react";
import StackGridButton from "../stack-grid-button";
import { stats } from "./stats";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function BuildathonHero() {
  const router = useRouter();
  return (
    <section className="w-full h-auto pt-36 lg:pt-64 bg-[url('/assets/events/hero_bg.jpg')] bg-cover bg-center overflow-hidden flex flex-col items-center justify-center relative">
      <motion.div
        className="w-full md:max-w-2xl mx-auto border -translate-y-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full px-6 md:px-0">
          <Image
            src="/assets/events/buildathon.png"
            alt="Buildathon Hero"
            width={1920}
            height={1080}
            className="object-contain w-full h-full"
          />
        </div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-black text-center text-2xl md:text-4xl uppercase font-semibold tracking-[0.36rem]">
            BlockchainUNN Conference 4.0
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row max-w-sm md:max-w-none mx-auto justify-between items-center mt-6 gap-4 md:gap-6 px-6 md:px-0"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full md:w-1/2">
            <StackGridButton
              text="Register Now"
              variant="navigation"
              bgColor="linear-gradient(180deg, #02641C 0%, #02641C 100%)"
              borderColor="#024539"
              size="large"
              shadowOffset={{ x: -3, y: 4 }}
              hasArrow
              onClick={() => router.push("/event/registration")}
            />
          </div>
          <div className="w-full md:w-1/2">
            <StackGridButton
              text="Join the Hackathon"
              variant="navigation"
              size="large"
              bgColor="#FFB636"
              borderColor="#024539"
              shadowOffset={{ x: -3, y: 4 }}
              hasArrow
              onClick={() => router.push("/hackathon/registration")}
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full bg-[#024539] tracking-[0.3rem] py-3 md:py-6 px-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="py-2 md:py-4">
          <h3 className="uppercase text-white text-center text-base md:text-xl font-normal">
            4th edition (2025) holds @ Ekpo Ref, unn, nsukka
          </h3>
        </div>
        <div>
          <h3 className="uppercase text-white text-center text-base md:text-4xl font-semibold">
            8TH NOV, 2025
          </h3>
        </div>
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        <motion.div
          className="bg-[#C89A04] h-full flex items-center p-8 justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <motion.div
          className="bg-[#51604D] h-full flex items-center p-8 justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-white text-center">
            <h3 className="font-semibold text-xl md:text-4xl tracking-[0.36%]">
              LEARN. BUILD. INNOVATE
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
