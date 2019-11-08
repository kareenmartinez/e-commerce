import { SEARCH_PRODUCTS } from "../constants";

// export const searchData = search => {
//   console.log(search.search);

//   return {
//     type: SEARCH_PRODUCTS,
//     payload: search.search
//   };
// };

export const searchData = search => ({
  type: SEARCH_PRODUCTS,
  payload: search.search
});
