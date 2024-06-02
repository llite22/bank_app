import { Card } from "@/shared/ui/Card/Card";
import ReactECharts from "echarts-for-react";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Theme } from "@/shared/types/theme";
import { useTransaction } from "../../../model/api/transactionApi";

const WeeklyActivity = () => {
  const { theme } = useTheme();
  const {
    query: { data, isPending },
  } = useTransaction();

  if (isPending) {
    return (
      <div className="flex justify-center items-center w-full h-[100vh]">
        Loading...
      </div>
    );
  }

  const series = [
    {
      data: data?.data[0].transactions.map((t) => t.deposit) || [],
      type: "bar",
      stack: "1",
      name: "Deposit",
      barWidth: 15,
    },
    {
      data: data?.data[0].transactions.map((t) => t.withdraw) || [],
      type: "bar",
      stack: "2",
      name: "Withdraw",
      barWidth: 15,
    },
  ];

  const stackInfo: {
    [key: string]: { stackStart: number[]; stackEnd: number[] };
  } = {};
  for (let i = 0; i < series[0].data.length; ++i) {
    for (let j = 0; j < series.length; ++j) {
      const stackName = series[j].stack;
      if (!stackName) {
        continue;
      }
      if (!stackInfo[stackName]) {
        stackInfo[stackName] = {
          stackStart: [],
          stackEnd: [],
        };
      }
      const info = stackInfo[stackName];
      const data = series[j].data[i];
      if (data && data !== "-") {
        if (info.stackStart[i] == null) {
          info.stackStart[i] = j;
        }
        info.stackEnd[i] = j;
      }
    }
  }
  for (let i = 0; i < series.length; ++i) {
    const data = series[i].data as
      | number[]
      | { value: number; itemStyle: object }[];
    const info = stackInfo[series[i].stack];
    for (let j = 0; j < series[i].data.length; ++j) {
      // const isStart = info.stackStart[j] === i;
      const isEnd = info.stackEnd[j] === i;
      const topBorder = isEnd ? 20 : 0;
      const bottomBorder = 0;
      data[j] = {
        value: data[j] as number,
        itemStyle: {
          borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
        },
      };
    }
  }

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    legend: {
      data: ["Deposit", "Withdraw"],
      orient: "horizontal",
      x: "right",
      y: "top",
      textStyle: {
        color: `${theme === Theme.LIGHT ? "#000" : "#fff"}`,
      },
    },
    series: series as any,
  };

  return (
    <div className="p-4">
      <h1 className="pt-4 pb-4 text-custom-blue text-xl font-bold">
        Weekly Activity
      </h1>
      <Card className="rounded-3xl p-4 min-w-[730px]">
        <ReactECharts option={option} />
      </Card>
    </div>
  );
};

export default WeeklyActivity;
