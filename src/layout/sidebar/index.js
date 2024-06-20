import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { LuDot } from "react-icons/lu";
import {
  FcTodoList,
  FcDoughnutChart,
  FcList,
  FcManager,
  FcExpand,
} from "react-icons/fc";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isActive = (pathname) => router.pathname === pathname;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (router.pathname.startsWith("/admin/projects")) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [router.pathname]);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !isSidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setIsSidebarOpen(false);
    };
    router.events.on("routeChangeComplete", clickHandler);
    return () => {
      router.events.off("routeChangeComplete", clickHandler);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-30 z-40 lg:hidden transition-opacity duration-200 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={closeSidebar}
      ></div>
      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`fixed z-40 left-0 top-0 lg:sticky lg:top-0 lg:translate-x-0 transform h-screen w-64 bg-white transition-all duration-200 ease-in-out shadow-md ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <Link
          href="/admin"
          onClick={closeSidebar}
          className="flex items-center justify-center py-2 border-b border-b-gray-800"
        >
          <h2 className="font-bold text-2xl text-gray-900 transition p-2 duration-75 rounded-lg hover:bg-purple-100 hover:text-purple-600">
            DASHBOARD
          </h2>
        </Link>
        <div className="px-3 py-4 rounded">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin"
                passHref
                onClick={closeSidebar}
                className={`flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-purple-600 ${
                  isActive("/admin")
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-900"
                }`}
              >
                <FcDoughnutChart className="text-xl" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/tasks"
                passHref
                onClick={closeSidebar}
                className={`flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-purple-600 ${
                  isActive("/admin/tasks")
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-900"
                }`}
              >
                <FcTodoList className="text-xl" />
                <span className="flex-1 ml-3 whitespace-nowrap">Tasks</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className={`flex items-center w-full p-2 text-base font-semibold transition duration-75 rounded-lg group hover:bg-purple-100 hover:text-purple-600 ${
                  isActive("/admin/projects/list") ||
                  router.pathname.startsWith("/admin/projects")
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-900"
                }`}
                onClick={toggleDropdown}
              >
                <FcList className="text-xl" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Projects
                </span>
                <FcExpand
                  className={`text-xl ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <Link
                      href="/admin/projects/list"
                      passHref
                      onClick={closeSidebar}
                      className={`flex items-center w-full p-2 text-base font-semibold transition duration-75 rounded-lg group hover:bg-purple-100 hover:text-purple-600 pl-11 ${
                        isActive("/admin/projects/list") ||
                        isActive("/admin/projects/[id]") ||
                        isActive("/admin/projects/edit/[id]")
                          ? "text-purple-600"
                          : "text-gray-900"
                      }`}
                    >
                      <LuDot
                        size={30}
                        className={`mr-2 flex-shrink-0 w-7 h-7 transition duration-75 group-hover:text-purple-600 ${
                          isActive("/admin/projects/list") ||
                          isActive("/admin/projects/[id]") ||
                          isActive("/admin/projects/edit/[id]")
                            ? "text-purple-600"
                            : "text-gray-500"
                        }`}
                      />
                      Lists
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/projects/create"
                      passHref
                      onClick={closeSidebar}
                      className={`flex items-center w-full p-2 text-base font-semibold transition duration-75 rounded-lg group hover:bg-purple-100 hover:text-purple-600 pl-11 ${
                        isActive("/admin/projects/create")
                          ? "text-purple-600"
                          : "text-gray-900"
                      }`}
                    >
                      <LuDot
                        size={30}
                        className={`mr-2 flex-shrink-0 w-7 h-7 transition duration-75 group-hover:text-purple-600 ${
                          isActive("/admin/projects/create")
                            ? "text-purple-600"
                            : "text-gray-500"
                        }`}
                      />
                      Create
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/admin/profile"
                passHref
                onClick={closeSidebar}
                className={`flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-purple-600 ${
                  isActive("/admin/profile")
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-900"
                }`}
              >
                <FcManager className="text-xl" />
                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
