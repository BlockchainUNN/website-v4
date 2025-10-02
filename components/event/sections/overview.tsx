import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/animations/scroll-to-reveal";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export default function BuildathonOverview() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex items-center justify-center bg-gradient-to-b from-[#000000] to-[#1B1A1A] min-h-screen">
        <motion.div
          className="px-6 md:px-24 w-full max-w-7xl py-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-[#02641C] text-2xl md:text-4xl uppercase font-semibold tracking-[0.36rem] mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Overview
          </motion.h1>

          <div className="space-y-2">
            {/* First paragraph */}
            <ScrollReveal
              baseOpacity={0.25}
              containerClassName=""
              textClassName="text-[#FAFAFA] text-2xl md:text-3xl font-normal"
              rotationEnd="bottom 80%"
              wordAnimationEnd="bottom 70%"
            >
              This October, BlockchainUNN Conference 4.0: BUILDATHON kicks off—a
              three-week hackathon and learning experience built for dreamers,
              creators, and innovators ready to explore the limitless world of
              blockchain.
            </ScrollReveal>

            {/* Second paragraph */}
            <ScrollReveal
              enableBlur={true}
              baseOpacity={0.25}
              blurStrength={3}
              containerClassName=""
              textClassName="text-[#FAFAFA] text-2xl md:text-3xl font-normal"
              rotationEnd="bottom 80%"
              wordAnimationEnd="bottom 70%"
            >
              Now in its fourth year, this dynamic event is designed to onboard
              the next generation of blockchain builders. From hands-on coding
              to non-technical tracks, participants will engage in workshops,
              networking sessions, panel discussions, and talks with 10+
              industry experts. With over 3,000 attendees expected and an
              average of 100–200 hackers competing, BUILDATHON is where ideas
              turn into impact.
            </ScrollReveal>

            {/* Third paragraph */}
            <ScrollReveal
              enableBlur={true}
              baseOpacity={0.25}
              blurStrength={3}
              containerClassName=""
              textClassName="text-[#FAFAFA] text-2xl md:text-3xl font-normal"
              rotationEnd="bottom 80%"
              wordAnimationEnd="bottom 70%"
            >
              At its core, BlockchainUNN believes that education is essential
              for widespread blockchain adoption. BUILDATHON serves as a
              platform to bring this education to the forefront, giving emerging
              talent the stage to build, connect, and lead the blockchain
              revolution.
            </ScrollReveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// import ScrollReveal from "@/components/animations/scroll-to-reveal";
// import { RefObject, useRef } from "react";

// export default function BuildathonOverview() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   return (
//     <section className="w-full overflow-hidden border relative">
//       <div className="flex items-center justify-center bg-gradient-to-b from-[#000000] to-[#1B1A1A] min-h-screen">
//         <div className="px-6 md:px-24 w-full py-24 max-w-7xl">
//           <h1 className="text-[#02641C] text-xl md:text-4xl uppercase font-semibold tracking-[0.36rem] mb-8">
//             Overview
//           </h1>

//           <ScrollReveal
//             baseOpacity={0.1}
//             containerClassName="my-0"
//             textClassName="text-lg md:text-2xl leading-loose font-normal"
//             scrollContainerRef={sectionRef as RefObject<HTMLDivElement>}
//           >
//             This October, BlockchainUNN Conference 4.0: BUILDATHON kicks off—a
//             three-week hackathon and learning experience built for dreamers,
//             creators, and innovators ready to explore the limitless world of
//             blockchain. Now in its fourth year, this dynamic event is designed
//             to onboard the next generation of blockchain builders. From hands-on
//             coding to non-technical tracks, participants will engage in
//             workshops, networking sessions, panel discussions, and talks with
//             10+ industry experts. With over 3,000 attendees expected and an
//             average of 100–200 hackers competing, BUILDATHON is where ideas turn
//             into impact. At its core, BlockchainUNN believes that education is
//             essential for widespread blockchain adoption. BUILDATHON serves as a
//             platform to bring this education to the forefront, giving emerging
//             talent the stage to build, connect, and lead the blockchain
//             revolution.
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// }
