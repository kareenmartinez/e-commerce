import axios from "axios";
import { REGISTER } from "../constants";

export const fetchRegister = register => ({
  type: REGISTER,
  payload: axios.post("/api/signup", register).then(register => {
    console.log(register);
  })
});
