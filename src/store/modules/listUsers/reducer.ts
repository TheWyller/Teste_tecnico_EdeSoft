import { IUsersActions, UserModel } from "../../../interfaces/users.interfaces";
import { LIST_USERS } from "./actionTypes";

const initialState: UserModel[] = [];

const reduceListUser = (state = initialState, action: IUsersActions) => {
  switch (action.type) {
    case LIST_USERS:
      const { response } = action;
      return response;
    default:
      return state;
  }
};

export default reduceListUser;
