import React from "react";
import * as S from "./style";
import SandTimer from "src/assets/gradient-glassmorphism-elements 2.svg";
import { useLocation, useNavigate } from "react-router-dom";

const MainPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <S.Container>
      <img src={SandTimer} />
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <S.PageTitle>현재 정부 정책 인지도 테스트</S.PageTitle>
        <S.PageTitle>나는 얼마나 알고있을까?</S.PageTitle>
      </div>
      <S.Button>테스트 하러 가기</S.Button>
      <S.PageButtonWrap $path={pathname === "/test" ? "true" : "false"}>
        <span></span>
        <span onClick={() => navigate("/service")}></span>
      </S.PageButtonWrap>
    </S.Container>
  );
};

export default MainPage;
