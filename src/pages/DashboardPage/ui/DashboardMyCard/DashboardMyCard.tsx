import { BankCard } from "@/entities/BankCard";
import { useBankCard } from "@/entities/BankCard/api/bankCardApi";

export const DashboardMyCard = () => {
  const {
    query: { data, isPending },
  } = useBankCard();

  if (isPending) {
    return (
      <div className="flex justify-center items-center w-full h-[100vh]">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between max-w-3xl">
        <h1 className="text-custom-blue text-xl font-bold pl-4">My Cards</h1>
        <h1 className="text-custom-blue text-xl font-bold pr-4">See All</h1>
      </div>
      <div className="flex items-center w-full">
        <BankCard data={data?.data} isPending={isPending} />
        <BankCard data={data?.data} isPending={isPending} inverted />
      </div>
    </div>
  );
};
