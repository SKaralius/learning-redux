import { combineReducers } from "redux";
import todos from "../features/todos/todosSlice";
import visibilityFilter from "../features/visibilityFilters/visibilityFiltersSlice";

export default combineReducers({
  todos,
  visibilityFilter,
});
