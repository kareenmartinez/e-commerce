import axios from "axios";

import { RECEIVED_PRODUCTS } from "../constants";

export const fetchProducts = () => ({
  type: RECEIVED_PRODUCTS,
  payload: axios //respuesta
    .get("/api/products")
    .then(res => res.data)
    .catch(error => Promise.reject(error))
});
