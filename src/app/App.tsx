import { Suspense } from "react";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import AppRouter from "./providers/router/ui/AppRouter";

function App() {
  const { i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <div className="flex justify-center">
      <Suspense fallback="loading...">
        <AppRouter />
        <Button onClick={onToggle}>Язык</Button>
      </Suspense>
    </div>
  );
}

export default App;
