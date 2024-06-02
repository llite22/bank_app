import { lazy, Suspense } from "react";

export const WeeklyActivityLazy = lazy(() => import("./WeeklyActivity"));

export const WeeklyActivityAsync = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeeklyActivityLazy />
    </Suspense>
  );
};
