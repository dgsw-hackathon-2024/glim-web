import * as S from './style'

const Committee = () => {
  return (
    <S.Container>
      <S.View>
        <S.TabBarWrap>
          <S.Tab>Ai 정책 분석</S.Tab>
          <S.Tab style={{background: '#6CF3C3'}}>국민청원</S.Tab>
          <S.Tab>안심신고</S.Tab>
        </S.TabBarWrap>
        
      </S.View>
    </S.Container>
  );
}

export default Committee