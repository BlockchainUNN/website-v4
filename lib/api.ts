import { TokenPair } from "@/types/common.types";
import CryptoJS from "crypto-js";

const ACCESS_TOKEN = "BUNN_ACCESS_TOKEN";
const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "default-key";
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api/v3/";

// Token management utilities
export function setToken(token: TokenPair): void {
  if (typeof window !== "undefined") {
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(token),
      SECRET_KEY
    ).toString();
    localStorage.setItem(ACCESS_TOKEN, ciphertext);
  }
}

export function getToken(): TokenPair | null {
  if (typeof window === "undefined") return null;

  const toDecrypt = localStorage.getItem(ACCESS_TOKEN);
  if (toDecrypt) {
    try {
      return JSON.parse(
        CryptoJS.AES.decrypt(toDecrypt, SECRET_KEY).toString(CryptoJS.enc.Utf8)
      );
    } catch (error) {
      console.error("Error decrypting token:", error);
      return null;
    }
  }
  return null;
}

export function clearToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ACCESS_TOKEN);
  }
}

// Create fetch instance with base configuration
export async function apiClient(
  endpoint: string,
  options: RequestInit & { auth?: boolean } = {}
): Promise<Response> {
  const { auth = false, ...fetchOptions } = options;

  const url = `${API_BASE_URL}${endpoint}`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(fetchOptions.headers as Record<string, string>),
  };

  if (auth) {
    const token = getToken();
    if (!token?.access) {
      throw new Error("Please log in to continue");
    }
    headers["Authorization"] = `Bearer ${token.access}`;
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers,
  });

  // Handle token expiry
  if (response.status === 401 && auth) {
    clearToken();
    throw new Error("Session expired. Please login again.");
  }

  return response;
}

// API endpoints configuration
export const API_ROUTES = {
  events: {
    registration: "events/registeration/",
    attendee: "events/attendees/",
    attendeeCount: "/events/attendees/count/",
  },
  hackers: {
    create: "hackers/",
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
