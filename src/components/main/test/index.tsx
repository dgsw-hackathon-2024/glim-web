import * as S from "./style";
import React from "react";
import Back from "src/assets/backward.svg";

const Test = () => {
  return (
    <S.Container>
      <S.Backward src={Back} />
      <S.ProgressBarWrap>
        <S.ProgressBar>
          <span></span>
        </S.ProgressBar>
        <div>
          <h1>Q. 현재 정부 정책 인지도 테스트</h1>
          <h1 style={{ color: "#6CF3C3" }}>1/5</h1>
        </div>
      </S.ProgressBarWrap>
      <S.PageTitle>
        나는 현 정권의 선거공약을 <br /> 모두 알고있다.
      </S.PageTitle>
      <S.ButtonWrap>
        <S.Button>예</S.Button>
        <S.Button style={{ background: "#3E404A", bottom: "40px" }}>아니오</S.Button>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default Test;
