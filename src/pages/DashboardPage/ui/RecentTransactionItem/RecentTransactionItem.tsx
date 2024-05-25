import { CardContent } from "@/shared/ui/Card/Card";
import { Icon } from "@/shared/ui/Icon/Icon";
import DepositIcon from "@/shared/assets/icons/deposit.svg?react";

export const RecentTransactionItem = () => {
  return (
    <CardContent className="flex w-full items-center gap-2 p-3 pb-[14px]">
      <Icon Svg={DepositIcon} />
      <div>
        <h1>Deposit from my Card</h1>
        <p>28 January 2021</p>
      </div>
      <p>-$500</p>
    </CardContent>
  );
};
