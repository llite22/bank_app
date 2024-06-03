import { Button } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@/shared/assets/icons/language.svg?react";

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div>
      <Button onClick={toggle} variant="ghost">
        <Icon Svg={LanguageIcon} className="cursor-pointer" />
      </Button>
    </div>
  );
};
