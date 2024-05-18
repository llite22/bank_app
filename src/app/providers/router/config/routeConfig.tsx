import { AppRoutes } from "@/shared/const/router";
import { RouteProps } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Not_Found]: {
        path: "*",
        element: <NotFoundPage/>,
    },
};