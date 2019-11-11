import { LOG_IN, LOG_USER } from "../constants";
import axios from "axios";

const logUser = user => {
  console.log("ENTER LOGUSER");
  return {
    type: LOG_USER,
    user: user
  };
};
export const logIn = (email, password) => dispatch =>
  axios
    .post("/api/logIn", { email: email, password: password })
    .then(res => res.data)
    .then(user => {
      return dispatch(logUser(user));
    })
    .catch(err => {
      console.log(err, "hola, soy tu dolor de cabeza");
    });
