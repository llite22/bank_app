import { Card } from "@/shared/ui/Card/Card";
import { RecentTransactionItem } from "../RecentTransactionItem/RecentTransactionItem";
import { useRecent } from "../../model/api/recentApi";

export const RecentTransactionList = () => {
  const {
    query: { data, isPending },
  } = useRecent();

  if (isPending) {
    return (
      <div className="flex justify-center items-center w-full h-[100vh]">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <h1 className="pl-4 text-custom-blue text-xl font-bold">
        Recent Transaction
      </h1>
      <div className="p-4">
        <Card className="min-w-[350px] rounded-3xl">
          {data &&
            data.data[0].recent_transactions.map((item) => (
              <RecentTransactionItem
                type={item.type}
                title={item.title}
                date={item.date}
                invoice={item.transaction}
              />
            ))}
        </Card>
      </div>
    </div>
  );
};
