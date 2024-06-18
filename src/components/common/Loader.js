import React from "react";

const Loader = () => {
  return (
    <div
      className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-white-800 rounded-full"
      role="status"
      aria-label="loading"
    ></div>
  );
};

export default Loader;
