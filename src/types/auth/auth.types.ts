import { BaseResponse } from "../utils/response.types";

export interface LoginResponse extends BaseResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface NewAccessTokenReponse extends BaseResponse {
  accessToken: string;
}
