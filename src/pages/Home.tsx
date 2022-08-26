import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <h1>Home</h1>
      </Header>
      <Main>
        <nav>
          <Button onClick={() => navigate("../cadastro", { replace: true })}>
            Cadastrar um Usuário
          </Button>
          <Button onClick={() => navigate("../listar", { replace: true })}>
            Lista de todos os Usuários
          </Button>
          <Button onClick={() => navigate("../deletar", { replace: true })}>
            Deletar Usuário
          </Button>
          <Button onClick={() => navigate("../editar", { replace: true })}>
            Editar um Usuário
          </Button>
        </nav>
      </Main>
    </>
  );
}

export default Home;
