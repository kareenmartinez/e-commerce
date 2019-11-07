import { combineReducers } from "redux";
import filterReducer from "./filterReducer";

import userReducer from "./userReducer";

const reducers = combineReducers({
  userReducer,
  filterReducer
});

export default reducers;
