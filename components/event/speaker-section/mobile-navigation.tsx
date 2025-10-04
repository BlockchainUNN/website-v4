import { ArrowLeft, ArrowRight } from "lucide-react";
import StackGridButton from "../stack-grid-button";
import { MobileNavigationProps } from "@/types/speaker.types";

export function MobileNavigation({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
}: MobileNavigationProps) {
  return (
    <div className="flex justify-between items-center px-2">
      <div className="flex gap-3 p-2">
        <StackGridButton
          shape="circular"
          icon={<ArrowLeft className="text-[#024539]" size={18} />}
          shadowOffset={{ x: -3, y: 3 }}
          bgColor="#FFFFFF"
          borderColor="#024539"
          onClick={onPrevious}
          size="small"
        />
        <StackGridButton
          shape="circular"
          icon={<ArrowRight className="text-[#024539]" size={18} />}
          shadowOffset={{ x: -3, y: 3 }}
          bgColor="#FFFFFF"
          borderColor="#024539"
          onClick={onNext}
          size="small"
        />
      </div>

      {/* Mobile Progress Indicator */}
      <div className="flex gap-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white border-2 border-[#024539]"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
