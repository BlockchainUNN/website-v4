// Updated src/store/useHackathonState.ts (add updateUser)

import { TeamDetails } from "@/types/teams.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  uid: string;
  role: string;
  registeredAt: string;
  team: null | TeamDetails; // Adjust type as needed based on potential team structure
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  setTime: number | null;
  setAuth: (
    tokens: { accessToken: string; refreshToken: string },
    user: User
  ) => void;
  logout: () => void;
  getAccessToken: () => string | null;
  getUser: () => User | null;
  updateUser: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      setTime: null,
      setAuth: (tokens, user) =>
        set({
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
          user,
          setTime: Date.now(),
        }),
      logout: () =>
        set({
          accessToken: null,
          refreshToken: null,
          user: null,
          setTime: null,
        }),
      getAccessToken: () => {
        const { accessToken, setTime, logout } = get();
        if (!accessToken || !setTime) {
          return null;
        }
        if (Date.now() - setTime > 24 * 60 * 60 * 1000) {
          logout();
          return null;
        }
        return accessToken;
      },
      getUser: () => {
        const { user, getAccessToken } = get();
        if (getAccessToken() === null) {
          return null;
        }
        return user;
      },
      updateUser: (updates: Partial<User>) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
    }),
    {
      name: "auth-storage",
    }
  )
);
