import { toast } from "react-toastify";
import { AppDispatch } from "../..";

import { api } from "../../../services/api";
import { deleteUsers } from "./actions";

export const deleteUsersThunk =
  (data: number) => async (dispatch: AppDispatch) => {
    try {
      await api.delete(`/users/${data}`).then((res) => {
        toast.success("Usuário Deletado com sucesso!");
        dispatch(deleteUsers(res.status));
      });
    } catch (error) {
      toast.error("Usuário não foi deletado!");
    }
  };
