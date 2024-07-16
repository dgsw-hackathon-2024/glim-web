import { useNavigate } from "react-router-dom";
import * as S from "../style";
import BackBtn from "src/assets/backward.svg";
import { useEffect, useState } from "react";
import lawBotSwal from "src/libs/swal/customSwal";

const PasswordSign = () => {
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");

  const [passwordValid, setPasswordValid] = useState(false);

  const handlePassword = (e: any) => {
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

  const submit = () => {
    if (passwordValid) {
      navigate("/login");
    } else {
      lawBotSwal.errorToast("비밀번호를 올바르게 입력해 주세요.");
    }
  };

  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Backward
        src={BackBtn}
        onClick={() => {
          navigate("/signup/email");
        }}
      />
      <S.PageTitle>
        회원가입을 위해
        <br />
        비밀번호를 입력해주세요!
      </S.PageTitle>
      <S.PageDescription>비밀번호 인증도 진행해 주세요.</S.PageDescription>
      <S.InputWrap>
        <S.Input
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={handlePassword}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
          style={{marginBottom:'20px'}}
        />
        
        <S.Input
          type="password"
          placeholder="비밀번호 확인"
          onChange={handlePasswordChk}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
        />
        <S.WarnMsg>
          {!passwordValid && password.length > 0 && passwordChk.length > 0 ? "비밀번호가 틀립니다." : ""}
        </S.WarnMsg>
      </S.InputWrap>
      <S.Button onClick={submit}>완료하기</S.Button>
    </S.Container>
  );
};

export default PasswordSign;
