// src/types/teams.types.ts

export interface CreateTeamForm {
  name: string;
}

export interface JoinTeamForm {
  inviteCode: string;
}

export interface HackathonBasic {
  id: number;
  name: string;
  unique_name: string;
}

export interface TeamBasic {
  id: number;
  name: string;
  inviteCode: string;
  memberCount: number;
  createdAt: string;
}

export interface HackerTeamInfo {
  role: string;
  registeredAt: string;
  hackathon: HackathonBasic;
  team: TeamBasic;
}

export interface TeamMember {
  role: string;
  registeredAt: string;
  isCreator: boolean;
  user: {
    uid: string;
    firstName: string;
    lastName: string;
    email: string;
    subCommunity: string[];
    techSkills: string[];
    phoneNumber: string | null;
    gender: string | null;
  };
}

export interface TeamDetails {
  id: number;
  name: string;
  inviteCode: string;
  memberCount: number;
  createdAt: string;
  hackathon: HackathonBasic;
  members: TeamMember[];
}
