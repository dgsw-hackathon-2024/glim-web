import { LoginData } from "@src/repositories/auth/authRepository";
import authRepositoryImpl from "src/repositories/auth/authRepositoryImpl";
import { useMutation } from "react-query";

export const useLoginMuatation = () => {
  const mutation = useMutation((loginData: LoginData) => authRepositoryImpl.login(loginData));
  return mutation;
};
