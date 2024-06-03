import { Card } from "@/shared/ui/Card/Card";
import ReactECharts from "echarts-for-react";
import { useBalance } from "../../../model/api/balanceApi";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

const BalanceHistory = () => {
  const {
    query: { data, isPending, isError },
  } = useBalance();

  if (isPending) {
    return (
      <div className="min-w-[730px] mt-20 ml-4">
        <Skeleton className="h-[330px] rounded-3xl" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 min-w-[720px]">
        <h1 className="flex justify-center items-center h-[330px]">
          There was an error
        </h1>
      </div>
    );
  }

  const option = {
    xAxis: {
      type: "category",
      data: [
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data && data.data[0].history.map((t) => t.balance),
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="pt-4 pb-4 text-custom-blue text-xl font-bold">
        Balance History
      </h1>
      <Card className="rounded-3xl p-4 min-w-[730px]">
        <ReactECharts option={option} />
      </Card>
    </div>
  );
};

export default BalanceHistory;
