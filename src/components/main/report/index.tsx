import Header from "src/components/common/header";
import React, { useEffect } from "react";
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
              진행중인 신고 총 <span style={{ color: "#6CF3C3" }}>{report.reportNum}건</span>
            </span>
            <S.Reports>
              {report.reportList.reverse().map((item, idx) => (
                <S.Report
                  key={idx}
                  onClick={() => {
                    report.viewReport({
                      id: item.id,
                      title: item.title,
                      contents: item.contents,
                    });
                  }}
                >
                  <h1>신고 #{item.id}</h1>
                  <span>{item.title}</span>
                </S.Report>
              ))}
            </S.Reports>
          </S.ReportWrap>
        </S.ReportMainWrap>
        <S.WriteReportButton src={NavWriteReport} onClick={report.handleIsClicked} />
        <ChatBotButton />
      </S.Main>

      {report.reportDetail && (
        <S.CommitteeViewShadow className="shadow" onClick={report.closeView}>
          <S.CommitteeViewBox>
            <S.CommitteeTitle style={{ fontSize: "20px", fontWeight: "800" }}>
              신고 #{report.reportDetail?.id}
            </S.CommitteeTitle>
            <S.CommitteeContent style={{ fontSize: "17px", fontWeight: "700" }}>
              {report.reportDetail?.title}
            </S.CommitteeContent>
            <S.CommitteeInfoWrap>
              <S.CommitteeInfo style={{ fontSize: "14px", fontWeight: "500" }}>
                {report.reportDetail?.contents}
              </S.CommitteeInfo>
            </S.CommitteeInfoWrap>
          </S.CommitteeViewBox>
        </S.CommitteeViewShadow>
      )}

      {report.isClicked && <ReportModal onClose={report.handleIsClicked} />}
      {chatBotClick === true ? <ChatBot /> : <></>}
    </S.Container>
  );
};

export default Report;
