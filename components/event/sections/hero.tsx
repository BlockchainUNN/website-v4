// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Calendar } from "lucide-react";
// import { useTheme } from "@/hooks/store/useTheme";
// import { useAttendeeCount } from "@/hooks/crud/useEvents";
// import { useHackathonState } from "@/hooks/store/useHackathonState";
// import { Text } from "@/components/common/Text";
// import { Button } from "@/components/ui/button";
// import { calculateTimeLeft, cn } from "@/lib/utils";
// import { useHackerCount } from "@/hooks/crud/useHacker";
// import { blockathonContent } from "@/content/event";

// const statIcons = {
//   attendee: "/images/icons/attendee.svg",
//   speaker: "/images/icons/speaker.svg",
//   sponsor: "/images/icons/sponsor.svg",
//   hacker: "/images/icons/hacker.svg",
//   cup: "/images/icons/smallcup.svg",
// };

// export function BlockathonHero() {
//   const { isDarkMode } = useTheme();
//   const { blockathonId, hackathonId } = useHackathonState();
//   const [timeLeft, setTimeLeft] = useState(
//     calculateTimeLeft(blockathonContent.hero.eventDate)
//   );

//   // Get live counts
//   const { data: attendeeData } = useAttendeeCount(blockathonId);
//   const { data: hackerData } = useHackerCount(hackathonId);

//   // Update countdown timer
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft(blockathonContent.hero.eventDate));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div
//       className={cn(
//         "w-full flex flex-col",
//         isDarkMode ? "bg-black text-white" : "bg-black text-white"
//       )}
//     >
//       {/* Main Hero Section */}
//       <div className="px-4 md:px-8 py-12 flex flex-col items-center">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="mb-6">
//             <Image
//               src="/images/blockathon/blockathonlogo.png"
//               alt="Blockathon Logo"
//               width={200}
//               height={100}
//               className="mx-auto"
//             />
//           </div>

//           <Text
//             variant="h1"
//             size="6xl"
//             weight="black"
//             font="raleway"
//             className="mb-4 text-4xl md:text-6xl"
//           >
//             {blockathonContent.hero.title}
//           </Text>

//           <Text
//             size="2xl"
//             weight="semibold"
//             className="mb-6 text-xl md:text-2xl text-blockchain-green"
//           >
//             {blockathonContent.hero.subtitle}
//           </Text>

//           {/* Prize Pool Highlight */}
//           <div className="rounded-full px-6 py-4 border border-white w-fit mx-auto mb-8">
//             <div className="flex items-center justify-center gap-2">
//               <Text size="xl" weight="bold">
//                 {blockathonContent.hero.prizePool}
//               </Text>
//               <Image
//                 src={statIcons.cup}
//                 alt="cup"
//                 width={16}
//                 height={16}
//                 className="w-4 h-4"
//               />
//             </div>
//             <Text size="lg">Prize pool to be won.</Text>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div
//           className={cn(
//             "bg-dark-mode flex flex-col md:flex-row px-8 py-8 items-center justify-center gap-8 w-full rounded-lg mb-12",
//             "max-w-6xl"
//           )}
//         >
//           {/* Live Stats */}
//           <div className="flex flex-wrap justify-center gap-8 text-white">
//             <div className="flex flex-col md:flex-row items-center gap-2">
//               <Image
//                 src={statIcons.attendee}
//                 alt="attendee"
//                 width={32}
//                 height={32}
//                 className="w-8 h-8"
//               />
//               <div className="text-center">
//                 <Text size="xl" weight="bold">
//                   {attendeeData?.attendeeCount || "0"}
//                 </Text>
//                 <Text size="sm">Attendees</Text>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row items-center gap-2">
//               <Image
//                 src={statIcons.speaker}
//                 alt="speaker"
//                 width={32}
//                 height={24}
//                 className="w-8 h-6"
//               />
//               <div className="text-center">
//                 <Text size="xl" weight="bold">
//                   {blockathonContent.hero.stats.speakers}
//                 </Text>
//                 <Text size="sm">Speakers</Text>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row items-center gap-2">
//               <Image
//                 src={statIcons.sponsor}
//                 alt="sponsor"
//                 width={32}
//                 height={24}
//                 className="w-8 h-6"
//               />
//               <div className="text-center">
//                 <Text size="xl" weight="bold">
//                   {blockathonContent.hero.stats.sponsors}
//                 </Text>
//                 <Text size="sm">Sponsors</Text>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row items-center gap-2">
//               <Image
//                 src={statIcons.hacker}
//                 alt="hacker"
//                 width={32}
//                 height={32}
//                 className="w-8 h-8"
//               />
//               <div className="text-center">
//                 <Text size="xl" weight="bold">
//                   {hackerData?.hackerCount || "0"}
//                 </Text>
//                 <Text size="sm">Hackers</Text>
//               </div>
//             </div>
//           </div>

