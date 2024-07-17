import Header from "src/components/common/header";
import * as S from "./style";

const CommitteeWrite = () => {
  return (
    <S.Container>
      <Header />
      <S.View>
        <S.TabBarWrap>
          <S.Tab>Ai 정책 분석</S.Tab>
          <S.Tab style={{ background: "#6CF3C3" }}>국민청원</S.Tab>
          <S.Tab>안심신고</S.Tab>
        </S.TabBarWrap>
        <S.PageWordWrap>
          <S.PageTitle>국민청원 게시 및 동의</S.PageTitle>
          <S.PageDescription>
            일정 이상의 인원이 모이면
            <br />
            익명으로 청원을 게시할 수 있어요.
          </S.PageDescription>
        </S.PageWordWrap>
        <S.DetailWrap>
          
        </S.DetailWrap>
      </S.View>
    </S.Container>
  );
};

export default CommitteeWrite;
