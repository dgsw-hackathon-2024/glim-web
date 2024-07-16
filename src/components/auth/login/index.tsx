import React from "react";
import * as S from "../style";
import BackBtn from "src/assets/backward.svg";
import { useNavigate } from "react-router-dom";
import useLogin from "src/hooks/auth/login/useLogin";

const Login = () => {
  const { ...login } = useLogin();
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Backward src={BackBtn} alt="뒤로가기" onClick={() => navigate(-1)} />
      <S.PageTitle>
        로그인을 위해
        <br />
        이메일과 비밀번호를
        <br />
        정확히 입력해주세요.
      </S.PageTitle>
      <S.InputWrap style={{ top: "480px" }}>
        <S.Input
          type="email"
          placeholder="이메일을 입력해주세요."
          name="email"
          value={login.loginData.email}
          onChange={login.handleLoginData}
        />
        <S.Input
          type="password"
          placeholder="비밀번호를 입력주세요."
          name="password"
          value={login.loginData.password}
          onChange={login.handleLoginData}
        />
      </S.InputWrap>
      <S.Button onClick={login.onSubmit}>로그인 하기</S.Button>
    </S.Container>
  );
};

export default Login;
