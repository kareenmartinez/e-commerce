import {
  ADD_ITEM,
  ADD_ADDRESS,
  REMOVE_ITEM,
  CONFIRM_ORDER,
  BUY, ADD, SUBTRACT
} from "../constants";
import axios from "axios";

export const addOne = (itemId) => ({
  type: ADD,
  payload: axios.post("/api/sumar", itemId).then(res => res.data).catch((err) => console.log(err, "llego el COCOOOOOO"))
})
export const minusOne = (user) => ({
  type: SUBTRACT,
  payload: axios.post("/api/restar", user).then(res => res.data).catch((err) => console.log(err, "llego el COCOOOOOO 2"))
})
