import { LoginResponse, NewAccessTokenReponse, SignData } from "@src/types/auth/auth.types";
import { AuthRepository, LoginData } from "./authRepository";
import CONFIG from "src/config/config.json";
import axios from "axios";

class AuthRepositoryImpl implements AuthRepository {
  public async login(loginData: LoginData): Promise<LoginResponse> {
    const { data } = await axios.post(`${CONFIG.serverUrl}/user/signin`, loginData);
    return data;
  }

  public async signup(signData: SignData): Promise<void> {
    const { data } = await axios.post(`${CONFIG.serverUrl}/user/signup`, signData);
    return data;
  }

  public async refreshAccessToken(refreshToken: {
    refreshToken: string;
  }): Promise<NewAccessTokenReponse> {
    const { data } = await axios.post(
      `${CONFIG.serverUrl}/auth/refresh`,
      refreshToken
    );
    return data;
  }
}

export default new AuthRepositoryImpl();
