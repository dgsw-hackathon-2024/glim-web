import { create } from "zustand";

interface ChatBotStore {
  chatBotClick: boolean;
  storeChatBotClick: (chatbot: boolean) => void;
}

export const chatbotStore = create<ChatBotStore>((set) => ({
  chatBotClick: false,
  storeChatBotClick: (chatBotClick: boolean) => set(() => ({ chatBotClick })),
}));
