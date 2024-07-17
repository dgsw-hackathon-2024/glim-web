import { useMutation } from "react-query";
import lawAnalyzeRepositoryImpl from "src/repositories/lawAnalyze/lawAnalyzeRepositoryImpl";

export const useAnalyzeMuatation = () => {
  const mutation = useMutation((analyzeData: string | undefined) =>
    lawAnalyzeRepositoryImpl.sendQuestion(analyzeData)
  );
  return mutation;
};
