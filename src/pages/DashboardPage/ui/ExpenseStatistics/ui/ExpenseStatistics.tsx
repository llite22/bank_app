import { Card } from "@/shared/ui/Card/Card";
import ReactECharts from "echarts-for-react";
import { useStatisctics } from "../../../model/api/staticticsApi";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

const ExpenseStatistics = () => {
  const {
    query: { data, isPending, isError },
  } = useStatisctics();

  if (isPending) {
    return (
      <div className="min-w-[350px] mt-20 ml-9">
        <Skeleton className="h-[330px] rounded-3xl" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 min-w-[350px]">
        <h1 className="flex justify-center items-center h-[330px]">
          There was an error
        </h1>
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
          color: "#fff",
          fontWeight: "bold",
          padding: [0, 0, 0],
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

export default ExpenseStatistics;
