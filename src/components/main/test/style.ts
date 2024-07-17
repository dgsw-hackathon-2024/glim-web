import { pallete } from "src/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  aspect-ratio: 1/1.9;
  display: flex;
  position: relative;

  background: #1c1d28;
  box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.2);

  margin: 0 auto;
`;

export const Main = styled.div`
  width: 100%;
  height: 85%;

  display: flex;
  flex-direction: column;

  align-self: flex-end;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;

  gap: 20px;
`;

export const Backward = styled.img`
  margin: 0;
  position: absolute;
  top: 100px;
  left: 50px;
  cursor: pointer;
`;

export const ProgressBarWrap = styled.div`
  width: 80%;
  height: 7%;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 10px;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
  }

  h1 {
    font-size: "Pretendard";
    font-weight: 500;
    font-size: 1rem;
    color: white;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  border-radius: 15px;
  background: #3e404a;

  span {
    width: 25%;
    height: 14px;

    border-radius: 15px;
    background-color: #6cf3c3;

    position: absolute;
    left: 0%;
  }
`;

export const PageTitle = styled.h1`
  font-family: "Pretendard", sans-serif;
  color: ${pallete.colors.white};
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-self: flex-start;
  padding-left: 50px;
  line-height: 130%;
`;

export const ButtonWrap = styled.div`
  width: 80%;
  height: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;

  gap: 20px;
`;

export const Button = styled.button`
  height: 60px;
  width: 100%;
  background-color: #6cf3c3;
  border-radius: 13px;
  border: none;
  outline: none;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: "Pretendard", sans-serif;
  bottom: 55px;
  color: #1c1d28;
  cursor: pointer;
  &:active {
    background-color: #2ed197;
  }
`;
