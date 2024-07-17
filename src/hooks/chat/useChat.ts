import axios from "axios";
import React, { useState } from "react";
import { ChatBotMutation } from "src/queries/chat/chat.query";
import CONFIG from "src/config/config.json";

const useChat = () => {
  const [chat, setChat] = useState<string>("");
  const [sendedChat, setSendedChat] = useState<string[]>([]);
  const [aiChat, setAiChat] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const chatMutation = ChatBotMutation();

  const handleUserChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChat(e.target.value);
  };

  const sendChat = async () => {
    await axios
      .post(`${CONFIG.serverUrl}/ai/chatbot`, {
        chat,
      })
      .then((res) => {
        setSendedChat([chat]);
        setAiChat(res.data);
        setIsSuccess((prev) => !prev);
      });
  };

  return {
    chat,
    aiChat,
    sendedChat,
    isSuccess,
    handleUserChat,
    sendChat,
  };
};

export default useChat;
