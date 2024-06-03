import { Icon } from "@/shared/ui/Icon/Icon";
import LogoIcon from "@/shared/assets/icons/logo.svg?react";
import { sidebarItemsList } from "@/shared/const/sidebarItemsList";
import { SidebarItem } from "./SidebarItem/SidebarItem";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher";

export const Sidebar = () => {
  return (
    <aside className="relative min-w-[250px]">
      <div className="p-10">
        <Icon Svg={LogoIcon} />
      </div>
      <div className="flex flex-col gap-4 h-[70%]">
        {sidebarItemsList.map((item) =>
          item.disabled ? null : <SidebarItem key={item.path} item={item} />
        )}
      </div>
      <div className="flex flex-col items-center gap-4">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
      <div className="absolute top-0 right-0 h-full w-[4px] bg-gray-200"></div>
    </aside>
  );
};
