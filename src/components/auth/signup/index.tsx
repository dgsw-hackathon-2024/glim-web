import { useNavigate } from 'react-router-dom';
import * as S from '../style'
import LogoName from 'src/assets/LawBot.svg';
import LogoImg from 'src/assets/Logo.svg'

const Signup = () => {

  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoWrap>
        <S.LogoImage src={LogoImg}/>
        <S.LogoName src={LogoName} />
      </S.LogoWrap>
      <S.Button onClick={()=>{navigate('/signup/email')}}>시작하기</S.Button>
      <S.LoginLinkWrap>
        이미 계정이 있으신가요?{" "}
        <S.LoginLink to="/login">로그인하기</S.LoginLink>
      </S.LoginLinkWrap>
    </S.Container>
  );
}

export default Signup