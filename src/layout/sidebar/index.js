import React, { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (pathname) => router.pathname === pathname;

  useEffect(() => {
    if (router.pathname.startsWith("/admin/projects")) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [router.pathname]);

  return (
    <aside
      className="w-64 h-full bg-white z-20 transition-transform duration-300"
      aria-label="Sidebar"
    >
      <div className="px-3 py-4 rounded">
        <ul className="space-y-2">
          <li>
            <Link
              href="/admin"
              passHref
              className={`flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-purple-600 ${
                isActive("/admin")
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-900"
              }`}
            >
              <svg
                className={`w-6 h-6 transition duration-75 group-hover:text-purple-600 ${
                  isActive("/admin") ? "text-purple-600" : "text-gray-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/tasks"
              passHref
              className={`flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-purple-600 ${
                isActive("/admin/tasks")
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-900"
              }`}
            >
              <svg
                className={`flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-purple-600 ${
                  isActive("/admin/tasks") ? "text-purple-600" : "text-gray-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
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
              <svg
                className={`flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-purple-600 ${
                  isActive("/admin/projects/list") ||
                  router.pathname.startsWith("/admin/projects")
                    ? "text-purple-600"
                    : "text-gray-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Projects
              </span>
              <svg
                className={`w-6 h-6 group-hover:text-purple-600 ${
                  isDropdownOpen ? "transform rotate-180" : ""
                } ${
                  isActive("/admin/projects/list") ||
                  router.pathname.startsWith("/admin/projects")
                    ? "text-purple-600"
                    : "text-gray-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <ul id="dropdown-example" className="py-2 space-y-2">
                <li>
                  <Link
                    href="/admin/projects/list"
                    passHref
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
              className={`flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-purple-600 ${
                isActive("/admin/profile")
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-900"
              }`}
            >
              <svg
                className={`flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-purple-600 ${
                  isActive("/admin/profile")
                    ? "text-purple-600"
                    : "text-gray-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
