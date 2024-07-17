import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  aspect-ratio: 1/1.9;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(12, 12, 12, 0.75);

  margin: 0 auto;
  z-index: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  width: 90%;
  height: 70%;

  background: #313234;

  border-radius: 20px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Time = styled.p`
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 500;
  color: #a4a9ad;

  background: transparent;

  position: absolute;
  top: 35%;
`;

export const ChatBotButton = styled.img`
  cursor: pointer;
  background: transparent;

  position: absolute;
  left: 80%;
  top: 88%;
  z-index: 1;
`;

export const ChatWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  margin-top: 30%;

  padding-bottom: 5%;

  background: transparent;

  overflow-y: scroll;
`;

export const ChatMessage = styled.div`
  background: #6c6f72;
  border-radius: 10px 10px 10px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 70%;

  line-height: 130%;

  color: #fff;
`;

export const UserMessage = styled.div`
  background: #6c6f72;
  border-radius: 10px 10px 0px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 10%;
  width: 70%;

  line-height: 130%;

  div {
    color: #fff;
  }
`;

export const ChatBot = styled.img`
  position: absolute;
  top: 60%;
  left: 5%;

  background: transparent;
`;

export const SendWrap = styled.div`
  width: 100%;
  height: 10%;

  margin-top: 5%;

  border-radius: 0px 0px 20px 20px;

  background: transparent;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    background-color: transparent;

    width: 45px;
    height: 45px;
  }
`;

export const MessageInput = styled.input`
  width: 75%;
  height: 70%;

  background-color: rgba(166, 171, 175, 0.5);

  border-radius: 13px;

  padding-left: 2%;

  outline: none;

  color: #fff;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 500;
`;
