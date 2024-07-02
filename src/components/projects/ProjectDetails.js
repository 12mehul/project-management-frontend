import React, { useEffect, useState } from "react";
import TaskForm from "../tasks/TaskForm";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectDetails } from "@/redux/projects/actionCreator";
import { FcPlanner, FcOvertime, FcCurrencyExchange } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { fetchProjectTaskLists } from "@/redux/tasks/actionCreator";

const ProjectDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  const [showModal, setShowModal] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const tasks = useSelector((state) => state.tasks.lists);

  const projects = useSelector((state) => state.projects.details);
  const projectId = projects._id;

  const handleShowModal = (taskId = null) => {
    setCurrentTaskId(taskId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentTaskId(null);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProjectDetails(id));
    }
  }, [id]);

  useEffect(() => {
    if (projects && projectId) {
      dispatch(fetchProjectTaskLists(projectId));
    }
  }, [projectId]);

  const todoTasks = tasks.filter((task) => task.status === "Todo");
  const inProgressTasks = tasks.filter((task) => task.status === "InProgress");
  const inReviewTasks = tasks.filter((task) => task.status === "InReview");
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  return (
    <>
      <div className="pt-6">
        <section className="text-gray-700 body-font bg-white p-6 rounded-xl shadow-2xl">
          <div className="container mx-auto">
            <div className="w-full mx-auto flex flex-wrap">
              {projects.img && (
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full rounded border border-gray-200"
                  src={projects.img}
                />
              )}
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                {projects.projectName && (
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">
                    {projects.projectName}
                  </h1>
                )}
                {projects.description && (
                  <p className="leading-relaxed mt-2">{projects.description}</p>
                )}
                <div className="mt-4">
                  <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-2xl text-gray-700 font-bold ml-4">
                      Project Overview
                    </h3>
                    <ol>
                      <li className="relative">
                        <div className="absolute left-0 top-0 bottom-0 border-l-2 border-dashed border-emerald-500"></div>
                        <div className="absolute left-[-11px] top-[calc(50%-12px)] bg-emerald-600 w-6 h-6 flex items-center justify-center rounded-full">
                          <FcPlanner className="w-4 h-4" />
                        </div>
                        <div className="block p-6 rounded-lg shadow-md bg-gray-50 ml-6 mt-5">
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold text-gray-500 duration-300 transition ease-in-out text-sm">
                              Created At
                            </span>
                            <span className="font-semibold text-purple-600 duration-300 transition ease-in-out text-base">
                              {new Date(projects.createdAt).toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <p className="text-gray-800 font-medium max-w-xs">
                              Project was created successfully!
                            </p>
                            <span className="px-2 py-1 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                              Done
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="relative">
                        <div className="absolute left-0 top-0 bottom-0 border-l-2 border-dashed border-blue-500"></div>
                        <div className="absolute left-[-11px] top-[calc(50%-12px)] bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="text-white w-3 h-3"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                            ></path>
                          </svg>
                        </div>
                        <div className="block p-6 rounded-lg shadow-md bg-gray-50 ml-6 mt-5">
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold text-gray-500 duration-300 transition ease-in-out text-sm">
                              Current Status
                            </span>
                          </div>
                          {projects.status === "Completed" ? (
                            <div className="flex justify-between items-start">
                              <p className="text-gray-800 font-medium max-w-xs">
                                Project is successfully completed!
                              </p>
                              <span className="px-2 py-1 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                                {projects.status}
                              </span>
                            </div>
                          ) : projects.status === "InProgress" ? (
                            <div className="flex justify-between items-start">
                              <p className="text-gray-800 font-medium max-w-xs">
                                Project is in Progress.
                              </p>
                              <span className="px-2 py-1 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                                {projects.status}
                              </span>
                            </div>
                          ) : (
                            <div className="flex justify-between items-start">
                              <p className="text-gray-800 font-medium max-w-xs">
                                Project is not started yet.
                              </p>
                              <span className="px-2 py-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                                {projects.status}
                              </span>
                            </div>
                          )}
                        </div>
                      </li>
                      <li className="relative">
                        <div className="absolute left-0 top-0 bottom-0 border-l-2 border-dashed border-yellow-500"></div>
                        <div className="absolute left-[-11px] top-[calc(50%-12px)] bg-yellow-600 w-6 h-6 flex items-center justify-center rounded-full">
                          <FcCurrencyExchange className="w-4 h-4" />
                        </div>
                        <div className="block p-6 rounded-lg shadow-md bg-gray-50 ml-6 mt-5">
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold text-gray-500 duration-300 transition ease-in-out text-sm">
                              Budget
                            </span>
                            <span className="font-semibold text-purple-600 duration-300 transition ease-in-out text-base">
                              {projects.budget}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-gray-800 font-medium">
                              Total budget for the project.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="relative">
                        <div className="absolute left-0 top-0 bottom-0 border-l-2 border-dashed border-red-500"></div>
                        <div className="absolute left-[-11px] top-[calc(50%-12px)] bg-red-600 w-6 h-6 flex items-center justify-center rounded-full">
                          <FcOvertime className="w-4 h-4" />
                        </div>
                        <div className="block p-6 rounded-lg shadow-md bg-gray-50 ml-6 mt-5">
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold text-gray-500 duration-300 transition ease-in-out text-sm">
                              Due Date
                            </span>
                            <span className="font-semibold text-red-600 duration-300 transition ease-in-out text-base">
                              {new Date(projects.dueDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-gray-800 font-medium">
                              Deadline for the project to be completed.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full text-gray-700 body-font bg-white p-2 rounded-xl shadow-2xl mt-4">
          <div className="flex justify-between">
            <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
              Tasks
            </h1>
            <button
              type="button"
              onClick={() => handleShowModal()}
              className="px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              + Tasks
            </button>
          </div>
          <div className="w-full flex gap-3 overflow-x-auto">
            <div className="mt-2 min-w-[280px] h-full p-2 shadow-md rounded-lg border border-teal-400">
              <div className="flex pb-4">
                <p className="font-semibold text-lg text-gray-700 pt-1">Todo</p>
              </div>
              <div className="flex flex-col gap-2">
                {todoTasks &&
                  todoTasks.map((todo) => (
                    <div
                      key={todo._id}
                      className="min-w-[260px] min-h-[180px] flex flex-col justify-between border-t-2 border-blue-500 rounded-md transition duration-500 shadow-md hover:shadow-teal-400"
                    >
                      <div className="p-4 flex justify-between items-start">
                        <div>
                          <p
                            onClick={() => handleShowModal(todo._id)}
                            className="font-semibold text-lg cursor-pointer"
                          >
                            {todo.taskName}
                          </p>
                          <span className="text-gray-600">
                            Description of tool
                          </span>
                        </div>
                        <button className="flex items-center p-1">
                          <MdDeleteForever className="text-2xl text-red-600" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="mt-2 min-w-[280px] h-full p-2 shadow-md rounded-lg border border-teal-400">
              <div className="flex pb-4">
                <p className="font-semibold text-lg text-gray-700 pt-1">
                  In Progress
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {inProgressTasks &&
                  inProgressTasks.map((todo) => (
                    <div
                      key={todo._id}
                      className="min-w-[260px] min-h-[180px] flex flex-col justify-between border-t-2 border-yellow-500 rounded-md transition duration-500 shadow-md hover:shadow-teal-400"
                    >
                      <div className="p-4 flex justify-between items-start">
                        <div>
                          <p
                            onClick={() => handleShowModal(todo._id)}
                            className="font-semibold text-lg cursor-pointer"
                          >
                            {todo.taskName}
                          </p>
                          <span className="text-gray-600">
                            Description of tool
                          </span>
                        </div>
                        <button className="flex items-center p-1">
                          <MdDeleteForever className="text-2xl text-red-600" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="mt-2 min-w-[280px] h-full p-2 shadow-md rounded-lg border border-teal-400">
              <div className="flex pb-4">
                <p className="font-semibold text-lg text-gray-700 pt-1">
                  In Review
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {inReviewTasks &&
                  inReviewTasks.map((todo) => (
                    <div
                      key={todo._id}
                      className="min-w-[260px] min-h-[180px] flex flex-col justify-between border-t-2 border-orange-600 rounded-md transition duration-500 shadow-md hover:shadow-teal-400"
                    >
                      <div className="p-4 flex justify-between items-start">
                        <div>
                          <p
                            onClick={() => handleShowModal(todo._id)}
                            className="font-semibold text-lg cursor-pointer"
                          >
                            {todo.taskName}
                          </p>
                          <span className="text-gray-600">
                            Description of tool
                          </span>
                        </div>
                        <button className="flex items-center p-1">
                          <MdDeleteForever className="text-2xl text-red-600" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="mt-2 min-w-[280px] h-full p-2 shadow-md rounded-lg border border-teal-400">
              <div className="flex pb-4">
                <p className="font-semibold text-lg text-gray-700 pt-1">
                  Completed
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {completedTasks &&
                  completedTasks.map((todo) => (
                    <div
                      key={todo._id}
                      className="min-w-[260px] min-h-[180px] flex flex-col justify-between border-t-2 border-green-600 rounded-md transition duration-500 shadow-md hover:shadow-teal-400"
                    >
                      <div className="p-4 flex justify-between items-start">
                        <div>
                          <p
                            onClick={() => handleShowModal(todo._id)}
                            className="font-semibold text-lg cursor-pointer"
                          >
                            {todo.taskName}
                          </p>
                          <span className="text-gray-600">
                            Description of tool
                          </span>
                        </div>
                        <button className="flex items-center p-1">
                          <MdDeleteForever className="text-2xl text-red-600" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <TaskForm
          projectId={projectId}
          taskId={currentTaskId}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProjectDetails;
