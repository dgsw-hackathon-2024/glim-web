import { create } from "zustand";

interface TabStateStore {
  tabState: "AI" | "COMMITTEE" | "REPORT";
  storeTabState: (tabState: "AI" | "COMMITTEE" | "REPORT") => void;
}

export const tabStateStore = create<TabStateStore>((set) => ({
  tabState: "AI",
  storeTabState: (tabState: "AI" | "COMMITTEE" | "REPORT") =>set(() => ({ tabState })),
}));
