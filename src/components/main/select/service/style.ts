import styled, { css } from "styled-components";
import { pallete } from "src/styles/theme";

export const Container = styled.div`
  height: 100vh;
  aspect-ratio: 1/1.9;
  margin: 0 auto;
  box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.2);
  background-color: #1c1d28;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 20%;
    height: 30%;
  }
`;

export const Button = styled.button`
  height: 60px;
  width: 23.4%;
  background-color: #6cf3c3;
  border-radius: 13px;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-weight: 800;
  font-family: "Pretendard", sans-serif;
  position: absolute;
  bottom: 55px;
  color: #1c1d28;
  cursor: pointer;
  &:active {
    background-color: #2ed197;
  }
`;

export const PageTitle = styled.h1`
  font-family: "Pretendard", sans-serif;
  color: ${pallete.colors.white};
  font-size: 1.6rem;
  font-weight: 600;

  span {
    color: ${pallete.colors.green500};
  }
`;

export const PageButtonWrap = styled.div<{ $path: string }>`
  width: 10%;
  height: 5%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  position: absolute;
  bottom: 0px;

  background-color: transparent;

  span {
    ${({ $path }) =>
      $path === "false" &&
      css`
        &:nth-child(n + 1) {
          background: #6c6f72;
        }
        &:nth-child(n + 2) {
          background-color: #d7d7d7;
        }
      `}
    width: 13px;
    height: 13px;
    border-radius: 100%;
    background-color: white;
    cursor: pointer;
  }
`;
