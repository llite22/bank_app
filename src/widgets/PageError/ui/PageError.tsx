import { Button } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

export function PageError() {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
}
