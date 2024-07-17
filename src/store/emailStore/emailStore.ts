import { create } from "zustand";

interface EmailStore {
    email:string;
    storeEmail:(eamil:string) => void;
}

export const emailStore = create<EmailStore>((set)=>({
    email:"",
    storeEmail: (email:string) => set(()=>({email})),
})) 