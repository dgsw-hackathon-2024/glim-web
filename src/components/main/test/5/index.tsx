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
        <ProgressBar width={100} page={5} />
        <S.PageTitle>
          나는 국민 익명 신고 서비스
          <br />
          (국민 신문고, 청렴신문고)를 이용해 본 경험이 있다.
        </S.PageTitle>
        <S.ButtonWrap>
          <S.Button
            onClick={() => {
              increaseCount(1);
              navigate("/test/complete");
            }}
          >
            예
          </S.Button>
          <S.Button style={{ color: "#fff", background: "#3E404A" }} onClick={() => navigate("/test/complete")}>
            아니오
          </S.Button>
        </S.ButtonWrap>
      </S.Main>
    </S.Container>
  );
};

export default Test4;