//           {/* Countdown Timer */}
//           <div className="flex gap-4 text-white">
//             {[
//               { label: "DAYS", value: timeLeft.days },
//               { label: "HOURS", value: timeLeft.hours },
//               { label: "MINUTES", value: timeLeft.minutes },
//               { label: "SECONDS", value: timeLeft.seconds },
//             ].map(({ label, value }) => (
//               <div key={label} className="flex flex-col items-center">
//                 <Text size="3xl" weight="bold" className="text-2xl">
//                   {value.toString().padStart(2, "0")}
//                 </Text>
//                 <Text size="sm">{label}</Text>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action Buttons */}
//         <div className="flex flex-col md:flex-row gap-4 mb-16">
//           <Button
//             asChild
//             size="lg"
//             variant="outline"
//             className="border-white text-white hover:bg-white hover:text-black"
//           >
//             <Link href={blockathonContent.hero.cta.primary.link}>
//               <Calendar className="w-4 h-4 mr-2" />
//               {blockathonContent.hero.cta.primary.text}
//             </Link>
//           </Button>
//           <Button
//             asChild
//             size="lg"
//             className="bg-gray-200 text-black hover:bg-gray-300"
//           >
//             <Link href={blockathonContent.hero.cta.secondary.link}>
//               {blockathonContent.hero.cta.secondary.text}
//             </Link>
//           </Button>
//         </div>
//       </div>

//       {/* Overview Section */}
//       <div className="px-4 md:px-8 py-16 bg-black">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col-reverse md:flex-row items-center gap-12">
//             {/* Content */}
//             <div className="flex-1 space-y-6">
//               <Text
//                 variant="h2"
//                 size="4xl"
//                 weight="semibold"
//                 className="text-2xl md:text-4xl mb-4"
//               >
//                 Blockathon Overview
//               </Text>

//               <Text className="text-justify leading-relaxed">
//                 {blockathonContent.hero.description}
//               </Text>

//               <Text className="text-justify leading-relaxed">
//                 {blockathonContent.hero.fullDescription}
//               </Text>

//               <Text className="text-justify leading-relaxed">
//                 {blockathonContent.hero.mission}
//               </Text>

//               {/* Additional Stats */}
//               <div className="grid grid-cols-2 gap-4 mt-8">
//                 <div className="text-center p-4 bg-gray-900 rounded-lg">
//                   <Text size="2xl" weight="bold" color="green">
//                     {blockathonContent.hero.stats.expectedAttendees}
//                   </Text>
//                   <Text size="sm" color="muted">
//                     Expected Attendees
//                   </Text>
//                 </div>
//                 <div className="text-center p-4 bg-gray-900 rounded-lg">
//                   <Text size="2xl" weight="bold" color="green">
//                     {blockathonContent.hero.stats.expectedHackers}
//                   </Text>
//                   <Text size="sm" color="muted">
//                     Expected Hackers
//                   </Text>
//                 </div>
//               </div>
//             </div>

//             {/* Video */}
//             <div className="flex-1 max-w-md">
//               <div className="relative w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src={blockathonContent.hero.videoUrl}
//                   title="Blockathon 2024 Preview"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
            Blockchain Conference 4.0
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
onClick={()=>router.push("/event/registration")}
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
            4th edition (2025) holds @ uba hall of fame, unn, nsukka
          </h3>
        </div>
        <div>
          <h3 className="uppercase text-white text-center text-base md:text-4xl font-semibold">
            28TH OCT. - 2ND NOV, 2025
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
