import React from "react";
import StackGridButton from "../stack-grid-button";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { SpeakerCardProps } from "@/types/speaker.types";

export default function SpeakerCard({
  name,
  title,
  company,
  topic,
  imageUrl,
  twitterUrl,
  linkedinUrl,
  bgColor = "#FFCCCD", // Default pink from your image
  onTwitterClick,
  onLinkedinClick,
  onCardClick,
}: SpeakerCardProps) {
  const handleTwitterClick = () => {
    if (twitterUrl) {
      window.open(twitterUrl, "_blank");
    }
    onTwitterClick?.();
  };

  const handleLinkedinClick = () => {
    if (linkedinUrl) {
      window.open(linkedinUrl, "_blank");
    }
    onLinkedinClick?.();
  };

  return (
    <div
      className="relative min-w-80 lg:min-w-[386px] lg:min-h-[531px] border-2 border-r-transparent border-black p-2 pb-3 overflow-hidden bg-white snap-center"
      onClick={onCardClick}
    >
      <div>
        <div
          className="flex justify-center items-center w-full max-h-[369px] overflow-hidden mb-2"
          style={{ backgroundColor: bgColor }}
        >
          <div className="overflow-hidden h-full w-full">
            <Image
              src={imageUrl}
              alt={`${name} - Speaker`}
              width={192}
              height={192}
              className="h-full object-cover w-full translate-y-3"
            />
          </div>
        </div>

        {/* Speaker Info */}
        <div className="flex mb-3">
          <h2 className="text-2xl font-semibold text-[#024539] tracking-[-2%] leading-[125%] mr-auto">
            {name}
          </h2>

          <div className="flex gap-2 z-10">
            {twitterUrl && (
              <StackGridButton
                shape="circular"
                size="small"
                icon={<BsTwitterX className="text-[#4A4A4A] w-5 h-5" />}
                shadowOffset={{ x: -3, y: 2 }}
                bgColor="#EDEDED"
                borderColor="#024539"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  handleTwitterClick();
                }}
              />
            )}
            {linkedinUrl && (
              <StackGridButton
                shape="circular"
                size="small"
                icon={<LuLinkedin className="text-[#4A4A4A] w-5 h-5" />}
                shadowOffset={{ x: -3, y: 2 }}
                bgColor="#EDEDED"
                borderColor="#024539"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  handleLinkedinClick();
                }}
              />
            )}
          </div>
        </div>

        <p className="text-[#024539] text-sm uppercase tracking-[10%] font-semibold pr-6 leading-[125%] mb-4 truncate">
          {title}
          {company && (
            <>
              {", "}
              <span className="font-bold">{company}</span>
            </>
          )}
        </p>

        {/* Topic Tag */}

        <div className="py-3 bg-[#024539] w-full flex items-center justify-center">
          <span className="text-[#FAFAFA] uppercase text-[13px] tracking-[20%] font-bold">
            {topic.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}
