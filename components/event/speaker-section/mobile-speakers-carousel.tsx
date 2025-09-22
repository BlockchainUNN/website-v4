import { MobileSpeakersCarouselProps } from "@/types/speaker.types";
import { MobileSpeakerCard } from "./mobile-speaker-card";
import { MobileNavigation } from "./mobile-navigation";

export function MobileSpeakersCarousel({
  speakers,
  currentIndex,
  onTwitterClick,
  onLinkedinClick,
  onPrevious,
  onNext,
}: MobileSpeakersCarouselProps) {
  return (
    <div className="lg:hidden">
      {/* Mobile Speaker Cards - Stacked with slide animation */}
      <div className="relative h-[480px] mb-8">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "translate-x-0 opacity-100 z-20"
                : index < currentIndex
                ? "-translate-x-full opacity-0 z-10"
                : "translate-x-full opacity-0 z-10"
            }`}
          >
            <MobileSpeakerCard
              speaker={speaker}
              onTwitterClick={onTwitterClick}
              onLinkedinClick={onLinkedinClick}
            />
          </div>
        ))}
      </div>

      <MobileNavigation
        currentIndex={currentIndex}
        totalItems={speakers.length}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
}
