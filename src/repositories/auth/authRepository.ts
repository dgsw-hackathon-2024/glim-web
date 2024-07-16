import {
  LoginResponse,
  NewAccessTokenReponse,
  SignData,
} from "src/types/auth/auth.types";

export interface AuthRepository {
  login(loginData: LoginData): Promise<LoginResponse>;
  signup(signData: SignData): Promise<void>;
  refreshAccessToken(refreshToken: {
    refreshToken: string;
  }): Promise<NewAccessTokenReponse>;
}

export interface LoginData {
  email: string;
  password: string;
}
