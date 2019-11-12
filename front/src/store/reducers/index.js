import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import { registerReducer } from "./registerReducer";
import searchReducer from "./searchReducer";
import facebookReducer from "./facebookReducer";

const reducers = combineReducers({
  registerReducer,
  productsReducer,
  userReducer,
  filterReducer,
  searchReducer,
  facebookReducer
});

export default reducers;
