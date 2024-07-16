import { BaseResponse } from "../utils/response.types";

export interface LoginResponse extends BaseResponse {
  type: string;
  token: string;
  id: number;
  email: string;
  name: string;
  teacher: false;
}

export interface NewAccessTokenReponse extends BaseResponse {
  accessToken: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignData {
  email: string;
  password: string;
}
