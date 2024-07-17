import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  aspect-ratio: 1/1.9;
  margin: 0 auto;
  box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.2);
  background-color: #1c1d28;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  height: 60px;
  width: 80%;
  background-color: #6cf3c3;
  border-radius: 13px;
  border: none;
  outline: none;
  font-size: 25px;
  font-weight: bolder;
  font-family: "Pretendard-Regular", sans-serif;
  position: absolute;
  bottom: 55px;
  color: #1c1d28;
  cursor: pointer;
  &:active {
    background-color: #2ed197;
  }
`;

export const LoginLinkWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 20px;
  color: white;
  text-align: center;
  font-weight: 200;
  font-family: "Pretendard-Regular", sans-serif;
`;
export const LoginLink = styled(Link)`
  text-decoration: none;
  color: #6cf3c3;
  font-weight: bold;
  font-family: "Pretendard-Regular", sans-serif;
  &:active {
    color: #2ed197;
  }
`;

export const PageTitle = styled.h1`
  width: 80%;
  position: absolute;
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  color: #ffffff;
  top: 200px;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 130%;
`;
export const PageDescription = styled.p`
  width: 80%;
  margin: 0;
  position: absolute;
  font-family: "Pretendard-Regular", sans-serif;
  top: 300px;
  font-weight: 200;
  color: #a6abaf;
  font-size: 15px;
`;

export const InputWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 3px;
  outline: none;
  border: none;
  border-bottom: 2px solid #6cf3c3;
  background-color: transparent;
  font-family: "Pretendard-Regular", sans-serif;
  color: #6cf3c3;
  font-size: 20px;
  &::placeholder {
    color: #808080;
    font-weight: 200;
  }
`;
export const WarnMsg = styled.div`
  width: 100%;
  height: 20px;
  color: #feea31;
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: "Pretendard-Regular", sans-serif;
`;

export const Backward = styled.img`
  margin: 0;
  position: absolute;
  top: 50px;
  left: 50px;
  cursor: pointer;
`;

export const LogoWrap = styled.div`
  width: 45%;
  position: absolute;
  top: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const LogoImage = styled.img`
  width: 70%;
`;
export const LogoName = styled.img`
  width: 100%;
`;
