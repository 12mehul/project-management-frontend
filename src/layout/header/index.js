import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import Link from "next/link";

const Header = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
        <Link
          href="/admin"
          className="flex items-center pb-2 border-b border-b-gray-800"
        >
          <h2 className="font-bold text-2xl text-gray-900 transition p-2 duration-75 rounded-lg hover:bg-purple-100 hover:text-purple-600">
            DASHBOARD
          </h2>
        </Link>
        <button onClick={toggleSidebar}>
          <IoReorderThreeOutline className="text-3xl text-gray-500 ml-8 hover:text-purple-600" />
        </button>
        <ul className="ml-auto flex items-center">
          <li className="dropdown ml-3 relative">
            <button
              onClick={toggleDropdown}
              type="button"
              className="dropdown-toggle flex items-center"
            >
              <div className="flex-shrink-0 w-10 h-10 relative">
                <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                    alt=""
                  />
                  <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                  <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <div className="p-2 md:block text-left">
                <h2 className="text-sm font-semibold text-gray-800 hover:text-purple-600 capitalize">
                  John Doe
                </h2>
              </div>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu absolute right-0 mt-2 shadow-md shadow-black/5 z-10 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[150px]">
                <li>
                  <Link
                    href="/admin/profile"
                    className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <a className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 cursor-pointer">
                    Log Out
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
