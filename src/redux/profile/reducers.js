import actions from "./actions";

const { PROFILE_BEGIN, PROFILE_SUCCESS, PROFILE_FAILURE } = actions;

const initialState = {
  loading: false,
  data: "",
  error: null,
};

const profileReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data,
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: err,
      };
    default:
      return state;
  }
};

export default profileReducer;
