import { Card } from "@/shared/ui/Card/Card";
import { RecentTransactionItem } from "../RecentTransactionItem/RecentTransactionItem";
import { useRecent } from "../../model/api/recentApi";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const RecentTransactionList = () => {
  const {
    query: { data, isPending },
  } = useRecent();

  if (isPending) {
    return (
      <div className="min-w-[350px] pt-4">
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

  return (
    <div>
      <h1 className="pl-4 text-custom-blue text-xl font-bold">
        Recent Transaction
      </h1>
      <div className="p-4">
        <Card className="min-w-[350px] h-[245px] rounded-3xl">
          {data &&
            data.data[0].recent_transactions.map((item, index) => (
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
