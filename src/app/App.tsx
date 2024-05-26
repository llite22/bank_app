import { Suspense, useContext, useEffect } from "react";
import AppRouter from "./providers/router/ui/AppRouter";
import { AuthContext } from "@/shared/lib/context/AuthContext";
import { useAuth } from "@/features/AuthByUsername/api/UserApi";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar/Sidebar";
import { Navbar } from "@/widgets/Navbar";

function App() {
  const { setUser, setIsLoading, isLoading, user } = useContext(AuthContext);
  const {
    query: { refetch },
  } = useAuth();
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

  return (
    <div className="bg-white dark:bg-black">
      <Suspense fallback="loading...">
        <div className="flex">
          {user && <Sidebar />}
          <div className="flex flex-col w-full">
            {user && <Navbar />}
            {!isLoading && (user || !token) && <AppRouter />}
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
