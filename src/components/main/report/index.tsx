import Header from "src/components/common/header";
import React from "react";
import * as S from "./style";
import ChatBotButton from "src/components/common/chatbotButton/index";
import NavWriteReport from "src/assets/NavWriteReportButon.svg";
import ReportModal from "./reportModal";
import useReport from "src/hooks/report/useReport";
import ChatBot from "src/components/chat";
import TabBar from "src/components/common/tabBar";
import { chatbotStore } from "src/store/chatbotStroe/chatbotStore";

const Report = () => {
  const { ...report } = useReport();
  const chatBotClick = chatbotStore((state) => state.chatBotClick);
  return (
    <S.Container>
      <Header />
      <S.Main>
        <TabBar />
        <S.ReportMainWrap>
          <S.PageDescriptionWrap>
            <S.PageTitle>익명 부패 신고</S.PageTitle>
            <S.PageSubTitle>
              자신이 겪은 부조리한 정책, <br />
              피해사실들을 익명으로 신고하세요.
            </S.PageSubTitle>
          </S.PageDescriptionWrap>
          <S.ReportWrap>
            <span>
              진행중인 신고 총 <span style={{ color: "#6CF3C3" }}>4건</span>
            </span>
            <S.Reports>
              <S.Report></S.Report>
              <S.Report></S.Report>
              <S.Report></S.Report>
              <S.Report></S.Report>
            </S.Reports>
          </S.ReportWrap>
        </S.ReportMainWrap>
        <S.WriteReportButton src={NavWriteReport} onClick={report.handleIsClicked} />
        <ChatBotButton />
      </S.Main>
      {report.isClicked && <ReportModal />}
      {chatBotClick === true ? <ChatBot /> : <></>}
    </S.Container>
  );
};

export default Report;
