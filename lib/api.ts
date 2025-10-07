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
    login: "hackers/login/",
    count: "/hackers/count/",
  },
  teams: {
    create: "/hackathon/team/",
    get: "/hackathon/team/",
    leave: "/hackathon/team/",
    join: "/hackathon/team/join/",
  },
  users: {
    getByEmail: "users/",
    create: "users/",
  },
} as const;
