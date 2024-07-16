import { useSignMuatation } from "src/queries/auth/auth.query";
import { SignData } from "src/types/auth/auth.types";

import lawBotSwal from "src/libs/swal/customSwal";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const useSignup = () => {
  const navigate = useNavigate();


  const signMutation = useSignMuatation();

  const onSubmit = (email:string, password:string) => {
    signMutation.mutate(
      {
        email,
        password,
      },
      {
        onSuccess: () => {

          lawBotSwal.successToast("회원가입 성공");
          navigate("/login");
        },
        onError: (error) => {
          if ((error as AxiosError).status === 400) {
            lawBotSwal.errorToast("이미 유저가 존재합니다.");
          } else {
            lawBotSwal.errorToast("알 수 없는 에러가 발생하였습니다.");
          }
        },
      }
    );
  };
  return {
    onSubmit,
  };
};

export default useSignup;
