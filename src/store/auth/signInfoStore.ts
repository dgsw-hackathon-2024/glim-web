import { create } from "zustand";

interface SignInfoStore {
  email: string;
  setEmail: (email: string) => void;
}

export const signInfoStore = create<SignInfoStore>((set) => ({
  email:"",
  setEmail: (email: string) => set(() => ({ email })),
}));