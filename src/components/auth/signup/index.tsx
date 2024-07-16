import { useNavigate } from 'react-router-dom';
import * as S from '../../../styles/auth/signup'

const Signup = () => {

  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Button onClick={()=>{navigate('/signup/email')}}>시작하기</S.Button>
      <S.LoginLinkWrap>
        이미 계정이 있으신가요?{" "}
        <S.LoginLink to="/login">로그인하기</S.LoginLink>
      </S.LoginLinkWrap>
    </S.Container>
  );
}

export default Signup