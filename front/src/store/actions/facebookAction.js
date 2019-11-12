import { USER_FACEBOOK } from "../constants";

export const fetchProducts = user => ({
  type: USER_FACEBOOK,
  payload: user
});
