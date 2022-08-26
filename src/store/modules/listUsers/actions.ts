import { UserModel } from "../../../interfaces/users.interfaces";
import { LIST_USERS } from "./actionTypes";

export const listUsers = (response: UserModel[]) => ({
  type: LIST_USERS,
  response,
});
