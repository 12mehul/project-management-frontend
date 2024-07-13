import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsSendCheck } from "react-icons/bs";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskDetails } from "@/redux/tasks/actionCreator";
import Link from "next/link";
import calculateDays from "@/utils/calculateDays";
import { formatDate } from "@/utils/formatDate";
import Loader from "../common/Loader";
import actions from "@/redux/tasks/actions";

const TaskDetails = ({ taskId, handleCloseModal }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const dispatch = useDispatch();
  const { taskDetailsSuccess } = actions;

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const loader = useSelector((state) => state.tasks.detailsLoading);
  const tasks = useSelector((state) => state.tasks.details);

  useEffect(() => {
    if (taskId) {
      dispatch(fetchTaskDetails(taskId));
    }
  }, [taskId]);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("popup-background")) {
      handleCloseModal();
    }
  };

  const calDate = calculateDays(tasks.startDate, tasks.dueDate);
  const [number, ...textParts] = calDate.split(" ");
  const text = textParts.join(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please enter your message");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/tasks/comment/${tasks._id}`,
        { name }
      );
      if (response.data) {
        setName("");
        dispatch(taskDetailsSuccess(response.data.task));
        toast.success(response.data.msg);
      }
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
      <div
        className="fixed inset-0 bg-gray-500 opacity-40 popup-background"
        onClick={handleBackgroundClick}
      ></div>
      <div className="relative bg-white w-full max-w-[700px] border rounded-lg p-6 mx-4">
        <div className="flex justify-between mb-3">
          <h1 className="text-base font-bold text-gray-700">Task Detail</h1>
          <button
            onClick={handleCloseModal}
            className="flex items-center justify-center group p-1 rounded-lg hover:bg-red-100"
          >
            <IoCloseSharp className="text-xl text-gray-500 group-hover:text-red-600" />
          </button>
        </div>
        {loader ? (
          <div className="flex items-center justify-center h-[300px]">
            <Loader />
          </div>
        ) : (
          tasks && (
            <div>
              <div>
                <span
                  className={`text-2xl font-semibold ${
                    tasks.status === "Todo"
                      ? "text-blue-500"
                      : tasks.status === "InProgress"
                      ? "text-yellow-500"
                      : tasks.status === "InReview"
                      ? "text-orange-600"
                      : "text-green-600"
                  }`}
                >
                  {tasks.taskName}
                </span>
              </div>
              <div className="mt-2">
                <Link href={`/admin/projects/${tasks.projectId._id}`}>
                  <span className="text-sm font-medium capitalize text-purple-600 hover:text-purple-500 hover:underline">
                    {tasks.projectId.projectName}
                  </span>
                </Link>
              </div>
              <div className="mt-2">
                <span className="text-base font-medium text-gray-600">
                  {tasks.description}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-center">
                <div className="flex flex-col gap-1 items-center justify-center w-1/3 border-r-2 border-gray-200">
                  {text && (
                    <span className="text-sm font-medium text-gray-500">
                      {text}
                    </span>
                  )}
                  {number && (
                    <span className="text-base font-medium text-gray-800">
                      {number}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1 items-center justify-center w-1/3 border-r-2 border-gray-200">
                  <span className="text-sm font-medium text-gray-500">
                    Start Date
                  </span>
                  <span className="text-base font-medium text-gray-800">
                    {formatDate(tasks.startDate)}
                  </span>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center w-1/3">
                  <span className="text-sm font-medium text-gray-500">
                    Due Date
                  </span>
                  <span className="text-base font-medium text-gray-800">
                    {formatDate(tasks.dueDate)}
                  </span>
                </div>
              </div>
              <div className="my-4 border border-gray-200"></div>
              <div className="mb-5">
                <span className="mb-3 block text-[#07074D] text-base font-medium">
                  Comments
                </span>
                <div className="flex gap-1">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your message"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                  />
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex items-center justify-center p-3 rounded-md bg-purple-600 hover:bg-purple-500"
                  >
                    <BsSendCheck className="text-2xl text-white font-bold" />
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              {tasks.comments.length > 0 && (
                <div className="w-full my-4 p-3 rounded-md border border-gray-200 shadow-md max-h-24 overflow-y-auto">
                  <div className="w-full overflow-x-auto">
                    <div className="min-w-[500px]">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium text-gray-600">
                          Comment
                        </h3>
                        <h3 className="text-sm font-medium text-gray-600">
                          Date
                        </h3>
                      </div>
                      <div className="mt-2 flex flex-col gap-2">
                        {tasks.comments.map((item) => (
                          <div key={item._id} className="flex justify-between">
                            <span className="max-w-96 text-base font-medium text-gray-500">
                              {item.name}
                            </span>
                            <span className="text-base font-medium text-purple-600">
                              {formatDate(item.createdDate)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TaskDetails;
