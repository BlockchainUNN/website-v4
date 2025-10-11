"use client";
import StackGridButton from "@/components/event/stack-grid-button";
import HackerHome from "@/components/hackers/hacker-home";
import TeamDetails from "@/components/hackers/hacker-team-details";
import HackerTeam from "@/components/hackers/hacker-teams";
import HackerProjects from "@/components/hackers/project";
import HackerSchedule from "@/components/hackers/schedule";
import { useAuthStore } from "@/hooks/store/useHackathonState";
import { cn, formatDate } from "@/lib/utils";
import { ArrowLeft, Users2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdHome, MdPeople, MdEditCalendar, MdSettings } from "react-icons/md";

const tabItems = [
  { name: "Home", icon: MdHome },
  { name: "Team", icon: MdPeople },
  { name: "Team Details", icon: Users2 },
  { name: "Schedule", icon: MdEditCalendar },
  { name: "Project", icon: MdSettings },
];
const displayedContent = {
  Home: <HackerHome />,
  Team: <HackerTeam />,
  "Team Details": <TeamDetails />,
  Schedule: <HackerSchedule />,
  Project: <HackerProjects />,
};
export default function Hackers() {
  type TabName = (typeof tabItems)[number]["name"];
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabName>("Home");
  const { user, getAccessToken } = useAuthStore();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) router.push("/hackathon/login");
  }, [getAccessToken, router]);
  if (!user) return <div>No user</div>;

  return (
    <div
      style={{
        backgroundImage: "url(/assets/events/stats_bg.jpg)",
        fontFamily: "var(--font-hanken)",
      }}
      className="relative w-full min-h-screen bg-cover bg-center flex items-start justify-center pt-20  lg:p-20"
    >
      <div className="bg-black/60 w-full h-full absolute inset-0" />
      <div className="flex flex-col items-center justify-start z-10 text-white h-full gap-10">
        <div className="absolute top-2 left-2 lg:top-20 lg:left-20">
          <div className="block lg:hidden">
            <StackGridButton
              text="Back"
              variant="navigation"
              bgColor="linear-gradient(180deg, #02641C 0%, #02641C 100%)"
              borderColor="#024539"
              size="small"
              shadowOffset={{ x: -2, y: 2 }}
              hasArrow
              arrowIcon={<ArrowLeft />}
            />
          </div>
          <div className="hidden lg:block">
            <StackGridButton
              text="Back"
              variant="navigation"
              bgColor="linear-gradient(180deg, #02641C 0%, #02641C 100%)"
              borderColor="#024539"
              size="large"
              shadowOffset={{ x: -3, y: 4 }}
              hasArrow
              arrowIcon={<ArrowLeft />}
              onClick={() => router.back()}
            />
          </div>
        </div>
        <section className="text-center space-y-4 mt-10 lg:mt-0">
          <p className="text-4xl lg:text-6xl font-bold">
            Ready to Hack,{" "}
            <span className="text-green-500">{user.firstName}?</span>
          </p>
          <p className="text-2xl lg:text-4xl">
            You registered on the {formatDate(user.registeredAt)}
          </p>
        </section>
        <section className="lg:h-5/6 mt-10 space-y-10 w-screen lg:w-auto">
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {tabItems.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  className={cn(
                    "flex items-center justify-center gap-2 hover:cursor-pointer hover:text-green-500 text-xl lg:text-3xl",
                    {
                      "text-green-500": activeTab === tab.name,
                      "text-white": activeTab !== tab.name,
                    }
                  )}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <Icon className="w-8 lg:w-10 h-8 lg:h-10" />
                  {tab.name}
                </button>
              );
            })}
          </div>
          <div className="bg-white/50 h-11/12 lg:w-11/12 mx-auto flex justify-center items-center">
            {displayedContent[activeTab as keyof typeof displayedContent]}
          </div>
        </section>
      </div>
    </div>
  );
}
