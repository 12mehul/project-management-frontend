import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const labels = ["Todo", "In Progress", "In Review", "Completed"];
const colors = ["#3b82f6", "#eab308", "#FA8B0C", "#009933"];

function getChartData() {
  return {
    series: [
      {
        name: "Tasks",
        data: [10, 20, 15, 5],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: colors,
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: labels,
      },
      yaxis: {
        title: {
          text: "Number of Tasks",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " tasks";
          },
        },
      },
    },
  };
}

const TaskChart = () => {
  const chartData = getChartData();

  return (
    <div className="w-full h-[400px] sm:w-[400px] sm:h-[600px] md:w-[500px] md:h-[800px] lg:w-[600px] mx-auto">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default TaskChart;
