import React from "react";
import * as S from "./style";
import ServiceZap from "src/assets/ServiceZap.svg";
import { useLocation } from "react-router-dom";

const Service = () => {
  const { pathname } = useLocation();

  return (
    <S.Container>
      <img src={ServiceZap} alt="서비스 로고" />
      <S.PageTitle>
        <span>LawBot</span>을 이용할 준비가 되셨나요?
      </S.PageTitle>
      <S.Button>서비스 시작하기</S.Button>
      <S.PageButtonWrap $path={"false"}>
        <span></span>
        <span></span>
      </S.PageButtonWrap>
    </S.Container>
  );
};

export default Service;
