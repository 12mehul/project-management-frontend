import React from "react";
import BreadcrumbItems from "@/components/common/BreadcrumbItems";
import TaskLists from "@/components/tasks/TaskLists";

const Index = () => {
  const breadcrumbData = [
    {
      href: "/admin/tasks",
      label: "Tasks",
    },
    {
      label: "Lists",
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl pl-2 border-l-4 font-sans font-bold text-black border-purple-600">
          Tasks Lists
        </h1>
        <BreadcrumbItems breadcrumbs={breadcrumbData} />
      </div>
      <div>
        <TaskLists />
      </div>
    </div>
  );
};

export default Index;
