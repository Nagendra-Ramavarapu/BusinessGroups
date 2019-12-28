import { combineReducers } from "redux";
import userReducer from "./userReducer";
import groupsReducer from "./userReducer";

let rootReducer = combineReducers({
  userReducer,
  groupsReducer
});
export default rootReducer;
