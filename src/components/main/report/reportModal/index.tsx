import React from "react";
import * as S from "./style";
import ReportUpload from "src/assets/ReportUpload.svg";
import useReport from "src/hooks/report/useReport";

interface ReportModalProps {
  onClose: () => void;
}

const ReportModal = ({ onClose }: ReportModalProps) => {
  const { ...report } = useReport();

  return (
    <>
      <S.Container onClick={onClose}>
        <S.WriteWrap>
          <S.PageTitle>신고 작성</S.PageTitle>
          <S.TitleInput
            placeholder="제목을 입력해주세요."
            name="title"
            value={report.uplaodData.title}
            onChange={report.handleUploadData}
          />
          <S.ContentInput
            placeholder="내용을 입력해주세요."
            name="content"
            value={report.uplaodData.content}
            onChange={report.handleUploadData}
          ></S.ContentInput>
          <img src={ReportUpload} onClick={report.onSubmit} />
        </S.WriteWrap>
      </S.Container>
    </>
  );
};

export default ReportModal;
