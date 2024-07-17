import { CommitteeRepository, CommitteeData } from "./committeeRepository";
import CONFIG from "src/config/config.json";
import axios from "axios";
import { CommitteeResponse } from "src/types/committee/committee.types";

class CommitteeRepositoryImpl implements CommitteeRepository {
  public async uploadCommittee(committeeData: CommitteeData): Promise<CommitteeResponse> {
    const { data } = await axios.post(
      `${CONFIG.serverUrl}/petition/create`,
      committeeData
    );
    return data;
  }
}

export default new CommitteeRepositoryImpl();
