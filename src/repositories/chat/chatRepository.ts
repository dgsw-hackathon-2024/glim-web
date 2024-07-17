export interface ChatbotRepository {
  chat(qestion: string): Promise<string>;
}
