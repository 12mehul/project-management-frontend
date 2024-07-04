import React from "react";

const Skelton = () => {
  return (
    <div className="py-2 rounded shadow-md animate-pulse">
      <div className="flex p-4 space-x-4 sm:px-8">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
        <div className="flex-1 py-2 space-y-4">
          <div className="w-full h-3 rounded bg-gray-300"></div>
          <div className="w-5/6 h-3 rounded bg-gray-300"></div>
        </div>
      </div>
      <div className="p-4 space-y-4 sm:px-8">
        <div className="w-full h-4 rounded bg-gray-300"></div>
        <div className="w-full h-4 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Skelton;
