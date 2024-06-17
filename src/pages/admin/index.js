import React from "react";
import OverviewData from "@/components/dashboard/OverviewData";
import BreadcrumbItems from "@/components/common/BreadcrumbItems";

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
      </div>
    </div>
  );
}
