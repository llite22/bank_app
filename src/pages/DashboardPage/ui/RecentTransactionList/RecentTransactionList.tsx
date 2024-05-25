import { Card } from "@/shared/ui/Card/Card";
import { RecentTransactionItem } from "../RecentTransactionItem/RecentTransactionItem";

export const RecentTransactionList = () => {
  return (
    <div>
      <h1 className="flex items-center p-4">Recent Transaction</h1>
      <div className="p-4">
        <Card className="max-w-[350px] rounded-3xl">
          <RecentTransactionItem />
          <RecentTransactionItem />
          <RecentTransactionItem />
        </Card>
      </div>
    </div>
  );
};
