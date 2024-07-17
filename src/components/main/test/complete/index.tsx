import React from "react";
import * as S from "../style";
import Back from "src/assets/backward.svg";
import { useNavigate } from "react-router-dom";
import TestCompleteIcon from "src/assets/TestCompleteICon.svg";
import { testStore } from "src/store/testScore/testScoreStore";

const CompleteTest = () => {
  const navigate = useNavigate();
  const score = testStore((state) => state.score);
  const description = [
    <div>
      관심이 부족한 당신! <br />
      <span style={{ color: "#6CF3C3" }}>LawBot</span>이 필요한 당신 :(
    </div>,
    <div>
      <span style={{ color: "#6CF3C3" }}>LawBot</span>을 통해 배울 준비가 된 당신! <br />
      이제 시작해 볼까요?
    </div>,
    <div>
      <span style={{ color: "#6CF3C3" }}>LawBot</span>을 활용할 수 있는 당신! <br />
      이제 시작해볼까요?
    </div>,
  ];
  return (
    <S.Container>
      <S.Backward src={Back} onClick={() => navigate(-1)} />
      <S.Main>
        <S.ProgressBarWrap>
          <S.ProgressBar>
            <span style={{ width: "100%" }}></span>
          </S.ProgressBar>
          <div>
            <h1>Q. 현재 정부 정책 인지도 테스트</h1>
          </div>
        </S.ProgressBarWrap>
        <S.CompleteWrap>
          <img src={TestCompleteIcon} />
          <h1>
            <span>{score}</span> / 5
          </h1>
          {score > 3 ? description[2] : score === 3 ? description[1] : description[0]}
        </S.CompleteWrap>
        <S.ButtonWrap>
          <S.Button style={{ color: "#fff", background: "#3E404A" }} onClick={() => navigate("/choice/service")}>
            닫기
          </S.Button>
        </S.ButtonWrap>
      </S.Main>
    </S.Container>
  );
};

export default CompleteTest;
