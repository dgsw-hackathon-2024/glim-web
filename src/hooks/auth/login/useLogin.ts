import { useLoginMuatation } from "src/queries/auth/auth.query";
import { LoginData } from "src/types/auth/auth.types";
import React, { useCallback, useState } from "react";
import lawBotSwal from "src/libs/swal/customSwal";
import token from "src/libs/token/token";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/token/token.constants";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const useLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleLoginData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginData],
  );

  const loginMutation = useLoginMuatation();

  const onSubmit = () => {
    loginMutation.mutate(
      {
        email: loginData.email,
        password: loginData.password,
      },
      {
        onSuccess: (res) => {
          token.setToken(ACCESS_TOKEN_KEY, res.data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, res.data.refreshToken);
          lawBotSwal.successToast("로그인 성공");
          navigate("/");
        },
        onError: (error) => {
          if ((error as AxiosError).status === 404) {
            lawBotSwal.errorToast("유저가 존재하지않습니다.");
          } else if ((error as AxiosError).status === 401) {
            lawBotSwal.errorToast("비밀번호를 확인해 주세요.");
          } else {
            lawBotSwal.errorToast("알 수 없는 에러가 발생하였습니다.");
          }
        },
      },
    );
  };
  return {
    loginData,
    handleLoginData,
    onSubmit,
  };
};

export default useLogin;
