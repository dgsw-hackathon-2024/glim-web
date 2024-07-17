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
    color: #fff;
    background: transparent;

    &:nth-child(1) {
      background: ${({ $isclicked }) => ($isclicked === "first" ? "#6CF3C3" : "transparent")};
    }
  }
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
  justify-content:flex-start;
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

export const DetailTitle = styled.div`
  width: 90%;
  font-size: 15px;
  margin-top: 50px;
  color: white;
  font-family: "Pretendard", sans-serif;
  background-color: transparent;
  margin-bottom: 10px;
`;

export const ReportWrap = styled.div`
  width: 90%;
  height: 70%;

  background: transparent;

  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;

`;

export const Reports = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 35px;
  overflow: scroll;

  background: transparent;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
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
  padding-top: 4%;

  margin-top: 15px;

  h1 {
    font-family: "Pretendard";
    color: #1c1d28;
    font-weight: 800;
    font-size: 25px;
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

export const ModalContainer = styled.div`
  height: 100vh;
  aspect-ratio: 1/1.9;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(12, 12, 12, 0.75);

  margin: 0 auto;
  z-index: 1;
`;

export const ModalWriteWrap = styled.div`
  position: absolute;

  top: 30%;
  left: 10%;

  width: 80%;
  height: 43%;

  background: #d9d9d9;

  border-radius: 15px;

  img {
    position: absolute;
    top: 83%;
    left: 66%;

    border-radius: 20px;

    cursor: pointer;
  }
`;

export const ModalPageTitle = styled.h1`
  font-family: "Pretendard";
  font-size: 1.3rem;
  font-weight: 800;
  color: #1c1d28;

  background: transparent;
  position: absolute;
  top: 5%;
  left: 5%;
`;

export const ModalTitleInput = styled.input`
  outline: none;
  font-family: "Pretendard";
  font-weight: 800;
  font-size: 1.3rem;

  color: #1c1d28;
  background-color: transparent;

  position: absolute;
  top: 15%;
  left: 5%;

  &::placeholder {
    color: #a2a7ab;
  }
`;

export const ModalContentInput = styled.textarea`
  resize: none;
  width: 90%;
  height: 50%;

  outline: none;

  background-color: transparent;

  position: absolute;
  top: 23%;
  left: 5%;

  color: #1c1d28;

  font-family: "Pretendard";
  font-weight: 800;
  font-size: 1.3rem;

  &::placeholder {
    color: #a2a7ab;
  }
`;
