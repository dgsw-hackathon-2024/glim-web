import React from "react";
import * as S from "../style";
import Back from "src/assets/backward.svg";
import { useNavigate } from "react-router-dom";
import ProgressBar from "src/components/common/progressbar";

const Test4 = () => {
  const navigate = useNavigate();
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
          <S.Button>예</S.Button>
          <S.Button style={{ color: "#fff", background: "#3E404A" }}>아니오</S.Button>
        </S.ButtonWrap>
      </S.Main>
    </S.Container>
  );
};

export default Test4;
