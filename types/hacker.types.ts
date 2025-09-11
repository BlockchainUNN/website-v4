export interface HackerRegistrationRequest {
  email: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other";
  phoneNumber: string;
  telegramUsername?: string;
}

export interface HackerLoginRequest {
  email: string;
  password: string;
}

export interface Hacker {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  telegramUsername?: string;
  hackathonId: string;
  teamId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface HackerStats {
  hackerCount: number;
  totalHackers: number;
  teamsFormed: number;
}

export interface HackerAuth {
  hacker: Hacker;
  tokens: {
    access: string;
    refresh: string;
  };
}
