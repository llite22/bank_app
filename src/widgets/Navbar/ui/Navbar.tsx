import { Icon } from "@/shared/ui/Icon/Icon";
import { Input } from "@/shared/ui/Input/Input";
import { useLocation } from "react-router-dom";
import SettingIcon from "@/shared/assets/icons/settings.svg?react";
import NotificationIcon from "@/shared/assets/icons/notification.svg?react";
import searchIcon from "@/shared/assets/icons/search.svg?react";
import { Avatar, AvatarImage } from "@/shared/ui/Avatar/Avatar";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const formattedPath = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  return (
    <div>
      <div className="flex items-center w-full gap-72 p-7">
        <h1 className="text-custom-blue text-2xl font-bold">{formattedPath}</h1>
        <div className="flex items-center ml-auto gap-6">
          <Input
            placeholder={t("Search for something")}
            className="relative w-52 pl-12 h-10 rounded-2xl bg-gray-100 text-gray-400 placeholder-gray-400"
          />
          <Icon className="absolute ml-5" Svg={searchIcon} />
          <div className="bg-gray-100 rounded-full p-2 cursor-pointer">
            <Icon Svg={SettingIcon} className="hover:animate-spin" />
          </div>
          <div className="bg-gray-100 rounded-full p-2 cursor-pointer">
            <Icon Svg={NotificationIcon} className="hover:animate-bounce" />
          </div>
          <Avatar className="w-12 h-12 cursor-pointer">
            <AvatarImage
              src="https://sun9-25.userapi.com/impg/Z6gcJmmNs7tOo3Mxn7Cle73q-gVUqtNBVvIXdw/tDgLSLbOJWU.jpg?size=1620x2160&quality=95&sign=7de71b03032e5355f26fd626c242ca92&type=album"
              alt="avatar"
            />
          </Avatar>
        </div>
      </div>
      <hr className="border-gray-200" />
    </div>
  );
};
