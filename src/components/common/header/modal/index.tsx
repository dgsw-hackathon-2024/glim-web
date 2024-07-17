import React from "react";
import * as S from "./style";
import ProfileModalImg from "src/assets/ProfileModal.svg";
import Logout from "src/assets/Logout.svg";
import { emailStore } from "src/store/emailStore/emailStore";
import cookie from "src/libs/cookie/cookie";
import useHeader from "src/hooks/common/header/useHeader";

const ProfileModal = () => {
  const email = emailStore((state) => state.email);
  const { logout, handleClicked } = useHeader();
  return (
    <>
      <S.ProfileModalWrap src={ProfileModalImg} />
      <S.Email>{cookie.getCookie("email")}</S.Email>
      <S.LogOut src={Logout} onClick={logout} />
    </>
  );
};

export default ProfileModal;
