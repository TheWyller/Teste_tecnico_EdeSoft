import { Ichildren } from "../../interfaces/props.interfaces";

import { ModalStyled } from "./style";
interface IModalProps extends Ichildren {
  isActive: boolean;
}

const Modal: React.FC<IModalProps> = ({ children, isActive }) => {
  return (
    <ModalStyled isActive={isActive}>
      <div>
        <p>Você realmente deseja fazer essa ação?</p>
        {children}
      </div>
    </ModalStyled>
  );
};

export default Modal;
