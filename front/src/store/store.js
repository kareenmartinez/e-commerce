import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { createLogger } from "redux-logger";

import reducers from "./reducers";
// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     trace: true,
//     traceLimit: 25
//   }) || compose;

const middleware = [
  thunkMiddleware, // nos permite despachar funciones
  promiseMiddleware(),
  createLogger()
];

const store = createStore(reducers, applyMiddleware(...middleware));
export default store;
