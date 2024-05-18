import { Suspense } from "react";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <div className="flex justify-center">
      <Suspense fallback="loading...">
        <h1>{t("Hello")}</h1>
        <Button onClick={onToggle}>Язык</Button>
      </Suspense>
    </div>
  );
}

export default App;
