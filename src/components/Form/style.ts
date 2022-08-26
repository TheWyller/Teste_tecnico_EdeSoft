import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--Grey-3);
  padding: 30px;
  max-width: 800px;
  width: 90%;
  border-radius: 30px;

  h3 {
    color: var(--Grey-0);
    margin-bottom: 8px;
    width: 100%;
  }
  span {
    width: 100%;
    height: 5px;
  }
  align-items: center;
  animation: ${appearFromLeft} 1s;
`;
