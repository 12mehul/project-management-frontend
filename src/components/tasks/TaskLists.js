import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import toast from "react-hot-toast";
import axios from "axios";
import actions from "@/redux/tasks/actions";
import { fetchProjectLists } from "@/redux/projects/actionCreator";
import { fetchAllTaskLists } from "@/redux/tasks/actionCreator";
import TaskDetails from "./TaskDetails";

const TodoTasks = dynamic(() => import("../common/TaskStatus/TodoTasks"), {
  ssr: false,
});
const InProgressTasks = dynamic(
  () => import("../common/TaskStatus/InProgressTasks"),
  { ssr: false }
);
const InReviewTasks = dynamic(
  () => import("../common/TaskStatus/InReviewTasks"),
  { ssr: false }
);
const CompletedTasks = dynamic(
  () => import("../common/TaskStatus/CompletedTasks"),
  { ssr: false }
);

const TaskLists = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const dispatch = useDispatch();
  const { taskListsSuccess } = actions;

  const [showModal, setShowModal] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const projects = useSelector((state) => state.projects.lists);
  const taskLoader = useSelector((state) => state.tasks.loading);
  const tasks = useSelector((state) => state.tasks.lists);

  const handleShowModal = (taskId = null) => {
    setCurrentTaskId(taskId);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentTaskId(null);
  };

  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  useEffect(() => {
    if (userId) {
      dispatch(fetchProjectLists(userId));
      dispatch(fetchAllTaskLists(userId));
    }
  }, [userId]);

  useEffect(() => {
    if (tasks) {
      if (selectedProject) {
        const filtered = tasks.filter(
          (task) => task.projectId === selectedProject.value
        );
        setFilteredTasks(filtered);
      } else {
        setFilteredTasks(tasks);
      }
    }
  }, [tasks, selectedProject]);

  const options = projects.map((project) => ({
    value: project._id,
    label: project.projectName,
  }));

  const handleSelectChange = (selectedOption) => {
    setSelectedProject(selectedOption);
  };

  const todoTasks = filteredTasks.filter((task) => task.status === "Todo");
  const inProgressTasks = filteredTasks.filter(
    (task) => task.status === "InProgress"
  );
  const inReviewTasks = filteredTasks.filter(
    (task) => task.status === "InReview"
  );
  const completedTasks = filteredTasks.filter(
    (task) => task.status === "Completed"
  );

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    if (source.droppableId !== destination.droppableId) {
      const updatedTasks = tasks.map((task) => {
        if (task._id === draggableId) {
          return { ...task, status: destination.droppableId };
        }
        return task;
      });
      dispatch(taskListsSuccess(updatedTasks));

      try {
        const res = await axios.put(`${apiUrl}/tasks/status/${draggableId}`, {
          status: destination.droppableId,
        });
        if (res.data) {
          toast.success(res.data.msg);
        }
      } catch (err) {
        toast.error(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="pt-6">
        <div className="w-full text-gray-700 body-font">
          <div className="flex justify-between">
            <div className="w-full mb-1">
              <Select
                options={options}
                classNamePrefix="react-select"
                placeholder="Select Project"
                onChange={handleSelectChange}
                isClearable
                className="font-semibold text-base text-gray-600 capitalize"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    cursor: "pointer",
                  }),
                  option: (provided) => ({
                    ...provided,
                    cursor: "pointer",
                  }),
                }}
              />
            </div>
          </div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="w-full flex gap-3 overflow-x-auto">
              <TodoTasks
                todoTasks={todoTasks}
                status="Todo"
                taskLoader={taskLoader}
                handleShowModal={handleShowModal}
              />
              <InProgressTasks
                inProgressTasks={inProgressTasks}
                status="InProgress"
                taskLoader={taskLoader}
                handleShowModal={handleShowModal}
              />
              <InReviewTasks
                inReviewTasks={inReviewTasks}
                status="InReview"
                taskLoader={taskLoader}
                handleShowModal={handleShowModal}
              />
              <CompletedTasks
                completedTasks={completedTasks}
                status="Completed"
                taskLoader={taskLoader}
                handleShowModal={handleShowModal}
              />
            </div>
          </DragDropContext>
        </div>
      </div>
      {showModal && (
        <TaskDetails
          taskId={currentTaskId}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default TaskLists;
