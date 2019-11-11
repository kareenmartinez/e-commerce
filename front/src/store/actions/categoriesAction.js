<<<<<<< HEAD
import axios  from "axios";
=======
import axios from "axios"
>>>>>>> ba8cd8e851ea592572ee5775a8d1301f78c4b6e9
import { PRODUCTS_CATEGORIES } from "../constants";

export const fetchProducts = country => ({
  type: PRODUCTS_CATEGORIES,
  payload: axios
    .get(`/api/category/${country}`)
    .then(res => res.data)
    .catch(error => Promise.reject(error))
});
