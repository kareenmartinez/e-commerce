import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import userReducer from "./userReducer";
import products from "./productsReducer";

const reducers = combineReducers({
  products,
  userReducer,
  filterReducer
});

export default reducers;
