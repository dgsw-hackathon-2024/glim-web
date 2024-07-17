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
`;

export const WriteWrap = styled.div`
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

export const PageTitle = styled.h1`
  font-family: "Pretendard";
  font-size: 1.3rem;
  font-weight: 800;
  color: #1c1d28;

  background: transparent;
  position: absolute;
  top: 5%;
  left: 5%;
`;

export const TitleInput = styled.input`
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

export const ContentInput = styled.textarea`
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
