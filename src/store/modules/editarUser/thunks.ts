import { toast } from "react-toastify";
import { AppDispatch } from "../..";
import { UserModel } from "../../../interfaces/users.interfaces";

import { api } from "../../../services/api";
import { editUsers } from "./actions";

export const editUsersThunk =
  (data: UserModel, id: number) => async (dispatch: AppDispatch) => {
    try {
      await api.patch(`/users/${id}`, data).then((res) => {
        toast.success("Usuário editado com sucesso!");
        dispatch(editUsers(res.status));
      });
    } catch (error) {
      toast.error("Usuário não foi editado!");
    }
  };
