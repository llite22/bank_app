import { Icon } from "@/shared/ui/Icon/Icon";
import LogoIcon from "@/shared/assets/icons/logo.svg?react";
import { sidebarItemsList } from "@/shared/const/sidebarItemsList";
import { SidebarItem } from "./SidebarItem/SidebarItem";

export const Sidebar = () => {
  return (
    <aside className="relative w-[250px]">
      <div className="p-10">
        <Icon Svg={LogoIcon} />
      </div>
      <div className="flex flex-col gap-4">
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </div>
      <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
    </aside>
  );
};
