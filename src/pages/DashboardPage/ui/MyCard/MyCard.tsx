import { BankCard } from "@/entities/BankCard";
import { useBankCard } from "@/entities/BankCard/api/bankCardApi";

export const MyCard = () => {
  const {
    query: { data, isPending },
  } = useBankCard();

  return (
    <div>
      <div className="flex items-center justify-between max-w-3xl">
        <h1 className="text-custom-blue text-xl font-bold pl-4">My Cards</h1>
        <h1 className="text-custom-blue text-xl font-bold pr-4">See All</h1>
      </div>
      <div className="flex items-center w-full">
        <BankCard data={data?.data[0]} isPending={isPending} />
        <BankCard data={data?.data[0]} isPending={isPending} inverted />
      </div>
    </div>
  );
};
