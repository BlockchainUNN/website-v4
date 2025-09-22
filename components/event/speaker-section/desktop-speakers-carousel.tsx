import { DesktopSpeakersCarouselProps } from "@/types/speaker.types";
import SpeakerCard from "./speaker-card";

export function DesktopSpeakersCarousel({
  speakers,
  currentIndex,
}: DesktopSpeakersCarouselProps) {
  return (
    <div
      className="items-center w-full hidden lg:flex"
      style={{
        scrollSnapType: "x mandatory",
        scrollbarWidth: "none",
        transform: `translateX(-${((currentIndex - 1) / 2) * 100}%)`,
        transition: "transform 0.3s cubic-bezier(.85,.36,.36,.24)",
      }}
    >
      {speakers.map((speaker, index) => (
        <SpeakerCard key={index} {...speaker} />
      ))}
    </div>
  );
}
