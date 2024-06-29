import axios from "axios";
import actions from "./actions";
const { profileBegin, profileSuccess, profileFailure } = actions;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchUserProfile = (token) => {
  return async (dispatch) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      dispatch(profileBegin());
      const response = await axios.get(`${apiUrl}/users/profile`, { headers });
      const data = response.data;
      dispatch(profileSuccess(data));
    } catch (err) {
      dispatch(profileFailure(err));
    }
  };
};
