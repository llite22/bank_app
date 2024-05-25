import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { AuthContext } from "@/shared/lib/context/AuthContext";
import { Button } from "@/shared/ui/Button/Button";
import { useContext } from "react";
import { DashboardMyCard } from "../DashboardMyCard/DashboardMyCard";
import { RecentTransactionList } from "../RecentTransactionList/RecentTransactionList";
import { WeeklyActivity } from "../WeeklyActivity/WeeklyActivity";
import { ExpenseStatistics } from "../ExpenseStatistics/ExpenseStatistics";
import { Page } from "@/widgets/Page";

const DashboardPage = () => {
  const { user, setUser } = useContext(AuthContext);

  const onLogout = () => {
    setUser?.(null);
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  };

  return (
    <Page>
      <div className="flex flex-row items-center w-full">
        <DashboardMyCard />
        <div className="grow">
          <RecentTransactionList />
        </div>
      </div>
      <div className="flex flex-row flex-wrap md:flex-nowrap gap-4">
        <div className="grow">
          <WeeklyActivity />
        </div>
        <div className="grow">
          <ExpenseStatistics />
        </div>
      </div>
      {user ? <div>Привет {user?.username}</div> : <div>Произошла ошибка</div>}
      <Button onClick={onLogout}>Выйти</Button>
    </Page>
  );
};

export default DashboardPage;
