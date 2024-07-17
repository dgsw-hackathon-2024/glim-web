import React from "react";
import * as S from "../style";
import Back from "src/assets/backward.svg";
import { useNavigate } from "react-router-dom";
import ProgressBar from "src/components/common/progressbar";

const Test2 = () => {
  const navigate = useNavigate();
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
          <S.Button>예</S.Button>
          <S.Button style={{ color: "#fff", background: "#3E404A" }}>아니오</S.Button>
        </S.ButtonWrap>
      </S.Main>
    </S.Container>
  );
};

export default Test2;
