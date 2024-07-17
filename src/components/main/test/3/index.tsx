import React from "react";
import * as S from "../style";
import Back from "src/assets/backward.svg";
import { useNavigate } from "react-router-dom";

const Test3 = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Backward src={Back} onClick={() => navigate(-1)} />
      <S.Main>
        <S.ProgressBarWrap>
          <S.ProgressBar>
            <span style={{ width: "45%" }}></span>
          </S.ProgressBar>
          <div>
            <h1>Q. 현재 정부 정책 인지도 테스트</h1>
            <h1 style={{ color: "#6CF3C3" }}>3/5</h1>
          </div>
        </S.ProgressBarWrap>
        <S.PageTitle>
          나는 국민 청와대를
          <br />
          사용해 본 경험이 있다.
        </S.PageTitle>
        <S.ButtonWrap>
          <S.Button>예</S.Button>
          <S.Button style={{ color: "#fff", background: "#3E404A" }}>아니오</S.Button>
        </S.ButtonWrap>
      </S.Main>
    </S.Container>
  );
};

export default Test3;
