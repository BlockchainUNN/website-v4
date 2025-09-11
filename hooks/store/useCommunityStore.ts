import { create } from "zustand";

interface CommunityState {
  currentEventIndex: number;
  setCurrentEventIndex: (index: number) => void;
  nextEvent: () => void;
  prevEvent: () => void;
}

export const useCommunityStore = create<CommunityState>((set, get) => ({
  currentEventIndex: 1,
  setCurrentEventIndex: (index: number) => set({ currentEventIndex: index }),
  nextEvent: () => {
    const { currentEventIndex } = get();
    // Assuming we have 5 events total from the data
    const maxIndex = 3; // length - 2 for carousel logic
    if (currentEventIndex < maxIndex) {
      set({ currentEventIndex: currentEventIndex + 1 });
    }
  },
  prevEvent: () => {
    const { currentEventIndex } = get();
    if (currentEventIndex > 0) {
      set({ currentEventIndex: currentEventIndex - 1 });
    }
  },
}));
