import axios from "axios";
import { PRODUCTS_CATEGORIES } from "../constants";

export const fetchProducts = country => ({
  pe: PRODUCTS_CATEGORIES,
  payload: axios
    .get(`/api/category/${country}`)
    .then(res => res.data)
    .catch(error => Promise.reject(error))
});
