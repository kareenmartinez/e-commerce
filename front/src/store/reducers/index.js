import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";

import orderReducer from "./orderReducer";
import { registerReducer } from "./registerReducer";
import searchReducer from "./searchReducer";
import facebookReducer from "./facebookReducer";

const reducers = combineReducers({
  registerReducer,
  productsReducer,
  userReducer,
  filterReducer,
  searchReducer,
  orderReducer,
  facebookReducer
});

export default reducers;
