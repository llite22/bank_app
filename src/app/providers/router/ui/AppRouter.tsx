import { Suspense, useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import { AppRoutesProps } from "@/shared/types/router";
import { RequireAuth } from "./RequireAuth";
import { AuthContext } from "@/shared/lib/context/AuthContext";
import { getRouteDashboard, getRouteLogin } from "@/shared/const/router";

export const AppRouter = () => {
  const { pathname } = useLocation();
  const { user } = useContext(AuthContext);

  if (user && pathname === getRouteLogin()) {
    return <Navigate to={getRouteDashboard()} replace />;
  }
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
