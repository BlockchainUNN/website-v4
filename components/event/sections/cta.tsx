import StackGridButton from "../stack-grid-button";
import Image from "next/image";
import Link from "next/link";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const socialLinks = [
  {
    platform: "LinkedIn",
    href: "https://linkedin.com/company/blockchainunn",
    icon: <LuLinkedin className="text-[#EDEDED] w-5 h-5" />,
  },
  {
    platform: "Telegram",
    href: "https://t.me/blockchainunn",
    icon: <FaTelegram className="text-[#EDEDED] w-5 h-5" />,
  },
  {
    platform: "X",
    href: "https://x.com/BlockchainUNN",
    icon: <BsTwitterX className="text-[#EDEDED] w-5 h-5" />,
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/blockchainunn",
    icon: <FaInstagram className="text-[#EDEDED] w-5 h-5" />,
  },
];

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Register",
    href: "/event/registration",
  },
];

const aboutLinks = [
  {
    label: "BlockchainUNN",
    href: "/about",
  },
  {
    label: "Buildathon Hackathon",
    href: "/event/hackathon",
  },
];

export default function BuildathonCTA() {
  const router = useRouter();
  return (
    <section
      className="w-full min-h-screen h-auto bg-[#8D2BDC]"
      style={{ fontFamily: "var(--font-hanken)" }}
    >
      <div className="w-full h-full bg-[url('/assets/events/CTA.svg')] bg-cover bg-center bg-repeat-y py-20">
        <div className="px-6 md:px-24 w-full">
          <motion.div
            className="flex flex-col items-center justify-center max-w-3xl mx-auto px-2 text-center mb-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-[64px] font-extrabold text-[#EDEDED] uppercase tracking-[2%] mb-4">
              Be part of the future
            </h2>
            <p className="text-[#FAFAFA] text-2xl font-medium leading-[145%] px14">
              Are you just starting your blockchain journey or you’ve been
              building for years, this is your space to learn, connect, and
              shape what’s next. Reserve your spot today — don’t just watch the
              future of technology unfold, be part of it.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row max-w-3xl mx-auto justify-between items-center gap-4 md:gap-6 px-6 md:px-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full">
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
            <div className="w-full">
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

          <motion.div
            className="bg-white w-full border-2 border-black mt-18 py-24 px-6 md:px-22"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start max-w-7xl mx-auto">
              <div className="flex flex-col gap-6 md:items-start">
                <div className="space-y-4 mb-2 md:mb-8">
                  <div className="flex items-center justify-center overflow-hidden">
                    <Image
                      src="/assets/events/buildathon_white.png"
                      alt="Buildathon logo"
                      width={240}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center overflow-hidden">
                    <Image
                      src="/assets/new_logo.png"
                      alt="BlockchainUNN logo"
                      width={240}
                      height={96}
                      className="object-contain invert"
                    />
                  </div>
                </div>
                <p className="text-base text-[#4A4A4A] font-normal">
                  © {new Date().getFullYear()} BlockchainUNN. All rights
                  reserved
                </p>
              </div>

              {/* Links */}
              <div className="lg:justify-self-end mt-6 lg:mt-0">
                <div className="flex flex-col md:flex-row gap-8 lg:justify-center mb-8">
                  {/* Quick Links */}
                  <div>
                    <h4 className="text-xl text-[#7A7A7A] font-normal mb-6">
                      Quick Links
                    </h4>
                    <ul className="space-y-3">
                      {quickLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="hover:underline font-semibold text-lg"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* About */}
                  <div>
                    <h4 className="text-xl text-[#7A7A7A] font-normal mb-6">
                      About
                    </h4>
                    <ul className="space-y-3">
                      {aboutLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="hover:underline font-semibold text-lg"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-xl text-[#7A7A7A] font-normal mb-6">
                    Social Links
                  </h4>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((link) => (
                      <motion.div
                        key={link.platform}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                      >
                        <StackGridButton
                          variant="icon"
                          size="small"
                          shape="rounded"
                          icon={link.icon}
                          shadowOffset={{ x: -3, y: 2 }}
                          bgColor="#02641C"
                          borderColor="#024539"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
