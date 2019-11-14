import {
  ADD_ITEM,
  ADD_ADDRESS,
  REMOVE_ITEM,
  CONFIRM_ORDER,
  BUY,
  FETCH_ORDER
} from "../constants";

import axios from "axios";

// lo crea en la db
export const addItem = (itemId, userId) => {
  axios
    .post("/api/addItem", { itemId: itemId, userId: userId })
    .then(res => console.log("se añadio el producto al carrito"));
};

//lo busca en la db
const completeOrder = order => {
  return {
    type: FETCH_ORDER,
    payload: order
  };
};

export const fetchOrder = userId => dispatch => {
  console.log(userId, "este es el id de fetchorder");
  return {
    payload: axios
      .get(`/api/order/${userId}`)
      .then(res => res.data)
      .then(order => {
        dispatch(completeOrder(order));
      })
      .catch(err => {
        console.log(err, "hola, necesito un abrazo");
      })
  };
};
