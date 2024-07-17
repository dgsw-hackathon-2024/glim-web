import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  aspect-ratio: 1/1.9;
  margin: 0 auto;
  box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.2);
  background-color: #1c1d28;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const View = styled.div`
  width: 100%;
  height: 92%;
  align-self: flex-end;
  background-color: #3e404a;
  border-radius: 30px 30px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageWordWrap = styled.div`
  width: 90%;
  background-color: transparent;
  margin: 80px 0 0 0;
`;

export const PageTitle = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-size: 25px;
  font-weight: bolder;
  color: white;
  background-color: transparent;
  margin: 10px 0;
`;
export const PageDescription = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: 18px;
  font-weight: 200;
  color: #a2a7ab;
  background-color: transparent;
  line-height: 1.3;
`;

export const DetailWrap = styled.div`
  width: 90%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: transparent;

  height: 60%;
`;

export const DetailTitle = styled.div`
  width: 90%;
  font-size: 15px;
  margin-top: 50px;
  color: white;
  font-family: "Pretendard", sans-serif;
  background-color: transparent;
  margin-bottom: 10px;
`;

export const CommitteeBox = styled.div`
  width: 100%;
  height: 120px;
  background-color: #d9d9d9;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  cursor: pointer;
`;

export const CommitteeTitle = styled.p`
  font-weight: bolder;
  font-family: "Pretendard", sans-serif;
  background-color: transparent;
`;

export const CommitteeContent = styled.p`
  width: 90%;
  font-family: "Pretendard", sans-serif;
  background-color: transparent;
  font-weight: 100;
`;

export const CommitteeInfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  height: 30px;
`;
export const CommitteeInfo = styled.p`
  font-weight: 400;
  font-family: "Pretendard", sans-serif;
  background-color: transparent;
  display: flex;
  align-items: center;
`;
export const CommitteeLikeWrap = styled.div`
  font-weight: 400;
  font-family: "Pretendard", sans-serif;
  display: flex;
  align-items: center;
  background-color: transparent;
  & > img {
    height: 80%;
    background-color: transparent;
  }
`;
export const CommitteeViewShadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommitteeViewBox = styled.div`
  width: 90%;
  min-height: 185px;
  position: absolute;
  top: calc(50% - 92px);
  left: calc(5%);
  background-color: #d9d9d9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  box-sizing: border-box;
`;

export const WriteReportButton = styled.img`
  cursor: pointer;
  background: transparent;

  position: absolute;
  top: 91%;
  left: 50%;
`;

export const ChatBotButton = styled.img`
  cursor: pointer;
  background: transparent;

  position: absolute;
  left: 80%;
  top: 88%;
`;

export const UploadButton = styled.img`
  cursor: pointer;
  background: transparent;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const CommitteeWriteBox = styled.div`
  width: 100%;
  height: 400px;
  background: #d9d9d9;
  border-radius: 30px;
  margin-top: 70px;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
`;

export const CommitteeWriteTitle = styled.input`
  width: 100%;
  font-size: 20px;
  font-weight: bolder;
  font-family: "Pretendard", sans-serif;
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: 10px;
`;
export const CommitteeWriteContent = styled.textarea`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  font-family: "Pretendard", sans-serif;
  height: 250px;
  resize: none;
  background-color: transparent;
  outline: none;
`;
