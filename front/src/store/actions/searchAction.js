import { FETCH_PRODUCT } from "../constants";
import axios from "axios";

export const fetchProduct = data => {
  console.log(data);
  return {
    type: FETCH_PRODUCT,
    payload: axios
      .get(`/api/product/${data}`)
      .then(res => res.data)
      .catch(error => Promise.reject(error))
  };
};
