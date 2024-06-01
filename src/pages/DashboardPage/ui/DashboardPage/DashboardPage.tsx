import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { AuthContext } from "@/shared/lib/context/AuthContext";
import { Button } from "@/shared/ui/Button/Button";
import { useContext } from "react";
import { MyCard } from "../MyCard/MyCard";
import { RecentTransactionList } from "../RecentTransactionList/RecentTransactionList";
import { WeeklyActivity } from "../WeeklyActivity/WeeklyActivity";
import { ExpenseStatistics } from "../ExpenseStatistics/ExpenseStatistics";
import { Page } from "@/widgets/Page";
import { BalanceHistory } from "../BalanceHistory/BalanceHistory";

const DashboardPage = () => {
  const { user, setUser } = useContext(AuthContext);

  const onLogout = () => {
    setUser?.(null);
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  };

  return (
    <Page>
      <div className="flex items-center w-full">
        <MyCard />
        <RecentTransactionList />
      </div>
      <div className="flex w-full flex-wrap">
        <WeeklyActivity />
        <ExpenseStatistics />
        <BalanceHistory />
      </div>
      {user ? <div>Привет {user?.username}</div> : <div>Произошла ошибка</div>}
      <Button onClick={onLogout}>Выйти</Button>
    </Page>
  );
};

export default DashboardPage;
