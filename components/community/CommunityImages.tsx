// app/community/components/CommunityImages.tsx
"use client";

import { communityPics } from "@/data/communityData";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CommunityImages() {
  return (
    <div className="flex flex-col gap-8 justify-center max-lg:px-20 max-md:px-10 max-sm:px-6 px-36">
      <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 max-md:gap-3 max-sm:gap-2">
        {communityPics.map((pic, index) => (
          <div
            key={index}
            className="aspect-square relative rounded-lg overflow-hidden bg-gray-200"
          >
            <Image
              src={pic}
              alt={`Community member ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
