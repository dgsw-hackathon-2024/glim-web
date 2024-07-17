import React from "react";
import * as S from "./style";
import MenuBar from "src/assets/menubr.svg";
import ProfileIcon from "src/assets/Profile.svg";
import HeaderLogo from 'src/assets/headerLogo.svg';

const Header = () => {
  return (
    <S.HeaderWrap>
      <img src={MenuBar} />
      <img src={HeaderLogo} alt="LawBot" />
      <img src={ProfileIcon} />
    </S.HeaderWrap>
  );
};

export default Header;
