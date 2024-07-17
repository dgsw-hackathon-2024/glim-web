import React from "react";
import * as S from "./style";
import ServiceZap from "src/assets/ServiceZap.svg";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <img src={ServiceZap} alt="서비스 로고" />
      <S.PageTitle>
        <span>LawBot</span>을 이용할 준비가 되셨나요?
      </S.PageTitle>

      <S.Button onClick={() => navigate("/law-analyze")}>서비스 시작하기</S.Button>
      <S.PageButtonWrap $path={"false"}>
        <span onClick={() => navigate("/choice/test")}></span>
        <span></span>
      </S.PageButtonWrap>
    </S.Container>
  );
};
export default Service;
