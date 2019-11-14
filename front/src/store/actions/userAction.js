import { LOG_IN, FETCH_USER } from "../constants";
import axios from "axios";

export const logUser = user => {
  console.log(user);

  console.log("----------------------------");
  return {
    type: LOG_IN,
    user: user
  };
};
const fetcheo = user => {
  return {
    type: FETCH_USER,
    user: user
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

export const fetchUser = () => dispatch => ({
  payload: axios
    .get("/api/auth/me")
    .then(res => res.data)
    .then(user => {
      dispatch(fetcheo(user));
    })
    .catch(err => {
      console.log(err, "hola, necesito un abrazo");
    })
});
