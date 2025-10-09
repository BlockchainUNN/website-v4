

import Image from "next/image";
import StackGridButton from "@/components/event/stack-grid-button";
import { UserPlus2Icon, UsersRoundIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    teamName: z.string().min(2, "Enter your team name"),
});

type FormValues = z.infer<typeof formSchema>;
export default function HackerTeam() {
    const [activeTab, setActiveTab] = useState<"join" | "create">("create")
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            teamName: "",
        },
        mode: "onBlur",
    });

    const onSubmit = async (data: FormValues) => {
        const payload: { teamName: string } = {
            teamName: data.teamName
        };
        if (activeTab == "create") {
            // create teeam
        } else {
            // join team
        }
        console.log(payload)
        reset()

        //   registerForEvent(
        //     { data: payload },
        //     {
        //       onSuccess: () => {
        //         reset();
        //         setTimeout(() => {
        //           router.push("/event");
        //         }, 2000);
        //       },
        //     }
        //   );
    };
    return <div className="bg-[url('/assets/events/hero_bg.jpg')] bg-cover bg-center w-full md:w-[65vw] h-full pt-16 space-y-12" >
        <section className="w-1/2 lg:w-1/3 mx-auto flex items-center justify-center gap-3">
            <div className="w-full md:max-w-md">
                <Image
                    src="/assets/events/buildathon.png"
                    alt="Buildathon Hero"
                    width={240}
                    height={135}
                    className="object-contain"
                />
            </div>
            <p
                className="text-4xl lg:text-6xl text-[#008b37] font-extrabold relative inline-block"
                style={{
                    textShadow:
                        "-4px 4px 0 #014736, -8px 8px 0 #014736, 0px 2px 12px rgba(0,0,0,0.25)",
                }}
            >
                Teams
            </p>
        </section>
        <section className="w-10/12 h-[43vh] lg:h-[30vh] mx-auto bg-white outline-5 outline-black p-6 lg:p-10 flex flex-col items-center justify">
            <div className="hidden lg:flex w-10/12 flex-col lg:flex-row items-center justify-center gap-10 mx-auto">
                <StackGridButton
                    text="Create Team"
                    variant="navigation"
                    bgColor={activeTab == "create" ? "linear-gradient(180deg, #02641C 0%, #02641C 100%)" : "#E0E0E0"}
                    borderColor="#024539"
                    size="large"
                    shadowOffset={{ x: -3, y: 4 }}
                    hasArrow
                    onClick={() => setActiveTab("create")}
                    arrowIcon={<UserPlus2Icon className={cn({ "text-[#E0E0E0]": activeTab == "join" })} />}
                />
                <StackGridButton
                    text="Join Team"
                    variant="navigation"
                    bgColor={activeTab == "create" ? "#E0E0E0" : "#FFB636"}
                    borderColor="#024539"
                    size="large"
                    shadowOffset={{ x: -3, y: 4 }}
                    hasArrow
                    onClick={() => setActiveTab("join")}
                    arrowIcon={<UsersRoundIcon className={cn({ "text-[#E0E0E0]": activeTab == "create" })} />}
                />
            </div>
            
            <div className="flex lg:hidden w-full flex-col items-center justify-center gap-6 mx-auto">
                <StackGridButton
                    text="Create Team"
                    variant="navigation"
                    bgColor={activeTab == "create" ? "linear-gradient(180deg, #02641C 0%, #02641C 100%)" : "#E0E0E0"}
                    borderColor="#024539"
                    size="small"
                    shadowOffset={{ x: -2, y: 2 }}
                    hasArrow
                    onClick={() => setActiveTab("create")}
                    arrowIcon={<UserPlus2Icon className={cn({ "text-[#E0E0E0]": activeTab == "join" })} />}
                />
                <StackGridButton
                    text="Join Team"
                    variant="navigation"
                    bgColor={activeTab == "create" ? "#E0E0E0" : "#FFB636"}
                    borderColor="#024539"
                    size="small"
                    shadowOffset={{ x: -2, y: 2 }}
                    hasArrow
                    onClick={() => setActiveTab("join")}
                    arrowIcon={<UsersRoundIcon className={cn({ "text-[#E0E0E0]": activeTab == "create" })} />}
                />
            </div>
            <div className="py-2 lg:py-5 sm:p-8 relative w-full md:w-10/12 mt-5 lg:mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex items-start flex-col border-3 border-[#02270C] py-3 px-2">
                        <div className="flex items-center justify-start w-full gap-3">
                            <UsersRoundIcon className="text-[#7A7A7A] size-6 lg:size-8" />
                        
                        <input
                            {...register("teamName")}
                            placeholder={activeTab == "create" ? "Enter your team name" : "Enter your team code"}
                            className="focus:outline-none font-medium text-black h-6 lg:h-12 text-md lg:text-2xl w-full"
                        />
                        </div>
                        {errors.teamName && (
                            <p className="text-sm text-red-600 mt-1">
                                {errors.teamName.message}
                            </p>
                        )}
                    </div>
                </form>
            </div>
            <div className="flex justify-center w-full md:w-xs mt-8 md:mt-1">
                <StackGridButton
                    text={activeTab == "create" ? "Create Team" : "Join Team"}
                    variant="navigation"
                    bgColor={activeTab == "create" ? "linear-gradient(180deg, #02641C 0%, #02641C 100%)" : "#FFB636"}
                    borderColor="#024539"
                    size="large"
                    shadowOffset={{ x: -3, y: 4 }}
                    hasArrow
                    onClick={() => setActiveTab("create")}
                />
            </div>
        </section>
    </div>
}