import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import lawBotSwal from "src/libs/swal/customSwal";
import { useAnalyzeMuatation } from "src/queries/lawAnalyze/lawAnalyze.query";

const useAnalyze = () => {
  const [questionData, setQuestionData] = useState<string>();
  const [response, setResponse] = useState("");

  const analyzeMutation = useAnalyzeMuatation();

  const handleUploadData = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
    ) => {
      const { value } = e.target;
      setQuestionData(value);
    },
    [setQuestionData]
  );

  const onSubmit = () => {
    analyzeMutation.mutate(
      questionData
      ,
      {
        onSuccess: (res) => {
          setResponse(res);
        },
        onError: () => {
          lawBotSwal.errorToast("네트워크 에러");
        },
      }
    );
  };

  return {
    onSubmit,
    questionData,
    handleUploadData,
    response
  };
};

export default useAnalyze;
