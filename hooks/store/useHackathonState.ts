"use client";

import { create } from "zustand";
import { Hacker } from "@/types/hacker.types";

interface HackathonState {
  // Event IDs
  blockathonId: string;
  hackathonId: string;
  setEventIds: (blockathonId: string, hackathonId: string) => void;

  // Current hacker
  currentHacker: Hacker | null;
  setCurrentHacker: (hacker: Hacker | null) => void;

  // Team state
  hasTeam: boolean;
  teamId: string | null;
  setTeamState: (hasTeam: boolean, teamId?: string | null) => void;

  // UI state
  isLoading: boolean;
  setLoading: (loading: boolean) => void;

  // Reset all state
  reset: () => void;
}

export const useHackathonState = create<HackathonState>((set) => ({
  // Event IDs
  blockathonId: "",
  hackathonId: "",
  setEventIds: (blockathonId, hackathonId) =>
    set({ blockathonId, hackathonId }),

  // Current hacker
  currentHacker: null,
  setCurrentHacker: (hacker) => set({ currentHacker: hacker }),

  // Team state
  hasTeam: false,
  teamId: null,
  setTeamState: (hasTeam, teamId = null) => set({ hasTeam, teamId }),

  // UI state
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),

  // Reset all state
  reset: () =>
    set({
      blockathonId: "",
      hackathonId: "",
      currentHacker: null,
      hasTeam: false,
      teamId: null,
      isLoading: false,
    }),
}));
