import dynamic from "next/dynamic";
import React from "react";
import Loader from "../common/Loader";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const labels = ["Completed", "In Progress", "Not Started"];

function getChartData(data) {
  const series = [data.completed, data.inProgress, data.notStarted];

  return {
    series,
    options: {
      chart: {
        width: "100%",
        height: "100%",
        type: "radialBar",
        sparkline: {
          enabled: true,
        },
      },
      colors: ["#009933", "#FA8B0C", "#ff1a1a"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "28%",
          },
          track: {
            show: true,
            margin: 11,
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: 20,
            },
            value: {
              fontSize: "24px",
              fontFamily: '"Jost", sans-serif',
              fontWeight: 600,
              offsetY: -21,
              formatter(val) {
                return `${val}`;
              },
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "16px",
              fontFamily: '"Jost", sans-serif',
              fontWeight: 500,
              color: "#404040",
              formatter() {
                return `${data.total}`;
              },
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      grid: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      labels,
    },
  };
}

const ProjectChart = ({ data }) => {
  if (!data)
    return (
      <div className="inline-flex justify-center text-lg font-semibold text-blue-600">
        <Loader />
      </div>
    );

  const chartData = getChartData(data);

  return (
    <div className="w-80 h-80 mx-auto">
      <div className="flex flex-row gap-2 justify-center">
        {chartData.series.map((value, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: chartData.options.colors[index],
                  borderRadius: "50%",
                }}
              />
              <span>{labels[index]}</span>
            </div>
          );
        })}
      </div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

export default ProjectChart;
