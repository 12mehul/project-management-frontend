import React from "react";
import { MdDeleteForever } from "react-icons/md";
import calculateDays from "@/utils/calculateDays";
import Skelton from "@/components/common/Skelton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { FcPlanner } from "react-icons/fc";

const InReviewTasks = ({
  inReviewTasks = [],
  status = "",
  taskLoader = false,
  handleShowModal = () => {},
  handleDelete = () => {},
}) => {
  return (
    <div className="mt-2 min-w-[280px] h-full p-2 shadow-md rounded-lg border border-teal-400">
      <div className="flex pb-4">
        <p className="font-semibold text-lg text-gray-600 pt-1">
          In Review ({inReviewTasks.length})
        </p>
      </div>
      {taskLoader ? (
        <div className="min-w-[260px] min-h-[180px] flex flex-col justify-between border-t-2 border-orange-600 rounded-md transition duration-500 shadow-md hover:shadow-teal-400">
          <Skelton />
        </div>
      ) : (
        <Droppable droppableId={status}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col gap-2"
            >
              {inReviewTasks.length > 0 ? (
                inReviewTasks.map((task, index) => (
                  <Draggable
                    key={task._id}
                    draggableId={task._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="min-w-[260px] min-h-[180px] flex flex-col justify-between border-t-2 border-orange-600 rounded-md transition duration-500 shadow-md hover:shadow-teal-400"
                      >
                        <div className="p-4 flex justify-between items-start">
                          <div>
                            <p
                              onClick={() => handleShowModal(task._id)}
                              className="font-semibold text-lg cursor-pointer"
                            >
                              {task.taskName}
                            </p>
                            <div className="flex gap-1 mt-5 ml-2">
                              <FcPlanner className="w-6 h-6" />
                              <span className="text-gray-600 font-semibold">
                                {calculateDays(task.startDate, task.dueDate)}
                              </span>
                            </div>
                          </div>
                          <button
                            className="flex items-center p-1"
                            onClick={() => handleDelete(task._id)}
                          >
                            <MdDeleteForever className="text-2xl text-red-600" />
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))
              ) : (
                <div className="min-w-[260px] min-h-[180px] flex flex-col items-center justify-center border-t-2 border-orange-600 rounded-md transition duration-500 shadow-md hover:shadow-teal-400">
                  <p className="font-semibold text-lg text-gray-700 pt-1">
                    No Tasks
                  </p>
                </div>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default InReviewTasks;
