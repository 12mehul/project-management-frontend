import React from "react";

const OverviewData = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-purple-600 text-black font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-purple-100 rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="stroke-current text-purple-600 transform transition-transform duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="font-semibold">Total Projects</p>
            <p className="text-2xl text-gray-500">557</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-purple-600 text-black font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-purple-100 rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="stroke-current text-purple-600 transform transition-transform duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="font-semibold">Total Tasks</p>
            <p className="text-2xl text-gray-500">1,257</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewData;
