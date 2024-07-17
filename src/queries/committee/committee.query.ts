import { CommitteeData } from "src/repositories/committee/committeeRepository";
import committeeRepositoryImpl from "src/repositories/committee/committeeRepositoryImpl";
import { useMutation } from "react-query";


export const useCommitteeMuatation = () => {
  const mutation = useMutation((committeeData: CommitteeData) =>
    committeeRepositoryImpl.uploadCommittee(committeeData)
  );
  return mutation;
};
