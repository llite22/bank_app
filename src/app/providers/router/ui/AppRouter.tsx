import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import { AppRoutesProps } from "@/shared/types/router";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  const renderWithWrapper = (route: AppRoutesProps) => {
    return (
      <Route
        key={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>{route.element}</RequireAuth>
          ) : (
            route.element
          )
        }
        path={route.path}
      />
    );
  };

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-[100vh]">
          loading...
        </div>
      }
    >
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};
export default AppRouter;
