import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  aspect-ratio: 1/1.9;
  margin: 0 auto;
  box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.2);
  background-color: #1c1d28;
  display: flex;
  justify-content: center;
`;

export const View = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  align-self:flex-end;
  background-color: #3e404a;
  border-radius: 30px 30px 0 0;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const TabBarWrap = styled.div`
  width: 90%;
  background-color:transparent;
  border-bottom: 1px solid #6cf3c3;
  height: 90px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
export const Tab = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: transparent;
  border-radius: 100px;
  font-family: "Pretendard-Regular", sans-serif;
`;

export const PageTitle = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  font-size:25px;
  font-weight:bolder;
  color: white;
`;
export const PageDescription = styled.p`
  font-family: "Pretendard-Regular", sans-serif;
  font-size: 18px;
  font-weight: 200;
  color: #a2a7ab;
`;