import Header from "src/components/common/header";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import ChatBotButton from "src/assets/chatbotButon.svg";
import NavWriteReport from "src/assets/NavWriteReportButon.svg";
import UploadBtn from "src/assets/committeeUpload.svg";
import useCommittee from "src/hooks/committee/useCommittee";

const CommitteeWrite = () => {

  const navigate = useNavigate();
  const { ...committee } = useCommittee();


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
          <S.CommitteeWriteBox>
            <S.CommitteeWriteTitle
              placeholder="제목을 입력해주세요."
              name="title"
              value={committee.uplaodData.title}
              onChange={committee.handleUploadData}
            />
            <S.CommitteeWriteContent
              placeholder="내용을 입력해주세요."
              name="contents"
              value={committee.uplaodData.contents}
              onChange={committee.handleUploadData}
            />
            <S.UploadButton src={UploadBtn} onClick={committee.onSubmit}/>
          </S.CommitteeWriteBox>
        </S.DetailWrap>
      </S.View>
      <S.ChatBotButton src={ChatBotButton} />
      <S.WriteReportButton
        src={NavWriteReport}
        onClick={() => navigate("/committee/write")}
      />
    </S.Container>
  );
};

export default CommitteeWrite;
