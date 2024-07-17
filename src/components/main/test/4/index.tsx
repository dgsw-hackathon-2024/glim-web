import ProgressBar from "src/components/common/progressbar";
import * as S from "../style";
import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "src/assets/backward.svg";
import useTest from "src/hooks/test/useTest";
import { testStore } from "src/store/testScore/testScoreStore";

const Test4 = () => {
  const navigate = useNavigate();
  const increaseCount = testStore((state) => state.IncreaseStroe);
  return (
    <S.Container>
      <S.Backward src={Back} onClick={() => navigate(-1)} />
      <S.Main>
        <ProgressBar width={80} page={4} />
        <S.PageTitle>
          나는 법정 사건이 총 몇 가지로
          <br />
          분류 되는지 알고 있다.
        </S.PageTitle>
        <S.ButtonWrap>
          <S.Button
            onClick={() => {
              increaseCount(1);
              navigate("/test/5");
            }}
          >
            예
          </S.Button>
          <S.Button style={{ color: "#fff", background: "#3E404A" }} onClick={() => navigate("/test/5")}>
            아니오
          </S.Button>
        </S.ButtonWrap>
      </S.Main>
    </S.Container>
  );
};

export default Test4;
