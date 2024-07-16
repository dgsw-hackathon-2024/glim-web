import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  aspect-ratio: 1/1.9;
  margin: 0 auto;
  box-shadow: 0px 0px 50px 30px gray;
  background-color: #1c1d28;
  position:relative;
  display:flex;
  justify-content:center;
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
  position: absolute;
  bottom: 55px;
  color:#1C1D28;
  cursor: pointer;
  &:active {
    background-color: #2ed197;
  }
`;

export const LoginLinkWrap = styled.div`
  width:100%;
  position:absolute;
  bottom:20px;
  color:white;
  text-align:center;
  font-weight:200;
`
export const LoginLink = styled(Link)`
  text-decoration: none;
  color: #6cf3c3;
  font-weight: bold;
  &:active {
    color: #2ed197;
  }
`;

export const PageTitle = styled.h1`
  width:80%;
  position:absolute;
  margin:0;
  color:#FFFFFF;
  top:200px;
`
export const PageDescription = styled.p`
  width:80%;
  margin: 0;
  position:absolute;
  top: 300px;
  font-weight: 200;
  color: #A6ABAF;
  font-size:15px;
`;

export const InputWrap = styled.div`
  width:80%;
  position:absolute;
  top:400px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 3px;
  outline: none;
  border: none;
  border-bottom: 2px solid #6cf3c3;
  background-color: transparent;
  color: #6cf3c3;
  font-size:20px;
  &::placeholder{
    color:#808080;
    font-weight:200;
  }
`;
export const WarnMsg = styled.div`
  width: 100%;
  height: 20px;
  color: #feea31;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Backward = styled.img`
  margin:0;
  position:absolute;
  top:50px;
  left:50px;
  cursor: pointer;
`