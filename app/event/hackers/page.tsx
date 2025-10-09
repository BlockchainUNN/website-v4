"use client"
import StackGridButton from "@/components/event/stack-grid-button";
import HackerHome from "@/components/hackers/hacker-home";
import HackerTeam from "@/components/hackers/hacker-teams";
import HackerProjects from "@/components/hackers/project";
import HackerSchedule from "@/components/hackers/schedule";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useState } from "react"
import { MdHome, MdPeople, MdEditCalendar, MdSettings, MdEditDocument } from "react-icons/md"

const tabItems = [
    { name: "Home", icon: MdHome },
    { name: "Team", icon: MdPeople },
    { name: "Schedule", icon: MdEditCalendar },
    { name: "Project", icon: MdSettings },
]
const displayedContent = {
    "Home": <HackerHome/>,
    "Team": <HackerTeam/>,
    "Schedule": <HackerSchedule/>,
    "Project": <HackerProjects/>,
}
export default function Hackers(){
    type TabName = typeof tabItems[number]["name"];
    const [activeTab, setActiveTab] = useState<TabName>("Home");
    return <div style={{backgroundImage: "url(/assets/events/stats_bg.jpg)", fontFamily: "var(--font-hanken)" }} className="relative w-full h-screen bg-cover bg-center flex items-start justify-center p-20"> 
    <div className="bg-black/60 w-full h-full absolute inset-0"/>
    <div className="flex flex-col items-center justify-start z-10 text-white h-full gap-10">
    <div className="absolute top-20 left-20 ">
            <StackGridButton
              text="Back"
              variant="navigation"
              bgColor="linear-gradient(180deg, #02641C 0%, #02641C 100%)"
              borderColor="#024539"
              size="large"
              shadowOffset={{ x: -3, y: 4 }}
              hasArrow
              arrowIcon={<ArrowLeft/>}
            />
          </div>
        <section className="text-center space-y-4">
        <p className="text-6xl font-bold">Ready to Hack, <span className="text-green-500">Issac?</span></p>
        <p className="text-4xl">You registered on the 17th of September, 2025</p>
        </section>
        <section className="h-5/6 mt-10 space-y-10">
        <div className="flex items-center justify-center gap-10">
            {tabItems.map((tab) => {
                const Icon = tab.icon;
                return (
                    <span
                        key={tab.name}
                        className={cn(
                            "flex items-center justify-center gap-2 hover:cursor-pointer hover:text-green-500 text-3xl",
                            {
                                "text-green-500": activeTab === tab.name,
                                "text-white": activeTab !== tab.name
                            }
                        )}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        
                        <Icon className="w-10 h-10" />
                        {tab.name}
                    </span>
                );
            })}
        </div>
        <div className="bg-white/50 h-11/12 w-[60vw]">
            {displayedContent[activeTab as keyof typeof displayedContent]}
        </div>
        </section>
        </div>
    </div>
}