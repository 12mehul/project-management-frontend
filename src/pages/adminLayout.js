import React, { useState } from "react";
import Header from "@/layout/header";
import Sidebar from "@/layout/sidebar";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-grow">
        <div
          className={` ${
            isSidebarOpen ? "translate-x-0 flex" : "-translate-x-64 hidden"
          }`}
        >
          <Sidebar />
        </div>
        <div className="flex flex-col flex-grow bg-gray-100 p-5 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
