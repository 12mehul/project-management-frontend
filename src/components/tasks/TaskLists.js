import React from "react";
import Select from "react-select";

const TaskLists = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="pt-6">
      <div className="w-full text-gray-700 body-font">
        <div className="flex justify-between">
          <div className="w-full mb-1">
            <Select
              options={options}
              classNamePrefix="react-select"
              placeholder="Select Project"
            />
          </div>
        </div>
        <div className="w-full flex gap-3 overflow-x-auto">
          <div className="mt-2 min-w-[280px] h-full bg-white p-2 shadow-md rounded-lg border border-teal-400">
            <div className="flex pb-4">
              <p className="font-semibold text-lg text-gray-700 pt-1">Todo</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="min-w-[260px] min-h-[180px] flex border-t-2 border-blue-500 rounded-md transition duration-500 shadow-md hover:shadow-teal-400">
                <div className="p-2">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 min-w-[280px] h-full bg-white p-2 shadow-md rounded-lg border border-teal-400">
            <div className="flex pb-4">
              <p className="font-semibold text-lg text-gray-700 pt-1">
                In Progress
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="min-w-[260px] min-h-[180px] flex border-t-2 border-yellow-500 rounded-md transition duration-500 shadow-md hover:shadow-teal-400">
                <div className="p-2">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 min-w-[280px] h-full bg-white p-2 shadow-md rounded-lg border border-teal-400">
            <div className="flex pb-4">
              <p className="font-semibold text-lg text-gray-700 pt-1">
                In Review
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="min-w-[260px] min-h-[180px] flex border-t-2 border-orange-600 rounded-md transition duration-500 shadow-md hover:shadow-teal-400">
                <div className="p-2">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 min-w-[280px] h-full bg-white p-2 shadow-md rounded-lg border border-teal-400">
            <div className="flex pb-4">
              <p className="font-semibold text-lg text-gray-700 pt-1">
                Completed
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="min-w-[260px] min-h-[180px] flex border-t-2 border-green-600 rounded-md transition duration-500 shadow-md hover:shadow-teal-400">
                <div className="p-2">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskLists;
