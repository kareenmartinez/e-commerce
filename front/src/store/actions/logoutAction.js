import { LOG_OUT } from "../constants";
import axios from "axios";

export const logout = () => ({
  type: LOG_OUT,
  payload: axios //pedido
    .get("/api/logOut")
    .then(res => {
      res.status;
    })
});
