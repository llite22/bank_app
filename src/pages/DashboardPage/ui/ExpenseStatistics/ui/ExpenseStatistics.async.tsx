import { lazy, Suspense } from "react";

export const ExpenseStatisticsLazy = lazy(() => import("./ExpenseStatistics"));

export const ExpenseStatisticsAsync = () => {
  return (
    <Suspense fallback={""}>
      <ExpenseStatisticsLazy />
    </Suspense>
  );
};
