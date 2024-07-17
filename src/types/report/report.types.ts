import { BaseResponse } from "../utils/response.types";

export interface UploadReportData {
  title: string;
  content: string;
}

export interface ReportListData {
  id: number;
  title: string;
  contents: string;
}

export interface ReportListResponse extends BaseResponse {
  data: ReportListData[];
}
