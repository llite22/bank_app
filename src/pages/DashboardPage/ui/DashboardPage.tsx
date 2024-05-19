import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { AuthContext } from "@/shared/lib/context/AuthContext";
import { Button } from "@/shared/ui/Button/Button";
import { useContext } from "react";

const DashboardPage = () => {
  const { user, setUser } = useContext(AuthContext);
  const onLogout = () => {
    setUser?.(null);
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  };

  return (
    <>
      {user ? (
        <div>Привет {user?.username}</div>
      ) : (
        <div>Произошла ошибка</div>
      )}
      <Button onClick={onLogout}>Выйти</Button>
    </>
  );
};

export default DashboardPage;
