import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-custom">
        <h1>{t("Страница не найдена")}</h1>
      </div>
    </Page>
  );
};
