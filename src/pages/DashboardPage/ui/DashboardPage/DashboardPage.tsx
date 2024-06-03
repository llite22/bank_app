import { MyCard } from "../MyCard/MyCard";
import { RecentTransactionList } from "../RecentTransactionList/RecentTransactionList";
import { Page } from "@/widgets/Page";
import { WeeklyActivity } from "../WeeklyActivity";
import { ExpenseStatistics } from "../ExpenseStatistics";
import { BalanceHistory } from "../BalanceHistory";

const DashboardPage = () => {
  return (
    <Page>
      <div className="flex w-full">
        <MyCard />
        <RecentTransactionList />
      </div>
      <div className="flex w-full flex-wrap">
        <WeeklyActivity />
        <ExpenseStatistics />
        <BalanceHistory />
      </div>
    </Page>
  );
};

export default DashboardPage;
