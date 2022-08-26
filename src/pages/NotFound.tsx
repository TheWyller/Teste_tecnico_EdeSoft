import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Main from "../components/Main";

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Main>
        <h1>Página não encontrada</h1>
        <Button onClick={() => navigate("../", { replace: true })}>
          Voltar Home
        </Button>
      </Main>
    </>
  );
}

export default NotFound;
