import { USER_FACEBOOK } from "../constants";

export const fetchUserFacebook = user => ({
  type: USER_FACEBOOK,
  payload: user
});
