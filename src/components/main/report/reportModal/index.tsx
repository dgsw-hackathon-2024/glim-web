import React from "react";
import * as S from "./style";
import ReportUpload from "src/assets/ReportUpload.svg";
import useReport from "src/hooks/report/useReport";

const ReportModal = () => {
  const { ...report } = useReport();
  return (
    <S.Container>
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
        <img src={ReportUpload} />
      </S.WriteWrap>
    </S.Container>
  );
};

export default ReportModal;
