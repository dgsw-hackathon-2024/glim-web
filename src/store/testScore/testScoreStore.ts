import { create } from "zustand";

interface TestScore {
  score: number;
  setScoreStore: (state: number) => void;
  IncreaseStroe: (state: number) => void;
}

export const testStore = create<TestScore>((set) => ({
  score: 0,
  setScoreStore: (score: number) => set(() => ({ score })),
  IncreaseStroe: (sta: number) => set((state) => ({ score: state.score + sta })),
}));
