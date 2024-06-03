import {
  AppRoutes,
  getRouteDashboard,
  getRouteLogin,
  getRouteSetting,
} from "@/shared/const/router";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { LoginPage } from "@/pages/LoginPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { AppRoutesProps } from "@/shared/types/router";
import { SettingPage } from "@/pages/SettingPage";

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

  [AppRoutes.Setting]: {
    path: getRouteSetting(),
    element: <SettingPage />,
    authOnly: true,
  },

  [AppRoutes.Not_Found]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
