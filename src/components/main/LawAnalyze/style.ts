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
  font-family: "Pretendard-Regular", sans-serif;
  font-size: 25px;
  font-weight: bolder;
  color: white;
  background-color: transparent;
  margin: 10px 0;
`;
export const PageDescription = styled.p`
  font-family: "Pretendard-Regular", sans-serif;
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
`;

export const DetailTitle = styled.div`
  width: 90%;
  font-size: 15px;
  margin-top: 50px;
  color: white;
  font-family: "Pretendard-Regular", sans-serif;
  background-color: transparent;
  margin-bottom: 10px;
`;

export const QuestionInputWrap = styled.div`
  width: 100%;
  height: 65px;
  border: 1px solid #a2a7ab;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 10px;
`;
export const QuestionInput = styled.input`
  height: 100%;
  width: 90%;
  font-size: 16px;
  color: white;
  border: none;
  outline: none;
  background-color: transparent;
`;
export const UploadButton = styled.img`
  height: 90%;
  background-color: transparent;
`;

export const AnserWrap = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 30px;
  background-color: transparent;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 10px;
  box-sizing: border-box;
  color: white;

  li,
  h4,
  p,
  strong {
    color: white;
    margin-bottom: 3%;
  }

  h4 {
    font-weight: 600;
    font-size: 23px;
  }

  p {
    font-weight: 500;
    font-size: 21px;
  }

  li {
    font-weight: 400;
    font-size: 19px;
  }
`;
