import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  aspect-ratio: 1/1.9;
  margin: 0 auto;
  box-shadow: 0px 0px 50px 30px rgba(0, 0, 0, 0.2);
  background-color: #1c1d28;
  display: flex;
  flex-direction:column;
  justify-content: center;
  position:relative;
`;

export const View = styled.div`
  width: 100%;
  height: 92%;
  align-self:flex-end;
  background-color: #3e404a;
  border-radius: 30px 30px 0 0;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const TabBarWrap = styled.div`
  width: 90%;
  background-color:transparent;
  border-bottom: 1px solid #6cf3c3;
  height: 90px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
export const Tab = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: transparent;
  border-radius: 100px;
  font-family: "Pretendard-Regular", sans-serif;
`;

export const PageWordWrap = styled.div`
  width:90%;
  background-color:transparent;
  margin:80px 0 0 0;
`

export const PageTitle = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  font-size: 25px;
  font-weight: bolder;
  color: white;
  background-color: transparent;
  margin:10px 0;
`;
export const PageDescription = styled.p`
  font-family: "Pretendard-Regular", sans-serif;
  font-size: 18px;
  font-weight: 200;
  color: #a2a7ab;
  background-color: transparent;
  line-height:1.3;
`;

export const DetailWrap = styled.div`
  width:90%;
  overflow:scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color:transparent;
`;

export const DetailTitle = styled.div`
  width: 90%;
  font-size: 15px;
  margin-top: 50px;
  color: white;
  font-family: "Pretendard-Regular", sans-serif;
  background-color: transparent;
  margin-bottom: 10px;
`;

export const CommitteeBox = styled.div`
  width: 100%;
  height: 120px;
  background-color: #d9d9d9;
  margin-bottom:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  padding:10px;
  box-sizing:border-box;
  border-radius:15px;
  cursor: pointer;
`;

export const CommitteeTitle = styled.p`
  font-weight: bolder;
  font-family: "Pretendard-Regular", sans-serif;
  background-color:transparent;
`;

export const CommitteeContent = styled.p`
  width:90%;
  font-family: "Pretendard-Regular", sans-serif;
  background-color:transparent;
  font-weight:100;
`;

export const CommitteeInfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  height:20px;
`;
export const CommitteeInfo = styled.p`
  font-weight: 400;
  font-family: "Pretendard-Regular", sans-serif;
  background-color: transparent;
`;
export const CommitteeLikeWrap = styled.div`
  font-weight: 400;
  font-family: "Pretendard-Regular", sans-serif;
  display:flex;
  align-items:center;
  background-color: transparent;
  &>img {
    height: 80%;
    background-color: transparent;
  }
`;
export const CommitteeViewShadow = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  background-color:rgba(0,0,0,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
`

export const CommitteeViewBox = styled.div`
  width: 90%;
  min-height:185px;
  position: absolute;
  top: calc(50% - 92px);
  left: calc(5%);
  background-color: #D9D9D9;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  padding: 10px;
`;
