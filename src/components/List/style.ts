import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const ListStyled = styled.ul`
  list-style: none;
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 10px;
  margin: 20px;
  animation: ${appearFromLeft} 1s;
`;
