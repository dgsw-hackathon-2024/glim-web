import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  aspect-ratio: 1/1.9;
  display: flex;
  flex-direction: column;
  position: relative;

  background: #1c1d28;
  box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.2);

  margin: 0 auto;
`;

export const Main = styled.div`
  width: 100%;
  height: 92%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5%;
  justify-content: space-evenly;
  border-radius: 30px 30px 0px 0px;

  background: #3e404a;
`;

export const Navbar = styled.div<{ $isclicked: string }>`
  width: 90%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-bottom: 1px solid #6cf3c3;

  background: transparent;

  span {
    width: 25%;
    height: 50%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Pretendard";
    font-weight: 600;
    font-size: 1rem;
    padding-top: 1%;
    color: #fff;
    background: transparent;

    &:nth-child(1) {
      background: ${({ $isclicked }) => ($isclicked === "first" ? "#6CF3C3" : "transparent")};
    }
  }
`;

export const ReportMainWrap = styled.div`
  width: 100%;
  height: 85%;

  background: transparent;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
`;

export const PageDescriptionWrap = styled.div`
  width: 60%;
  height: 10%;

  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-left: 5%;

  background: transparent;

  gap: 8px;
`;

export const PageTitle = styled.h1`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 1.4rem;
  color: #fff;

  background: transparent;
`;

export const PageSubTitle = styled.h1`
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 1.1rem;
  color: #a2a7ab;

  background: transparent;

  line-height: 120%;
`;

export const ReportWrap = styled.div`
  width: 90%;
  height: 70%;

  background: transparent;

  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;

  span {
    font-family: "Pretendard";
    color: #fff;
    font-weight: 600;
    font-size: 1.1rem;

    background: transparent;
  }
`;

export const Reports = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 35px;
  overflow: scroll;

  background: transparent;
`;

export const Report = styled.div`
  width: 43%;
  height: 33%;

  border-radius: 15px;

  background: #d9d9d9;

  display: flex;
  flex-direction: column;
  gap: 15px;

  padding-left: 2%;
  padding-top: 2%;

  h1 {
    font-family: "Pretendard";
    color: #1c1d28;
    font-weight: 800;
    font-size: 18px;
  }
  span {
    font-family: "Pretendard";
    color: #1c1d28;
    font-weight: 600;
    font-size: 16px;
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
  font-family: "Pretendard-Regular", sans-serif;
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: 10px;
`;

export const CommitteeWriteContent = styled.textarea`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  font-family: "Pretendard-Regular", sans-serif;
  height: 250px;
  resize: none;
  background-color: transparent;
  outline: none;
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
  height: 20px;
`;
export const CommitteeInfo = styled.p`
  font-weight: 400;
  font-family: "Pretendard", sans-serif;
  background-color: transparent;
`;
