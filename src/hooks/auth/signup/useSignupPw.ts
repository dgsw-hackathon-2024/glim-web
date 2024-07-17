import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailStore } from "src/store/emailStore/emailStore";
import lawBotSwal from "src/libs/swal/customSwal";
import axios from "axios";
import CONFIG from "src/config/config.json";
const useSignupPw = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordChk, setPasswordChk] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const navigate = useNavigate();
  const email = emailStore((state) => state.email);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordChk = (e: any) => {
    setPasswordChk(e.target.value);
  };

  useEffect(() => {
    if (password === passwordChk && password.length > 0) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }, [password, passwordChk]);

  const submit = async () => {
    if (passwordValid) {
      await axios
        .post(`${CONFIG.serverUrl}/user/signup`, {
          email: email,
          password: password,
        })
        .then(() => navigate("/login"));
    } else {
      lawBotSwal.errorToast("비밀번호를 올바르게 입력해 주세요.");
    }
  };

  return {
    password,
    passwordChk,
    passwordValid,
    handlePassword,
    handlePasswordChk,
    submit,
  };
};

export default useSignupPw;
