import { ReportListData, ReportListResponse, UploadReportData } from "src/types/report/report.types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { PostReportMutation, GetReportDetailQuery, GetReportQuery } from "src/queries/main/report/report.query";
import lawBotSwal from "src/libs/swal/customSwal";
import axios from "axios";
import CONFIG from "src/config/config.json";

const useReport = () => {
  const [uplaodData, setUploadData] = useState<UploadReportData>({
    title: "",
    content: "",
  });
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [postClick, setPostClick] = useState<boolean>(false);
  const [chatbotClick, setChatbotClick] = useState<boolean>(false);
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [reportList, setReportList] = useState<ReportListData[]>([]);
  const [reportNum, setReportNum] = useState<number>();
  const [reportDetail, setReportDetail] = useState<ReportListData | null>(null);
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

  const viewReport = (content: ReportListData) => {
    setReportDetail(content);
  };

  const handlePostClick = () => {
    setPostClick((prev) => !prev);
  };

  const handleIsDetail = () => {
    setIsDetail((prev) => !prev);
  };

  const onSubmit = async () => {
    await axios
      .post(`${CONFIG.serverUrl}/report/create`, {
        title: uplaodData.title,
        contents: uplaodData.content,
      })
      .catch(() => lawBotSwal.errorToast("알 수 없는 에러가 발생하였습니다."))
      .then(() => {
        lawBotSwal.successToast("신고 작성 성공");
        setIsClicked(false);
      });
  };

  const handleChatbotClick = () => {
    setChatbotClick((prev) => !prev);
  };

  useEffect(() => {
    getReportList();
  }, []);

  const getReportList = async () => {
    await axios.get(`${CONFIG.serverUrl}/report/list`).then((res) => {
      setReportList(res.data.data);
      setReportNum(res.data.data.length);
      setId(res.data.data.id);
      console.log(res.data.data.length);
      console.log(res.data.data);
    });
  };

  const closeView = (e: any) => {
    if (e.target.className.includes("shadow")) {
      setReportDetail(null);
    }
  };

  const getReportDetail = async () => {
    await axios.get(`${CONFIG.serverUrl}/report/detail/${id}`).then((res) => {
      setReportDetail(res.data.data);
    });
  };

  return {
    isClicked,
    id,
    isDetail,
    postClick,
    chatbotClick,
    uplaodData,
    reportList,
    reportNum,
    reportDetail,
    handleUploadData,
    viewReport,
    handleIsClicked,
    handlePostClick,
    handleChatbotClick,
    handleIsDetail,
    closeView,
    onSubmit,
    getReportList,
    getReportDetail,
  };
};

export default useReport;
