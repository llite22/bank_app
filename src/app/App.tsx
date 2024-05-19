import { Suspense, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AppRouter from "./providers/router/ui/AppRouter";
import { AuthContext } from "@/shared/lib/context/AuthContext";
import { useAuth } from "@/features/AuthByUsername/api/UserApi";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar/Sidebar";

function App() {
  const { setUser, setIsLoading, isLoading, user } = useContext(AuthContext);
  const {
    query: { refetch },
  } = useAuth();
  const { i18n } = useTranslation();
  const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  useEffect(() => {
    if (token) {
      setIsLoading?.(true);
      refetch()
        .then((response) => {
          if (response && response.data) {
            setUser?.(response.data.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setIsLoading?.(false);
        });
    }
  }, []);

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <div className="h-screen">
      <Suspense fallback="loading...">
        <div className="flex h-full">
          <Sidebar />
          {!isLoading && (user || !token) && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
