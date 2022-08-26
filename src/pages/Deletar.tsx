import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Main from "../components/Main";
import Modal from "../components/Modal";
import { IState } from "../interfaces/users.interfaces";
import { deleteUsersThunk } from "../store/modules/deleteUser/thunks";
import { useAppDispatch } from "../store/modules/hooks";
import { listUsersThunk } from "../store/modules/listUsers/thunks";

function Deletar() {
  const { listUsers } = useSelector<any, IState>((state) => state);
  const [idUser, setIdUser] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listUsersThunk());
  }, [dispatch]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setIdUser(Number(id));
  };

  const deleteUser = async (id: number) => {
    dispatch(deleteUsersThunk(id));
  };

  const navigate = useNavigate();
  return (
    <>
      <Header>
        <h1>DELETAR USUÁRIO</h1>

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
        <Button onClick={() => setModal(true)}>Deletar Usuário</Button>
        <Modal isActive={modal}>
          <Button
            onClick={() => {
              deleteUser(idUser);
              setModal(false);
            }}
          >
            SIM
          </Button>
          <Button onClick={() => setModal(false)}>NÃO</Button>
        </Modal>
      </Main>
    </>
  );
}

export default Deletar;
