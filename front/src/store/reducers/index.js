import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";

import orderReducer from "./orderReducer";
import { registerReducer } from "./registerReducer";
import searchReducer from "./searchReducer";

const reducers = combineReducers({
  registerReducer,
  productsReducer,
  userReducer,
  filterReducer,
  searchReducer,
  orderReducer
});

export default reducers;
