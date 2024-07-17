import React from "react";
import * as S from "src/components/main/test/style";

interface ProgressBarProps {
  page: number;
  width: number;
}

const ProgressBar = ({ page, width }: ProgressBarProps) => {
  return (
    <S.ProgressBarWrap>
      <S.ProgressBar>
        <span style={{ width: `${width}%` }}></span>
      </S.ProgressBar>
      <div>
        <h1>Q. 현재 정부 정책 인지도 테스트</h1>
        <h1 style={{ color: "#6CF3C3" }}>{page}/5</h1>
      </div>
    </S.ProgressBarWrap>
  );
};

export default ProgressBar;
