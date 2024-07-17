import React from "react";
import * as S from "./style";
import HomeImg from "src/assets/HomeImg.svg";
import ProfileIcon from "src/assets/Profile.svg";
import HeaderLogo from 'src/assets/headerLogo.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <S.HeaderWrap>
      <img src={HomeImg} onClick={()=>{navigate('/choice/test')}}/>
      <img src={HeaderLogo} alt="LawBot" />
      <img src={ProfileIcon} />
    </S.HeaderWrap>
  );
};

export default Header;
