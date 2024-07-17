import Header from "../../common/header";
import * as S from "./style";
import UploadOn from "src/assets/uploadOn.svg";
import UploadOff from "src/assets/uploadOff.svg";
import { useEffect, useState } from "react";
import useAnalyze from "src/hooks/lawAnalyze/useLawAnalyze";
import TabBar from "../../common/tabBar";
import ChatBotButton from "src/components/common/chatbotButton";
import ReactMarkDown from "react-markdown";

const LawAnalyze = () => {
  const [uploadEnable, setUploadEnable] = useState(false);

  const { ...analyze } = useAnalyze();

  const handleSubmit = () => {
    if (uploadEnable) {
      analyze.onSubmit();
    }
  };

  useEffect(() => {
    if (analyze.questionData && analyze.questionData.length > 0) {
      setUploadEnable(true);
    } else {
      setUploadEnable(false);
    }
  }, [analyze.questionData]);

  return (
    <S.Container>
      <Header />
      <S.View>
        <TabBar />
        <S.PageWordWrap>
          <S.PageTitle>Ai 정책 시뮬레이션</S.PageTitle>
          <S.PageDescription>
            AI를 활용해 정책의 시행 시 발생하는
            <br />
            이점과 결점을 시뮬레이션 해드립니다.
          </S.PageDescription>
        </S.PageWordWrap>
        <S.DetailTitle>궁금한 정책을 입력해 주세요.</S.DetailTitle>
        <S.DetailWrap>
          <S.QuestionInputWrap>
            <S.QuestionInput placeholder="어떤 것이 궁금한가요?" onChange={analyze.handleUploadData} />
            <S.UploadButton src={uploadEnable && !analyze.isLoading ? UploadOn : UploadOff} onClick={handleSubmit} />
            <ChatBotButton />
          </S.QuestionInputWrap>
          <S.AnserWrap>
            <ReactMarkDown>{analyze.response}</ReactMarkDown>
          </S.AnserWrap>
        </S.DetailWrap>
      </S.View>
      <ChatBotButton />
    </S.Container>
  );
};

export default LawAnalyze;
