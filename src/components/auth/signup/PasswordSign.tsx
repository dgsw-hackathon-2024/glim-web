import { useNavigate } from "react-router-dom";
import * as S from "../style";
import BackBtn from "src/assets/backward.svg";
import useSignupPw from "src/hooks/auth/signup/useSignupPw";

const PasswordSign = () => {
  const navigate = useNavigate();
  const { password, passwordChk, passwordValid, handlePassword, handlePasswordChk, submit } = useSignupPw();
  return (
    <S.Container>
      <S.Backward
        src={BackBtn}
        onClick={() => {
          navigate(-1);
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
          style={{ marginBottom: "20px" }}
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
