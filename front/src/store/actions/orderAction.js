import {
  ADD_ITEM,
  ADD_ADDRESS,
  REMOVE_ITEM,
  CONFIRM_ORDER,
  BUY
} from "../constants";


import axios from "axios";
import { REMOVE_ITEM } from "../constants";

export const removeProduct = id => ({
  type: REMOVE_ITEM,
  payload: axios
    .get(`/api/remove/${id}`)
    .then(res => res.data)
    .catch(error => Promise.reject(error))
});
