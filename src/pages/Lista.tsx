import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import List from "../components/List";

function Listar() {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <h1>LISTAR USUÁRIOS</h1>

        <Button onClick={() => navigate("../", { replace: true })}>
          Voltar Home
        </Button>
      </Header>

      <List />
    </>
  );
}

export default Listar;
