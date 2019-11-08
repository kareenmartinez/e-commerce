import axios from "axios";
import { REGISTER } from "../constants";

export const fetchRegister = register => ({
  type: REGISTER,
  payload: axios
    .post("/api/signup", register)
    .then(res => res.data)
    .catch(err => {
      console.log(err, "passport me va a sacar canas");
    })
});
