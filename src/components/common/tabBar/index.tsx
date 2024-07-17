import { tabStateStore } from "src/store/tabStateStore/tabStateStore";
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TabBar = () => {

  const tabState = tabStateStore(state=>state.tabState);
  const setTabState = tabStateStore(state=>state.storeTabState);

  const navigate = useNavigate();
  const pathname = useLocation();

  useEffect(()=>{
    if(pathname.pathname === '/law-analyze') {
      setTabState("AI");
    }
    if (pathname.pathname === "/committee") {
      setTabState("COMMITTEE");
    }
    if (pathname.pathname === "/report") {
      setTabState("REPORT");
    }
  },[]);

  const toAi = () => {
    setTabState("AI");
    navigate('/law-analyze');
  }
  const toCommittee = () => {
    setTabState("COMMITTEE");
    navigate("/committee");
  };
  const toReport = () => {
    setTabState("REPORT");
    navigate("/report");
  };

  return (
    <S.TabBarWrap>
      <S.Tab
        onClick={toAi}
        style={
          tabState === "AI"
            ? { background: "#6cf3c3" }
            : { background: "transparent" }
        }
      >
        Ai 정책 분석
      </S.Tab>
      <S.Tab
        onClick={toCommittee}
        style={
          tabState === "COMMITTEE"
            ? { background: "#6cf3c3" }
            : { background: "transparent" }
        }
      >
        국민청원
      </S.Tab>
      <S.Tab
        onClick={toReport}
        style={
          tabState === "REPORT"
            ? { background: "#6cf3c3" }
            : { background: "transparent" }
        }
      >
        안심신고
      </S.Tab>
    </S.TabBarWrap>
  );
};

export default TabBar;
