import actions from "./actions";

const {
  TASK_LISTS_BEGIN,
  TASK_LISTS_SUCCESS,
  TASK_LISTS_FAILURE,

  TASK_DETAILS_BEGIN,
  TASK_DETAILS_SUCCESS,
  TASK_DETAILS_FAILURE,
} = actions;

const initialState = {
  lists: [],
  details: "",
  loading: false,
  error: null,
};

const tasksReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case TASK_LISTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TASK_LISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        lists: data,
      };
    case TASK_LISTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: err,
      };

    case TASK_DETAILS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TASK_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: data,
      };
    case TASK_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: err,
      };

    default:
      return state;
  }
};

export default tasksReducer;
