import ProgressBar from "src/components/common/progressbar";
import * as S from "../style";
import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "src/assets/backward.svg";
import useTest from "src/hooks/test/useTest";
import { testStore } from "src/store/testScore/testScoreStore";

const Test3 = () => {
  const navigate = useNavigate();
  const increaseCount = testStore((state) => state.IncreaseStroe);
  return (
    <S.Container>
      <S.Backward src={Back} onClick={() => navigate(-1)} />
      <S.Main>
        <ProgressBar width={55} page={3} />
        <S.PageTitle>
          나는 국민 청와대를
          <br />
          사용해 본 경험이 있다.
        </S.PageTitle>
        <S.ButtonWrap>
          <S.Button
            onClick={() => {
              increaseCount(1);
              navigate("/test/4");
            }}
          >
            예
          </S.Button>
          <S.Button style={{ color: "#fff", background: "#3E404A" }} onClick={() => navigate("/test/4")}>
            아니오
          </S.Button>
        </S.ButtonWrap>
      </S.Main>
    </S.Container>
  );
};

export default Test3;
