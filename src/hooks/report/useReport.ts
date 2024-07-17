import { UploadReportData } from "src/types/report/report.types";
import React, { useCallback, useRef, useState } from "react";
import { postReportMutation, useGetReportDetailQuery, useGetReportQuery } from "src/queries/main/report/report.query";
import lawBotSwal from "src/libs/swal/customSwal";

const useReport = () => {
  const [uplaodData, setUploadData] = useState<UploadReportData>({
    title: "",
    content: "",
  });
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [postClick, setPostClick] = useState<boolean>(false);
  const handleUploadData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setUploadData((prev) => ({ ...prev, [name]: value }));
    },
    [setUploadData],
  );

  const handleIsClicked = () => {
    setIsClicked((prev) => !prev);
  };

  const handlePostClick = () => {
    setPostClick((prev) => !prev);
  };

  const postReport = postReportMutation();

  const onSubmit = () => {
    postReport.mutate(
      {
        title: uplaodData.title,
        contents: uplaodData.content,
      },
      {
        onSuccess: () => {
          lawBotSwal.successToast("신고 작성 성공");
        },
        onError: () => {
          lawBotSwal.errorToast("알 수 없는 에러가 발생하였습니다.");
        },
      },
    );
  };

  const getReportList = () => {
    const [{ data: reportList }] = useGetReportQuery();
    if (reportList !== undefined && reportList !== undefined && reportList.data.length > 0) {
      return reportList;
    }
  };

  const getReportDetail = (id: number) => {
    const [{ data: reportDetail }] = useGetReportDetailQuery(id);

    if (reportDetail !== undefined && reportDetail !== undefined) {
      return reportDetail;
    }
  };

  return {
    isClicked,
    postClick,
    uplaodData,
    handleUploadData,
    handleIsClicked,
    handlePostClick,

    onSubmit,
    getReportList,
    getReportDetail,
  };
};

export default useReport;
