import { useMemo, useState } from "react";
import rawTeamData, { teamTags as tags } from "../../content/team";
import { useTheme } from "@/hooks/store/useTheme";
import TeamCard from "./TeamCard";

export default function TheTeam() {
  const [currentTag, setCurrentTag] = useState("");
  const [teamData, teamTags] = useMemo(() => [rawTeamData, tags], []);
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;

  type TagBtnProps = {
    tag: string;
    onclick: () => void;
  };

  const TagBtn = ({ tag, onclick }: TagBtnProps) => (
    <button
      className={
        (currentTag === tag
          ? `${
              theme ? "bg-ash text-black " : "bg-black text-white "
            } px-6 max-sm:px-4 rounded-2xl `
          : "") +
        " max-lg:text-[1rem] max-sm-420:text-[0.5rem] max-sm:text-[0.75rem] text-[1.2rem] font-raleway-semibold capitalize max-sm:py-1"
      }
      onClick={onclick}
    >
      <span>{tag || "all"}</span>
    </button>
  );

  return (
    <div className="flex flex-col w-full max-sm-420:gap-4 gap-8 justify-center font-raleway">
      <div className="flex flex-col gap-4 text-center ">
        <h1 className="mx-auto font-inter-extrabold max-sm:text-[1.2rem] max-md:text-[1.5rem] max-lg:text-[1.75rem] text-[2rem]">
          Meet the Team
        </h1>
        <span className="flex max-sm:text-[0.875rem] max-md:text-base max-lg:text-[1.2rem] text-[1.5rem]  max-sm-420:w-[20rem] max-sm:w-[26rem] max-md:w-[37rem] max-lg:w-[45rem] w-[60rem] font-raleway-medium mx-auto text-balanced">
          We’re a student-run organization that promotes innovation in the
          blockchain industry through education, consulting, design, and
          research. We aren’t purely professional, we’re a team of friends,
          collaborators, and students of likeminded peers who ideate, and
          adventure together.
        </span>
      </div>

      <div className="flex w-full flex-col justify-center mx-auto max-sm-420:gap-4 max-md:gap-8 gap-16">
        <div className="flex  max-sm-420:flex-wrap  max-sm-420:justify-center max-sm:gap-2 max-lg:gap-4 gap-6 mx-auto">
          <TagBtn onclick={() => setCurrentTag("")} tag={""} />
          {teamTags.map((tag) => (
            <TagBtn key={tag} onclick={() => setCurrentTag(tag)} tag={tag} />
          ))}
        </div>

        <div className="flex justify-center w-full mx-auto">
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-lg:gap-6 gap-20 mx-auto w-fit">
            {teamData
              .filter((member) => member.tag.includes(currentTag))
              .map((member) => (
                <TeamCard
                  key={member.name + Math.random()}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  socials={member.socials}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
