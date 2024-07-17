import Header from "src/components/common/header";
import * as S from "./style";
import Thumbup from "src/assets/thumbup.svg";
import LikedButton from "src/assets/likedButton.svg";
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
  likes: number;
}

const Committee = () => {
  const [currentView, setCurrentView] = useState<CommunityData>({
    id: 0,
    title: "",
    contents: "",
    createdAt: "",
    likes: 0,
  });
  const [petitionList, setPetitionList] = useState<CommunityData[]>([]);

  const [likeLoading, setLikeLoading] = useState(false);

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
        likes: 0,
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

  useEffect(() => {
    petitionList.forEach((item) => {
      console.log(item.likes);
    });
  }, [petitionList]);

  const chatBotClick = chatbotStore((state) => state.chatBotClick);

  const navigate = useNavigate();

  const onLike = async (petitionId: number) => {
    if (!likeLoading) {
      setLikeLoading(true);
      await axios
        .post(`${CONFIG.serverUrl}/petition/likes/${petitionId}`)
        .then((res) => {
          if (res.data !== undefined) {
            localStorage.setItem(`${petitionId}`, "true");
            currentView.likes = res.data;
          }
        })
        .finally(() => {
          setLikeLoading(false);
        });
    }
  };

  const onUnLike = async (petitionId: number) => {
    if (!likeLoading) {
      setLikeLoading(true);
      await axios
        .post(`${CONFIG.serverUrl}/petition/dislikes/${petitionId}`)
        .then((res) => {
          if (res.data !== undefined) {
            localStorage.setItem(`${petitionId}`, "false");
            currentView.likes = res.data;
          }
        })
        .finally(() => {
          setLikeLoading(false);
        });
    }
  };

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
          진행중인 청원 총{" "}
          <span style={{ color: "#6CF3C3", background: "transparent" }}>
            {petitionList.length}건
          </span>
        </S.DetailTitle>
        <S.DetailWrap>
          {petitionList !== undefined &&
            petitionList.map((item) => (
              <S.CommitteeBox
                key={item.id}
                onClick={() => {
                  viewCommittee({
                    id: item.id,
                    title: item.title,
                    contents: item.contents,
                    createdAt: item.createdAt,
                    likes: item.likes,
                  });
                }}
              >
                <S.CommitteeTitle style={{ fontSize: "20px" }}>
                  {item.title}
                </S.CommitteeTitle>
                <S.CommitteeContent style={{ fontSize: "17px" }}>
                  {item.contents.length > 51
                    ? item.contents.substring(0, 50) + "..."
                    : item.contents}
                </S.CommitteeContent>
                <S.CommitteeInfoWrap>
                  <S.CommitteeInfo style={{ fontSize: "16px" }}>
                    {item.createdAt.split("T")[0]}
                  </S.CommitteeInfo>
                  <S.CommitteeLikeWrap>
                    <img src={Thumbup} />
                    <S.CommitteeInfo style={{ fontSize: "16px" }}>
                      {item.likes}
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
            <S.CommitteeTitle style={{ fontSize: "24px" }}>
              {currentView.title}
            </S.CommitteeTitle>
            <S.CommitteeContent style={{ fontSize: "21px" }}>
              {currentView.contents}
            </S.CommitteeContent>
            <S.CommitteeInfoWrap>
              <S.CommitteeInfo style={{ fontSize: "17px" }}>
                {currentView.createdAt.split("T")[0]}
              </S.CommitteeInfo>
              <S.CommitteeLikeWrap>
                {localStorage.getItem(`${currentView.id}`) === "true" ? (
                  <img
                    src={Thumbup}
                    onClick={() => {
                      onLike(currentView.id);
                    }}
                  />
                ) : (
                  <img
                    src={LikedButton}
                    onClick={() => {
                      onUnLike(currentView.id);
                    }}
                  />
                )}
                <img src={Thumbup} />
                <S.CommitteeInfo style={{ fontSize: "17px" }}>
                  {currentView.likes}
                </S.CommitteeInfo>
              </S.CommitteeLikeWrap>
            </S.CommitteeInfoWrap>
          </S.CommitteeViewBox>
        </S.CommitteeViewShadow>
      ) : null}
      <ChatBotButton />
      <S.WriteReportButton
        src={NavWriteReport}
        onClick={() => navigate("/committee/write")}
      />
      {chatBotClick === true ? <ChatBot /> : <></>}
    </S.Container>
  );
};

export default Committee;
