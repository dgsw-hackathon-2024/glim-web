import { useNavigate } from "react-router-dom";
import * as S from "../style";
import BackBtn from "src/assets/backward.svg";
import useSignup from "src/hooks/auth/signup/useSignup";

const EmailSign = () => {
  const navigate = useNavigate();
  const { email, emailValid, handleEmail, submit } = useSignup();
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
        이메일을 입력해주세요!
      </S.PageTitle>
      <S.PageDescription>올바른 이메일 형식을 입력해 주세요.</S.PageDescription>
      <S.InputWrap>
        <S.Input
          type="text"
          placeholder="이메일을 입력해 주세요."
          onChange={handleEmail}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
        />
        <S.WarnMsg>{!emailValid && email.length > 0 ? "올바른 이메일 형식을 입력하세요." : ""}</S.WarnMsg>
      </S.InputWrap>
      <S.Button onClick={submit}>넘어가기</S.Button>
    </S.Container>
  );
};

export default EmailSign;
