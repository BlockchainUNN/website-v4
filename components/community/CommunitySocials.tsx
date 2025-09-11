// app/community/components/CommunitySocials.tsx
"use client";

import { communitySocials } from "@/data/communityData";
import { communityContent } from "@/content/community";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../common/Text";

interface SocialCardProps {
  icon: string;
  social: string;
  content: string;
  to?: string;
}

function SocialCard({ icon, social, content, to }: SocialCardProps) {
  if (to) {
    return (
      <Link href={to} target="_blank" rel="noopener noreferrer">
        <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <CardContent className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                src={icon}
                alt={social}
                width={24}
                height={24}
                className="max-sm:w-4 w-6 max-sm:h-4 h-6"
              />
              <Text weight="semibold" className="text-lg">
                {social}
              </Text>
            </div>

            <Text size="sm" color="muted" className="text-sm">
              {content}
            </Text>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <div>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <CardContent className="p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              src={icon}
              alt={social}
              width={24}
              height={24}
              className="max-sm:w-4 w-6 max-sm:h-4 h-6"
            />
            <Text weight="semibold" className="text-lg">
              {social}
            </Text>
          </div>

          <Text size="sm" color="muted" className="text-sm">
            {content}
          </Text>
        </CardContent>
      </Card>
    </div>
  );
}

export default function CommunitySocials() {
  return (
    <div className="flex flex-col gap-10 justify-center max-lg:px-20 max-md:px-10 max-sm:px-6 px-36">
      <Text
        variant="h2"
        weight="semibold"
        className="text-[2.5rem] max-lg:text-[2rem] max-md:text-[1.75rem] max-sm:text-[1.5rem] max-sm-420:text-[1.2rem] text-wrap text-center mx-auto"
      >
        {communityContent.socials.title}
      </Text>

      <div className="grid grid-cols-3 max-sm:grid-cols-2 max-md:gap-4 max-sm-420:gap-2 gap-8">
        {communitySocials.map((item) => (
          <SocialCard
            key={item.id}
            icon={item.icon}
            social={item.name}
            content={item.content}
            to={item.to}
          />
        ))}
      </div>
    </div>
  );
}
