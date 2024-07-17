import dearAxios from "src/libs/axios/customAxios";
import { ChatbotRepository } from "./chatRepository";

class ChatbotRepositoryImpl implements ChatbotRepository {
  public async chat(qestion: string): Promise<string> {
    const { data } = await dearAxios.post("/ai/chat", qestion);
    return data;
  }
}

export default new ChatbotRepositoryImpl();
