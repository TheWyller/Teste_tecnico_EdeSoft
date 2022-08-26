import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  select {
    width: 250px;
    height: 50px;
    margin-bottom: 10px;
    border: none;
    background-color: var(--Grey-1);
    color: #ffffffff;
    padding-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
  }
  animation: ${appearFromLeft} 1s;
`;
