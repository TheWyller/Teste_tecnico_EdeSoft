import { Ichildren } from "../../interfaces/props.interfaces";
import { HeaderStyled } from "./style";

const Header = ({ children }: Ichildren) => {
  return (
    <HeaderStyled>
      <div></div>
      {children}
    </HeaderStyled>
  );
};

export default Header;
