import { CardContent } from "@/shared/ui/Card/Card";
import { Icon } from "@/shared/ui/Icon/Icon";
import DepositIcon from "@/shared/assets/icons/deposit.svg?react";
import PayPalIcon from "@/shared/assets/icons/paypal.svg?react";
import RemittanceIcon from "@/shared/assets/icons/remittance.svg?react";

export const RecentTransactionItem = ({
  type,
  title,
  date,
  invoice,
}: {
  type: string;
  title: string;
  date: string;
  invoice: string;
}) => {
  return (
    <CardContent className="flex w-full items-center gap-4 p-3">
      <Icon
        Svg={
          type === "deposit"
            ? DepositIcon
            : type === "remittance"
            ? RemittanceIcon
            : PayPalIcon
        }
      />
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
      <p className="ml-auto">{invoice}</p>
    </CardContent>
  );
};
