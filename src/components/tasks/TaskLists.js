import React from "react";
import Select from "react-select";

const TaskLists = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="p-6">
      <div className="w-full text-gray-700 body-font bg-white p-8 rounded-xl shadow-2xl">
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
          <div className="mt-2 w-Full p-4 shadow-md rounded-lg border border-teal-400">
            <div className="flex pb-4">
              <p className="font-semibold text-lg text-gray-700">Todo</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                <div className="p-10">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
              <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                <div className="p-10">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 w-Full p-4 shadow-md rounded-lg border border-teal-400">
            <div className="flex pb-4">
              <p className="font-semibold text-lg text-gray-700">In Progress</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                <div className="p-10">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
              <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                <div className="p-10">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 w-Full p-4 shadow-md rounded-lg border border-teal-400">
            <div className="flex pb-4">
              <p className="font-semibold text-lg text-gray-700">In Review</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                <div className="p-10">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
              <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                <div className="p-10">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 w-Full p-4 shadow-md rounded-lg border border-teal-400">
            <div className="flex pb-4">
              <p className="font-semibold text-lg text-gray-700">Completed</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                <div className="p-10">
                  <p className="font-semibold text-lg">Tool with sidebar</p>
                  <span className="text-gray-600">Description of tool</span>
                </div>
              </div>
              <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                <div className="p-10">
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
