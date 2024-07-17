import { ReportData } from "src/repositories/main/report/reportRepository";
import { useMutation, useQueries } from "react-query";
import reportRepositoryImpl from "src/repositories/main/report/reportRepositoryImpl";
import { QUERY_KEYS } from "src/queries/QuerKeys";

export const postReportMutation = () => {
  const mutation = useMutation((reportData: ReportData) => reportRepositoryImpl.postReport(reportData));
  return mutation;
};

export const useGetReportQuery = () =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.report.getReport],
      queryFn: () => reportRepositoryImpl.getReport(),
      suspense: true,
    },
  ]);

export const useGetReportDetailQuery = (id: number) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.report.getReport],
      queryFn: () => reportRepositoryImpl.getReportDetail(id),
      suspense: true,
    },
  ]);
