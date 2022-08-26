import { toast } from "react-toastify";
import { AppDispatch } from "../..";
import { UserModel } from "../../../interfaces/users.interfaces";

import { api } from "../../../services/api";
import { createUsers } from "./actions";

export const createUsersThunk =
  (data: UserModel) => async (dispatch: AppDispatch) => {
    try {
      await api.post("/users", data).then((res) => {
        toast.success("Cadastro realizado com sucesso!");
        dispatch(createUsers(res.status));
      });
    } catch (error) {
      toast.error("Cadastro não foi realizado!");
    }
  };
