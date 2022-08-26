import styled from "styled-components";
import { appearFromUp } from "../../styles/global";

interface IModal {
  isActive: boolean;
}

export const ModalStyled = styled.div<IModal>`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;

  div {
    display: ${(props) => (props.isActive ? "flex" : "none")};
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    border-radius: 20px;
    width: 250px;
    animation: ${appearFromUp} 1s;
    height: 260px;
    background-color: #ffffffff;
    z-index: 1000;
    p {
      margin-bottom: 20px;
      font-size: 20px;
      text-align: center;
    }
  }
`;
