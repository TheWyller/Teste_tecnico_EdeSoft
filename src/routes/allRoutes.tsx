import { Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Deletar from "../pages/Deletar";
import Home from "../pages/Home";
import Listar from "../pages/Lista";
import Editar from "../pages/Editar";
import NotFound from "../pages/NotFound";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="deletar" element={<Deletar />} />
      <Route path="listar" element={<Listar />} />
      <Route path="editar" element={<Editar />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
