import { useTranslation } from "react-i18next";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <h1>{t("Страница не найдена")}</h1>
    </div>
  );
};
