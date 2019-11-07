import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import registerReducer from "./registerReducer";

const reducers = combineReducers({
  registerReducer,
  productsReducer,
  userReducer,
  filterReducer
});

export default reducers;
