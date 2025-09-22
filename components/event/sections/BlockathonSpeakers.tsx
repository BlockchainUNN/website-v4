"use client";

import { DesktopSpeakersCarousel } from "../speaker-section/desktop-speakers-carousel";
import { MobileSpeakersCarousel } from "../speaker-section/mobile-speakers-carousel";
import { SpeakersHeader } from "../speaker-section/speaker-headers";
import useSpeakersControls, {
  speakers,
} from "@/hooks/custom/useSpeakersControls";
import { ViewAllSpeakersButton } from "../speaker-section/view-all-speakers-button";

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
        <SpeakersHeader
          currentIndex={currentIndex}
          offset={offset}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />

        <div className="max-w-[1440px] mx-auto w-full relative overflow-hidden">
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
        </div>

        <ViewAllSpeakersButton />
      </div>
    </section>
  );
}
