import { ArrowRight } from "lucide-react";
import StackGridButton from "../stack-grid-button";

export function ViewAllSpeakersButton() {
  return (
    <div className="max-w-[1440px] mx-auto w-full mt-8">
      <StackGridButton
        hasArrow
        text="View all Speakers"
        borderColor="#024539"
        bgColor="#02641C"
        variant="navigation"
        size="large"
        arrowIcon={<ArrowRight className="text-[#024539]" />}
      />
    </div>
  );
}
