import { Card } from "@/shared/ui/Card/Card";
import { RecentTransactionItem } from "../RecentTransactionItem/RecentTransactionItem";
import { useRecent } from "../../model/api/recentApi";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const RecentTransactionList = () => {
  const { data, isPending, isError } = useRecent();

  if (isPending) {
    return (
      <div className="min-w-[350px]">
        <h1 className="pl-4 pb-3 text-custom-blue text-xl font-bold">
          Recent Transaction
        </h1>
        <div className="p-3">
          <Skeleton className="w-[325px] h-[60px]" />
        </div>
        <div className="p-3">
          <Skeleton className="w-[325px] h-[60px]" />
        </div>
        <div className="p-3">
          <Skeleton className="w-[325px] h-[60px]" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 className="pl-4 text-custom-blue text-xl font-bold">
          Recent Transaction
        </h1>
        <div className="min-w-[350px] p-4">
          <h1 className="flex justify-center items-center h-[240px]">
            There was an error
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="pl-4 text-custom-blue text-xl font-bold">
        Recent Transaction
      </h1>
      <div className="p-4">
        <Card className="min-w-[350px] h-[245px] rounded-3xl">
          {data &&
            data.recent_transactions.map((item, index) => (
              <RecentTransactionItem
                type={item.type}
                title={item.title}
                date={item.date}
                invoice={item.transaction}
                key={index}
              />
            ))}
        </Card>
      </div>
    </div>
  );
};
