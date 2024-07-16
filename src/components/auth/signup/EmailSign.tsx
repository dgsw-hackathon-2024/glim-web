import { useNavigate } from "react-router-dom";
import * as S from "../../../styles/auth/signup";
import BackBtn from "src/assets/backward.svg";
import { useState } from "react";
import { CustomSwal } from "src/libs/swal/customSwal";

const EmailSign = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const swal = new CustomSwal();

  const handleEmail = (e: any) => {
    const content = e.target.value;
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regex.test(content)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setEmail(content);
  };

  const submit = () => {
    if (emailValid) {
      navigate("/signup/password");
    } else {
      swal.error("올바른 이메일 형식을 입력해 주세요.");
    }
  };

  return (
    <S.Container>
      <S.Backward
        src={BackBtn}
        onClick={() => {
          navigate("/signup");
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
        <S.WarnMsg>
          {!emailValid && email.length > 0
            ? "올바른 이메일 형식을 입력하세요."
            : ""}
        </S.WarnMsg>
      </S.InputWrap>
      <S.Button onClick={submit}>넘어가기</S.Button>
    </S.Container>
  );
};

export default EmailSign;
