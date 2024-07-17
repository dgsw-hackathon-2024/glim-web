import React, { useState } from "react";
import * as S from "./style";
import ChatBotButtonImg from "src/assets/chatbotButon.svg";
import { chatbotStore } from "src/store/chatbotStroe/chatbotStore";
const ChatBotButton = () => {
  const [chatbotClick, setChatbotClick] = useState<boolean>(false);
  const storeChatBotClick = chatbotStore((state) => state.storeChatBotClick);
  const handleChatbotClick = () => {
    setChatbotClick((prev) => !prev);
    storeChatBotClick(chatbotClick);
  };
  return (
    <>
      <S.ChatBotButton src={ChatBotButtonImg} onClick={handleChatbotClick} />
    </>
  );
};

export default ChatBotButton;
