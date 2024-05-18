import { Suspense } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";

export const AppRouter = () => {
  const renderWithWrapper = (route: RouteProps) => {
    return <Route key={route.path} element={route.element} path={route.path} />;
  };

  return (
    <Suspense fallback={<div>fwfwr3wfre</div>}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};
export default AppRouter;
