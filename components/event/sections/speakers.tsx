"use client";

import { DesktopSpeakersCarousel } from "../speaker-section/desktop-speakers-carousel";
import { MobileSpeakersCarousel } from "../speaker-section/mobile-speakers-carousel";
import { SpeakersHeader } from "../speaker-section/speaker-headers";
import useSpeakersControls, {
  speakers,
} from "@/hooks/custom/useSpeakersControls";
import { ViewAllSpeakersButton } from "../speaker-section/view-all-speakers-button";
import { motion } from "motion/react";

export function BlockathonSpeakers() {
  const {
    currentIndex,
    mobileCurrentIndex,
    handlePrevious,
    handleNext,
    handleMobilePrevious,
    handleMobileNext,
    handleTwitterClick,
    handleLinkedinClick,
    offset,
  } = useSpeakersControls();

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(/assets/events/speakers_bg.png), linear-gradient(0deg, #F0BF1C, #F0BF1C)`,
      }}
    >
      <div className="w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <SpeakersHeader
            currentIndex={currentIndex}
            offset={offset}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </motion.div>

        <motion.div
          className="max-w-[1440px] mx-auto w-full relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <DesktopSpeakersCarousel
            speakers={speakers}
            currentIndex={currentIndex}
          />

          <MobileSpeakersCarousel
            speakers={speakers}
            currentIndex={mobileCurrentIndex}
            onTwitterClick={handleTwitterClick}
            onLinkedinClick={handleLinkedinClick}
            onPrevious={handleMobilePrevious}
            onNext={handleMobileNext}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ViewAllSpeakersButton />
        </motion.div>
      </div>
    </section>
  );
}
