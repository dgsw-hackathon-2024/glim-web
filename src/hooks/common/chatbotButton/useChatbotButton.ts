import { useState } from "react";

const useChatbotButton = () => {
  const [chatbotClick, setChatbotClick] = useState<boolean>(false);

  const handleChatbotClick = () => {
    setChatbotClick((prev) => !prev);
  };

  return {
    chatbotClick,
    handleChatbotClick,
  };
};

export default useChatbotButton;
