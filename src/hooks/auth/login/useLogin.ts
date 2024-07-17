import { useLoginMuatation } from "src/queries/auth/auth.query";
import { LoginData } from "src/types/auth/auth.types";
import React, { useCallback, useState } from "react";
import lawBotSwal from "src/libs/swal/customSwal";
import token from "src/libs/token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constants";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import CONFIG from "src/config/config.json";

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
    [setLoginData]
  );

  const onSubmit = async () => {
    await axios
      .post(`${CONFIG.serverUrl}/user/signin`, {
        email: loginData.email,
        password: loginData.password,
      })
      .then((res) => {
        token.setToken(ACCESS_TOKEN_KEY, res.data.token);
        lawBotSwal.successToast("로그인 성공");
        navigate("/choice/test");
      });
  };
  return {
    loginData,
    handleLoginData,
    onSubmit,
  };
};

export default useLogin;
