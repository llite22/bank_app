import { Icon } from "@/shared/ui/Icon/Icon";
import { Input } from "@/shared/ui/Input/Input";
import { useLocation, useNavigate } from "react-router-dom";
import SettingIcon from "@/shared/assets/icons/settings.svg?react";
import NotificationIcon from "@/shared/assets/icons/notification.svg?react";
import searchIcon from "@/shared/assets/icons/search.svg?react";
import { Avatar, AvatarImage } from "@/shared/ui/Avatar/Avatar";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/DropdownMenu/DropdownMenu";
import { useContext } from "react";
import { AuthContext } from "@/shared/lib/context/AuthContext";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { useNotification } from "../api/notificationApi";
import { MoonLoader } from "react-spinners";

export const Navbar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    query: { data, isPending, isError },
  } = useNotification();

  const onLogout = () => {
    setUser?.(null);
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    navigate("/login");
  };

  const formattedPath = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  return (
    <header>
      <div className="flex items-center w-full gap-72 p-7">
        <h1 className="text-custom-blue text-2xl font-bold">{t(formattedPath)}</h1>
        <div className="flex items-center ml-auto gap-6">
          <Input
            placeholder={t("Search for something")}
            className="relative w-52 pl-12 h-10 rounded-2xl bg-gray-100 text-gray-400 placeholder-gray-400"
          />
          <Icon className="absolute ml-5" Svg={searchIcon} />
          <div className="bg-gray-100 rounded-full p-2 cursor-pointer">
            <Icon Svg={SettingIcon} className="hover:animate-spin" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-gray-100 rounded-full p-2 cursor-pointer">
              <div className="relative">
                <Icon Svg={NotificationIcon} />
                <div
                  className={`absolute top-0 right-0 w-3 h-3 rounded-full ${
                    data && data.data[0].count > 0
                      ? "bg-red-500 animate-pulse"
                      : ""
                  }`}
                ></div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-center">
                {t("Latest notifications")}
              </DropdownMenuLabel>
              {isPending && (
                <div className="flex justify-center items-center">
                  <MoonLoader color={"#36d7b7"} loading={true} size={40} />
                </div>
              )}
              {isError && (
                <div className="flex justify-center items-center h-[100vh]">
                  Error
                </div>
              )}
              {data &&
                data.data[0].notification.map((item) => (
                  <DropdownMenuItem className="cursor-pointer">
                    <div className="flex flex-col w-full gap-1 p-2">
                      <h1>{t(item.bank_name)}</h1>
                      <b>
                        {item.currency === "RUB" ? "₽" : "$"}
                        {item.amount}
                      </b>
                      <div className="flex flex-col">
                        <b>{t(item.transaction_type)}</b>
                        <b>{t(item.message)}</b>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-12 h-12 cursor-pointer">
                <AvatarImage
                  src="https://sun9-25.userapi.com/impg/Z6gcJmmNs7tOo3Mxn7Cle73q-gVUqtNBVvIXdw/tDgLSLbOJWU.jpg?size=1620x2160&quality=95&sign=7de71b03032e5355f26fd626c242ca92&type=album"
                  alt="avatar"
                />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-1 p-2">
              <DropdownMenuLabel>
                {t("Hi")} {user ? user.username : "error"}!
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout} className="cursor-pointer">
                {t("Logout")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <hr className="border-gray-200" />
    </header>
  );
};
