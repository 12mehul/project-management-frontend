import axios from "axios";
import actions from "./actions";
const {
  projectListsBegin,
  projectListsSuccess,
  projectListsFailure,

  projectDetailsBegin,
  projectDetailsSuccess,
  projectDetailsFailure,
} = actions;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchProjectLists = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(projectListsBegin());
      const response = await axios.get(`${apiUrl}/projects?userId=${userId}`);
      const data = response.data.projects;
      dispatch(projectListsSuccess(data));
    } catch (err) {
      dispatch(projectListsFailure(err));
    }
  };
};

export const fetchProjectDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(projectDetailsBegin());
      const response = await axios.get(`${apiUrl}/projects/${id}`);
      const data = response.data.project;
      dispatch(projectDetailsSuccess(data));
    } catch (err) {
      dispatch(projectDetailsFailure(err));
    }
  };
};
