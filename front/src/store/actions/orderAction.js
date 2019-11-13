import {
  ADD_ITEM,
  ADD_ADDRESS,
  REMOVE_ITEM,
  CONFIRM_ORDER,
  BUY
} from "../constants";
import axios from "axios";

export const buyProduct = user => {
  return {
    type: BUY,
    payload: axios.post("/api/send", user).then(res => {
      res.data;
      console.log("ESTA ES LA RES.DATA DE LA ACTION BUYPRODUCT", res.data);
    })
  };
};
