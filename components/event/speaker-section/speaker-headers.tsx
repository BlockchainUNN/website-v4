import { ArrowLeft, ArrowRight } from "lucide-react";
import StackGridButton from "../stack-grid-button";
import { SpeakersHeaderProps } from "@/types/speaker.types";
import StrokedText from "../stroked-text";

export function SpeakersHeader({
  currentIndex,
  offset,
  onPrevious,
  onNext,
}: SpeakersHeaderProps) {
  return (
    <div className="px-4 lg:px-0 flex justify-between max-w-[1440px] mx-auto w-full mb-8">
      <StrokedText
        text="Speakers line up"
        className="lg:text-6xl text-4xl uppercase text-white font-extrabold"
      />

      {/* Desktop Navigation */}
      <div className="lg:flex gap-4 items-center hidden">
        <StackGridButton
          shape="circular"
          icon={<ArrowLeft className="text-[#024539]" />}
          shadowOffset={{ x: -4, y: 4 }}
          bgColor="#FFFFFF"
          borderColor="#024539"
          onClick={onPrevious}
          disabled={currentIndex === 1}
        />

        <StackGridButton
          shape="circular"
          icon={<ArrowRight className="text-[#024539]" />}
          shadowOffset={{ x: -4, y: 4 }}
          bgColor="#FFFFFF"
          borderColor="#024539"
          onClick={onNext}
          disabled={currentIndex === offset}
        />
      </div>
    </div>
  );
}
