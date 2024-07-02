import { combineReducers } from "redux";
import profileReducer from "./profile/reducers";
import projectsReducer from "./projects/reducers";
import tasksReducer from "./tasks/reducers";

const rootReducers = combineReducers({
  profile: profileReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
});

export default rootReducers;
