const actions = {
  PROJECT_LISTS_BEGIN: "PROJECT_LISTS_BEGIN",
  PROJECT_LISTS_SUCCESS: "PROJECT_LISTS_SUCCESS",
  PROJECT_LISTS_FAILURE: "PROJECT_LISTS_FAILURE",

  PROJECT_DETAILS_BEGIN: "PROJECT_DETAILS_BEGIN",
  PROJECT_DETAILS_SUCCESS: "PROJECT_DETAILS_SUCCESS",
  PROJECT_DETAILS_FAILURE: "PROJECT_DETAILS_FAILURE",

  projectListsBegin: () => {
    return {
      type: actions.PROJECT_LISTS_BEGIN,
    };
  },
  projectListsSuccess: (data) => {
    return {
      type: actions.PROJECT_LISTS_SUCCESS,
      data,
    };
  },
  projectListsFailure: (err) => {
    return {
      type: actions.PROJECT_LISTS_FAILURE,
      err,
    };
  },

  projectDetailsBegin: () => {
    return {
      type: actions.PROJECT_DETAILS_BEGIN,
    };
  },
  projectDetailsSuccess: (data) => {
    return {
      type: actions.PROJECT_DETAILS_SUCCESS,
      data,
    };
  },
  projectDetailsFailure: (err) => {
    return {
      type: actions.PROJECT_DETAILS_FAILURE,
      err,
    };
  },
};

export default actions;
