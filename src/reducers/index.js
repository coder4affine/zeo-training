import { combineReducers } from "redux";
import todo from "./todoReducer";
import courses from "./coursesReducer";
import authors from "./authorReducer";

export default combineReducers({
  todo,
  courses,
  authors
});
