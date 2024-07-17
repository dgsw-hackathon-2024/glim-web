export interface LawAnalyzeRepository {
  sendQuestion(analyzeData: string): Promise<string>;
}

