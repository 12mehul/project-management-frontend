const actions = {
  TASK_LISTS_BEGIN: "TASK_LISTS_BEGIN",
  TASK_LISTS_SUCCESS: "TASK_LISTS_SUCCESS",
  TASK_LISTS_FAILURE: "TASK_LISTS_FAILURE",

  TASK_DETAILS_BEGIN: "TASK_DETAILS_BEGIN",
  TASK_DETAILS_SUCCESS: "TASK_DETAILS_SUCCESS",
  TASK_DETAILS_FAILURE: "TASK_DETAILS_FAILURE",

  taskListsBegin: () => {
    return {
      type: actions.TASK_LISTS_BEGIN,
    };
  },
  taskListsSuccess: (data) => {
    return {
      type: actions.TASK_LISTS_SUCCESS,
      data,
    };
  },
  taskListsFailure: (err) => {
    return {
      type: actions.TASK_LISTS_FAILURE,
      err,
    };
  },

  taskDetailsBegin: () => {
    return {
      type: actions.TASK_DETAILS_BEGIN,
    };
  },
  taskDetailsSuccess: (data) => {
    return {
      type: actions.TASK_DETAILS_SUCCESS,
      data,
    };
  },
  taskDetailsFailure: (err) => {
    return {
      type: actions.TASK_DETAILS_FAILURE,
      err,
    };
  },
};

export default actions;
