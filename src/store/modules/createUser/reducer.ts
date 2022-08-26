import { IUsersActions } from "../../../interfaces/users.interfaces";
import { SUCCESS_CREATE } from "./actionTypes";

const initialState = 0;

const reduceCreateUser = (state = initialState, action: IUsersActions) => {
  switch (action.type) {
    case SUCCESS_CREATE:
      return (state = 200);
    default:
      return state;
  }
};

export default reduceCreateUser;
