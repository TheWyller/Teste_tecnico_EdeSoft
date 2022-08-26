import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import Header from "../components/Header";
import Main from "../components/Main";

function Cadastro() {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <h1>CADASTRAR USUÁRIO</h1>

        <Button onClick={() => navigate("../", { replace: true })}>
          Voltar Home
        </Button>
      </Header>
      <Main>
        <Form />
      </Main>
    </>
  );
}

export default Cadastro;
