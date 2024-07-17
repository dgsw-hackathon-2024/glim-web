import ProgressBar from "src/components/common/progressbar";
import * as S from "../style";
import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "src/assets/backward.svg";
import useTest from "src/hooks/test/useTest";
import { testStore } from "src/store/testScore/testScoreStore";

const Test2 = () => {
  const navigate = useNavigate();

  const increaseCount = testStore((state) => state.IncreaseStroe);
  return (
    <S.Container>
      <S.Backward src={Back} onClick={() => navigate(-1)} />
      <S.Main>
        <ProgressBar width={40} page={2} />
        <S.PageTitle>
          나는 대한민국의 역대 대통령을
          <br />
          모두 알고있다.
        </S.PageTitle>
        <S.ButtonWrap>
          <S.Button
            onClick={() => {
              increaseCount(1);
              navigate("/test/3");
            }}
          >
            예
          </S.Button>
          <S.Button style={{ color: "#fff", background: "#3E404A" }} onClick={() => navigate("/test/3")}>
            아니오
          </S.Button>
        </S.ButtonWrap>
      </S.Main>
    </S.Container>
  );
};

export default Test2;
