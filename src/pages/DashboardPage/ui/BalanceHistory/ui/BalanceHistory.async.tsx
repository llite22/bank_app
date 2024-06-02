import { lazy, Suspense } from "react";

export const BalanceHistoryLazy = lazy(() => import("./BalanceHistory"));

export const BalanceHistoryAsync = () => {
  return (
    <Suspense fallback={""}>
      <BalanceHistoryLazy />
    </Suspense>
  );
};
