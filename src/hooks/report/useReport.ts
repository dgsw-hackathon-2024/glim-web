import { UploadReportData } from "src/types/report/report.types";
import React, { useCallback, useState } from "react";

const useReport = () => {
  const [uplaodData, setUploadData] = useState<UploadReportData>({
    title: "",
    content: "",
  });
  const [isClicked, setIsClicked] = useState<boolean>(false);

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

  return {
    isClicked,
    uplaodData,
    handleUploadData,
    handleIsClicked,
  };
};

export default useReport;
