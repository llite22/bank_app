import { BankCard } from "@/entities/BankCard";
import { useBankCard } from "@/entities/BankCard/api/bankCardApi";

export const DashboardMyCard = () => {
  const {
    query: { data, isPending },
  } = useBankCard();
  return (
    <div>
      <div className="flex items-center justify-between max-w-3xl p-4">
        <h1>My Cards</h1>
        <h1>See All</h1>
      </div>
      <div className="flex items-center w-full">
        <BankCard data={data?.data} isPending={isPending} />
        <BankCard data={data?.data} isPending={isPending} inverted />
      </div>
    </div>
  );
};
