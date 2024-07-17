import Header from "src/components/common/header";
import * as S from "./style";
import Thumbup from "src/assets/thumbup.svg";
import ChatBotButton from "src/components/common/chatbotButton/index";
import NavWriteReport from "src/assets/NavWriteReportButon.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TabBar from "src/components/common/tabBar";
import { chatbotStore } from "src/store/chatbotStroe/chatbotStore";
import ChatBot from "src/components/chat";
import axios from "axios";
import CONFIG from "src/config/config.json";

interface CommunityData {
  id: number;
  title: string;
  contents: string;
  createdAt: string;
  likeCount: number;
}

const Committee = () => {
  const [currentView, setCurrentView] = useState<CommunityData>({
    id: 0,
    title: "",
    contents: "",
    createdAt: "",
    likeCount: 0,
  });
  const [petitionList, setPetitionList] = useState<CommunityData[]>([]);

  const viewCommittee = (content: CommunityData) => {
    setCurrentView(content);
  };

  const closeView = (e: any) => {
    if (e.target.className.includes("shadow")) {
      setCurrentView({
        id: 0,
        title: "",
        contents: "",
        createdAt: "",
        likeCount: 0,
      });
    }
  };

  const getPetitionList = async () => {
    await axios.get(`${CONFIG.serverUrl}/petition/list`).then((res) => {
      if (res.data.data !== undefined) {
        setPetitionList(res.data.data);
      }
    });
  };

  useEffect(() => {
    getPetitionList();
  }, []);

  const chatBotClick = chatbotStore((state) => state.chatBotClick);

  const navigate = useNavigate();

  return (
    <S.Container>
      <Header />
      <S.View>
        <TabBar />
        <S.PageWordWrap>
          <S.PageTitle>국민청원 게시 및 동의</S.PageTitle>
          <S.PageDescription>
            일정 이상의 인원이 모이면
            <br />
            익명으로 청원을 게시할 수 있어요.
          </S.PageDescription>
        </S.PageWordWrap>
        <S.DetailTitle>
          진행중인 청원 총 <span style={{ color: "#6CF3C3", background: "transparent" }}>2건</span>
        </S.DetailTitle>
        <S.DetailWrap>
          {petitionList !== undefined &&
            petitionList.map((item, idx) => (
              <S.CommitteeBox
                key={item.id}
                onClick={() => {
                  viewCommittee({
                    id: item.id,
                    title: item.title,
                    contents: item.contents,
                    createdAt: item.createdAt,
                    likeCount: item.likeCount,
                  });
                }}
              >
                <S.CommitteeTitle style={{ fontSize: "16px" }}>{item.title}</S.CommitteeTitle>
                <S.CommitteeContent style={{ fontSize: "13px" }}>
                  {item.contents.substring(0, 50) + "..."}
                </S.CommitteeContent>
                <S.CommitteeInfoWrap>
                  <S.CommitteeInfo style={{ fontSize: "12px" }}>{item.createdAt.split("T")[0]}</S.CommitteeInfo>
                  <S.CommitteeLikeWrap>
                    <img src={Thumbup} />
                    <S.CommitteeInfo style={{ fontSize: "12px" }}>{item.likeCount}</S.CommitteeInfo>
                  </S.CommitteeLikeWrap>
                </S.CommitteeInfoWrap>
              </S.CommitteeBox>
            ))}
        </S.DetailWrap>
      </S.View>
      {currentView.id !== 0 ? (
        <S.CommitteeViewShadow className="shadow" onClick={closeView}>
          <S.CommitteeViewBox>
            <S.CommitteeTitle style={{ fontSize: "20px" }}>{currentView.title}</S.CommitteeTitle>
            <S.CommitteeContent style={{ fontSize: "17px" }}>{currentView.contents}</S.CommitteeContent>
            <S.CommitteeInfoWrap>
              <S.CommitteeInfo style={{ fontSize: "14px" }}>{currentView.createdAt.split("T")[0]}</S.CommitteeInfo>
              <S.CommitteeLikeWrap>
                <img src={Thumbup} />
                <S.CommitteeInfo style={{ fontSize: "14px" }}>{currentView.likeCount}</S.CommitteeInfo>
              </S.CommitteeLikeWrap>
            </S.CommitteeInfoWrap>
          </S.CommitteeViewBox>
        </S.CommitteeViewShadow>
      ) : null}
      <ChatBotButton />
      <S.WriteReportButton src={NavWriteReport} onClick={() => navigate("/committee/write")} />
      {chatBotClick === true ? <ChatBot /> : <></>}
    </S.Container>
  );
};

export default Committee;
