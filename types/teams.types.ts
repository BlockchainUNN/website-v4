export interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phoneNumber: string;
  telegramUsername?: string;
  joinedAt: string;
}

export interface Team {
  id: string;
  name: string;
  inviteCode: string;
  hackathonId: string;
  leaderId: string;
  members: TeamMember[];
  maxMembers: number;
  createdAt: string;
  updatedAt: string;
}

export interface TeamCreateRequest {
  name: string;
}

export interface TeamJoinRequest {
  inviteCode: string;
}

export interface ProjectSubmission {
  id: string;
  teamId: string;
  projectName: string;
  description: string;
  category: string;
  githubRepo: string;
  liveDemo?: string;
  videoDemo?: string;
  technologies: string[];
  teamContribution: string;
  submittedAt: string;
  submittedBy: string;
}
