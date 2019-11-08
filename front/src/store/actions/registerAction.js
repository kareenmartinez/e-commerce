import axios from "axios";
import { REGISTER } from "../constants";

const sign = register => {
  console.log("passport apesta", register, "demasiado");
  return {
    type: REGISTER,
    register: register
  };
};

export const fetchRegister = info => dispatch => ({
  type: REGISTER,
  payload: axios
    .post("/api/signup", info)
    .then(res => res.data)
    .then(register => {
      dispatch(sign(register));
    })
    .catch(err => {
      console.log(err, "passport me va a sacar canas");
    })
});
