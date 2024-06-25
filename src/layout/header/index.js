import React, { useEffect, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "@/redux/profile/actionCreator";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = useSelector((state) => state.profile.data);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [token]);

  const handleLogout = () => {
    try {
      toast.success("Logout successfully");
      localStorage.clear();
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Toaster />
      <div className="relative">
        <div className="py-3 px-6 bg-white flex items-center shadow-md shadow-black/5 top-0 z-30">
          <button
            aria-controls="sidebar"
            aria-expanded={isSidebarOpen}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden"
          >
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
                    {userData && (
                      <Image
                        className="rounded-full"
                        src={userData.img}
                        alt="profile"
                        width={32}
                        height={32}
                      />
                    )}
                    <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                    <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                  </div>
                </div>
                <div className="p-2 md:block text-left">
                  {userData && (
                    <h2 className="text-sm font-semibold text-gray-800 hover:text-purple-600 capitalize">
                      {userData.firstname} {userData.lastname}
                    </h2>
                  )}
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
                    <a
                      onClick={handleLogout}
                      className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 cursor-pointer"
                    >
                      Log Out
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
