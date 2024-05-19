import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AuthContext } from "@/shared/lib/context/AuthContext";
import { SidebarItemType } from "@/widgets/Sidebar/model/sidebar";
import { useLocation } from "react-router-dom";
import { Icon } from "@/shared/ui/Icon/Icon";

interface SidebarItemProps {
  item: SidebarItemType;
  authOnly?: boolean;
  location?: string;
}

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (item.authOnly && !user) {
    return null;
  }

  return (
    <AppLink className="flex items-center gap-8" to={item.path}>
      <div
        className={`h-10 w-1 rounded-r-lg ${
          pathname === item.path ? "bg-blue-500" : ""
        }`}
      ></div>
      <Icon
        Svg={item.Icon}
        className={pathname === item.path ? "fill-blue-600" : "fill-gray-400"}
      />
      <span
        className={pathname === item.path ? "text-blue-600" : "text-gray-400"}
      >
        {t(item.text)}
      </span>
    </AppLink>
  );
};
