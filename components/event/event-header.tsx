"use client";

import Image from "next/image";
import LogoWhite from "../../public/assets/new_logo.png";
import StackGridButton from "./stack-grid-button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function EventHeader() {
  const router = useRouter();

  return (
    <header className="bg-gradient-to-b from-[#02270C] to-[#011607] w-full h-[96px] flex items-center justify-center py-4 relative top-0 left-0 right-0 z-50">
      <motion.div
        className="max-w-sm mx-auto overflow-hidden h-[50px] mr-auto"
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src={LogoWhite}
          alt="Event Header"
          width={500}
          height={500}
          className="object-contain h-full"
        />
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <StackGridButton
          text="Register Now"
          width={160}
          height={47}
          bgColor="#02641C"
          shadowColor="#EDEDED"
          shadowOffset={{ x: -2, y: 2 }}
          onClick={() => router.push("/event/registration")}
        />
      </motion.div>

      <motion.div
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 lg:hidden"
        title="Register Now"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <StackGridButton
          icon={<ArrowRight />}
          variant="icon"
          width={47}
          height={47}
          bgColor="#02641C"
          shadowColor="#EDEDED"
          shadowOffset={{ x: -2, y: 2 }}
          onClick={() => router.push("/event/registration")}
        />
      </motion.div>
    </header>
  );
}
