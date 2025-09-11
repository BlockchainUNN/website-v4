import { create } from "zustand";

interface TeamState {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  clearSelectedTag: () => void;
}

export const useTeamStore = create<TeamState>((set) => ({
  selectedTag: "",
  setSelectedTag: (tag: string) => set({ selectedTag: tag }),
  clearSelectedTag: () => set({ selectedTag: "" }),
}));
