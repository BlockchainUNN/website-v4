/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from "@/hooks/store/useTheme";
import SocialLink from "../layout/SocialLink";

type TeamCardProps = {
  image: any;
  name: string;
  role: string;
  socials: {
    linkedIn: string;
    twitter: string;
  };
};

export default function TeamCard({
  image,
  name,
  role,
  socials,
}: TeamCardProps) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;
  return (
    <div
      className={
        (theme
          ? "bg-gradient-to-b from-black to-black1 "
          : "bg-gradient-to-b from-[#898B8A] via-[#6FAE80] via=[#61F889] to-[#AFC8B5] ") +
        " flex flex-col max-sm-420:w-[8.25rem] max-sm:w-[12.25rem] max-lg:w-[15.25rem] w-[17.25rem] justify-center max-sm:rounded-xl rounded-3xl py-0.5 "
      }
    >
      <div className="flex flex-col max-sm-420:w-[8rem] max-sm:w-[12rem] max-lg:w-[15rem] w-[17rem] max-sm:rounded-xl rounded-3xl mx-auto  gap-0.5 ">
        <div
          className="h-[20rem] max-lg:h-[18rem] max-sm:h-[15rem] max-sm-420:h-[9rem] max-sm-420:w-[8rem] max-sm:w-[12rem] max-lg:w-[15rem] w-[17rem] bg-cover max-sm:rounded-t-xl rounded-t-3xl bg-black bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div
          className={
            (theme ? " bg-black " : " bg-slate-100 ") +
            " flex flex-col max-sm:p-2 p-4 h-fit max-sm:rounded-b-xl rounded-b-3xl"
          }
        >
          <div className="flex flex-col max-sm:gap-1.5 gap-2 max-sm-420:text-[0.5rem] max-sm:text-[0.75rem] text-[0.875rem] ">
            <span className="font-extrabold text-nowrap">{name}</span>
            <span>{role}</span>
          </div>
          <div className="flex w-full flex-row-reverse">
            <div className="flex max-sm:gap-1.5 gap-2">
              <SocialLink to={socials.linkedIn} type={"linkedin"} />
              <SocialLink to={socials.twitter} type={"x"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
