import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 8%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;

  h1 {
    color: linear-gradient(0.25turn #c1fdff 0 58%, #56c19b 58%, #3f8d71 100%);
    font-family: "Pretendard";
    font-weight: 800;
    font-size: 1.4rem;
  }

  img {
    cursor: pointer;
  }
`;
