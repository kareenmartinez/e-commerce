import axios from "axios";
import { REGISTER } from "../constants";

export const fetchRegister = user => ({
  type: REGISTER,
  payload: axios.post("/api/signup", user).then(user => {
    console.log(user);
  })
});
