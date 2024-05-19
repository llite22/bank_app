import {
  AppRoutes,
  getRouteDashboard,
  getRouteLogin,
} from "@/shared/const/router";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { LoginPage } from "@/pages/LoginPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { AppRoutesProps } from "@/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.Login]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },

  [AppRoutes.Dashboard]: {
    path: getRouteDashboard(),
    element: <DashboardPage />,
    authOnly: true,
  },

  [AppRoutes.Not_Found]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
