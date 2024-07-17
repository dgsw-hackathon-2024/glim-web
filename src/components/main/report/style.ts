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
  width: 45%;
  height: 35%;

  border-radius: 15px;

  background: #d9d9d9;
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
