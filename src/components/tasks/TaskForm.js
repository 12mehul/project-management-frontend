import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Loader from "../common/Loader";

const TaskForm = ({ taskId, handleCloseModal }) => {
  const [taskData, setTaskData] = useState({
    taskName: "",
    description: "",
    startDate: "",
    dueDate: "",
    status: "",
  });
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("popup-background")) {
      handleCloseModal();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!taskData.taskName) {
      newErrors.taskName = "Task name is required";
    }
    if (!taskData.description) {
      newErrors.description = "Description is required";
    }
    if (!taskData.startDate) {
      newErrors.startDate = "Start date is required";
    }
    if (!taskData.dueDate) {
      newErrors.dueDate = "Due date is required";
    }
    if (!taskData.status) {
      newErrors.status = "Status is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (!validateForm()) {
      setLoader(false);
      return;
    }
    validateForm();

    if (taskId) {
      // Update the task
      // updateTask(taskId, taskData);
    } else {
      // Create a new task
      // createTask(taskData);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
      <div
        className="fixed inset-0 bg-gray-500 opacity-40 popup-background"
        onClick={handleBackgroundClick}
      ></div>
      <div className="relative bg-white w-[600px] border rounded-lg p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-lg font-semibold">
            {taskId ? "Update Task" : "Create Task"}
          </h1>
          <button
            onClick={handleCloseModal}
            className="flex items-center justify-center group p-1 rounded-lg hover:bg-red-100"
          >
            <IoCloseSharp className="text-xl text-gray-500 group-hover:text-red-600" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <span className="mb-3 block text-[#07074D] text-sm font-medium">
              Task Name
            </span>
            <input
              type="text"
              name="taskName"
              value={taskData.taskName}
              onChange={handleChange}
              placeholder="Enter Task"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
            />
            <p className="text-red-500 pt-2">{errors.taskName}</p>
          </div>
          <div className="mb-5">
            <span className="mb-3 block text-[#07074D] text-sm font-medium">
              Description
            </span>
            <input
              type="text"
              name="description"
              value={taskData.description}
              onChange={handleChange}
              placeholder="Enter Description"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
            />
            <p className="text-red-500 pt-2">{errors.description}</p>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-sm font-medium text-[#07074D]">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={taskData.startDate}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                />
                <p className="text-red-500 pt-2">{errors.startDate}</p>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-sm font-medium text-[#07074D]">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={taskData.dueDate}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                />
                <p className="text-red-500 pt-2">{errors.dueDate}</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-sm font-medium text-[#07074D]">
              Status
            </label>
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
            >
              <option>Select Status</option>
              <option value="Todo">Todo</option>
              <option value="InProgress">In Progress</option>
              <option value="InReview">In Review</option>
              <option value="Completed">Completed</option>
            </select>
            <p className="text-red-500 pt-2">{errors.status}</p>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form flex gap-1 rounded-md bg-purple-600 hover:bg-purple-500 py-2 px-7 text-center text-base font-semibold text-white outline-none"
            >
              {loader && <Loader />}
              {taskId ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
