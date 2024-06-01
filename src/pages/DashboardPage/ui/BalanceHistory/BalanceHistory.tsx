import { Card } from "@/shared/ui/Card/Card";
import ReactECharts from "echarts-for-react";

export const BalanceHistory = () => {
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
        data: [
          820, 932, 901, 934, 1290, 1330, 1600, 820, 932, 901, 934, 1290, 1330,
        ],
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
