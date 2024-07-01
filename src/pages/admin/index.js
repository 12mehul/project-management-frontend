import React, { useEffect, useState } from "react";
import OverviewData from "@/components/dashboard/OverviewData";
import BreadcrumbItems from "@/components/common/BreadcrumbItems";
import ProjectChart from "@/components/dashboard/ProjectChart";
import TaskChart from "@/components/dashboard/TaskChart";
import axios from "axios";

export default function Dashboard() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [data, setData] = useState("");

  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  const fetchDashboardData = async (userId) => {
    try {
      const response = await axios.get(
        `${apiUrl}/users/dashboard?userId=${userId}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchDashboardData(userId);
    }
  }, [userId]);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl pl-2 border-l-4 font-sans font-bold text-black border-purple-600">
          Dashboard
        </h1>
        <BreadcrumbItems />
      </div>
      <div>
        <OverviewData data={data} />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 md:justify-center">
          <ProjectChart data={data.projects} />
          <TaskChart data={data.tasks} />
        </div>
      </div>
    </div>
  );
}
