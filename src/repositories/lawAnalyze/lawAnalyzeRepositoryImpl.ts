import CONFIG from "src/config/config.json";
import axios from "axios";

class AnalyzeRepositoryImpl {
  public async sendQuestion(analyzeData: string | undefined): Promise<string> {
    const { data } = await axios.post(
      `${CONFIG.serverUrl}/ai/simulate`,
      analyzeData
    );
    return data;
  }
}

export default new AnalyzeRepositoryImpl();
