import Header from "src/components/common/header";
import * as S from "./style";
import ChatBotButton from "src/components/common/chatbotButton/index";
import NavWriteReport from "src/assets/NavWriteReportButon.svg";
import useReport from "src/hooks/report/useReport";
import ChatBot from "src/components/chat";
import TabBar from "src/components/common/tabBar";
import { chatbotStore } from "src/store/chatbotStroe/chatbotStore";
import ReportUpload from "src/assets/ReportUpload.svg";

const Report = () => {
  const { ...report } = useReport();
  const chatBotClick = chatbotStore((state) => state.chatBotClick);

  const closeView = (e: any) => {
    if (e.target.className.includes("shadow")) {
      report.setIsClicked(false);
    }
  };

  return (
    <S.Container>
      <Header />
      <S.View>
        <TabBar />
        <S.PageWordWrap>
          <S.PageTitle>익명 부패 신고</S.PageTitle>
          <S.PageDescription>
            자신이 겪은 부조리한 정책, <br />
            피해사실들을 익명으로 신고하세요.
          </S.PageDescription>
        </S.PageWordWrap>
        <S.ReportWrap>
          <S.DetailTitle>
            진행중인 청원 총{" "}
            <span style={{ color: "#6CF3C3", background: "transparent" }}>
              {report.reportList.length}건
            </span>
          </S.DetailTitle>
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
      </S.View>
      <S.WriteReportButton
        src={NavWriteReport}
        onClick={() => {
          report.setIsClicked(true);
        }}
      />
      <ChatBotButton />

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

      {report.isClicked ? (
        <S.ModalContainer className="shadow" onClick={closeView}>
          <S.ModalWriteWrap>
            <S.ModalPageTitle>신고 작성</S.ModalPageTitle>
            <S.ModalTitleInput
              placeholder="제목을 입력해주세요."
              name="title"
              value={report.uplaodData.title}
              onChange={report.handleUploadData}
            />
            <S.ModalContentInput
              placeholder="내용을 입력해주세요."
              name="content"
              value={report.uplaodData.content}
              onChange={report.handleUploadData}
            ></S.ModalContentInput>
            <img src={ReportUpload} onClick={report.onSubmit} />
          </S.ModalWriteWrap>
        </S.ModalContainer>
      ) : null}
      {chatBotClick === true ? <ChatBot /> : <></>}
    </S.Container>
  );
};

export default Report;
