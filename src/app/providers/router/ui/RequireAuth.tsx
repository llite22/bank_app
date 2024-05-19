import { getRouteLogin } from "@/shared/const/router";
import { AuthContext } from "@/shared/lib/context/AuthContext";
import { ReactNode, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div className="flex justify-center items-center w-full h-[100vh]">Loading...</div>;
  }

  if (!user) {
    return <Navigate to={getRouteLogin()} state={{ from: location }} replace />;
  }

  return children;
}
