import { AppDispatch } from "../..";
import { UserModel } from "../../../interfaces/users.interfaces";
import { api } from "../../../services/api";
import { listUsers } from "./actions";

export const listUsersThunk = () => async (dispatch: AppDispatch) => {
  try {
    const response = await api.get<UserModel[]>("/users");
    dispatch(listUsers(response.data));
  } catch (error) {
    console.error(error);
  }
};
