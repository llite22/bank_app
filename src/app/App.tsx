import { Suspense, useContext, useEffect } from "react";
import AppRouter from "./providers/router/ui/AppRouter";
import { AuthContext } from "@/shared/lib/context/AuthContext";
import { useAuth } from "@/features/AuthByUsername/api/UserApi";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar/Sidebar";
import { Navbar } from "@/widgets/Navbar";
import { MoonLoader } from "react-spinners";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Theme } from "@/shared/types/theme";

const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
function App() {
  const { setUser, setIsLoading, isLoading, user } = useContext(AuthContext);
  const { theme } = useTheme();
  const {
    query: { refetch },
  } = useAuth();

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add(Theme.DARK);
    } else {
      document.documentElement.classList.remove(Theme.DARK);
    }
  }, [theme]);

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

  return (
    <div className="bg-white dark:bg-black">
      <Suspense
        fallback={
          <div className="flex w-full justify-center items-center h-[100vh]">
            <MoonLoader color={"#36d7b7"} loading={true} size={70} />
          </div>
        }
      >
        <div className="flex dark:bg-black">
          {user && <Sidebar />}
          <div className="flex flex-col w-full">
            {user && <Navbar />}
            {!isLoading  && <AppRouter />}
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
