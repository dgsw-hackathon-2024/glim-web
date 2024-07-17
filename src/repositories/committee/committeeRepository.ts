import { CommitteeResponse } from "@src/types/committee/committee.types";

export interface CommitteeRepository {
  uploadCommittee(committeeData: CommitteeData): Promise<CommitteeResponse>;
}

export interface CommitteeData {
  title: string;
  contents: string;
}
