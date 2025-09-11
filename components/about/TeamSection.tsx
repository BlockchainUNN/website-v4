"use client";

import { teamContent } from "@/content/team";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useTeamStore } from "@/hooks/store/useTeamStore";
import { useTheme } from "@/hooks/store/useTheme";
import { Text } from "../common/Text";
import { TeamMember, TeamTag } from "@/types/about.types";
import { LiaLinkedin, LiaTwitter } from "react-icons/lia";
import { getTeamByTag } from "@/lib/teamUtils";
import { teamMembers } from "@/data/teamData";

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={cn(
        isDarkMode
          ? "bg-gradient-to-b from-black to-black1"
          : "bg-gradient-to-b from-[#898B8A] via-[#6FAE80] via=[#61F889] to-[#AFC8B5]",
        "flex flex-col max-sm-420:w-[8.25rem] max-sm:w-[12.25rem] max-lg:w-[15.25rem] w-[17.25rem] justify-center max-sm:rounded-xl rounded-3xl py-0.5"
      )}
    >
      <Card className="flex flex-col max-sm-420:w-[8rem] max-sm:w-[12rem] max-lg:w-[15rem] w-[17rem] max-sm:rounded-xl rounded-3xl mx-auto gap-0.5 border-none">
        <div className="h-[20rem] max-lg:h-[18rem] max-sm:h-[15rem] max-sm-420:h-[9rem] max-sm-420:w-[8rem] max-sm:w-[12rem] max-lg:w-[15rem] w-[17rem] bg-cover max-sm:rounded-t-xl rounded-t-3xl bg-black bg-center bg-no-repeat relative">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover max-sm:rounded-t-xl rounded-t-3xl"
          />
        </div>

        <CardContent
          className={cn(
            isDarkMode ? "bg-black" : "bg-slate-100",
            "flex flex-col max-sm:p-2 p-4 h-fit max-sm:rounded-b-xl rounded-b-3xl"
          )}
        >
          <div className="flex flex-col max-sm:gap-1.5 gap-2 max-sm-420:text-[0.5rem] max-sm:text-[0.75rem] text-[0.875rem]">
            <Text weight="extrabold" className="text-nowrap">
              {member.name}
            </Text>
            <Text>{member.role}</Text>
          </div>

          <div className="flex w-full flex-row-reverse">
            <div className="flex max-sm:gap-1.5 gap-2">
              {member.socials.linkedIn && (
                <Link
                  href={member.socials.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LiaLinkedin className="w-4 h-4 text-blue-600 hover:text-blue-800 transition-colors" />
                </Link>
              )}
              {member.socials.twitter && (
                <Link
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LiaTwitter className="w-4 h-4 text-blue-400 hover:text-blue-600 transition-colors" />
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface TagButtonProps {
  tag: string;
  isActive: boolean;
  onClick: () => void;
}

function TagButton({ tag, isActive, onClick }: TagButtonProps) {
  const { isDarkMode } = useTheme();

  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      onClick={onClick}
      className={cn(
        isActive
          ? isDarkMode
            ? "bg-ash text-black"
            : "bg-black text-white"
          : "",
        "px-6 max-sm:px-4 rounded-2xl max-lg:text-[1rem] max-sm-420:text-[0.5rem] max-sm:text-[0.75rem] text-[1.2rem] font-semibold capitalize max-sm:py-1"
      )}
    >
      {tag || "all"}
    </Button>
  );
}

export default function TeamSection() {
  const { selectedTag, setSelectedTag } = useTeamStore();
  const filteredTeam = getTeamByTag(teamMembers, selectedTag);
  const teamTags: TeamTag[] = [
    "leadership",
    "development",
    "designs",
    "content",
    "socials",
  ];

  return (
    <div className="flex flex-col w-full max-sm-420:gap-4 gap-8 justify-center font-raleway">
      <div className="flex flex-col gap-4 text-center">
        <Text
          variant="h1"
          weight="extrabold"
          className="mx-auto max-sm:text-[1.2rem] max-md:text-[1.5rem] max-lg:text-[1.75rem] text-[2rem]"
        >
          {teamContent.hero.title}
        </Text>

        <Text
          weight="medium"
          className="max-sm:text-[0.875rem] max-md:text-base max-lg:text-[1.2rem] text-[1.5rem] max-sm-420:w-[20rem] max-sm:w-[26rem] max-md:w-[37rem] max-lg:w-[45rem] w-[60rem] mx-auto text-balanced"
        >
          {teamContent.hero.description}
        </Text>
      </div>

      <div className="flex w-full flex-col justify-center mx-auto max-sm-420:gap-4 max-md:gap-8 gap-16">
        <div className="flex max-sm-420:flex-wrap max-sm-420:justify-center max-sm:gap-2 max-lg:gap-4 gap-6 mx-auto">
          <TagButton
            tag=""
            isActive={selectedTag === ""}
            onClick={() => setSelectedTag("")}
          />
          {teamTags.map((tag) => (
            <TagButton
              key={tag}
              tag={tag}
              isActive={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            />
          ))}
        </div>

        <div className="flex justify-center w-full mx-auto">
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-lg:gap-6 gap-20 mx-auto w-fit">
            {filteredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
