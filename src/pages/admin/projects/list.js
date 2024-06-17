import React from "react";
import BreadcrumbItems from "@/components/common/BreadcrumbItems";
import ProjectLists from "@/components/projects/ProjectLists";

const Index = () => {
  const breadcrumbData = [
    {
      href: "/admin/projects",
      label: "Projects",
    },
    {
      label: "Lists",
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl pl-2 border-l-4 font-sans font-bold text-black border-purple-600">
          Projects Lists
        </h1>
        <BreadcrumbItems breadcrumbs={breadcrumbData} />
      </div>
      <div>
        <ProjectLists />
      </div>
    </div>
  );
};

export default Index;
