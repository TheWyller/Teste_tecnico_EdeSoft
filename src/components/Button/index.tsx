import { IButtonProps } from "../../interfaces/props.interfaces";
import { ButtonStyled } from "./style";

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;
