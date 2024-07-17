import React from "react";
import * as S from "./style";
import MenuBar from "src/assets/menubr.svg";
import ProfileIcon from "src/assets/Profile.svg";

const Header = () => {
  return (
    <S.HeaderWrap>
      <img src={MenuBar} />
      <h1>LawBot</h1>
      <img src={ProfileIcon} />
    </S.HeaderWrap>
  );
};

export default Header;
