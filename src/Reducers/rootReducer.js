import { combineReducers } from "redux";
import userReducer from "./userReducer";
import groupsReducer from "./groupsReducer";

let rootReducer = combineReducers({
  userReducer,
  groupsReducer
});
export default rootReducer;
