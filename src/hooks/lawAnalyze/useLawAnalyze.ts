import dearAxios from "src/libs/axios/customAxios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import lawBotSwal from "src/libs/swal/customSwal";
import { useAnalyzeMuatation } from "src/queries/lawAnalyze/lawAnalyze.query";
import CONFIG from "src/config/config.json";
import axios from "axios";

const useAnalyze = () => {
  const [questionData, setQuestionData] = useState<string>();
  const [response, setResponse] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  const analyzeMutation = useAnalyzeMuatation();

  const handleUploadData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setQuestionData(value);
    },
    [setQuestionData],
  );

  const onSubmit = async () => {
    setIsLoading(true);
    await axios.post(`${CONFIG.serverUrl}/ai/simulate`, questionData).then((res) => {
      setResponse(res.data);
      setIsLoading(false);
    });
  };

  return {
    onSubmit,
    questionData,
    handleUploadData,
    response,
    isLoading,
  };
};

export default useAnalyze;
