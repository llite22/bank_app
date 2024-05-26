import { Card } from "@/shared/ui/Card/Card";
import ReactECharts from "echarts-for-react";
import { useStatisctics } from "../../model/api/staticticsApi";
export const ExpenseStatistics = () => {
  const {
    query: { data, isPending },
  } = useStatisctics();

  if (isPending) {
    return (
      <div className="flex justify-center items-center w-full h-[100vh]">
        Loading...
      </div>
    );
  }

  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "95%",
        data: data?.data[0].statistics,
        label: {
          show: true,
          position: "inside", // Разместить метки внутри
          formatter: "{b}\n{d}%", // Форматирование меток с названиями и процентами
          textStyle: {
            color: "#fff",
            fontWeight: "bold",
            padding: [0, 0, 0],
          },
        },
        emphasis: {
          itemStyle: {
            borderColor: "#fff",
          },
        },
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="pt-4 pb-4 text-custom-blue text-xl font-bold">
        Expense Statistics
      </h1>
      <Card className="rounded-3xl p-4 min-w-[350px]">
        <ReactECharts option={option} />
      </Card>
    </div>
  );
};
