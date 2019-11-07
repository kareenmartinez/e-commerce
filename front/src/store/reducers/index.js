import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import userReducer from "./userReducer";
import products from "./products";
import registerReducer from "./registerReducer";

const reducers = combineReducers({
  registerReducer,
  products,
  userReducer,
  filterReducer
});

export default reducers;
