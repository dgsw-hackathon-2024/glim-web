import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailStore } from "src/store/emailStore/emailStore";
import lawBotSwal from "src/libs/swal/customSwal";

const useSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const storeEmail = emailStore((state) => state.storeEmail);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setEmail(e.target.value);
  };

  const submit = () => {
    if (emailValid) {
      storeEmail(email);
      navigate("/signup/password");
    } else {
      lawBotSwal.errorToast("올바른 이메일 형식을 입력해 주세요.");
    }
  };

  return {
    email,
    emailValid,
    handleEmail,
    submit,
  };
};

export default useSignup;
