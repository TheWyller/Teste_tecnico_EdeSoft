import { Ichildren } from "../../interfaces/props.interfaces";
import { MainStyled } from "./style";

const Main = ({ children }: Ichildren) => {
  return <MainStyled>{children}</MainStyled>;
};

export default Main;
