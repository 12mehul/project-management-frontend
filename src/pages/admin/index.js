import React from "react";
import OverviewData from "@/components/dashboard/OverviewData";
import BreadcrumbItems from "@/components/common/BreadcrumbItems";
import ProjectChart from "@/components/dashboard/ProjectChart";
import TaskChart from "@/components/dashboard/TaskChart";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl pl-2 border-l-4 font-sans font-bold text-black border-purple-600">
          Dashboard
        </h1>
        <BreadcrumbItems />
      </div>
      <div>
        <OverviewData />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 md:justify-center">
          <ProjectChart />
          <TaskChart />
        </div>
      </div>
    </div>
  );
}
