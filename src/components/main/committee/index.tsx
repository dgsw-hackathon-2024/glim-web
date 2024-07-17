import Header from 'src/components/common/header';
import * as S from './style';
import Thumbup from 'src/assets/thumbup.svg';
import { useState } from 'react';

interface Dummy {
  id:number;
  title:string;
  content:string;
  createdAt:string;
  likeCount:number;
}

const Committee = () => {

  const [currentView, setCurrentView] = useState<Dummy>({
    id:0,
    title:"",
    content:"",
    createdAt:"",
    likeCount:0,
  })


  const dummy = [
    {
      id:2,
      title: "아동 성범죄 공소시효 폐지 요청",
      content:
        "아동 성범죄 피해자는 트라우마로 인해 피해 사실을 즉각적으로 인지하거나 신고하기 어려운 경우가 \n많습니다. 그렇기에 아동 성범죄의 공소시효를 폐지해\n언제라도 피해자가 신고할 수 있도록 해야 합니다.",
      createdAt: "2024-07-17",
      likeCount: 17,
    },
    {
      id:1,
      title: "발달장애 장애인 가정 지원 증진 요청",
      content:
        "발달장애인을 돌보는 과정에서 가족은 심리적, 정서적으로도 큰 부담을 \n겪습니다. 지원이 부족할 경우 가족 구성원들은 번아웃을 겪거나 ....",
      createdAt: "2024-07-15",
      likeCount: 18,
    },
  ];

  const viewCommittee = (content:Dummy) => {
    setCurrentView(content);
  }


  const closeView = (e:any) => {
    if(e.target.className.includes('shadow')) {
      setCurrentView({
        id: 0,
        title: "",
        content: "",
        createdAt: "",
        likeCount: 0,
      });
    }
  }

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
        <S.DetailTitle>
          진행중인 청원 총{" "}
          <span style={{ color: "#6CF3C3", background: "transparent" }}>
            2건
          </span>
        </S.DetailTitle>
        <S.DetailWrap>
          {dummy.map((item) => (
            <S.CommitteeBox
              key={item.id}
              onClick={() => {
                viewCommittee({
                  id: item.id,
                  title: item.title,
                  content: item.content,
                  createdAt: item.createdAt,
                  likeCount: item.likeCount,
                });
              }}
            >
              <S.CommitteeTitle style={{ fontSize: "16px" }}>
                {item.title}
              </S.CommitteeTitle>
              <S.CommitteeContent style={{ fontSize: "13px" }}>
                {item.content.substring(0, 50) + "..."}
              </S.CommitteeContent>
              <S.CommitteeInfoWrap>
                <S.CommitteeInfo style={{ fontSize: "12px" }}>
                  {item.createdAt}
                </S.CommitteeInfo>
                <S.CommitteeLikeWrap>
                  <img src={Thumbup} />
                  <S.CommitteeInfo style={{ fontSize: "12px" }}>
                    {item.likeCount}
                  </S.CommitteeInfo>
                </S.CommitteeLikeWrap>
              </S.CommitteeInfoWrap>
            </S.CommitteeBox>
          ))}
        </S.DetailWrap>
      </S.View>
      {currentView.id !== 0 ? (
        <S.CommitteeViewShadow className="shadow" onClick={closeView}>
          <S.CommitteeViewBox>
            <S.CommitteeTitle style={{ fontSize: "20px" }}>
              {currentView.title}
            </S.CommitteeTitle>
            <S.CommitteeContent style={{ fontSize: "17px" }}>
              {currentView.content}
            </S.CommitteeContent>
            <S.CommitteeInfoWrap>
              <S.CommitteeInfo style={{ fontSize: "14px" }}>
                {currentView.createdAt}
              </S.CommitteeInfo>
              <S.CommitteeLikeWrap>
                <img src={Thumbup} />
                <S.CommitteeInfo style={{ fontSize: "14px" }}>
                  {currentView.likeCount}
                </S.CommitteeInfo>
              </S.CommitteeLikeWrap>
            </S.CommitteeInfoWrap>
          </S.CommitteeViewBox>
        </S.CommitteeViewShadow>
      ) : null}
    </S.Container>
  );
}

export default Committee