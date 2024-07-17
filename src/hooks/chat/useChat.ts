import axios from "axios";
import React, { useState } from "react";
import { ChatBotMutation } from "src/queries/chat/chat.query";
import CONFIG from "src/config/config.json";
import { ChatData } from "src/types/report/report.types";

const useChat = () => {
  const [chat, setChat] = useState<string>("");
  const [sendedChat, setSendedChat] = useState<string[]>([]);
  const [aiChat, setAiChat] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const chatMutation = ChatBotMutation();
  const [chattingList, setChattingList] = useState<ChatData[]>([]);

  const handleUserChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChat(e.target.value);
  };

  const sendChat = async () => {
    await axios
      .post(`${CONFIG.serverUrl}/ai/chatbot`, {
        chat,
      })
      .then((res) => {
        setIsSuccess(true);
        let data = {
          user: chat,
          ai: res.data,
        };
        setChattingList((prev) => [...prev, data]);
      });
  };

  return {
    chat,
    aiChat,
    sendedChat,
    isSuccess,
    handleUserChat,
    sendChat,
    chattingList,
  };
};

export default useChat;
