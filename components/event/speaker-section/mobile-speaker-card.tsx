import { LuLinkedin } from "react-icons/lu";
import StackGridButton from "../stack-grid-button";
import { MobileSpeakerCardProps } from "@/types/speaker.types";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

export function MobileSpeakerCard({
  speaker,
  onTwitterClick,
  onLinkedinClick,
}: MobileSpeakerCardProps) {
  return (
    <div className="bg-white max-w-[386px] mx-auto border-2 border-black rounded-lg p-3 shadow-lg">
      {/* Mobile Speaker Image */}
      <div
        className="w-full h-80 rounded-lg mb-4 overflow-hidden flex items-center justify-end"
        style={{ backgroundColor: speaker.bgColor }}
      >
        <Image
          src={speaker.imageUrl}
          alt={`${speaker.name} - Speaker`}
          width={192}
          height={192}
          className="w-full h-full object-contain translate-y-3"
        />
      </div>

      {/* Mobile Speaker Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-[#024539] leading-tight">
            {speaker.name}
          </h3>
          <div className="flex gap-2 ml-2">
            {speaker.twitterUrl && (
              <StackGridButton
                shape="circular"
                size="small"
                icon={<BsTwitterX className="text-[#4A4A4A] w-5 h-5" />}
                shadowOffset={{ x: -3, y: 2 }}
                bgColor="#EDEDED"
                borderColor="#024539"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  onTwitterClick(speaker.twitterUrl || "");
                }}
              />
            )}
            {speaker.linkedinUrl && (
              <StackGridButton
                shape="circular"
                size="small"
                icon={<LuLinkedin className="text-[#4A4A4A] w-5 h-5" />}
                shadowOffset={{ x: -3, y: 2 }}
                bgColor="#EDEDED"
                borderColor="#024539"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  onLinkedinClick(speaker.linkedinUrl || "");
                }}
              />
            )}
          </div>
        </div>

        <p className="text-[#024539] text-sm uppercase tracking-wider font-semibold">
          {speaker.title}
          {speaker.company && (
            <>
              <br />
              <span className="font-bold">{speaker.company}</span>
            </>
          )}
        </p>

        <div className="py-3 bg-[#024539] rounded-md flex items-center justify-center">
          <span className="text-white uppercase text-xs tracking-widest font-bold text-center">
            {speaker.topic}
          </span>
        </div>
      </div>
    </div>
  );
}
