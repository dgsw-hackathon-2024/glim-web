import { LoginData } from "@src/repositories/auth/authRepository";
import authRepositoryImpl from "src/repositories/auth/authRepositoryImpl";
import { useMutation } from "react-query";
import { SignData } from "@src/types/auth/auth.types";

export const useLoginMuatation = () => {
  const mutation = useMutation((loginData: LoginData) => authRepositoryImpl.login(loginData));
  return mutation;
};

export const useSignMuatation = () => {
  const mutation = useMutation((signData: SignData) =>
    authRepositoryImpl.signup(signData)
  );
  return mutation;
};