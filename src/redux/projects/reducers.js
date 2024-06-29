import actions from "./actions";

const {
  PROJECT_LISTS_BEGIN,
  PROJECT_LISTS_SUCCESS,
  PROJECT_LISTS_FAILURE,

  PROJECT_DETAILS_BEGIN,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAILURE,
} = actions;

const initialState = {
  lists: [],
  details: "",
  loading: false,
  error: null,
};

const projectsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case PROJECT_LISTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case PROJECT_LISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        lists: data,
      };
    case PROJECT_LISTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: err,
      };

    case PROJECT_DETAILS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case PROJECT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: data,
      };
    case PROJECT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: err,
      };

    default:
      return state;
  }
};

export default projectsReducer;
