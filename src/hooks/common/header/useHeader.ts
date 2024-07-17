import { ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";
import cookie from "src/libs/cookie/cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useHeader = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClicked = () => {
    setIsClicked((prev) => !prev);
  };

  const logout = () => {
    cookie.removeCookie("email");
    cookie.removeCookie(ACCESS_TOKEN_KEY);
    navigate("/signup");
  };

  return {
    isClicked,
    handleClicked,
    logout,
  };
};

export default useHeader;
