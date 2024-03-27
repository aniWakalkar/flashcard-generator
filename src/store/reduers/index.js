import { combineReducers } from "redux";
import { set_All_data } from "./reducer";

const allReducers = combineReducers({
  all_data: set_All_data,
});
export default allReducers;
