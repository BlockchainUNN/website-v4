"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { UsersRoundIcon, LogOut } from "lucide-react";
import StackGridButton from "@/components/event/stack-grid-button";
import { format } from "date-fns";
import { useGetTeam, useLeaveTeam } from "@/hooks/crud/useteams";
import { useAuthStore } from "@/hooks/store/useHackathonState";
import { TeamMember } from "@/types/teams.types";

export default function TeamDetails() {
  const router = useRouter();
  const { data: teamData, isLoading, error } = useGetTeam();
  const { mutate: leaveTeam, isPending: isLeaving } = useLeaveTeam();
  const user = useAuthStore((state) => state.getUser());
  const team = teamData?.data;

  const handleLeaveTeam = () => {
    leaveTeam(undefined, {
      onSuccess: () => {
        setTimeout(() => {
          router.push("/event");
        }, 2000);
      },
    });
  };

  if (isLoading) {
    return (
      <div className="bg-[url('/assets/events/hero_bg.jpg')] bg-cover bg-center w-full h-screen flex items-center justify-center">
        <p className="text-2xl text-white">Loading team details...</p>
      </div>
    );
  }

  if (error || !team) {
    return (
      <div className="bg-[url('/assets/events/hero_bg.jpg')] bg-cover bg-center w-full h-screen flex items-center justify-center">
        <p className="text-2xl text-red-600">
          {error?.message || "No team found"}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[url('/assets/events/hero_bg.jpg')] bg-cover bg-center w-full md:w-[65vw] h-full pt-16 pb-16 space-y-12">
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
          Team Details
        </p>
      </section>
      <section className="w-10/12 h-fit mx-auto bg-white outline-5 outline-black p-6 lg:p-10 flex flex-col items-center">
        <div className="w-full space-y-6">
          <div className="border-3 border-[#02270C] p-4 rounded-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#02270C] mb-4">
              {team.name}
            </h2>
            <div className="space-y-2">
              <p className="text-base lg:text-lg text-[#7A7A7A]">
                <span className="font-medium">Invite Code:</span>{" "}
                {team.inviteCode}
              </p>
              <p className="text-base lg:text-lg text-[#7A7A7A]">
                <span className="font-medium">Member Count:</span>{" "}
                {team.memberCount}
              </p>
              <p className="text-base lg:text-lg text-[#7A7A7A]">
                <span className="font-medium">Created At:</span>{" "}
                {team?.createdAt
                  ? format(new Date(team?.createdAt), "PPP")
                  : ""}
              </p>
              <p className="text-base lg:text-lg text-[#7A7A7A]">
                <span className="font-medium">Hackathon:</span>{" "}
                {team?.hackathon?.name}
              </p>
            </div>
          </div>

          <div className="border-3 border-[#02270C] p-4 rounded-xl">
            <h3 className="text-xl lg:text-2xl font-semibold text-[#02270C] mb-4">
              Team Members
            </h3>
            <div className="space-y-4">
              {team?.members?.map((member: TeamMember) => (
                <div
                  key={member.user.uid}
                  className="flex items-center gap-3 border-b border-[#7A7A7A] pb-2"
                >
                  <UsersRoundIcon className="text-[#7A7A7A] size-6" />
                  <div>
                    <p className="text-base font-medium">
                      {member.user.firstName} {member.user.lastName}{" "}
                      {member.isCreator && (
                        <span className="text-[#02641C] text-sm">
                          (Creator)
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-[#7A7A7A]">
                      {member.user.email}
                    </p>
                    <p className="text-sm text-[#7A7A7A]">
                      Role: {member.role}
                    </p>
                    {member.user.techSkills?.length > 0 && (
                      <p className="text-sm text-[#7A7A7A]">
                        Skills: {member.user.techSkills.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {user &&
            team?.members?.some(
              (m: { user: { uid: string } }) => m.user.uid === user.uid
            ) && (
              <div className="flex justify-center mt-8">
                <StackGridButton
                  text={isLeaving ? "Leaving..." : "Leave Team"}
                  variant="navigation"
                  bgColor="#FFB636"
                  borderColor="#024539"
                  size="large"
                  shadowOffset={{ x: -3, y: 4 }}
                  hasArrow
                  disabled={isLeaving}
                  onClick={handleLeaveTeam}
                  arrowIcon={<LogOut className="text-[#024539]" />}
                />
              </div>
            )}
        </div>
      </section>
    </div>
  );
}
