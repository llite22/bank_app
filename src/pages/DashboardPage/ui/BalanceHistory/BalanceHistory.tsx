import { Card } from "@/shared/ui/Card/Card";
import ReactECharts from "echarts-for-react";
import { useBalance } from "../../model/api/balanceApi";

export const BalanceHistory = () => {
  const {
    query: { data, isPending },
  } = useBalance();

  if (isPending) {
    return (
      <div className="flex justify-center items-center w-full h-[100vh]">
        Loading...
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
