import { ReportListData, ReportListResponse } from "src/types/report/report.types";

export interface ReportRepository {
  postReport(reportData: ReportData): Promise<void>;
  getReport(): Promise<ReportListResponse>;
  getReportDetail(id: number): Promise<ReportListData>;
}

export interface ReportData {
  title: string;
  contents: string;
}
