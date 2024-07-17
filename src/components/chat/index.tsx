import * as S from "./style";
import ChatBotButton from "src/assets/chatbotButon.svg";
import ChatBoImg from "src/assets/ChatBotRoBot.svg";
import Send from "src/assets/sendImg.svg";
import useChat from "src/hooks/chat/useChat";
import SendLoading from 'src/assets/sendLoading.gif';

const ChatBot = () => {
  const { ...chat } = useChat();
  return (
    <S.Container>
      <S.Main>
        <S.ChatWrap>
          <S.ChatBot src={ChatBoImg} />
          {chat.isSuccess === true &&
            chat.chattingList.map((item) => (
              <>
                <S.ChatMessage>
                  <div style={{ padding: "20px", color: "white" }}>
                    {item.ai}
                  </div>
                </S.ChatMessage>
                <S.UserMessage>
                  <div style={{ padding: "20px" }}>{item.user}</div>
                </S.UserMessage>
              </>
            ))}
          <S.ChatMessage
            style={{ width: "70%", padding: "10px", boxSizing: "border-box" }}
          >
            변호사 대신 Ai 챗봇 럭스(Lux)에게
            <br /> 법률 관련 질문을 해보세요!
            <br /> --- <br />
            💬 자주 묻는 질문
            <br />
            1. 소송 준비 기간은 며칠 걸리나요? <br />
            2. 소송 전 고려할 합의나 조정 절차가 있나요? <br />
            3. 소송 예상 비용은 얼마인가요?
          </S.ChatMessage>
          <S.ChatMessage style={{ padding: "10px", boxSizing: "border-box" }}>
            안녕하세요, 무엇을 도와드릴까요?
          </S.ChatMessage>
        </S.ChatWrap>
        <S.SendWrap>
          <S.MessageInput
            value={chat.chat}
            onChange={chat.handleUserChat}
            placeholder="질문을 입력해주세요!"
          />
          {chat.isLoading ? (
            <img src={SendLoading}/>
          ) : (
            <img
              src={Send}
              alt=""
              onClick={chat.sendChat}
              style={{ cursor: "pointer" }}
            />
          )}
        </S.SendWrap>
      </S.Main>
      <S.ChatBotButton src={ChatBotButton} />
    </S.Container>
  );
};

export default ChatBot;
