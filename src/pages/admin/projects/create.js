import React from "react";
import BreadcrumbItems from "@/components/common/BreadcrumbItems";
import ProjectForm from "@/components/projects/ProjectForm";

const ProjectCreate = () => {
  const breadcrumbData = [
    {
      href: "/admin/projects/list",
      label: "Projects",
    },
    {
      label: "Create",
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl pl-2 border-l-4 font-sans font-bold text-black border-purple-600">
          Project Create
        </h1>
        <BreadcrumbItems breadcrumbs={breadcrumbData} />
      </div>
      <div>
        <ProjectForm />
      </div>
    </div>
  );
};

export default ProjectCreate;
