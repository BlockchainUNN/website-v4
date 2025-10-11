import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api/v3/";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API endpoints configuration
export const API_ROUTES = {
  events: {
    registration: (id: string) => `events/${id}/register/`,
    attendee: "events/attendees/",
    attendeeCount: "/events/attendees/count/",
  },
  hackers: {
    create: (id: string) => `hackers/${id}/`,
    get: "hackers/",
    login: (id: string) => `hackers/login/${id}`,
    count: "/hackers/count/",
  },
  teams: {
    create: (id: string) => `hackathon/team/${id}`,
    join: (id: string) => `hackathon/team/join/${id}`,
    get: (id: string) => `hackathon/team/${id}`,
    leave: (id: string) => `hackathon/team/${id}`,
  },
  users: {
    getByEmail: "users/",
    create: "users/",
  },
} as const;
