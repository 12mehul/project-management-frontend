import { combineReducers } from "redux";
import profileReducer from "./profile/reducers";
import projectsReducer from "./projects/reducers";

const rootReducers = combineReducers({
  profile: profileReducer,
  projects: projectsReducer,
});

export default rootReducers;
