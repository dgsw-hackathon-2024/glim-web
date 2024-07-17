import dearAxios from "src/libs/axios/customAxios";
import { ReportData, ReportRepository } from "./reportRepository";
import { ReportListData, ReportListResponse } from "@src/types/report/report.types";

class ReportRepositoryImpl implements ReportRepository {
  public async postReport(reportData: ReportData): Promise<void> {
    const { data } = await dearAxios.post("/report/create", reportData);
    return data;
  }
  public async getReport(): Promise<ReportListResponse> {
    const { data } = await dearAxios.get("/report/list");
    return data;
  }

  public async getReportDetail(id: number): Promise<ReportListData> {
    const { data } = await dearAxios.get(`/report/list/${id}`);
    return data;
  }
}

export default new ReportRepositoryImpl();
