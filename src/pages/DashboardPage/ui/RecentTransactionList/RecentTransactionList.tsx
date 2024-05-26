import { Card } from "@/shared/ui/Card/Card";
import { RecentTransactionItem } from "../RecentTransactionItem/RecentTransactionItem";

export const RecentTransactionList = () => {
  return (
    <div>
      <h1 className="pl-4 text-custom-blue text-xl font-bold">
        Recent Transaction
      </h1>
      <div className="p-4">
        <Card className="min-w-[350px] rounded-3xl">
          <RecentTransactionItem
            type={"deposit"}
            title={"Deposit from my Card"}
            date={"28 January 2024"}
            invoice={850}
          />
          <RecentTransactionItem
            type={"remittance"}
            title={"Jemi Wilson"}
            date={"21 January 2024"}
            invoice={5400}
          />
          <RecentTransactionItem
            type={"paypal"}
            title={"Deposit Paypal"}
            date={"21 January 2024"}
            invoice={2500}
          />
        </Card>
      </div>
    </div>
  );
};
