const actions = {
  PROFILE_BEGIN: "PROFILE_BEGIN",
  PROFILE_SUCCESS: "PROFILE_SUCCESS",
  PROFILE_FAILURE: "PROFILE_FAILURE",

  profileBegin: () => {
    return {
      type: actions.PROFILE_BEGIN,
    };
  },

  profileSuccess: (data) => {
    return {
      type: actions.PROFILE_SUCCESS,
      data,
    };
  },

  profileFailure: (err) => {
    return {
      type: actions.PROFILE_FAILURE,
      err,
    };
  },
};

export default actions;
