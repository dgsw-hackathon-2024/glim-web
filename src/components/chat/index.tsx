import React from "react";
import * as S from "./style";
import ChatBotButton from "src/assets/chatbotButon.svg";
import ChatBoImg from "src/assets/ChatBotRoBot.svg";
import Send from "src/assets/sendImg.svg";
import useChat from "src/hooks/chat/useChat";

const ChatBot = () => {
  const { ...chat } = useChat();
  return (
    <S.Container>
      <S.Main>
        <S.Time>8:12 PM</S.Time>
        <S.ChatWrap>
          <S.ChatBot src={ChatBoImg} />
          <S.ChatMessage>안녕하세요, 무엇을 도와드릴까요?</S.ChatMessage>
          <S.ChatMessage style={{ width: "73%", height: "50%" }}>
            변호사 대신 Ai 챗봇 럭스(Lux)에게
            <br /> 법률 관련 질문을 해보세요!
            <br /> --- <br />
            💬 자주 묻는 질문
            <br />
            1. 소송 준비 기간은 며칠 걸리나요? <br />
            2. 소송 전 고려할 합의나 조정 절차가 있나요? <br />
            3. 소송 예상 비용은 얼마인가요?
          </S.ChatMessage>
          {chat.isSuccess === true ? (
            <>
              <S.UserMessage>{chat.sendedChat}</S.UserMessage>
              <S.ChatMessage>{chat.aiChat}</S.ChatMessage>
            </>
          ) : (
            <></>
          )}
        </S.ChatWrap>
        <S.SendWrap>
          <S.MessageInput value={chat.chat} onChange={chat.handleUserChat} />
          <img src={Send} alt="" onClick={chat.sendChat} />
        </S.SendWrap>
      </S.Main>
      <S.ChatBotButton src={ChatBotButton} />
    </S.Container>
  );
};

export default ChatBot;
