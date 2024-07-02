import axios from "axios";
import actions from "./actions";
const {
  taskListsBegin,
  taskListsSuccess,
  taskListsFailure,

  taskDetailsBegin,
  taskDetailsSuccess,
  taskDetailsFailure,
} = actions;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchAllTaskLists = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(taskListsBegin());
      const response = await axios.get(`${apiUrl}/tasks?userId=${userId}`);
      const data = response.data.tasks;
      dispatch(taskListsSuccess(data));
    } catch (err) {
      dispatch(taskListsFailure(err));
    }
  };
};

export const fetchProjectTaskLists = (projectId) => {
  return async (dispatch) => {
    try {
      dispatch(taskListsBegin());
      const response = await axios.get(
        `${apiUrl}/tasks?projectId=${projectId}`
      );
      const data = response.data.tasks;
      dispatch(taskListsSuccess(data));
    } catch (err) {
      dispatch(taskListsFailure(err));
    }
  };
};

export const fetchTaskDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(taskDetailsBegin());
      const response = await axios.get(`${apiUrl}/tasks/${id}`);
      const data = response.data.task;
      dispatch(taskDetailsSuccess(data));
    } catch (err) {
      dispatch(taskDetailsFailure(err));
    }
  };
};
