import axios from "axios";
import { REGISTER } from "../constants";

export const fetchRegister = register => ({
  type: REGISTER,
  payload: axios
    .post("/api/signup", register)
    .then(res => {
      if (res.data === "ERROR") {
        alert("This email is already in use, please try a different one");
        return "";
      }
      return res.data;
    })
    .catch(err => {
      console.log(err);
    })
});
