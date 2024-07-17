import { UploadCommitteeData } from "src/types/committee/committee.types";
import React, { useCallback, useState } from "react";
import { useCommitteeMuatation } from "src/queries/committee/committee.query";
import { useNavigate } from "react-router-dom";
import lawBotSwal from "src/libs/swal/customSwal";

const useCommittee = () => {
  const [uplaodData, setUploadData] = useState<UploadCommitteeData>({
    title: "",
    contents: "",
  });

  const committeeMutation = useCommitteeMuatation();
  const navigate = useNavigate();

  const handleUploadData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setUploadData((prev) => ({ ...prev, [name]: value }));
    },
    [setUploadData]
  );


  const onSubmit = () => {
    committeeMutation.mutate(
      {
        title: uplaodData.title,
        contents: uplaodData.contents,
      },
      {
        onSuccess: () => {
          lawBotSwal.successToast("게시 성공!");
          navigate("/committee");
        },
        onError: () => {
          lawBotSwal.errorToast("네트워크 에러");
        }
      }
    );
  }

  return {
    onSubmit,
    uplaodData,
    handleUploadData,
  };
};

export default useCommittee;
