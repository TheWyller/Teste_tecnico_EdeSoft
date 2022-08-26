import { Ichildren } from "../../interfaces/props.interfaces";
import { ModalStyled } from "./style";

const Modal = ({ children }: Ichildren) => {
  return <ModalStyled>{children}</ModalStyled>;
};

export default Modal;
