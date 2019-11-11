import axios from "axios";
<<<<<<< HEAD:front/src/store/actions/CategoriesAction.js

=======
>>>>>>> aa36e3e846cfc987cfe6cb4e281960eb89351f93:front/src/store/actions/categoriesAction.js
import { PRODUCTS_CATEGORIES } from "../constants";

export const fetchProducts = country => ({
  pe: PRODUCTS_CATEGORIES,
  payload: axios
    .get(`/api/category/${country}`)
    .then(res => res.data)
    .catch(error => Promise.reject(error))
});
