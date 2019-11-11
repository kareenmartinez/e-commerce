import { LOG_IN, LOG_USER } from "../constants";
import axios from "axios";

export const logUser = user => {
  console.log(user);

  console.log("----------------------------");
  return {
    type: LOG_USER,
    payload: user
  };
};

export const logIn = (email, password) => dispatch => ({
  type: LOG_IN,
  payload: axios
    .post("/api/logIn", { email: email, password: password })
    .then(res => res.data)
    .then(user => {
      dispatch(logUser(user));
    })
    .catch(err => {
      console.log(err);
    })
});
