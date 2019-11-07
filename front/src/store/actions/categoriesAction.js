const axios = require("axios");
import { PRODUCTS_CATEGORIES } from "../constants";

export const fetchProducts = () => ({
  type: PRODUCTS_CATEGORIES,
  payload: axios
    .get(`/api/products`)
    .then(res => res.data)
    .catch(error => Promise.reject(error))
});
