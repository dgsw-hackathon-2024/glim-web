import React, { useState } from "react";
import * as S from "./style";
import ChatBotButtonImg from "src/assets/chatbotButon.svg";
import useChatbotButton from "src/hooks/common/chatbotButton/useChatbotButton";
import ChatBot from "src/components/chat";
const ChatBotButton = () => {
  const { chatbotClick, handleChatbotClick } = useChatbotButton();
  return (
    <>
      <S.ChatBotButton src={ChatBotButtonImg} onClick={handleChatbotClick} />
      {chatbotClick && <ChatBot />}   
    </>
  );
};

export default ChatBotButton;
