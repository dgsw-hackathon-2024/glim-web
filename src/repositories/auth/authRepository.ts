import { LoginResponse, NewAccessTokenReponse } from "src/types/auth/auth.types";

export interface AuthRepository {
  login(loginData: LoginData): Promise<LoginResponse>;
  refreshAccessToken(refreshToken: { refreshToken: string }): Promise<NewAccessTokenReponse>;
}

export interface LoginData {
  email: string;
  password: string;
}
