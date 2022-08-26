import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormEdit from "../components/Form/FormEdit";
import Header from "../components/Header";
import Main from "../components/Main";
import { IState, UserModel } from "../interfaces/users.interfaces";
import { api } from "../services/api";
import { useAppDispatch } from "../store/modules/hooks";
import { listUsersThunk } from "../store/modules/listUsers/thunks";

function Editar() {
  const { listUsers } = useSelector<any, IState>((state) => state);
  const [idUser, setIdUser] = useState<number>(1);
  const [user, setUser] = useState<UserModel>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listUsersThunk());
  }, [dispatch]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setIdUser(Number(id));
  };

  useEffect(() => {
    async function apiGet() {
      await api.get(`/users/${idUser}`).then((res) => setUser(res.data));
    }
    apiGet();
  }, [idUser]);

  const navigate = useNavigate();

  return (
    <>
      <Header>
        <h1>EDITAR USUÁRIO</h1>

        <Button onClick={() => navigate("../", { replace: true })}>
          Voltar Home
        </Button>
      </Header>
      <Main>
        <h3>Nome do Usuário</h3>
        <select onChange={onChangeHandler} name="Users" id="user">
          {listUsers?.map((elem, index) => (
            <option key={index} value={elem.id}>
              {elem.username}
            </option>
          ))}
        </select>
        {user && <FormEdit props={user} />}
      </Main>
    </>
  );
}

export default Editar;
