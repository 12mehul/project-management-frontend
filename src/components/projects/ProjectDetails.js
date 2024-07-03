import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import TaskForm from "../tasks/TaskForm";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectDetails } from "@/redux/projects/actionCreator";
import { FcPlanner, FcOvertime, FcCurrencyExchange } from "react-icons/fc";
import { fetchProjectTaskLists } from "@/redux/tasks/actionCreator";
import DeleteModal from "../common/DeleteModal";
import toast from "react-hot-toast";
import axios from "axios";
import { DragDropContext } from "react-beautiful-dnd";
const TodoTasks = dynamic(() => import("./overview/TodoTasks"), { ssr: false });
const InProgressTasks = dynamic(() => import("./overview/InProgressTasks"), {
  ssr: false,
});
const InReviewTasks = dynamic(() => import("./overview/InReviewTasks"), {
  ssr: false,
});
const CompletedTasks = dynamic(() => import("./overview/CompletedTasks"), {
  ssr: false,
});

const ProjectDetails = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  const [deletModal, setDeletModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const taskLoader = useSelector((state) => state.tasks.loading);
  const projectLoader = useSelector((state) => state.projects.loading);
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

  const handleDelete = (id) => {
    setDeletModal(true);
    setDeleteId(id);
  };
  const handleDeleteModal = () => {
    setDeletModal(false);
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

  const handleDeleteId = async () => {
    if (deleteId) {
      setLoader(true);
      try {
        const res = await axios.delete(`${apiUrl}/tasks/delete/${deleteId}`);
        if (res.data) {
          setLoader(false);
          toast.success(res.data.msg);
          setTimeout(() => {
            handleDeleteModal();
            router.reload();
          }, 3000);
        }
      } catch (err) {
        if (err) {
          setLoader(false);
          toast.error(err.response.data.msg);
        }
      }
    }
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    console.log(result);
    if (source.droppableId !== destination.droppableId) {
      try {
        const res = await axios.put(`${apiUrl}/tasks/status/${draggableId}`, {
          status: destination.droppableId,
        });

        if (res.data) {
          toast.success("Task status updated successfully");
        }
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="pt-6">
        <section className="text-gray-700 body-font bg-white p-6 rounded-xl shadow-2xl">
          <div className="container mx-auto">
            <div className="w-full mx-auto flex flex-wrap">
              {projectLoader ? (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
                  </div>
                </div>
              ) : (
                projects && (
                  <>
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
                        <p className="leading-relaxed mt-2">
                          {projects.description}
                        </p>
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
                                    {new Date(
                                      projects.createdAt
                                    ).toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      hour12: true,
                                    })}
                                  </span>
                                </div>
                                <div className="flex justify-between items-start">
                                  <p className="text-gray-800 font-medium max-w-xs">
                                    Project was created successfully!
                                  </p>
                                  <span className="px-2 py-1 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                                    Created
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
                                    {new Date(
                                      projects.dueDate
                                    ).toLocaleDateString()}
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
                  </>
                )
              )}
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
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="w-full flex gap-3 overflow-x-auto">
              <TodoTasks
                todoTasks={todoTasks}
                status="Todo"
                taskLoader={taskLoader}
                handleShowModal={handleShowModal}
                handleDelete={handleDelete}
              />
              <InProgressTasks
                inProgressTasks={inProgressTasks}
                status="InProgress"
                taskLoader={taskLoader}
                handleShowModal={handleShowModal}
                handleDelete={handleDelete}
              />
              <InReviewTasks
                inReviewTasks={inReviewTasks}
                status="InReview"
                taskLoader={taskLoader}
                handleShowModal={handleShowModal}
                handleDelete={handleDelete}
              />
              <CompletedTasks
                completedTasks={completedTasks}
                status="Completed"
                taskLoader={taskLoader}
                handleShowModal={handleShowModal}
                handleDelete={handleDelete}
              />
            </div>
          </DragDropContext>
        </div>
      </div>
      {showModal && (
        <TaskForm
          projectId={projectId}
          taskId={currentTaskId}
          handleCloseModal={handleCloseModal}
        />
      )}
      {deletModal && (
        <DeleteModal
          handleCloseModal={handleDeleteModal}
          handleDeleteId={handleDeleteId}
          loader={loader}
        />
      )}
    </>
  );
};

export default ProjectDetails;
