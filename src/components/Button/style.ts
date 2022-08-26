import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 180px;
  padding: 10px;
  height: 60px;
  border-radius: 5px;
  border: none;
  margin: 5px 0;
  background-color: #258aff;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 16px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    background-color: rgb(255, 209, 102);
    color: var(--Grey-1);
    transform: scale(1.02);
    transition-duration: 1s;
  }
`;
